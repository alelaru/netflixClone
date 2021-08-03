import * as ROUTES from "../constants/routes"
import logo from "../logo.svg"
import Header from "../components/header"
import Profiles from "../components/profiles";

const SelectProfileContainer = ( {user, setProfile} ) => {

    // console.log("photoURL", user.photoURL);

    return ( 
        <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"></Header.Logo>
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who's watching</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})}>
                    <Profiles.Picture src={user.photoURL}></Profiles.Picture>
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>

        </>
     );
}
 
export default SelectProfileContainer;