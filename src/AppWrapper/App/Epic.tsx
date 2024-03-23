import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router'
import { useAdaptivityConditionalRender } from '@vkontakte/vkui'
import { Epic as VKUIEpic } from '@vkontakte/vkui/dist/components/Epic/Epic'
import type { FC } from 'react'
import Suspense from '../../components/Suspense.tsx'
import Tabbar from '../../components/Tabbar'
import {
  VIEW_CONTACTS,
  VIEW_PROFILE,
  VIEW_PROJECTS,
  VIEW_SETTINGS,
  VIEW_STACK
} from '../../routes'
import type { Pages } from '../../types'
import { Contacts, Profile, Projects, Settings, Stack } from '../../views'

interface IEpic {
  onStoryChange: (current: Pages) => void
  toggleAppearance: () => void
}

const Epic: FC<IEpic> = ({ onStoryChange, toggleAppearance }) => {
  const { view: activeView = 'profile' as Pages } = useActiveVkuiLocation()
  const { viewWidth } = useAdaptivityConditionalRender()

  return (
    <VKUIEpic
      activeStory={activeView}
      tabbar={
        viewWidth.tabletMinus && (
          <Tabbar
            onStoryChange={onStoryChange}
            activeView={activeView as Pages}
          />
        )
      }
    >
      <Suspense id={VIEW_STACK} mode='screen'>
        <Stack id={VIEW_STACK} />
      </Suspense>
      <Suspense id={VIEW_PROFILE} mode='screen'>
        <Profile id={VIEW_PROFILE} />
      </Suspense>
      <Suspense id={VIEW_PROJECTS} mode='screen'>
        <Projects id={VIEW_PROJECTS} />
      </Suspense>
      <Suspense id={VIEW_CONTACTS} mode='screen'>
        <Contacts id={VIEW_CONTACTS} />
      </Suspense>
      <Suspense id={VIEW_SETTINGS} mode='screen'>
        <Settings id={VIEW_SETTINGS} toggleAppearance={toggleAppearance} />
      </Suspense>
    </VKUIEpic>
  )
}

export default Epic
