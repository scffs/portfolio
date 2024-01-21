import { Link } from '@vkontakte/vkui'
import { CSSProperties, FC, ReactNode } from 'react'

interface ILinkWithImage {
  linkText: string
  href: string
  icon: string | ReactNode
  size?: number
  width?: number
  height?: number
  target?: '_blank' | '_self' | '_parent' | '_top'
}

const LinkWithImage: FC<ILinkWithImage> = ({
  linkText,
  icon,
  href,
  size = 24,
  target = '_blank',
  height,
  width
}) => {
  const linkStyles: CSSProperties = {
    position: 'relative',
    paddingLeft: `${typeof icon === 'string' ? size + 5 : size + 10}px`,
    marginLeft: '3px',
    display: 'inline-block'
  }

  const iconStyles: CSSProperties = {
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    width: `${width || size}px`,
    height: `${height || size}px`
  }

  return (
    <Link href={href} target={target} style={linkStyles}>
      {typeof icon === 'string' ? (
        <span
          style={{
            ...iconStyles,
            backgroundImage: `url(${icon})`,
            backgroundSize: 'cover',
            borderRadius: 5
          }}
        >
          &nbsp;
        </span>
      ) : (
        <span style={iconStyles}>{icon}</span>
      )}
      {linkText}
    </Link>
  )
}

export default LinkWithImage
