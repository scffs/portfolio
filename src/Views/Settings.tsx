import { FC } from 'react';
import {
  Group, Header, Panel, View,
} from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import PanelHeaderWithBack from '../components/PanelHeaderWithBack';
import ToggleTheme from '../components/ToggleTheme';

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
          <ToggleTheme toggleAppearance={toggleAppearance} />
        </Group>
      </Panel>
    </View>
  );
};

export default Settings;
