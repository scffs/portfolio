import { CSSProperties, FC } from 'react';
import { Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons';
import { Tappable } from '@vkontakte/vkui';

interface IToggleTheme {
  toggleAppearance: () => void
  appearance: 'light' | 'dark'
}

const style: CSSProperties = {
  position: 'absolute',
  top: 5,
  right: 50,
  zIndex: 500,
  padding: 10,
  color: 'var(--vkui--color_icon_accent)',
};

const ToggleTheme: FC<IToggleTheme> = ({ toggleAppearance, appearance }) => (
  <Tappable style={style} onClick={toggleAppearance}>
    {appearance === 'light' ? <Icon28MoonOutline /> : <Icon28SunOutline />}
  </Tappable>
);

export default ToggleTheme;
