import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import remarkGfm from 'remark-gfm';
import { AboutIntro } from '@components/SidePanel/AboutMenu/MenuData';
import { selectCurrentAboutText } from '@store/aboutSlice';

import styles from './About.module.scss';

const About = () => {
  const currentText = useSelector(selectCurrentAboutText);

  return (
    <>
      <div className={styles.markdownContent}>
        {currentText ? (
          <ReactMarkdown children={currentText} remarkPlugins={[remarkGfm]} />
        ) : (
          <ReactMarkdown children={AboutIntro} remarkPlugins={[remarkGfm]} />
        )}
      </div>
    </>
  );
};

export default About;
