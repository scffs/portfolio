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
import Sidebar from './components/Sidebar';
import Index from './components/Epic';
import { VIEW_PROFILE } from './components/routes';
import { Pages } from './types';
import ModalRoot from './components/ModalRoot';

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
          <Index onStoryChange={onStoryChange} />
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
