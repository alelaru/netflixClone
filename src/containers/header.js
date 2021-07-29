import Header  from "../components/header"
import * as ROUTES from "../constants/routes"

export const HeaderContainer = ( {children }) => {
    return ( 
        <Header>
            <Header.Frame>
                <Header.Logo />
                <Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
     );
}
 