import {
  Dispatch, FC, SetStateAction, useState,
} from 'react';
import {
  Cell, Group, Header, List, Panel, View, Image,
} from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import PanelHeaderWithBack from '../components/PanelHeaderWithBack';

import react from '../assets/react.svg';
import js from '../assets/js.png';
import ts from '../assets/ts.svg';
import redux from '../assets/redux.svg';
import vue from '../assets/vue.svg';
import styled from '../assets/styled-components.svg';
import vite from '../assets/vite.png';
import vk from '../assets/vk.svg';

import nest from '../assets/nest.png';
import charp from '../assets/charp.png';
import mysql from '../assets/mysql.svg';
import nodejs from '../assets/nodejs.svg';
import redis from '../assets/redis.png';
import php from '../assets/php.svg';
import mongodb from '../assets/mongodb.svg';

interface Technology {
  name: string;
  logo: string;
}

const technologiesFront: Technology[] = [
  { name: 'React', logo: react },
  { name: 'JavaScript', logo: js },
  { name: 'TypeScript', logo: ts },
  { name: 'Redux Toolkit', logo: redux },
  { name: 'Vue', logo: vue },
  { name: 'Styled Components', logo: styled },
  { name: 'Vite', logo: vite },
  { name: 'VKUI', logo: vk },
];

const technologiesBackend: Technology[] = [
  { name: 'NestJS', logo: nest },
  { name: 'C#', logo: charp },
  { name: 'MongoDB', logo: mongodb },
  { name: 'MySQL', logo: mysql },
  { name: 'PHP', logo: php },
  { name: 'Redis', logo: redis },
  { name: 'NodeJS / Express', logo: nodejs },
];

const reorderList = (
  { from, to }: { from: number; to: number },
  list: Technology[],
  updateListFn: Dispatch<SetStateAction<Technology[]>>,
) => {
  const newList = [...list];
  newList.splice(to, 0, newList.splice(from, 1)[0]);
  updateListFn(newList);
};

const Stack: FC<{ id: string }> = ({ id }) => {
  const { panel: activePanel, panelsHistory } = useActiveVkuiLocation();

  const routeNavigator = useRouteNavigator();
  const [draggingList, updateDraggingList] = useState<Technology[]>(technologiesFront);
  const [draggingListBackend, updateDraggingListBackend] = useState<Technology[]>(technologiesBackend);

  return (
    <View
      id={id}
      history={panelsHistory}
      activePanel={activePanel as string}
      onSwipeBack={() => routeNavigator.back()}
    >
      <Panel nav={id}>
        <PanelHeaderWithBack title='Стэк' />
        <Group header={<Header>Frontend</Header>}>
          <List>
            {draggingList.map((item) => (
              <Cell
                key={item.name}
                before={<Image style={{ boxSizing: 'border-box', padding: 5 }} src={item.logo} />}
                after='test'
                draggable
                onDragFinish={({ from, to }) => reorderList({ from, to }, draggingList, updateDraggingList)}
              >
                {item.name}
              </Cell>
            ))}
          </List>
        </Group>
        <Group header={<Header>Backend</Header>}>
          <List>
            {draggingListBackend.map((item) => (
              <Cell
                key={item.name}
                before={<Image style={{ boxSizing: 'border-box', padding: 5 }} src={item.logo} />}
                after='test'
                draggable
                onDragFinish={
                ({ from, to }) => reorderList({ from, to }, draggingListBackend, updateDraggingListBackend)
              }
              >
                {item.name}
              </Cell>
            ))}
          </List>
        </Group>
      </Panel>
    </View>
  );
};

export default Stack;
