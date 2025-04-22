import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import remarkGfm from 'remark-gfm';
import { selectCurrentAboutText } from '@store/aboutSlice';

import AboutMetasystem from '@assets/docs/AboutMetasystem.md';

import styles from './About.module.scss';

const About = () => {
  const currentText = useSelector(selectCurrentAboutText);

  return (
    <>
      <div className={styles.markdownContent}>
        {currentText ? (
          <ReactMarkdown children={currentText} remarkPlugins={[remarkGfm]} />
        ) : (
          <ReactMarkdown children={AboutMetasystem} remarkPlugins={[remarkGfm]} />
        )}
      </div>
    </>
  );
};

export default About;
