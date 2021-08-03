

// Two functions here once if the user is signedIn

import { Redirect, Route } from "react-router-dom";

export const IsUserRedirect = ( {user, loggedInPath, children, ...restProps}) => {
    return ( 

        <Route {...restProps} 
        render={() => {
            if(!user) {return children}
            if(user) {return <Redirect to={{pathname: loggedInPath}}/>}
            return null
        }}></Route>

     );
}
 
export const ProtectedRoutes = ({user,  children, ...restProps}) => {

    return (
        <Route {...restProps}
            render={({location}) => {
                if(user){ return children}
                if(!user){ return <Redirect to={{pathname: "signin", state: { from:location}}}></Redirect>}
                return null;
        }}></Route>
    )
}


//Second is protected routes