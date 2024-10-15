import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";

import Contact from "./components/contact";
import Header from "./components/header";
import Us from "./components/us";
import AllProduct from "./components/AllProducts";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/AllProduct" element={<AllProduct />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/US" element={<Us />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
