import {
  Tabbar as VKUITabbar,
  TabbarItem,
  useAdaptivityConditionalRender
} from '@vkontakte/vkui'
import { FC } from 'react'

import {
  Icon28MailOutline,
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28SettingsOutline,
  Icon28UserCircleOutline
} from '@vkontakte/icons'

import {
  VIEW_CONTACTS,
  VIEW_PROFILE,
  VIEW_PROJECTS,
  VIEW_SETTINGS,
  VIEW_STACK
} from '../../routes'
import { Pages } from '../../types'

interface ITabbar {
  onStoryChange: (current: Pages) => void
  activeView: Pages
}

const Tabbar: FC<ITabbar> = ({ onStoryChange, activeView }) => {
  const { viewWidth } = useAdaptivityConditionalRender()

  return (
    viewWidth.tabletMinus && (
      <VKUITabbar className={viewWidth.tabletMinus.className}>
        <TabbarItem
          onClick={() => onStoryChange(VIEW_PROFILE)}
          selected={activeView === VIEW_PROFILE}
          data-story={VIEW_PROFILE}
          text='Обо мне'
        >
          <Icon28UserCircleOutline />
        </TabbarItem>
        <TabbarItem
          onClick={() => onStoryChange(VIEW_STACK)}
          selected={activeView === VIEW_STACK}
          data-story={VIEW_STACK}
          text='Стэк'
        >
          <Icon28NewsfeedOutline />
        </TabbarItem>
        <TabbarItem
          onClick={() => onStoryChange(VIEW_PROJECTS)}
          selected={activeView === VIEW_PROJECTS}
          data-story={VIEW_PROJECTS}
          text='Проекты'
        >
          <Icon28ServicesOutline />
        </TabbarItem>
        <TabbarItem
          onClick={() => onStoryChange(VIEW_CONTACTS)}
          selected={activeView === VIEW_CONTACTS}
          data-story={VIEW_CONTACTS}
          text='Контакты'
        >
          <Icon28MailOutline />
        </TabbarItem>
        <TabbarItem
          onClick={() => onStoryChange(VIEW_SETTINGS)}
          selected={activeView === VIEW_SETTINGS}
          data-story={VIEW_SETTINGS}
          text='Настройки'
        >
          <Icon28SettingsOutline />
        </TabbarItem>
      </VKUITabbar>
    )
  )
}

export default Tabbar
