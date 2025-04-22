import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import AboutMetasystem from '@assets/docs/AboutMetasystem.md';
import { selectCurrentAboutText, clearAboutText } from '@store/aboutSlice';

import styles from './About.module.scss';

const About = () => {
  const currentText = useSelector(selectCurrentAboutText) || AboutMetasystem;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearAboutText());
    };
  }, [dispatch]);

  return (
    <>
      <div className={styles.markdownContent}>
        <ReactMarkdown
          children={currentText}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeKatex]}
        />
      </div>
    </>
  );
};

export default About;
