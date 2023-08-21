import {
  FC, useState,
} from 'react';
import {
  Panel, View,
} from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import PanelHeaderWithBack from '../components/PanelHeaderWithBack';
import ExplanationGroup from '../components/StackInfo/ExplanationGroup';

import {
  technologiesBackend, technologiesFront, technologiesOther, Technology,
} from '../components/StackInfo/data';
import TechnologyGroup from '../components/StackInfo/TechnologyGroup';

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
        <ExplanationGroup />
        <TechnologyGroup
          id='frontend'
          title='Frontend'
          draggingList={draggingList}
          updateDraggingList={updateDraggingList}
        />
        <TechnologyGroup
          id='backend'
          title='Backend'
          draggingList={draggingListBackend}
          updateDraggingList={updateDraggingListBackend}
        />
        <TechnologyGroup
          id='other'
          title='Other'
          draggingList={draggingListOther}
          updateDraggingList={updateDraggingListOther}
        />
      </Panel>
    </View>
  );
};

export default Stack;
