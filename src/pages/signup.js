import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Form from '../components/form';
import { FooterContainer } from '../containers/footer';
import {HeaderContainer} from '../containers/header';
import FirebaseContext from '../context/firebase';
import * as ROUTES from "../constants/routes"

const Signup = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)
    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();

    const isInvalid = firstName === "" || password === "" || emailAddress === "";

    const handleSignUp = (e) => {
        e.preventDefault();
        
        //do firebase stuff
        firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((res) => {
            res.user
            .updateProfile({
                displayName:firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
            }).then(() => {
                history.push(ROUTES.BROWSE)
            })
        }).catch(error => {
            setEmailAddress("")
            setPassword("")
            setFirstName("")
            setError(error.message)
        })
    }

    return ( 
    <>
        <HeaderContainer>
        <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

            <Form.Base onSubmit={handleSignUp} method="POST">
                <Form.Input placeholder="First Name" value={firstName} onChange={({target}) => setFirstName(target.value)}></Form.Input>
                <Form.Input placeholder="Email Address" value={emailAddress} onChange={({target}) => setEmailAddress(target.value)}></Form.Input>
                <Form.Input type="password" autocomplete="off" placeholder="Password" value={password} onChange={({target}) => setPassword(target.value)}></Form.Input>
                <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">Sign Up</Form.Submit>

                <Form.Text>Already a User? <Form.Link to={ROUTES.SIGNIN}>Sign in now.</Form.Link></Form.Text>
                <Form.TextSmall>This page is protected by Google Recaptcha to ensure you are not a bot</Form.TextSmall>
            </Form.Base>
        </Form>
        </HeaderContainer>
        <FooterContainer></FooterContainer>
    </>
        );
}
 
export default Signup;