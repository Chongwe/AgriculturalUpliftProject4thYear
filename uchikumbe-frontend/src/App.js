
//PAGES
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import News from './components/News';
import People from './components/People';
import Forum from './components/Forum';



//ROUTES 
import { 
  createBrowserRouter,  
  Router,
  Routes,
  Route,
  createRoutesFromElements,
  BrowserRouter,
  RouterProvider,  } from 'react-router-dom';

  //LAYOUTS
import RootLayout from './Layout/RootLayout';

  const router = createBrowserRouter(
     createRoutesFromElements(
      <RootLayout>
        <Route path='/' element={<RootLayout />}/>
        <Route index element={<Home />} >
           <Route path="people" element={<People />}/>
        </Route>
       
      </RootLayout>
        
     )
  )

function App() {
  return (
    <RouterProvider router={router} />


    // <BrowserRouter>
    //   <RootLayout>
    //     <Routes>
    //       <Route exact path="/" component={<Home />} />
    //       <Route path="/people" component={<People />} />
    //       <Route path="/news" component={<News/>} />
    //       <Route path='/forum' Component={<Forum />} />
    //     </Routes>
    //   </RootLayout>
    // </BrowserRouter>

  );
}

export default App;
