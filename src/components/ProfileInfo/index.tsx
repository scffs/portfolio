import {
  Avatar,
  Button, Div,
  Gradient, Paragraph, Spacing,
  Text,
  Title,
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import logo from '../../assets/img/avaSmall.jpg';
import { ABOUT_FULLSTACK } from '../ModalRoot/constants';
import { gradientBorder, styles } from './styles';

export const UserInfo = () => {
  const routeNavigator = useRouteNavigator();
  const handleOpenModal = () => {
    routeNavigator.showModal(ABOUT_FULLSTACK);
  };

  return (
    <Gradient style={{ ...styles, ...gradientBorder }}>
      <Avatar size={90} src={logo} alt='ava' />
      <Title style={{ marginBottom: 8, marginTop: 20 }} level='2' weight='2'>
        Семён Окулов
      </Title>
      <Text>Fullstack-разработчик</Text>
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

export const UserStory = () => (
  <Gradient style={gradientBorder}>
    <Div>
      <Paragraph>
        Привет! Моё имя выше, а тут будет мелкая история о том, когда я вошёл в IT и не вышел обратно.
      </Paragraph>
      <Spacing size={16} />
      <Paragraph>
        Моя дружба с программированием начинается с 9-ого класса, когда на уроке информатики нам показали язык
        программирования Python. Меня ещё с детсва интересует IT-сфера, но именно тот момент стал отправной точкой. На
        Python я писал совсем немного и очень плохо, поэтому моих проектов на этом вы не увидите. Первым проектом был
        стандартный калькулятор, который поддерживал только простые арифмитические операции. Второй проект был
        поинтереснее - калькулятор для квадратных уравнений. Я обожаю алгебру и мне стало интересно написать калькулятор,
        который по заданным коэффициентам расчитывал корни квадратного уравнения. Как и все школьники я много играл в
        игры, а для автоматизации игрового процесса мы с другом написали бота, который выполнял однотипные действия, а мы
        могли спокойно пить чай или спать.
      </Paragraph>
      <Spacing size={16} />
      <Paragraph>
        После окончания школы поступил в колледж, где нас обучают Fullstack разработке. Мне больше нравится Frontend, но
        на работе я пишу и Backend (что поделать). В свободное от работы время я могу решать алгоритмические задачки на
        Leetcode или просто отдыхать.
      </Paragraph>
    </Div>
  </Gradient>
);
