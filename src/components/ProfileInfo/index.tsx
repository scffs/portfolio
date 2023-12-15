import { lazy } from 'react'

const UserInfo = lazy(() => import('./UserInfo'))
const UserStory = lazy(() => import('./UserStory'))

export { UserInfo, UserStory }
