
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
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="people" element={<People />}/>
            <Route path="news" element={<News />}/>
            <Route path="forum" element={<Forum />}/>
        </Route>
     )
  )

function App() {
  return (
    <RouterProvider router={router} />

    // <div className='App'>
    //   <Router>
    //     <Header />
    //       <Routes>
    //         <Route path='/' element={<Home />} />
    //         <Route path="/people" element={<People />}/>
    //         <Route path="/news" element={<News />}/>
    //         <Route path="/forum" element={<Forum />}/>
    //       </Routes>
    //     <Footer />
    //   </Router>
    // </div>

  );
}

export default App;
