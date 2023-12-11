import {
  Avatar, Gradient, Link, Title,
} from '@vkontakte/vkui';

import { gradientBorder, styles } from './styles';

import ava from '../../assets/avaSmall.jpg';

import { VK_URL } from '../../constants';

const UserInfo = () => (
    <Gradient style={{ ...styles, ...gradientBorder }}>
      <Avatar size={90} src={ava} alt='ava' />
      <Title style={{ marginTop: 20 }} level='2' weight='2'>
        Семён Окулов
      </Title>
      <Link href={VK_URL} target='_blank'>@scffs</Link>
      <Title level='3' weight='3'>
        Fullstack-разработчик
      </Title>
    </Gradient>
);

export default UserInfo;
