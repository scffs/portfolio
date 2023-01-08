import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home/Home';
import Help from './pages/Help/Help';
import Profile from './pages/Profile/Profile';
import Articles from './pages/Articles/Articles';
import Register from './pages/Auth/register/Register';
import Post from './pages/Post/Post';

function App() {
  return (
      <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/portfolio' element={ <Home />} />
          <Route exact path='/news' element={ <Articles />} />
          <Route path='/help' element={ <Help />} />
          <Route path='/profile' element={ <Profile />} />
          <Route path='/register' element={ <Register />} />
          <Route path='/news/:id' element={ <Post />} />
          <Route path='*' element={<h1>ERROR</h1>} />
      </Routes>
  );
}
export default App;
