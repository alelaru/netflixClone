import Header  from "../components/header"
import * as ROUTES from "../constants/routes"
import logo from "../logo.svg"

export const HeaderContainer = ( {children }) => {
    return ( 
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
                <Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
     );
}
 