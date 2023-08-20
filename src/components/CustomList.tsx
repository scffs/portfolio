import React, { Dispatch, SetStateAction } from 'react';
import {
  Cell, List, Image, Tappable,
} from '@vkontakte/vkui';

import { Technology } from './StackInfo/data';

interface CustomListProps {
  items: Technology[];
  draggingList: Technology[];
  updateDraggingList: Dispatch<SetStateAction<Technology[]>>;
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

const CustomList: React.FC<CustomListProps> = ({ items, draggingList, updateDraggingList }) => (
  <List>
    {items.map((item, index) => (
      <Cell
        key={item.name}
        before={<Image style={{ boxSizing: 'border-box', padding: 5 }} src={item.logo} />}
        after={<Tappable style={{ padding: 10 }}>{item.level}</Tappable>}
        draggable
        onDragFinish={({ to }) => reorderList({ from: index, to }, draggingList, updateDraggingList)}
      >
        {item.name}
      </Cell>
    ))}
  </List>
);

export default CustomList;
