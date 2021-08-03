import BrowserContainer from "../containers/browse";
import useContent from "../hooks/use-content";
import selectionFilter from "../utils/selection-map";

const Browse = () => {

    //We need the series and the films
    const { series } = useContent("series");
    const { films } = useContent("films");

    //We need slides we added the genre
    const slides = selectionFilter({series, films})
    // console.log(slides);

    //pass it to the browser container
    return ( <BrowserContainer slides={slides}></BrowserContainer> );
}
 
export default Browse;