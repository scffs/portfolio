import { RouterProvider } from '@vkontakte/vk-mini-apps-router'
import { AdaptivityProvider } from '@vkontakte/vkui'
import { lazy } from 'react'
import Suspense from '../components/Suspense.tsx'
import { router } from '../routes'

const App = lazy(() => import('./App'))
const NotFound = lazy(() => import('./NotFound'))

const AppWrapper = () => (
  <AdaptivityProvider>
    <RouterProvider router={router} notFound={<NotFound />}>
      <Suspense id='app' mode='screen'>
        <App />
      </Suspense>
    </RouterProvider>
  </AdaptivityProvider>
)

export default AppWrapper
