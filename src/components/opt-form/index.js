import React from 'react';
import {Container, Button, Input, Text, Break} from "./styles/opt-form"


const OptForm = ( {children, ...restProps}) => {
    return ( 
        <Container {...restProps}>{children}</Container>
     );
}
 
export default OptForm;

OptForm.Input = function OptFormInput({...restProps}){
    return <Input {...restProps}></Input>
}

OptForm.Button = function OptFormButton({children, ...restProps}){
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now"></img>
        </Button>
    )
}

OptForm.Text = function OptFormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

OptForm.Break = function OptFormBreak({children, ...restProps}){
    return <Break {...restProps}>{children}</Break>
}