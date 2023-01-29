// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import User from './components/User/User';

function App() {
  return (
    <div className="App">
      {/* routelarımızı çevirecek wraplicek ana component */}
      <BrowserRouter>
      {/* navigate bar bu linkler arasında navigate etmemiz için kullanacağımız bir component 
      Ör:Sayfaların yukarısında home,user tıklayacağımız linklerin bulunduğu componentımız navbar oluyor*/}
      <Navbar></Navbar>
      {/* javadaki switch case gibi düşünebiliriz. burdada bu routelar, pathler arasında hangisini seçeceğimizi gösteriyor */}
      {/* react-router-domv6 da Switch "Routes" olarak değiştirildi. bende güncel haliyle yazdım.  */}
        <Routes>
          {/* routun içerisine gitmek istediğimiz pathin hangi componenta denk geldiğini yazıyoruz. */}
          <Route exact path="/" element={<Home/>}> </Route>
          <Route exact path="/users/:userId" element={<User/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
