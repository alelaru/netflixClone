import { render } from "@testing-library/react"
import Feature from "../../components/feature"


describe("<Feature/>", () => {

    it("Renders the <Feature/> with populated data", () => {

        const {container, getByText } = render(

            <Feature>
              <Feature.Title>Unlimited films, tv, programs and more</Feature.Title>
              <Feature.SubTitle>Watch anywhere and cancel anytime</Feature.SubTitle>
            </Feature>
        )

        expect(getByText("Unlimited films, tv, programs and more")).toBeTruthy();
        expect(getByText("Watch anywhere and cancel anytime")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();

    })

    it("Renders the <Feature/> with just the title", () => {

        const {container, getByText, queryByText } = render(

            <Feature>
              <Feature.Title>Unlimited films, tv, programs and more</Feature.Title>
            </Feature>
        )

        expect(getByText("Unlimited films, tv, programs and more")).toBeTruthy();
        expect(queryByText("Watch anywhere and cancel anytime")).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();

    })

})