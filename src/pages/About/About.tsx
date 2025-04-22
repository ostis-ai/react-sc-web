import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import { selectCurrentAboutText } from '@store/aboutSlice';

import AboutMetasystem from '@assets/docs/AboutMetasystem.md';

import styles from './About.module.scss';

const About = () => {
  const currentText = useSelector(selectCurrentAboutText) || AboutMetasystem;

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
