import Home from './components/Home';
import News from './components/News';
import People from './components/People';
import Forum from './components/Forum';
import RootLayout from './Layout/RootLayout';
import NotFound from './others/NotFound'

//ROUTES 
import { 
  createBrowserRouter,  
  Route,
  createRoutesFromElements,
  RouterProvider,  } from 'react-router-dom';

  const router = createBrowserRouter(
     createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="people" element={<People />}/>
            <Route path="news" element={<News />}/>
            <Route path="forum" element={<Forum />}/>
            <Route path="*" element={<NotFound />}/>
        </Route>
     )
  )
function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
