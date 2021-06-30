// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import FaqsContainer from './containers/faqs';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from "./containers/jumbotron"

export default function App() {
  return (
    <>
      <JumbotronContainer></JumbotronContainer>
      <FaqsContainer></FaqsContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
