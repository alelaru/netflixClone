import React from 'react';
import { Container, Logo, Background, ButtonLink } from './styles/header';
import {Link as ReactRouterLink} from "react-router-dom";


const Header = ( { bg = true, children, ...restProps} ) => {
    return ( 
        bg ? <Background {...restProps}>{children}</Background> : children
     );
}
 
export default Header;

Header.Frame = function HeaderFrame({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps}){
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}></Logo>
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}