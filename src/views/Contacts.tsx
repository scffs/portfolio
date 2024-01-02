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
import { GITHUB_URL, HABR_URL, VKT_URL, VK_URL } from '../constants'

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
        <Group header={<Header mode='tertiary'>Что-то другое</Header>}>
          <SimpleCell multiline>
            <InfoRow header='Пишу статьи тут'>
              <Link href={VKT_URL} target='_blank'>
                vk.com/testers
              </Link>
            </InfoRow>
          </SimpleCell>
          <SimpleCell multiline>
            <InfoRow header='Разрабатываю свой дневник'>
              <Link href='https://github.com/scffs/diary-admin' target='_blank'>
                github.com/scffs/diary-admin
              </Link>
            </InfoRow>
          </SimpleCell>
          <SimpleCell multiline>
            <InfoRow header='Попытка сделать проводник на Rust'>
              <Link href='https://github.com/scffs/explorer' target='_blank'>
                github.com/scffs/explorer
              </Link>
            </InfoRow>
          </SimpleCell>
        </Group>
        <Group
          header={
            <Header mode='tertiary'>Мои любимые репозитории на GitHub</Header>
          }
        >
          <SimpleCell multiline>
            <InfoRow header='UI библиотека от VK'>
              <Link href='https://github.com/VKCOM/VKUI' target='_blank'>
                VKCOM/VKUI
              </Link>
            </InfoRow>
          </SimpleCell>
          <SimpleCell multiline>
            <InfoRow header='Cреда выполнения JS/TS'>
              <Link href='https://github.com/oven-sh/bun' target='_blank'>
                oven-sh/bun
              </Link>
            </InfoRow>
          </SimpleCell>
          <SimpleCell multiline>
            <InfoRow header='Фреймворк для Bun'>
              <Link href='https://github.com/elysiajs/elysia' target='_blank'>
                elysiajs/elysia
              </Link>
            </InfoRow>
          </SimpleCell>
          <SimpleCell multiline>
            <InfoRow header='Любимый ЯП'>
              <Link href='https://github.com/rust-lang/rust' target='_blank'>
                rust-lang/rust
              </Link>
            </InfoRow>
          </SimpleCell>
        </Group>
      </Panel>
    </View>
  )
}

export default Contacts
