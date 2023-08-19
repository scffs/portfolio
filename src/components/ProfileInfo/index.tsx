import { CSSProperties } from 'react';
import {
  Accordion,
  Avatar,
  Button,
  Div,
  Gradient,
  Header, HorizontalCell, HorizontalScroll,
  InfoRow,
  Paragraph,
  Spacing,
  Text,
  Title,
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import ava from '../../assets/img/avaSmall.jpg';

import { ABOUT_FULLSTACK } from '../ModalRoot/constants';
import { gradientBorder, styles } from './styles';

import { userInfoItems, userStoryContent } from './data';

export const UserInfo = () => {
  const routeNavigator = useRouteNavigator();
  const handleOpenModal = () => {
    routeNavigator.showModal(ABOUT_FULLSTACK);
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
      >
        Кто?
      </Button>
    </Gradient>
  );
};

const infoStyle: CSSProperties = {
  display: 'flex',
};

export const UserStory = () => (
  <Gradient style={gradientBorder}>
    <Header mode='secondary'>Информация о пользователе</Header>
    <HorizontalScroll
      showArrows
      style={infoStyle}
      getScrollToLeft={(i) => i - 120}
      getScrollToRight={(i) => i + 120}
    >
      <div style={{ display: 'flex', gap: 5, width: '500px' }}>
        {userInfoItems.map((item) => (
          <HorizontalCell key={item.label}>
            <InfoRow header={item.label}>{item.value}</InfoRow>
          </HorizontalCell>
        ))}
      </div>
    </HorizontalScroll>
    <Div>
      <Paragraph>
        Привет! Моё имя выше, а тут будет мелкая история о том, как и когда я вошёл в IT и не вышел обратно.
      </Paragraph>
      <Spacing size={16} />
      {userStoryContent.map((item) => (
        <Accordion key={item.title}>
          <Accordion.Summary iconPosition='before'>{item.title}</Accordion.Summary>
          <Div>
            <Paragraph>{item.content}</Paragraph>
          </Div>
        </Accordion>
      ))}
    </Div>
  </Gradient>
);
