import React from "react";
import { fetchData } from "./actions/fetchData";
import { connect } from "react-redux";

import NavBar from "./components/NavBar/NavBar.js";
import Routes from "./Routes";
import Footer from "./components/Footer/Footer.js";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
  
    return (
      <div className="app">
        <NavBar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  phones: state.phones,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(App);
