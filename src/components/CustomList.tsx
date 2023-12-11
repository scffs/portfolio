import {
  Cell,
  HorizontalCell,
  HorizontalScroll,
  Image,
  List
} from '@vkontakte/vkui'
import React, { Dispatch, SetStateAction, memo } from 'react'

import { Technology } from './StackInfo/data'

export type UpdateDraggingList = Dispatch<SetStateAction<Technology[]>>

interface CustomListProps {
  items: Technology[]
  isHorizontal: boolean
}

const CustomList: React.FC<CustomListProps> = ({ items, isHorizontal }) => {
  const listContent = isHorizontal ? (
    <HorizontalScroll>
      <div style={{ display: 'flex' }}>
        {items.map(({ level, logo, name }) => (
          <HorizontalCell
            key={name}
            subtitle={level}
            size='s'
            header={name}
            style={{ maxWidth: 'unset' }}
          >
            <Image size={88} borderRadius='l' src={logo} />
          </HorizontalCell>
        ))}
      </div>
    </HorizontalScroll>
  ) : (
    <List>
      {items.map((item) => (
        <Cell
          key={item.name}
          before={
            <Image
              style={{
                boxSizing: 'border-box',
                padding: 5
              }}
              src={item.logo}
            />
          }
          after={item.level}
        >
          {item.name}
        </Cell>
      ))}
    </List>
  )

  return <div>{listContent}</div>
}

export default memo(CustomList)
