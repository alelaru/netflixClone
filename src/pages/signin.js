
import { useState } from 'react';
import Form from '../components/form';
import { FooterContainer } from '../containers/footer';
import {HeaderContainer} from '../containers/header';


const SignIn = () => {

    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    //Check form input elements are valid
    //email and password

    const handleSignIn = (event) => {
        event.preventDefault();
        
    }

    //Just if they have a password and emailAddress with some info
    const isInvalid = password === "" || emailAddress === "";

    return ( 
    <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error & <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignIn} method="POST">
                    <Form.Input placeholder="Email Address" value={emailAddress} onChange={({target}) => setEmailAddress(target.value)}></Form.Input>
                    <Form.Input placeholder="Password" autocomplete="off" type="password" value={password} onChange={({target}) => setPassword(target.value)}></Form.Input>
                    <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
                </Form.Base>    
            </Form>    
        </HeaderContainer> 
        <FooterContainer></FooterContainer>
    </>

    );
}
 
export default SignIn;