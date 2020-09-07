import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About';
import Schedule from './screens/Schedule';
import Projects from './screens/Projects';
import Challenges from './screens/Challenges';
import Join from './screens/Join';
import Contribute from './screens/Contribute';
import Attendance from './screens/Attendance';
import NoMatch from './screens/NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar'
import './App.css'
// import styled from 'styled-components';

export default function App() {
  return (
    // <Styles>
    <React.Fragment>
      
      <Layout>
      <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/projects' component={Projects} />
            <Route path='/challenges' component={Challenges} />
            <Route path='/join' component={Join} />
            <Route path='/contribute' component={Contribute} />
            <Route path='/attendance' component={Attendance} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <p className='bottom-text'>Made with <span aria-label='purple-heart' role='img'>💜</span> by Buckley's Programming Club</p>
      </Layout>
    </React.Fragment>
    // </Styles>
  );
}

// const Styles = styled.div`
//     .main {
//         background-color: red;
//     }
// `;
