import {
  Icon24BracketsSlashOutline,
  Icon28MailOutline,
  Icon28ServicesOutline,
  Icon28SettingsOutline,
  Icon28UserCircleOutline
} from '@vkontakte/icons'
import { Cell, Group, Panel } from '@vkontakte/vkui'
import type { FC } from 'react'
import {
  VIEW_CONTACTS,
  VIEW_PROFILE,
  VIEW_PROJECTS,
  VIEW_SETTINGS,
  VIEW_STACK
} from '../../routes'
import type { Pages } from '../../types'

interface ISidebarProps {
  activeView: Pages
  onStoryChange: (current: Pages) => void
}

const activeStoryStyles = {
  backgroundColor: 'var(--vkui--color_background_secondary)',
  borderRadius: 8
}

const Sidebar: FC<ISidebarProps> = ({ activeView, onStoryChange }) => (
  <Panel>
    <Group>
      <Cell
        disabled={activeView === VIEW_PROFILE}
        onClick={() => onStoryChange(VIEW_PROFILE)}
        style={activeView === VIEW_PROFILE ? activeStoryStyles : undefined}
        before={<Icon28UserCircleOutline />}
      >
        Обо мне
      </Cell>
      <Cell
        disabled={activeView === VIEW_STACK}
        data-story={VIEW_STACK}
        onClick={() => onStoryChange(VIEW_STACK)}
        style={activeView === VIEW_STACK ? activeStoryStyles : undefined}
        before={<Icon24BracketsSlashOutline width={28} height={28} />}
      >
        Стэк
      </Cell>
      <Cell
        disabled={activeView === VIEW_PROJECTS}
        data-story={VIEW_PROJECTS}
        onClick={() => onStoryChange(VIEW_PROJECTS)}
        style={activeView === VIEW_PROJECTS ? activeStoryStyles : undefined}
        before={<Icon28ServicesOutline />}
      >
        Проекты
      </Cell>
      <Cell
        disabled={activeView === VIEW_CONTACTS}
        data-story={VIEW_CONTACTS}
        onClick={() => onStoryChange(VIEW_CONTACTS)}
        style={activeView === VIEW_CONTACTS ? activeStoryStyles : undefined}
        before={<Icon28MailOutline />}
      >
        Контакты
      </Cell>
      <Cell
        disabled={activeView === VIEW_SETTINGS}
        data-story={VIEW_SETTINGS}
        onClick={() => onStoryChange(VIEW_SETTINGS)}
        style={activeView === VIEW_SETTINGS ? activeStoryStyles : undefined}
        before={<Icon28SettingsOutline />}
      >
        Настройки сайта
      </Cell>
    </Group>
  </Panel>
)

export default Sidebar
