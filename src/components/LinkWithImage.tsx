import { CSSProperties, FC } from 'react';
import { Link } from '@vkontakte/vkui';

interface ILinkWithImage {
  linkText: string;
  href: string;
  icon: string;
  size?: number;
}

const LinkWithImage: FC<ILinkWithImage> = ({
                                             linkText, icon, href, size = 24,
                                           }) => {
  const linkStyles: CSSProperties = {
    position: 'relative',
    paddingLeft: `${size + 3}px`,
    marginLeft: '3px',
    display: 'inline-block', // Добавлено для корректного переноса на следующую строку
  };
  
  const iconStyles: CSSProperties = {
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '5px',
    width: `${size}px`,
    height: `${size}px`,
    backgroundImage: `url(${icon})`,
    backgroundSize: 'cover',
  };
  
  return (
    <Link href={href} target='_blank' style={linkStyles}>
      <span style={iconStyles}>&nbsp;</span>
      {linkText}
    </Link>
  );
};

export default LinkWithImage;
