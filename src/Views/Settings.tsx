import { FC } from 'react';
import {
  CellButton,
  Group, Header, Panel, View,
} from '@vkontakte/vkui';
import { Icon28ReplayOutline } from '@vkontakte/icons';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import PanelHeaderWithBack from '../components/PanelHeaderWithBack';

const Settings: FC<{ id: string, toggleAppearance: () => void }> = ({ id, toggleAppearance }) => {
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
        <PanelHeaderWithBack title='Настройки' />
        <Group header={<Header mode='secondary'>Внешний вид</Header>}>
          <CellButton before={<Icon28ReplayOutline />} onClick={toggleAppearance}>Сменить тему</CellButton>
        </Group>
      </Panel>
    </View>
  );
};

export default Settings;
