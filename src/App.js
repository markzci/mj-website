import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { AnimatePresence } from "framer-motion"

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tech from './pages/Tech';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Mark Jurkiewicz',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Technology', path: '/tech' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Mark Jurkiewicz',
        subTitle: 'Software Developer',
        text: 'with a focus on Web Applications'
      },
      about: {
        title: 'Introduction'
      },
      tech: {
        title: 'Technology',
        skills: [
          { name: 'HTML5' },
          { name: 'CSS3' },
          { name: 'JavaScript' },
          { name: 'React.js' },
          { name: 'Node.js' },
          { name: 'PHP' },
          { name: 'Yii2' },
          { name: 'MySQL/MS SQL Server' },
          { name: 'C#' },
          { name: '.NET Core' },
          { name: 'Git' },
          { name: 'AWS' },
        ]

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
          <AnimatePresence>
            <Switch>
              <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
              <Route path="/about" render={() => <About title={this.state.about.title} />} />
              <Route path="/tech" render={() => <Tech title={this.state.tech.title} subtTitle={this.state.tech.subTitle} skills={this.state.tech.skills} />} />
              <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
            </Switch>
          </AnimatePresence>
        </Layout>
      </Router>
    )
  }
}

export default App;