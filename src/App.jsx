import { BrowserRouter, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes></Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
}

export default App;
