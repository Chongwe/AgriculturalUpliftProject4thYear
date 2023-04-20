
//PAGES
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';



//ROUTES 
import { 
  createBrowserRouter,  
  Router,
  Route,
  Switch,
  createRoutesFromElements,
  RouterProvider,  } from 'react-router-dom';

  //LAYOUTS
import RootLayout from './Layout/RootLayout';

  const router = createBrowserRouter(
     createRoutesFromElements(

        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} /> 
        </Route>
     )
  )

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
