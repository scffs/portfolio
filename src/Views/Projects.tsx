import { FC } from 'react';
import {
  Group, Panel, Placeholder, View,
} from '@vkontakte/vkui';
import { Icon28UserCircleOutline } from '@vkontakte/icons';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import PanelHeaderWithBack from '../components/PanelHeaderWithBack';

const Projects: FC<{ id: string }> = ({ id }) => {
  const { panel: activePanel, panelsHistory } = useActiveVkuiLocation();
  const routeNavigator = useRouteNavigator();

  return (
    <View
      id={id}
      history={panelsHistory}
      activePanel={activePanel as string}
      onSwipeBack={() => routeNavigator.back()}
    >
      <Panel nav={id}>
        <PanelHeaderWithBack title='Проекты' />
        <Group>
          <Placeholder
            icon={<Icon28UserCircleOutline width={56} height={56} />}
          />
        </Group>
      </Panel>
    </View>
  );
};

export default Projects;