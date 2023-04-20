
//PAGES
import Header from './components/Header';
import Footer from './components/Footer';

//ROUTES 
import { 
  createBrowserRouter,  
  Route,
  createRoutesFromElements,
  RouterProvider,  } from 'react-router-dom';

  //LAYOUTS
import RootLayout from './Layout/RootLayout';

  const router = createBrowserRouter(
     createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
          <Route> </Route>
        </Route>
     )
  )

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
