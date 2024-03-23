import {
  useActiveVkuiLocation,
  useRouteNavigator
} from '@vkontakte/vk-mini-apps-router'
import {
  Div,
  Group,
  Header,
  InfoRow,
  Link,
  Panel,
  Separator,
  SimpleCell,
  View
} from '@vkontakte/vkui'
import type { FC } from 'react'
import PanelHeaderWithBack from '../../components/PanelHeaderWithBack'
import Suspense from '../../components/Suspense.tsx'
import { VKT_URL } from '../../constants'
import { UserInfo, UserStory } from './ProfileInfo'

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
          <SimpleCell multiline>
            <InfoRow header='Любимый ЯП #2'>
              <Link href='https://github.com/ziglang/zig' target='_blank'>
                ziglang/zig
              </Link>
            </InfoRow>
          </SimpleCell>
        </Group>
      </Panel>
    </View>
  )
}

export default Profile
