import { render } from "@testing-library/react";
import Form from "../../components/form"
import { BrowserRouter as Router } from 'react-router-dom';

// const error = "NotFound"

jest.mock("react-router-dom")

describe("<Form/>", () => {

    it("Renders the <Form/> with populated data", () => {
        const {container, getByText, queryByText, getByPlaceholderText, debug} = render(
                <Form>
                    <Form.Title>Sign In Now</Form.Title>
                    {/* {error && <Form.Error>{error}</Form.Error>} */}
                    {/* The on Submit we get rid of them */}
                    <Form.Base>
                        <Form.Input placeholder="Email Address" onChange={() => {}}></Form.Input>
                        <Form.Input placeholder="Password" type="password" onChange={() => {}}></Form.Input>
                        <Form.Submit disabled type="submit">Sign In</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Router><Form.Link to={"/signup"}>Sign Up now.</Form.Link></Router>
                    </Form.Text> 
                    <Form.TextSmall>
                        This page is protected by Google Recaptcha to ensure you are not a bot
                    </Form.TextSmall>
                </Form>     
        ) 

        expect(queryByText("This page is protected by Google Recaptcha to ensure you are not a bot")).toBeTruthy();
        expect(getByText("Sign In Now")).toBeTruthy();
        expect(getByText("Sign In")).toBeTruthy();
        expect(getByText("Sign In").disabled).toBeTruthy();
        expect(getByPlaceholderText("Email Address")).toBeTruthy();
        expect(getByPlaceholderText("Password")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    })

    it("Renders the <Form/> with an error", () => {
        const {container, getByText, queryByText} = render(
                <Form>
                    <Form.Error>Your email address is already being used</Form.Error>
                    <Form.Submit type="submit">Sign In</Form.Submit>
                </Form>     
        ) 

        expect(queryByText("Your email address is already being used")).toBeTruthy();
        expect(getByText("Sign In").disabled).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    })

})