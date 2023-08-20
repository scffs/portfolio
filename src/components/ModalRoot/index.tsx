import { ModalRoot as VKUIModalRoot } from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import Suspense from '../Suspense';
import { FullstackModal } from '../Modals';
import { ABOUT_FULLSTACK } from './constants';

const ModalRoot = () => {
  const routeNavigator = useRouteNavigator();
  const { modal: activeModal } = useActiveVkuiLocation();

  return (
    <Suspense id='test'>
      <VKUIModalRoot
        activeModal={activeModal}
        onClose={() => routeNavigator.hideModal()}
      >
        <FullstackModal id={ABOUT_FULLSTACK} />
      </VKUIModalRoot>
    </Suspense>
  );
};

export default ModalRoot;
