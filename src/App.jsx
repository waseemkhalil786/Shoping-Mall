import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Header from "./components/header";
import Us from "./components/us";




function App() {
  const router =createBrowserRouter ([
    {
      path:'/',
      element: <> <Header/> <Home/> </>,
    },
    {
      path:'/about',
      element: <> <Header/> <About/></>
    },
    {
      path:'/service',
      element: <> <Header/> <Services/></>
    },
    {
      path:'/contact',
      element: <> <Header/> <Contact/></>
    },
    {
      path:'/us',
      element: <> <Header/> <Us/></>
    },
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
