import { Themeitem } from './ThemeItem';
/* eslint-disable arrow-body-style */
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import './style/style.css';

const GamePage = (): JSX.Element => {
  const theme = useSelector((store: RootState) => store.theme.theme);

  return (
    <>
      <br />
      <div className="container-Game">
        {theme.map((them) => (
          <Themeitem key={them.id} them={them} />
        ))}
      </div>
    </>
  );
};
export default GamePage;
