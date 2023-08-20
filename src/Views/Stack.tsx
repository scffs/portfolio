import {
  FC, lazy, useState,
} from 'react';
import {
  Group, Header, Panel, View, Div,
} from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import Suspense from '../components/Suspense';
import PanelHeaderWithBack from '../components/PanelHeaderWithBack';
import ExplanationTooltip from '../components/ExplanationTooltip';

import {
  technologiesBackend, technologiesFront, technologiesOther, Technology,
} from '../components/StackInfo/data';

const CustomList = lazy(() => import('../components/CustomList'));

const Stack: FC<{ id: string }> = ({ id }) => {
  const { panel: activePanel, panelsHistory } = useActiveVkuiLocation();

  const routeNavigator = useRouteNavigator();
  const [draggingList, updateDraggingList] = useState<Technology[]>(technologiesFront);
  const [draggingListBackend, updateDraggingListBackend] = useState<Technology[]>(technologiesBackend);
  const [draggingListOther, updateDraggingListOther] = useState<Technology[]>(technologiesOther);

  return (
    <View
      id={id}
      history={panelsHistory}
      activePanel={activePanel as string}
      onSwipeBack={() => routeNavigator.back()}
    >
      <Panel nav={id}>
        <PanelHeaderWithBack title='Стэк' />
        <Group header={<Header>Пояснение</Header>}>
          <Div style={{ display: 'flex' }}>
            <ExplanationTooltip text='Beginner' tooltipContent='Базовые знания' />
            <ExplanationTooltip text='Intermediate' tooltipContent='Хорошие знания и небольшой опыт использования' />
            <ExplanationTooltip text='Advanced' tooltipContent='Продвинутые знания' />
          </Div>
        </Group>
        <Group header={<Header>Frontend</Header>}>
          <Suspense id='frontend'>
            <CustomList
              items={draggingList}
              draggingList={draggingList}
              updateDraggingList={updateDraggingList}
            />
          </Suspense>
        </Group>
        <Group header={<Header>Backend</Header>}>
          <Suspense id='backend'>
            <CustomList
              items={draggingListBackend}
              draggingList={draggingListBackend}
              updateDraggingList={updateDraggingListBackend}
            />
          </Suspense>
        </Group>
        <Group header={<Header>Other</Header>}>
          <Suspense id='other'>
            <CustomList
              items={draggingListOther}
              draggingList={draggingListOther}
              updateDraggingList={updateDraggingListOther}
            />
          </Suspense>
        </Group>
      </Panel>
    </View>
  );
};

export default Stack;
