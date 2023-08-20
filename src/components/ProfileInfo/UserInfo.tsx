import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import {
  Avatar, Button, Gradient, Text, Title,
} from '@vkontakte/vkui';

import { ABOUT_FULLSTACK } from '../ModalRoot/constants';
import { gradientBorder, styles } from './styles';

import ava from '../../assets/avaSmall.jpg';

const UserInfo = () => {
  const routeNavigator = useRouteNavigator();
  const { modal: activeModal } = useActiveVkuiLocation();

  const handleOpenModal = () => {
    routeNavigator.push(ABOUT_FULLSTACK);
  };

  return (
    <Gradient style={{ ...styles, ...gradientBorder }}>
      <Avatar size={90} src={ava} alt='ava' />
      <Title style={{ marginBottom: 8, marginTop: 20 }} level='2' weight='2'>
        Семён Окулов
      </Title>
      <Text>
        Fullstack-разработчик
      </Text>
      <Button
        size='l'
        style={{ marginTop: 10 }}
        mode='secondary'
        onClick={handleOpenModal}
        disabled={activeModal === ABOUT_FULLSTACK}
      >
        Кто?
      </Button>
    </Gradient>
  );
};

export default UserInfo;
