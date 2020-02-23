import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Mark Jurkiewicz',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Technology', path: '/tech'},
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Walk Tall',
        subTitle: 'Perspective is everything',
        text: 'Work'
      },
      about: {
        title: 'Who Am I?'
      },
      tech: {
        title: 'Technology',
      },
      contact: {
        title: 'Send a message'
      }
    }
  }

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} /> 
            <Route path="/about" render={() => <About title={this.state.about.title} />} /> 
            <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App;
