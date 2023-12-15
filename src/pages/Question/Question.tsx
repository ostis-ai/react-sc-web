import { useMatch } from 'react-router';
import { ScnPage } from '@components/ScnPage';
import { routes } from '@constants';
import { NativeLanguagePage } from '@components/NativeLanguagePage';

const Question = () => {
  const match = useMatch(routes.QUESTION);

  if (match?.params.format === 'scn') {
    return <ScnPage />;
  } else if (match?.params.format === 'native') {
    return <NativeLanguagePage />;
  }

  return null;
};

export default Question;
