import React, { useState } from 'react';
import { Container, Logo, Background, ButtonLink, Feature, Text, FeatureCallOut, Link, Group, Picture, Profile, SearchInput, Dropdown, Search, SearchIcon } from './styles/header';
import {Link as ReactRouterLink} from "react-router-dom";


const Header = ( { bg = true, children, ...restProps} ) => {
    return ( 
        bg ? <Background {...restProps}>{children}</Background> : children
     );
}
 
export default Header;

Header.Profile = function HeaderProfile({children, ...restProps}){
    return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({children, ...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setsearchActive] = useState(false);



    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setsearchActive(searchActive => !searchActive)}>
                <img src={`/images/icons/search.png`} alt="search"></img>
            </SearchIcon>    
            <SearchInput value={searchTerm} onChange={({target}) => setSearchTerm(target.value)} placeholder="Search films and series" active={searchActive}> 
            </SearchInput>
        </Search>

    )
    
}



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

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
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