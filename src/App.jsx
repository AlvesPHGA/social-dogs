import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProtectedRoute from './Components/Helper/ProtectedRouter/ProtectedRoute';
import Photo from './Components/Photo/Photo';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import User from './Pages/User/User';
import UserProfile from './Pages/User/UserProfile/UserProfile';
import { UserStorage } from './UserContext';

function App() {
   return (
      <>
         <BrowserRouter>
            <UserStorage>
               <Header />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="login/*" element={<Login />} />
                  <Route
                     path="accout/*"
                     element={
                        <ProtectedRoute>
                           <User />
                        </ProtectedRoute>
                     }
                  />
                  <Route path="foto/:id" element={<Photo />} />
                  <Route path="perfil/:user" element={<UserProfile />} />
               </Routes>
               <Footer />
            </UserStorage>
         </BrowserRouter>
      </>
   );
}

export default App;
