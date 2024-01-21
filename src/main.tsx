import { ScreenSpinner } from '@vkontakte/vkui'
import { render } from 'preact'
import { Suspense, lazy } from 'react'

import '@vkontakte/vkui/dist/cssm/styles/themes.css'
import './normalize.css'

const AppWrapper = lazy(() => import('./AppWrapper'))

const domNode = document.getElementById('root')
const App = (
  <Suspense fallback={<ScreenSpinner />}>
    <AppWrapper />
  </Suspense>
)

render(App, domNode)
