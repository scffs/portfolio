import { CSSProperties, FC } from 'react';
import { Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons';
import {IconButton} from '@vkontakte/vkui';

interface IToggleTheme {
  toggleAppearance: () => void
  appearance: 'light' | 'dark'
}

const style: CSSProperties = {
  position: 'absolute',
  top: 5,
  right: 50,
  zIndex: 500,
  color: 'var(--vkui--color_icon_accent)',
};

const ToggleTheme: FC<IToggleTheme> = ({ toggleAppearance, appearance }) => (
  <IconButton style={style} onClick={toggleAppearance} aria-label='Сменить тему'>
    {appearance === 'light' ? <Icon28MoonOutline /> : <Icon28SunOutline />}
  </IconButton>
);

export default ToggleTheme;
