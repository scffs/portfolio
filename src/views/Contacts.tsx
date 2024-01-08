import {
  useActiveVkuiLocation,
  useRouteNavigator
} from '@vkontakte/vk-mini-apps-router'
import {
  Group,
  Header,
  InfoRow,
  Link,
  Panel,
  SimpleCell,
  View
} from '@vkontakte/vkui'
import { FC } from 'react'

import PanelHeaderWithBack from '../components/PanelHeaderWithBack'
import { GITHUB_URL, HABR_URL, VK_URL } from '../constants'

const Contacts: FC<{ id: string }> = ({ id }) => {
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
        <PanelHeaderWithBack title='Контакты' />
        <Group header={<Header mode='tertiary'>How to reach me</Header>}>
          <SimpleCell multiline>
            <InfoRow header='ВК'>
              <Link href={VK_URL} target='_blank'>
                vk.com/scffs
              </Link>
            </InfoRow>
          </SimpleCell>
          <SimpleCell>
            <InfoRow header='Хабр'>
              <Link href={HABR_URL}>habr.com/ru/users/scoffs/</Link>
            </InfoRow>
          </SimpleCell>
          <SimpleCell>
            <InfoRow header='Почта'>
              <Link href={'mailto:scoffs@internet.ru'}>scoffs@internet.ru</Link>
            </InfoRow>
          </SimpleCell>
          <SimpleCell>
            <InfoRow header='GitHub'>
              <Link href={GITHUB_URL}>github.com/scffs</Link>
            </InfoRow>
          </SimpleCell>
        </Group>
      </Panel>
    </View>
  )
}

export default Contacts
