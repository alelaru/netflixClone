import { getByText, render } from "@testing-library/react";
import Profiles from "../../components/profiles";


describe("<Profile/>", () => {

    it("Renders the <Profile/> with populated data", () => {

        const {container, getByTestId, getByText} = render(

        <Profiles>
            <Profiles.Title>Who's watching</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={() => {}}>
                    <Profiles.Picture src={"images/karl.png"} data-testid="profile-picture"></Profiles.Picture>
                    <Profiles.Name>Karl</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>


        ) 
        expect(getByText("Who's watching")).toBeTruthy();
        expect(getByTestId("profile-picture")).toBeTruthy();
        expect(getByText("Karl")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    })
    it("Renders the <Profile/> with populated data bus misc profile image", () => {

        const {container, getByTestId, getByText} = render(

        <Profiles>
            <Profiles.Title>Who's watching</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={() => {}}>
                    <Profiles.Picture src={"images/karl.png"} data-testid="profile-picture-misc"></Profiles.Picture>
                    <Profiles.Name>Karl</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>


        ) 
        expect(getByText("Who's watching")).toBeTruthy();
        expect(getByTestId("profile-picture-misc")).toBeTruthy();
        expect(getByText("Karl")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    })


})