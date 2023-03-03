import {Route, Routes} from 'react-router-dom'
import {lazy, Suspense} from 'react'

const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const Register = lazy(() => import('./pages/Auth/Register/Register'))
const Articles = lazy(() => import('./pages/Articles/Articles'))
const Profile = lazy(() => import('./pages/Profile/Profile'))
const Home = lazy(() => import('./pages/Home/Home'))

function App() {
  return (
      <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/portfolio' element={<Home />} />
              <Route exact path='/news' element={<Articles />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </Suspense>
  );
}
export default App