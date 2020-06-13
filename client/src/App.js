import React from "react";
import { fetchData } from "./actions/fetchData";
import { connect } from "react-redux";

import NavBar from "./components/NavBar/NavBar.js";
import Routes from "./Routes";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    return (
      <div className="app" id="app">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  phones: state.phones,
  error: state.error
});

export default connect(mapStateToProps)(App);
