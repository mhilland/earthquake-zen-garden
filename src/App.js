import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Features from './components/Features'
import FeatureDetail from './components/FeatureDetail'
import Profile from './components/Profile'
import Data from './data'

const Home = () => {
  const { data } = Data
  return <Features features={data.features} />
}

const App = () => {
  const { site, profile } = Data

  return (
    <Router>
      <Header logo={site.logoImage} title={site.title} firstName={profile.firstName} />
      <Route exact path="/" component={Home} />
      <Route exact path="/feature/:id" component={FeatureDetail} />
      <Route exact path="/profile" component={Profile} />
    </Router>
  )
}

export default App