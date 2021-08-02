import { Container, Title, Subtitle } from "./styles/feature";


const Feature = ( {children, ...restProps}) => {
    return ( <Container {...restProps} >{children}</Container>
     );
}
 
export default Feature; 

Feature.Title = function FeatureTitle({...restProps}){
    return <Title {...restProps}></Title>
}

Feature.Subtitle = function FeatureSubtitle({...restProps}){
    return <Subtitle {...restProps}></Subtitle>
}

