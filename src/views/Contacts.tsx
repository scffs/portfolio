import { FC } from 'react';
import {
  Group, Panel, PanelHeader, PanelHeaderBack, Placeholder,
} from '@vkontakte/vkui';
import { Icon28UserCircleOutline } from '@vkontakte/icons';

const Contacts: FC<{ id: string }> = ({ id }) => (
  <Panel nav={id}>
    <PanelHeader before={<PanelHeaderBack />}>Связаться со мной</PanelHeader>
    <Group>
      <Placeholder
        icon={<Icon28UserCircleOutline width={56} height={56} />}
      />
    </Group>
  </Panel>
);

export default Contacts;
