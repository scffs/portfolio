import { FC } from 'react';
import {
  Group, Panel, Placeholder, View,
} from '@vkontakte/vkui';
import { Icon56NewsfeedOutline } from '@vkontakte/icons';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import PanelHeaderWithBack from '../components/PanelHeaderWithBack';

const Stack: FC<{ id: string }> = ({ id }) => {
  const {
    panel: activePanel,
    panelsHistory,
  } = useActiveVkuiLocation();

  const routeNavigator = useRouteNavigator();

  return (
    <View
      id={id}
      history={panelsHistory}
      activePanel={activePanel as string}
      onSwipeBack={() => routeNavigator.back()}
    >
      <Panel nav={id}>
        <PanelHeaderWithBack title='Стэк' />
        <Group>
          <Placeholder icon={<Icon56NewsfeedOutline />} />
        </Group>
      </Panel>
    </View>
  );
};
export default Stack;
