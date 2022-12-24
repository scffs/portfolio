import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Help from "./pages/help/Help";
import Profile from "./pages/profile/Profile";
import Articles from "./pages/articles/Articles";
import Register from "./pages/auth/register/Register";
function App() {
  return (
   <>
     <Header />
       <Routes>
           <Route path="/" element={ <Home />} />
           <Route path="/portfolio" element={ <Home />} />
           <Route path="/news" element={ <Articles />} />
           <Route path="/help" element={ <Help />} />
           <Route path="/profile" element={ <Profile />} />
           <Route path="/register" element={ <Register />} />
           <Route path="*" element={<h1>ERROR</h1>} />
       </Routes>
   </>
  );
}
export default App;
