import { FC } from 'react';
import {
  Group, Panel, Placeholder,
} from '@vkontakte/vkui';
import { Icon28UserCircleOutline } from '@vkontakte/icons';

import PanelHeaderWithBack from '../components/PanelHeaderWithBack';

const Contacts: FC<{ id: string }> = ({ id }) => (
  <Panel nav={id}>
    <PanelHeaderWithBack title='Контакты' />
    <Group>
      <Placeholder
        icon={<Icon28UserCircleOutline width={56} height={56} />}
      />
    </Group>
  </Panel>
);

export default Contacts;
