// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import FaqsContainer from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from "../containers/jumbotron"
import { BrowserRouter as Router, Route} from "react-router-dom";
import * as ROUTES from "../constants/routes"

export default function Home() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <JumbotronContainer></JumbotronContainer>
          <FaqsContainer></FaqsContainer>
        <FooterContainer></FooterContainer>
      </Route>
    </Router>
  );
}