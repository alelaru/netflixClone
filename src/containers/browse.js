import { useContext, useEffect, useState } from "react";
import Header from "../components/header";
import {FooterContainer} from "./footer"
import Loading from "../components/loading";
import FirebaseContext from "../context/firebase";
import SelectProfileContainer from "./profiles";
import * as ROUTES from "../constants/routes"
import logo from "../logo.svg"
import Card from "../components/card";
import Player from "../components/player";

import Fuse from "fuse.js"

const BrowserContainer = ( {slides }) => {
    const [category, setCategory] = useState("series")
    const [searchTerm, setSearchTerm] = useState("")
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState([]) 

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    console.log(user);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000); 
    
    }, [profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ["data.description", "data.title", "data.genre"]})
        const results = fuse.search(searchTerm).map(({item}) => item)

        if(slideRows.length > 0 && searchTerm.length > 3 && results.length > 0 ){
            setSlideRows(results);
        }
        else{
            setSlideRows(slides[category]);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    return (  profile.displayName ? (
            <>
                {loading ? <Loading src={user.photoURL}></Loading> : <Loading.ReleaseBody></Loading.ReleaseBody>}

                <Header src="joker1" dontShowOnSmallViewPort>
                    <Header.Frame>
                        <Header.Group>
                            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"></Header.Logo>
                            <Header.TextLink active={category === "series" ? 'true' : 'false'} onClick={() => setCategory("series")}>Series</Header.TextLink>
                            <Header.TextLink active={category === "films" ? 'true' : 'false'} onClick={() => setCategory("films")}>Films</Header.TextLink>
                        </Header.Group>

                        <Header.Group>
                            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                            <Header.Profile>
                                <Header.Picture src={user.photoURL}/>
                                <Header.Dropdown>
                                    <Header.Group>
                                        <Header.Picture src={user.photoURL}/>
                                        <Header.TextLink>{user.displayName}</Header.TextLink>
                                    </Header.Group>
                                    <Header.Group>
                                        <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                                    </Header.Group>
                                </Header.Dropdown>
                            </Header.Profile>
                        </Header.Group>
                    </Header.Frame>

                    <Header.Feature>
                        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                        <Header.Text>
                            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                            futile attempt to feel like he's part of the world around him.
                        </Header.Text>
                        <Header.PlayButton>Play</Header.PlayButton>
                    </Header.Feature>
                </Header>

                <Card.Group>
                    {slideRows.map((slideItem) => (
                        <Card  key={`${category}-${slideItem.title.toLowerCase()}`}>
                            <Card.Title>{slideItem.title}</Card.Title>
                            <Card.Entities>
                                {slideItem.data.map((item) => (
                                   <Card.Item key={item.docId} item={item}>
                                       <Card.Image 
                                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}></Card.Image>
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                   </Card.Item> 
                                ))}
                            </Card.Entities>

                            <Card.Feature category={category}>
                                <Player>
                                    <Player.Button></Player.Button>
                                    <Player.Video src="/videos/bunny.mp4" />
                                </Player>
                            </Card.Feature>
                        </Card>
                    ))}
                </Card.Group>
                <FooterContainer/>
            </>
        ) : <SelectProfileContainer user={user} setProfile={setProfile}></SelectProfileContainer>

    );
}
 
export default BrowserContainer;