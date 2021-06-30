import faqs from "../fixtures/faqs.json"
import Acoordion from "../components/acoordeon"

const FaqsContainer = () => {
    return ( 
        <Acoordion>
            <Acoordion.Title>Frequently Asked Questions</Acoordion.Title>
            {faqs.map((item) => (
                <Acoordion.Item key={item.id}>
                <Acoordion.Header>{item.header}</Acoordion.Header>
                <Acoordion.Body>{item.body}</Acoordion.Body>
                </Acoordion.Item>
            ))}
        </Acoordion>
     );
}
 
export default FaqsContainer;