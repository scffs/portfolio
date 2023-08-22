import React, { Dispatch, memo, SetStateAction } from 'react';
import {
  Cell, List, Image, HorizontalCell, HorizontalScroll,
} from '@vkontakte/vkui';

import { Technology } from './StackInfo/data';

export type UpdateDraggingList = Dispatch<SetStateAction<Technology[]>>;

interface CustomListProps {
  items: Technology[];
  draggingList: Technology[];
  updateDraggingList: UpdateDraggingList;
  isHorizontal: boolean;
}

const reorderList = (
  { from, to }: { from: number; to: number },
  list: Technology[],
  updateListFn: Dispatch<SetStateAction<Technology[]>>,
) => {
  const newList = [...list];
  newList.splice(to, 0, newList.splice(from, 1)[0]);
  updateListFn(newList);
};

const CustomList: React.FC<CustomListProps> = ({
  items, draggingList, updateDraggingList, isHorizontal,
}) => {
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
      {items.map((item, index) => (
        <Cell
          key={item.name}
          before={(
            <Image
              style={{ boxSizing: 'border-box', padding: 5 }}
              src={item.logo}
            />
          )}
          after={item.level}
          draggable
          onDragFinish={({ to }) => reorderList({ from: index, to }, draggingList, updateDraggingList)}
        >
          {item.name}
        </Cell>
      ))}
    </List>
  );

  return (
    <div>
      {listContent}
    </div>
  );
};

export default memo(CustomList);
