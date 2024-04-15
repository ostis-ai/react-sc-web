import { useMatch } from 'react-router';
import { ScnPage } from '@components/ScnPage';
import { routes } from '@constants';

const Question = () => {
  const match = useMatch(routes.QUESTION);

  if (match?.params.format === 'scn') {
    return <ScnPage />;
  } 

  return null;
};

export default Question;
