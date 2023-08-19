import { FC } from 'react';
import {
  Div,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Separator,
} from '@vkontakte/vkui';
import { UserInfo, UserStory } from '../components/ProfileInfo';

const Profile: FC<{ id: string }> = ({ id }) => (
  <Panel nav={id}>
    <PanelHeader before={<PanelHeaderBack />}>Обо мне</PanelHeader>
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
