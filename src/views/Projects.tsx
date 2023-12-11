import { Icon28ServicesOutline } from '@vkontakte/icons'
import {
  useActiveVkuiLocation,
  useRouteNavigator
} from '@vkontakte/vk-mini-apps-router'
import { Group, Link, Panel, Placeholder, View } from '@vkontakte/vkui'
import { FC } from 'react'

import PanelHeaderWithBack from '../components/PanelHeaderWithBack'
import { GITHUB_URL } from '../constants'

const Projects: FC<{ id: string }> = ({ id }) => {
  const { panel: activePanel, panelsHistory } = useActiveVkuiLocation()
  const routeNavigator = useRouteNavigator()

  return (
    <View
      id={id}
      history={panelsHistory}
      activePanel={activePanel}
      onSwipeBack={() => routeNavigator.back()}
    >
      <Panel nav={id}>
        <PanelHeaderWithBack title='Проекты' />
        <Group>
          <Placeholder icon={<Icon28ServicesOutline width={56} height={56} />}>
            Страница ещё не готова, но проекты есть на{' '}
            <Link href={GITHUB_URL} target='_blank'>
              GitHub
            </Link>
          </Placeholder>
        </Group>
      </Panel>
    </View>
  )
}

export default Projects
