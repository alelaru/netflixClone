// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import FaqsContainer from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from "../containers/jumbotron"
import { BrowserRouter as Router, Route} from "react-router-dom";
import * as ROUTES from "../constants/routes"
import {HeaderContainer} from '../containers/header';
import OptForm from "../components/opt-form"


export default function Home() {
  return (
    <>
        <HeaderContainer>
        <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </HeaderContainer>
        <JumbotronContainer></JumbotronContainer>
        <FaqsContainer></FaqsContainer>
        <FooterContainer></FooterContainer>
    </>
  );
}