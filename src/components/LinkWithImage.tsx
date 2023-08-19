import { CSSProperties, FC, ReactNode } from 'react';
import { Link } from '@vkontakte/vkui';

interface ILinkWithImage {
  linkText: string;
  href: string;
  icon: string | ReactNode;
  size?: number;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const LinkWithImage: FC<ILinkWithImage> = ({
  linkText, icon, href, size = 24, target = '_blank',
}) => {
  const linkStyles: CSSProperties = {
    position: 'relative',
    paddingLeft: `${typeof icon === 'string' ? size + 5 : size + 10}px`,
    marginLeft: '3px',
    display: 'inline-block',
  };

  const iconStyles: CSSProperties = {
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <Link href={href} target={target} style={linkStyles}>
      {typeof icon === 'string' ? (
        <span style={{
          ...iconStyles,
          backgroundImage: `url(${icon})`,
          backgroundSize: 'cover',
          borderRadius: 5,
        }}
        >
          &nbsp;
        </span>
      ) : (
        <span style={iconStyles}>{icon}</span>
      )}
      {linkText}
    </Link>
  );
};

export default LinkWithImage;
