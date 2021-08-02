
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from "./styles/form"

const Form = ({children, ...restProps}) => {
    return (<Container {...restProps}> {children}</Container>  );
}
 
export default Form;

Form.Error = function FooterError({children, ...restProps}){
    return <Error {...restProps}>{children}</Error>
}

Form.Base = function FooterBase({children, ...restProps}){
    return <Base {...restProps}>{children}</Base>
}

Form.Title = function FooterTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Form.Text = function FooterText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function FooterTextSmall({children, ...restProps}){
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Link = function FooterLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Form.Input = function FooterInput({children, ...restProps}){
    return <Input {...restProps}>{children}</Input>
}

Form.Submit = function FooterSubmit({children, ...restProps}){
    return <Submit {...restProps}>{children}</Submit>
}