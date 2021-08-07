import OptForm from "../../components/opt-form";
import { render } from "@testing-library/react";


describe("<OptForm/>", () => {

    it("Renders the <OptForm/> with populated data", () => {

        const {container, getByText, queryByText, getByPlaceholderText} = render(
            <OptForm>
                <OptForm.Input placeholder="Email Address"></OptForm.Input>
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break></OptForm.Break>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>   
        ) 
        expect(getByText("Try it now")).toBeTruthy();
        expect(queryByText("Ready to watch? Enter your email to create or restart your membership")).toBeTruthy();
        expect(getByPlaceholderText("Email Address")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    })


})