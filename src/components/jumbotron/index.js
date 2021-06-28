import React from 'react';
import {Inner, Container} from "./styles/jumbotron"

const Jumbotron = ({children, direction = 'row', ...restProps}) => {
    return ( 
        <Inner direction={direction}>
            {children}
        </Inner>  
        );
}
 
export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}