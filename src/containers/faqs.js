import faqs from "../fixtures/faqs.json"
import Acoordion from "../components/acoordeon"
import OptForm from "../components/opt-form"

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
                <Acoordion.Item/>

            <OptForm>
                <OptForm.Input placeholder="Email Address"></OptForm.Input>
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break></OptForm.Break>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
        </Acoordion>
     );
}
 
export default FaqsContainer;