import { FC, ReactNode } from 'react'

interface IFlex {
  gap?: number
  direction?: 'row' | 'column'
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  children: ReactNode
}

const Flex: FC<IFlex> = ({
  gap,
  children,
  justify,
  wrap,
  align,
  direction
}) => (
  <span
    style={{
      display: 'flex',
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align,
      flexWrap: wrap,
      gap
    }}
  >
    {children}
  </span>
)

export default Flex
