
import { Spinner, LockBody, Picture, ReleaseBody} from "./styles/loading"

const Loading = ({src, ...restProps}) => {
    
    return ( 
        <Spinner {...restProps}>
            <LockBody></LockBody>
            <Picture src={`/images/users/${src}.png`} data-testid="loading-picture"/>
        </Spinner>
     );
}
 
export default Loading;


Loading.ReleaseBody = function LoadingReleaseBody(){
    return <ReleaseBody/>
}