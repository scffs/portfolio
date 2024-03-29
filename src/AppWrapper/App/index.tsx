import {
  useActiveVkuiLocation,
  useRouteNavigator
} from '@vkontakte/vk-mini-apps-router'
import {
  AppRoot,
  ConfigProvider,
  PanelHeader,
  Platform,
  SplitCol,
  SplitLayout,
  useAdaptivityConditionalRender,
  usePlatform
} from '@vkontakte/vkui'
import { useCallback, useEffect, useState } from 'react'
import Suspense from '../../components/Suspense.tsx'
import { VIEW_PROFILE } from '../../routes'
import type { Pages } from '../../types'
import Epic from './Epic.tsx'
import Sidebar from './Sidebar.tsx'

const App = () => {
  const platform = usePlatform()
  const isVKCOM = platform !== Platform.VKCOM

  const { viewWidth } = useAdaptivityConditionalRender()
  const { view: activeView = VIEW_PROFILE } = useActiveVkuiLocation()
  const routeNavigator = useRouteNavigator()

  const onStoryChange = useCallback(async (currentView: Pages) => {
    await routeNavigator.push(`/${currentView}`)
  }, [])

  const [appearance, setAppearance] = useState<'light' | 'dark'>('light')

  const toggleAppearance = useCallback(() => {
    const newAppearance = appearance === 'light' ? 'dark' : 'light'
    setAppearance(newAppearance)
    localStorage.setItem('theme', newAppearance)
  }, [appearance])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'

    if (savedTheme) {
      setAppearance(savedTheme)
    }
  }, [])

  const sidebar = viewWidth.tabletPlus && (
    <SplitCol
      className={viewWidth.tabletPlus.className}
      fixed
      width={280}
      maxWidth={280}
    >
      {isVKCOM && <PanelHeader />}
      <Suspense id='sidebar'>
        <Sidebar
          activeView={activeView as Pages}
          onStoryChange={onStoryChange}
        />
      </Suspense>
    </SplitCol>
  )

  return (
    <ConfigProvider appearance={appearance}>
      <AppRoot>
        <SplitLayout
          header={isVKCOM && <PanelHeader delimiter='none' />}
          style={{ justifyContent: 'center' }}
        >
          {sidebar}
          <SplitCol width='100%' maxWidth='600px' stretchedOnMobile autoSpaced>
            <Epic
              onStoryChange={onStoryChange}
              toggleAppearance={toggleAppearance}
            />
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    </ConfigProvider>
  )
}

export default App
