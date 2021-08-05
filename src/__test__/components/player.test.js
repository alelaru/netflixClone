import { fireEvent, render } from "@testing-library/react"
import Player from "../../components/player";


describe("<Player/>", () => {

    it("renders the player with a bunny video", () => {
        const {container, getByText, queryByTestId} = render(
            <Player>
                <Player.Button></Player.Button>
                <Player.Video src="/videos/bunny.mp4"></Player.Video>
            </Player>
        );

        expect(queryByTestId("player")).toBeFalsy();
        fireEvent.click(getByText("Play"));

        expect(queryByTestId("player")).toBeTruthy();
        fireEvent.click(getByText("Play"));

        expect(queryByTestId("player")).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();


    })
})