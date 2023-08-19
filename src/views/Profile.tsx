import { FC } from 'react';
import {
  Div, Group, Panel, Separator,
} from '@vkontakte/vkui';
import { UserInfo, UserStory } from '../components/ProfileInfo';

import PanelHeaderWithBack from '../components/PanelHeaderWithBack';

const Profile: FC<{ id: string }> = ({ id }) => (
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
);

export default Profile;
