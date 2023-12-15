import {
  useActiveVkuiLocation,
  useRouteNavigator
} from '@vkontakte/vk-mini-apps-router'
import { Div, Group, Panel, Separator, View } from '@vkontakte/vkui'
import { FC } from 'react'

import PanelHeaderWithBack from '../components/PanelHeaderWithBack'
import { UserInfo, UserStory } from '../components/ProfileInfo'
import Suspense from '../components/Suspense'

const Profile: FC<{ id: string }> = ({ id }) => {
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
        <PanelHeaderWithBack title='Обо мне' />
        <Group>
          <Div>
            <Suspense id='UserInfo'>
              <UserInfo />
            </Suspense>
          </Div>
          <Separator />
          <Div>
            <Suspense id='UserStory'>
              <UserStory />
            </Suspense>
          </Div>
        </Group>
      </Panel>
    </View>
  )
}

export default Profile
