import React from 'react';
import Header from './components/Header';
import AppLayout from './containers/AppLayout';
import Footer from './components/Footer';
// import SignUp from './utils/SignUp';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import NotFoundPage from './others/NotFound';


function App() {
  return <div className="App">
   
    <Header/>
    <AppLayout />
    <Footer />

    {/* <Router>
      <Switch>
        <Route exact path='/' component={AppLayout} />  
        <Route path='/signIn' component={SignUp}/>
        <Route Component={NotFoundPage}/>
      </Switch>
    </Router> */}

  </div>;
}



export default App;
