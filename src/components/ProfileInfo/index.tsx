import { CSSProperties } from 'react';
import {
  Accordion,
  Avatar,
  Button,
  Div,
  Gradient,
  Header, HorizontalCell, HorizontalScroll,
  InfoRow,
  Link,
  Paragraph,

  Spacing,
  Text,
  Title,
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon24EducationOutline } from '@vkontakte/icons';

import Flex from '../Flex';
import ava from '../../assets/img/avaSmall.jpg';
import avaVKT from '../../assets/img/logovkt.jpg';
import avaKot from '../../assets/img/kot.png';
import python from '../../assets/img/python.png';
import github from '../../assets/img/github.svg';
import leetcode from '../../assets/img/leetcode.svg';

import { ABOUT_FULLSTACK } from '../ModalRoot/constants';
import { gradientBorder, styles } from './styles';
import {
  GITHUB_URL, KOTBREAD_URL, LEETCODE_URL, PYTHON_URL, TEPT_URL, VKT_URL,
} from '../../constants';
import LinkWithImage from '../LinkWithImage';

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
    <HorizontalScroll showArrows style={infoStyle}>
      <HorizontalCell>
        <InfoRow header='Возраст'>18</InfoRow>
      </HorizontalCell>
      <HorizontalCell>
        <InfoRow header='Город'>Томск</InfoRow>
      </HorizontalCell>
      <HorizontalCell>
        <InfoRow header='Пол'>Единственный</InfoRow>
      </HorizontalCell>
      <HorizontalCell>
        <InfoRow header='Место учёбы'>
          <Flex gap={5} align='center'>
            <Icon24EducationOutline color='#9EA1A9' />
            <Link href={TEPT_URL} target='_blank'>
              ТЭПК
            </Link>
          </Flex>
        </InfoRow>
      </HorizontalCell>
      <HorizontalCell>
        <InfoRow header='Место работы'>
          <Link href={KOTBREAD_URL} target='_blank'>
            <Flex gap={5} align='center'>
              <Avatar
                size={24}
                src={avaKot}
              />
              @kotbread
            </Flex>
          </Link>
        </InfoRow>
      </HorizontalCell>
    </HorizontalScroll>
    <Div>
      <Paragraph>
        Привет! Моё имя выше, а тут будет мелкая история о том, как и когда я вошёл в IT и не вышел обратно.
      </Paragraph>
      <Spacing size={16} />
      <Accordion>
        <Accordion.Summary iconPosition='before'>С чего начинал</Accordion.Summary>
        <Div>
          <Paragraph>
            Моя дружба с программированием началась в 9-ом классе. Первым языком стал
            {' '}
            <LinkWithImage linkText='Python' href={PYTHON_URL} icon={python} />
            , на котором я писал совсем
            немного и очень плохо, поэтому моих проектов на этом вы не увидите, но я могу
            рассказать о некоторых из них:
            <Spacing size={16} />
            <Div>
              <ol>
                <li>
                  Первым проектом был стандартный калькулятор, который поддерживал только простые арифметические
                  операции.
                  <Spacing size={16} />
                </li>
                <li>
                  Второй проект оказался более увлекательным — это был калькулятор для квадратных уравнений.
                  Моя страсть к алгебре вдохновила меня на создание инструмента, способного автоматически вычислять
                  корни квадратного уравнения по заданным коэффициентам.
                  <Spacing size={16} />
                </li>
                <li>
                  Как и все школьники, я много играл в игры, а для автоматизации игрового процесса мы с другом написали
                  бота, который выполнял рутинные действия, чтобы мы могли спокойно пить чай или спать.
                </li>
              </ol>
            </Div>
          </Paragraph>
        </Div>
      </Accordion>
      <Spacing size={16} />
      <Accordion>
        <Accordion.Summary iconPosition='before'>Что делал после начала</Accordion.Summary>
        <Div>
          <Paragraph>
            После окончания школы поступил в колледж, в котором нас обучают Fullstack разработке (подробнее о стэке на странице Мой стэк). Мне больше нравится
            Frontend, но на работе я пишу и Backend часть (что поделать). В свободное от работы время я могу решать
            алгоритмические задачки на
            {' '}
            <LinkWithImage linkText='Leetcode' href={LEETCODE_URL} icon={leetcode} />
            {' '}
            или просто отдыхать.
            <br />
            За время учебы я написал множество проектов, как в рамках программы, так и для себя. Ознакомиться с
            некоторым списком можно на странице Проекты или на моём
            {' '}
            <LinkWithImage linkText='GitHub' href={GITHUB_URL} icon={github} />
          </Paragraph>
        </Div>
      </Accordion>
      <Spacing size={16} />
      <Accordion>
        <Accordion.Summary iconPosition='before'>До чего докатился</Accordion.Summary>
        <Div>
          <Paragraph>
            Помимо работы и учёбы я являюсь участником и автором статей в программе бета-тестирования
            <LinkWithImage linkText='VK Testers' href={VKT_URL} icon={avaVKT} />
            , а когда-то переводил и писал статьи для блога на Хабре.
            В прошлом был модератором и участником крупнейшей веб-документации MDN, но сейчас на это совсем нет времени.
          </Paragraph>
        </Div>
      </Accordion>
    </Div>
  </Gradient>
);
