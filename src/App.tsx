import { lazy } from 'react';
import {
  AppRoot,
  PanelHeader,
  Platform,
  SplitCol,
  SplitLayout,
  useAdaptivityConditionalRender,
  usePlatform,
} from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import { VIEW_PROFILE } from './routes';
import { Pages } from './types';

const Sidebar = lazy(() => import('./components/Sidebar'));
const Epic = lazy(() => import('./components/Epic'));
const ModalRoot = lazy(() => import('./components/ModalRoot'));

const App = () => {
  const platform = usePlatform();
  const isVKCOM = platform !== Platform.VKCOM;

  const { viewWidth } = useAdaptivityConditionalRender();

  const { view: activeView = VIEW_PROFILE } = useActiveVkuiLocation();
  const routeNavigator = useRouteNavigator();
  const onStoryChange = async (currentView: Pages) => {
    await routeNavigator.push(`/${currentView}`);
  };

  const modals = <ModalRoot />;

  return (
    <AppRoot>
      <SplitLayout
        modal={modals}
        header={isVKCOM && <PanelHeader separator={false} />}
        style={{ justifyContent: 'center' }}
      >
        {viewWidth.tabletPlus && (
          <SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
            {isVKCOM && <PanelHeader />}
            <Sidebar activeView={activeView as Pages} onStoryChange={onStoryChange} />
          </SplitCol>
        )}
        <SplitCol width='100%' maxWidth='700px' stretchedOnMobile autoSpaced>
          <Epic onStoryChange={onStoryChange} />
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
