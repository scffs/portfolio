import {Icon28ServicesOutline} from '@vkontakte/icons'
import {
  useActiveVkuiLocation,
  useRouteNavigator
} from '@vkontakte/vk-mini-apps-router'
import {CardGrid, ContentCard, Footer, Group, Link, Panel, Placeholder, View} from '@vkontakte/vkui'
import {FC} from 'react'

import PanelHeaderWithBack from '../components/PanelHeaderWithBack'
import gatto from '../assets/gatto.jpg'
import diary from '../assets/diary.png'
import admin from '../assets/admin.jpg'
import wpf from '../assets/wpf.png'
import db from '../assets/db.png'
import {GITHUB_URL} from "../constants";

const Projects: FC<{ id: string }> = ({id}) => {
  const {panel: activePanel, panelsHistory} = useActiveVkuiLocation()
  const routeNavigator = useRouteNavigator()
  
  return (
    <View
      id={id}
      history={panelsHistory}
      activePanel={activePanel}
      onSwipeBack={() => routeNavigator.back()}
    >
      <Panel nav={id}>
        <PanelHeaderWithBack title='Проекты'/>
        <Group>
          <CardGrid size="l">
            <ContentCard
              onClick={() => window.open('https://vk.com/gatto_game', '_blank')}
              src={gatto}
              alt="preview"
              subtitle="React, TypeScript etc..."
              header="Gatto"
              caption="Gatto - это большая, яркая и увлекательная игра. По типу напоминает 'тамагочи' - есть прокачка персонажей, различные локации и элементы скрещивания."
            />
            <ContentCard
              onClick={() => window.open('https://vk.com/diary_spo', '_blank')}
              src={diary}
              alt="preview"
              subtitle="Preact, TypeScript, VKUI etc..."
              header="Дневник СПО"
              caption="Обёртка над дневником Сетевого города для СПО (API совпадает с Томской областью). В сервисе студенты могут полностью следить за своей успеваемостью и расписанием."
            />
            <ContentCard
              onClick={() => window.open('https://github.com/Diary-SPO/diary-admin', '_blank')}
              src={admin}
              alt="preview"
              subtitle="Preact, TypeScript, VKUI, Docker, ElysiaJS etc..."
              header="Дневник Admin"
              caption="Попытка сделать собственный дневник, а именно часть администратора: создание групп, расписаний, выставление оценок и тд."
            />
            <ContentCard
              onClick={() => window.open('https://github.com/scffs/FakeDB', '_blank')}
              src={db}
              alt="preview"
              subtitle="C#"
              header="Fake DB"
              caption="Консольное приложение для управления пользователями с использованием фейковой базы данных."
            />
            <ContentCard
              onClick={() => window.open('https://github.com/scffs/WPF-Quiz', '_blank')}
              src={wpf}
              alt="preview"
              subtitle="C#, WPF"
              header="WPF Quiz"
              caption="Игроку предлагается лист, на котором написан текст. В тексте некоторые слова заменены пиктограммами. Пиктограммы в тексте заменены в случайном порядке."
            />
          </CardGrid>
        </Group>
        <Footer>
            Другие проекты есть на{' '}
            <Link href={GITHUB_URL} target='_blank'>
              GitHub
            </Link>
        </Footer>
      </Panel>
    </View>
  )
}

export default Projects
