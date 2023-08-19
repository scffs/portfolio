import { FC } from 'react';
import {
  Div, Group, Panel, Separator, View,
} from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import { UserInfo, UserStory } from '../components/ProfileInfo';

import PanelHeaderWithBack from '../components/PanelHeaderWithBack';

const Profile: FC<{ id: string }> = ({ id }) => {
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
        <PanelHeaderWithBack title='Обо мне' />
        <Group>
          <Div>
            <UserInfo />
          </Div>
          <Separator />
          <Div>
            <UserStory />
          </Div>
        </Group>
      </Panel>
    </View>
  );
};

export default Profile;
