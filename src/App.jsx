import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { UserStorage } from './UserContext';

function App() {
   return (
      <>
         <BrowserRouter>
            <UserStorage>
               <Header />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login/*" element={<Login />} />
               </Routes>
               <Footer />
            </UserStorage>
         </BrowserRouter>
      </>
   );
}

export default App;
