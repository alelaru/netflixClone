// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import FaqsContainer from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from "../containers/jumbotron"
import {HeaderContainer} from '../containers/header';
import OptForm from "../components/opt-form"
import Feature from "../components/feature"


export default function Home() {

  return (
    <>
        <HeaderContainer>
            <Feature>
              <Feature.Title>Unlimited films, tv, programs and more</Feature.Title>
              <Feature.SubTitle>Watch anywhere and cancel anytime</Feature.SubTitle>
              <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
              </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer></JumbotronContainer>
        <FaqsContainer></FaqsContainer>
        <FooterContainer></FooterContainer>
    </>
  );
}