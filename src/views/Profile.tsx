import { FC } from 'react';
import {
  Group, Panel, PanelHeader, PanelHeaderBack, Placeholder,
} from '@vkontakte/vkui';
import { Icon28UserCircleOutline } from '@vkontakte/icons';

const Profile: FC<{ id: string }> = ({ id }) => (
  <Panel nav={id}>
    <PanelHeader before={<PanelHeaderBack />}>Обо мне</PanelHeader>
    <Group>
      <Placeholder
        icon={<Icon28UserCircleOutline width={56} height={56} />}
      />
    </Group>
  </Panel>
);

export default Profile;
