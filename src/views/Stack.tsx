import { FC } from 'react';
import {
  Group, Panel, PanelHeader, PanelHeaderBack, Placeholder,
} from '@vkontakte/vkui';
import { Icon56NewsfeedOutline } from '@vkontakte/icons';

const Stack: FC<{ id: string }> = ({ id }) => (
  <Panel nav={id}>
    <PanelHeader before={<PanelHeaderBack />}>Стэк технологий</PanelHeader>
    <Group>
      <Placeholder icon={<Icon56NewsfeedOutline width={56} height={56} />} />
    </Group>
  </Panel>
);
export default Stack;
