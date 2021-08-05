import { fireEvent, render } from "@testing-library/react"
import Acoordion from "../../components/acoordeon"
import faqs from "../../fixtures/faqs.json"


describe("<Acoordeon/>", () => {
    
    it("Renders the Acoordion with populated data", () => {
        const {container, getByText} = render(

            // I removed the OptForm we can test that later
            <Acoordion>
            <Acoordion.Title>Frequently Asked Questions</Acoordion.Title>
            {faqs.map((item) => (
                <Acoordion.Item key={item.id}>
                <Acoordion.Header>{item.header}</Acoordion.Header>
                <Acoordion.Body>{item.body}</Acoordion.Body>
                </Acoordion.Item>
            ))}
                <Acoordion.Item/>
            </Acoordion>
        );

        expect(getByText("Frequently Asked Questions")).toBeTruthy();
        expect(getByText("What is Netflix?")).toBeTruthy();
        expect(getByText("How much does Netflix cost?")).toBeTruthy();
        expect(getByText("Where can I watch?")).toBeTruthy();
        expect(getByText("How do I cancel?")).toBeTruthy();
        expect(getByText("What can I watch on Netflix?")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    })

    it("opens and closes the Acoordion component", () => {
        const {container, getByText, queryByText, debug} = render(

            // I removed the OptForm we can test that later
            <Acoordion>
            <Acoordion.Title>Frequently Asked Questions</Acoordion.Title>
            <Acoordion.Frame>
                {faqs.map((item) => (
                    <Acoordion.Item key={item.id}>
                    <Acoordion.Header>{item.header}</Acoordion.Header>
                    <Acoordion.Body>{item.body}</Acoordion.Body>
                    </Acoordion.Item>
                ))}
            </Acoordion.Frame>

            </Acoordion>
        )

        const WhatCanIWatchOnNetflix = "Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want."

        expect(queryByText(WhatCanIWatchOnNetflix)).toBeFalsy();
        fireEvent.click(getByText("What can I watch on Netflix?"))
        expect(queryByText(WhatCanIWatchOnNetflix)).toBeTruthy();

        fireEvent.click(getByText("What can I watch on Netflix?"))
        expect(queryByText(WhatCanIWatchOnNetflix)).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
        
    })

})