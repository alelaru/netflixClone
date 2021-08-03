import useContent from "../hooks/use-content";

const Browse = () => {

    const { series } = useContent("series");
    console.log(series);

    //We need the series and the films
    //We need slides 
    //pass it to the browser container
    return ( <p>Hello from the Browse</p> );
}
 
export default Browse;