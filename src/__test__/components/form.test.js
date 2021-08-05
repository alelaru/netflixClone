import { render } from "@testing-library/react";
import Form from "../../components/form"
import { BrowserRouter as Router } from 'react-router-dom';

// const error = "NotFound"

jest.mock("react-router-dom")

describe("<Form/>", () => {

    it("Renders the <Form/> with populated data", () => {
        const {container, getByText, queryByText, getByPlaceholderText, debug} = render(
            // <Router>
                <Form>
                    <Form.Title>Sign In</Form.Title>
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

            // </Router> 

          

        ) 
        debug();

        expect(queryByText("This page is protected by Google Recaptcha to ensure you are not a bot")).toBeTruthy();

    })

})