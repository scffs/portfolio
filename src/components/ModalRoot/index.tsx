import { ModalRoot as VKUIModalRoot } from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import { FullstackModal } from '../Modals';
import { ABOUT_FULLSTACK } from './constants';

const ModalRoot = () => {
  const routeNavigator = useRouteNavigator();
  const { modal: activeModal } = useActiveVkuiLocation();

  return (
    <VKUIModalRoot
      activeModal={activeModal}
      onClose={() => routeNavigator.hideModal()}
    >
      <FullstackModal id={ABOUT_FULLSTACK} />
    </VKUIModalRoot>
  );
};

export default ModalRoot;
