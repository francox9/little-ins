import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import User from "./components/User";
import Post from "./components/Post";

import StoryList from "./components/StoryList";

class App extends Component {
  render() {
    
    // console.log(this.props)
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={StoryList} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/:uid" exact component={User} />
          <Route path="/p/:pid" exact component={Post} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
