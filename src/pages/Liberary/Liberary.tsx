import { useMatch } from 'react-router';
import { routes } from '@constants';

const Liberary = () => {
  const match = useMatch(routes.LIBERARY);

//   if (match?.params.format !== 'scn') return null;

  return <div>test</div>;
};

export default Liberary;