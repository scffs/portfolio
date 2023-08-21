import { FC, useEffect, useState } from 'react';
import {
  Cell, Group, Header, Panel, Subhead, View,
} from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import PanelHeaderWithBack from '../components/PanelHeaderWithBack';
import ToggleTheme from '../components/ToggleTheme';

const formatKeyText = (key: string) => {
  if (key.startsWith('orientation')) {
    const orientationType = key.replace('orientation', '').toLowerCase();
    return `Ориентация ${orientationType}`;
  }
  if (key === 'theme') {
    return 'Тема';
  }
  return key;
};

const Settings: FC<{ id: string, toggleAppearance: () => void }> = ({ id, toggleAppearance }) => {
  const { panel: activePanel, panelsHistory } = useActiveVkuiLocation();
  const routeNavigator = useRouteNavigator();

  const [cacheData, setCacheData] = useState<{ key: string; value: string }[]>([]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);

    const getCache = allKeys.map((key) => ({ key, value: localStorage.getItem(key) || 'false' }));
    setCacheData(getCache);
  }, []);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key) {
        setCacheData((prevCacheData) => prevCacheData.map((item) => ({
          key: item.key,
          value: item.key === event.key ? event.newValue || 'false' : item.value,
        })));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

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
        <Group header={<Header mode='secondary' aside={<Subhead>Хранится в LocalStorage</Subhead>}>Кеш</Header>}>
          {cacheData.map((item) => (
            <Cell key={item.key} indicator={item.value}>
              {formatKeyText(item.key)}
            </Cell>
          ))}
        </Group>
      </Panel>
    </View>
  );
};

export default Settings;
