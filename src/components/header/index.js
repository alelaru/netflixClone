import React from 'react';
import { Container, Logo, Background, ButtonLink, Feature, Text, FeatureCallOut, Link } from './styles/header';
import {Link as ReactRouterLink} from "react-router-dom";


const Header = ( { bg = true, children, ...restProps} ) => {
    return ( 
        bg ? <Background {...restProps}>{children}</Background> : children
     );
}
 
export default Header;

Header.Feature = function HeaderFeature({children, ...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

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