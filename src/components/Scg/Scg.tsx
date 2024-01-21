import { langToKeynode, snakeToCamelCase, useBooleanState, useLanguage, Popup } from 'ostis-ui-lib';
import { FC, useEffect, useRef, useState } from 'react';
import { scUtils } from '@api';
import { removeFromCache } from '@api/requests/scn';
import { ConfirmAction } from '@components/ConfirmAction';
import { scgUrl } from '@constants';
import { confirmClearScenePopupContent, confirmDeletePopupContent } from './constants';
import { Frame, StyledSpinner, Wrap } from './styled';

import { EWindowEvents, ITarget, IWindowEventData } from './types';

interface IProps {
  question?: number;
  className?: string;
  show?: boolean;
}

const SPINER_COLOR = '#5896C0';

export const Scg: FC<IProps> = ({ question, className, show = false }) => {
  const [isReady, setIsready] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [targetNode, setTargetNode] = useState<ITarget | null>(null);
  const [isConfirmDeletePopupShown, showConfirmDeletePopup, hideConfirmDeletePopup] =
    useBooleanState(false);
  const [isConfirmClearScenePopupShown, showConfirmClearScenePopup, hideConfirmClearScenePopup] =
    useBooleanState(false);
  const ref = useRef<HTMLIFrameElement>(null);
  const targetRef = useRef<HTMLElement | null>(null);
  const lang = useLanguage();

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    window.onmessage = function (event: MessageEvent<IWindowEventData>) {
      switch (event.data.type) {
        case EWindowEvents.onInitializationFinished:
          setIsready(true);
          setIsLoading(false);
          break;
        case EWindowEvents.deleteScgElement:
          showConfirmDeletePopup();
          break;
        case EWindowEvents.clearScene:
          showConfirmClearScenePopup();
          break;
      }
    };
  }, [question]);

  useEffect(() => {
    (async () => {
      if (!isReady || !show || !question) return;
      const iframe = ref.current;
      if (!iframe) return;
      const { ...rest } = await scUtils.findKeynodes(langToKeynode[lang]);
      const activeLangKeynode = rest[snakeToCamelCase(langToKeynode[lang])];
      removeFromCache(question);
      iframe.contentWindow &&
        iframe.contentWindow.postMessage(
          { type: 'renderScg', addr: question, lang: activeLangKeynode.value },
          '*',
        );
    })();
  }, [isReady, question, show, lang]);

  targetRef.current = targetNode?.element || null;

  return (
    <>
      {isConfirmDeletePopupShown && (
        <Popup onClose={hideConfirmDeletePopup}>
          <ConfirmAction
            onComplete={() =>
              ref.current &&
              ref.current.contentWindow &&
              ref.current.contentWindow.postMessage({ type: 'deleteScgElement' }, '*')
            }
            onClose={hideConfirmDeletePopup}
            title="Удаление"
            content={confirmDeletePopupContent}
            completeBtnText="Удалить"
          />
        </Popup>
      )}
      {isConfirmClearScenePopupShown && (
        <Popup onClose={hideConfirmClearScenePopup}>
          <ConfirmAction
            onComplete={() =>
              ref.current &&
              ref.current.contentWindow &&
              ref.current.contentWindow.postMessage({ type: 'clearScene' }, '*')
            }
            onClose={hideConfirmClearScenePopup}
            title="Очистка пространства"
            content={confirmClearScenePopupContent}
            completeBtnText="Очистить"
          />
        </Popup>
      )}
      <Wrap show={show} className={className}>
        {isLoading && <StyledSpinner appearance={SPINER_COLOR} />}
        <Frame src={scgUrl} ref={ref} title="SCg codes" />
      </Wrap>
    </>
  );
};
