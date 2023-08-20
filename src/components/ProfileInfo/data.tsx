import { Icon24BracketsSlashOutline, Icon24EducationOutline, Icon28ServicesOutline } from '@vkontakte/icons';
import {
  Avatar, Div, Link, Spacing,
} from '@vkontakte/vkui';
import Flex from '../Flex';
import {
  GITHUB_URL,
  HABR_URL,
  KOTBREAD_URL,
  LEETCODE_URL,
  MDN_URL,
  PYTHON_URL,
  TEPT_URL,
  VKT_URL,
} from '../../constants';

import LinkWithImage from '../LinkWithImage';

import avaKot from '../../assets/kot.png';
import python from '../../assets/python.png';
import leetcode from '../../assets/leetcode.svg';
import github from '../../assets/github.svg';
import avaVKT from '../../assets/logovkt.webp';
import habr from '../../assets/habr.svg';
import mdn from '../../assets/mdn.svg';

import { VIEW_PROJECTS, VIEW_STACK } from '../../routes';

export const userInfoItems = [
  {
    label: 'Возраст',
    value: '18',
  },
  {
    label: 'Город',
    value: 'Томск',
  },
  {
    label: 'Пол',
    value: 'Единственный',
  },
  {
    label: 'Место учёбы',
    value: (
      <Flex gap={5} align='center'>
        <Icon24EducationOutline color='#9EA1A9' />
        <Link href={TEPT_URL} target='_blank'>
          ТЭПК
        </Link>
      </Flex>
    ),
  },
  {
    label: 'Место работы',
    value: (
      <Link href={KOTBREAD_URL} target='_blank'>
        <Flex gap={5} align='center'>
          <Avatar size={24} src={avaKot} alt='kotbread' />
          @kotbread
        </Flex>
      </Link>
    ),
  },
];

export const userStoryContent = [
  {
    title: 'С чего начинал',
    content: (
      <>
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
      </>
    ),
  },
  {
    title: 'Что делал после начала',
    content: (
      <>
        После окончания школы поступил в колледж, в котором нас обучают Fullstack разработке (подробнее на
        странице&nbsp;
        <LinkWithImage
          target='_self'
          href={`#${VIEW_STACK}`}
          icon={<Icon24BracketsSlashOutline />}
          linkText='Стэк'
        />
        ). Мне больше нравится Frontend, но на работе я пишу и Backend часть (что поделать).
        <Spacing size={16} />
        В свободное от работы время я могу решать алгоритмические задачки на
        {' '}
        <LinkWithImage linkText='Leetcode' href={LEETCODE_URL} icon={leetcode} />
        {' '}
        или просто отдыхать.
        <Spacing size={16} />
        За время учёбы я поучавствовал в большом количестве олимпиад и написал множество проектов, как в рамках
        программы, так и для себя. Ознакомиться с некоторым списком можно на странице
        <LinkWithImage target='_self' href={`#${VIEW_PROJECTS}`} icon={<Icon28ServicesOutline />} linkText='Проекты' />
        {' '}
        или на
        <LinkWithImage linkText='GitHub' href={GITHUB_URL} icon={github} />
      </>
    ),
  },
  {
    title: 'До чего докатился',
    content: (
      <>
        Помимо работы и учёбы я являюсь участником и автором статей в программе бета-тестирования
        <LinkWithImage linkText='VK Testers' href={VKT_URL} icon={avaVKT} />
        , а когда-то переводил и писал статьи для блога на
        <LinkWithImage linkText='Хабре' href={HABR_URL} icon={habr} />
        .
        В прошлом был модератором и участником крупнейшей веб-документации
        {' '}
        <LinkWithImage linkText='MDN' href={MDN_URL} icon={mdn} />
        , но сейчас на это совсем нет времени.
      </>
    ),
  },
];
