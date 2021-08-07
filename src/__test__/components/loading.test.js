import { render } from "@testing-library/react";
import Loading from "../../components/loading";


describe("<Loading/>", () => {

    it("Renders the <Loading/> with populated data", () => {

        const {container, getByTestId} = render(
            <Loading src={"images/karl.png"} data-testid="loading"></Loading  > 
        ) 
        expect(getByTestId("loading")).toBeTruthy();
        expect(getByTestId("loading-picture")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    })

    it("Renders the <Loading ReleaseBody/> with populated data", () => {

        const {container} = render(
            <Loading.ReleaseBody></Loading.ReleaseBody>
        ) 
        expect(container.firstChild).toMatchSnapshot();
    })


})