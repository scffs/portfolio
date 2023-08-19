import { FC } from 'react';
import {
  Group, Panel, Placeholder,
} from '@vkontakte/vkui';
import { Icon56NewsfeedOutline } from '@vkontakte/icons';

import PanelHeaderWithBack from '../components/PanelHeaderWithBack';

const Stack: FC<{ id: string }> = ({ id }) => (
  <Panel nav={id}>
    <PanelHeaderWithBack title='Стэк' />
    <Group>
      <Placeholder icon={<Icon56NewsfeedOutline width={56} height={56} />} />
    </Group>
  </Panel>
);
export default Stack;
