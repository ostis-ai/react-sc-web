import {
    ContextMenu, langToKeynode,
    Scg as UiKitScg, snakeToCamelCase,
    useBooleanState,
    useLanguage,
    useScUtils,
    useToast,
} from 'ostis-ui-lib';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { removeFromCache } from '@api/requests/scn';
import { Notification } from '@components/Notification';
import { scgUrl } from '@constants';
import { useScNavigation } from '@hooks/useScNavigation';
import { Frame, StyledSpinner, Wrap } from './styled';

import { EWindowEvents, ITarget, IWindowEventData } from './types';
import {scUtils} from "@api";

interface IProps {
  question?: number;
  className?: string;
  show?: boolean;
}

const SPINER_COLOR = '#5896C0';

const readonlyStyle = `
  <style>
    .demo-scg-tools-panel {
      display: none !important;
    }
  </style>
`;

export const Scg: FC<IProps> = ({ question, className, show = false }) => {
  const { goToActiveFormatCommand } = useScNavigation();
  const { addToast } = useToast();

  const onUpdateScg = useCallback(
    (question: any) => {
      if (question) removeFromCache(question);
    },
    [question],
  );

  // ****************************************************
  // ****************************************************
  // ****************************************************

  const [isReady, setIsready] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [targetNode, setTargetNode] = useState<ITarget | null>(null);
  const [isConfirmDeletePopupShown, showConfirmDeletePopup, hideConfirmDeletePopup] =
    useBooleanState(false);
  const [isConfirmClearScenePopupShown, showConfirmClearScenePopup, hideConfirmClearScenePopup] =
    useBooleanState(false);
  const [confirmDeleteElementsFunc, setConfirmDeleteElementsFunc] = useState<any>();
  const [confirmClearSceneFunc, setconfirmClearSceneFunc] = useState<any>();

  const ref = useRef<HTMLIFrameElement>(null);
  const targetRef = useRef<HTMLElement | null>(null);

  const lang = useLanguage();

  const onClose = () => setTargetNode(null);

  // const onContextMenu = (e: MouseEvent) => {
  const onContextMenu = (target: any) => {
    const elements = document.querySelectorAll(`[sc_addr="${Number(target)}"]`);

    if (!target) return;
    const addr = Number(target) || undefined;
    setTargetNode(null);
    setTimeout(() => {
      setTargetNode({
        element: elements[0] as HTMLElement,
        addr,
      });
    }, 10);
  };

  useEffect(() => {
    setIsLoading(true);
    const iframe = ref.current;
      console.log("loading");
    if (!iframe) return
    setIsLoading(false);
    // if (!iframe.contentWindow) return;

    // const command = { type: 'onInitializationFinished' };

    // if (iframe.contentWindow) {
    //   console.log(123);
    //   iframe.contentWindow.postMessage({ type: 'onInitializationFinished' }, '*');
    // }
    // (iframe.contentWindow as any).onInitializationFinished = () => {
    //   setIsready(true);
    // };

    setTimeout(() => {
        console.log("REACT post demoImplementation");
      iframe.contentWindow && iframe.contentWindow.postMessage({ type: 'demoImplementation' }, '*');

      // iframe.contentWindow?.addEventListener('DOMContentLoaded', () => {
      //   iframe.contentDocument?.addEventListener('click', onClose);
      //   iframe.contentDocument?.addEventListener('contextmenu', onContextMenu);
      //   setTimeout(() => setIsLoading(false), 800);
      // });
    }, 1000);

    // (iframe.contentWindow as any).demoImplementation = true;

    // iframe.contentWindow?.addEventListener('DOMContentLoaded', () => {
    //   iframe.contentDocument?.addEventListener('click', onClose);
    //   iframe.contentDocument?.addEventListener('contextmenu', onContextMenu);
    //   setTimeout(() => setIsLoading(false), 800);
    // });
  }, []);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    window.onmessage = function (event: MessageEvent<IWindowEventData>) {
        console.log("React event.data.type = ", event.data.type);
      switch (event.data.type) {
        case EWindowEvents.onInitializationFinished:
          console.log("REACT get onInitializationFinished");
          setIsready(true);
          setIsLoading(false);
          break;
        case EWindowEvents.readyForRender: // возможно не нужно
            console.log("REACT get readyForRender and do nothing");
          // iframe.contentWindow && iframe.contentWindow.postMessage({ type: 'renderScg', addr: question }, '*');
          break;
        case EWindowEvents.deleteScgElement:
            console.log("REACT get deleteScgElement");
          showConfirmDeletePopup();
          setConfirmDeleteElementsFunc(() => (iframe.contentWindow as any)?.deleteScgElement);
          break;
        case EWindowEvents.deleteScgElements:
            console.log("REACT get deleteScgElements");
          showConfirmDeletePopup();
          setConfirmDeleteElementsFunc(() => (iframe.contentWindow as any)?.deleteScgElements);
          break;
        case EWindowEvents.clearScene:
            console.log("REACT get clearScene");
          showConfirmClearScenePopup();
          setconfirmClearSceneFunc(() => (iframe.contentWindow as any)?.clearScene);
          break;
        case EWindowEvents.updateScg: // возможно не нужно
            console.log("REACT get updateScg");
          if (!question) break;
          onUpdateScg?.(question);
          break;
        case EWindowEvents.onContextMenu:
            console.log("REACT get onContextMenu");
          onContextMenu(event.data.payload && event.data.payload);
          break;
      }
    };
  }, [onUpdateScg, question]);

  useEffect(() => {
      (async () => {
          console.log("use effect with render ", isReady, show, question);
      if (!isReady || !show || !question) return;
          console.log("after if isReady, show, question", isReady, show, question);
      const iframe = ref.current;
      if (!iframe) return;
          console.log()
      const { ...rest } = await scUtils.findKeynodes(langToKeynode[lang]);
      const activeLangKeynode = rest[snakeToCamelCase(langToKeynode[lang])];
          console.log("REACT post renderScg=", question, activeLangKeynode.value);
          removeFromCache(question);
          iframe.contentWindow && iframe.contentWindow.postMessage({ type: 'renderScg', addr: question, lang: activeLangKeynode.value }, '*');
      })();
  }, [isReady, question, show, lang]);

  targetRef.current = targetNode?.element || null;

  return (
    <Wrap show={show} className={className}>
      {isLoading && <StyledSpinner appearance={SPINER_COLOR} />}
      <Frame src={scgUrl} ref={ref} title="SCg codes" />
      {targetNode && (
        <ContextMenu
          onClose={onClose}
          addr={targetNode.addr}
          relativeRef={ref}
          targetRef={targetRef}
        />
      )}
    </Wrap>
  );
};
