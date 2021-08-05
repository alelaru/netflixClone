import { createContext, useContext, useState } from "react";
import {Inner, Container, Title, Header, Item, Body, Frame } from "./styles/acoordeon"


const toggleContext = createContext();

const Acoordion = ({children, ...restProps}) => {
    return (
         <Container {...restProps}>
             <Inner>{children}</Inner>
         </Container>
         );
}
 
export default Acoordion;

Acoordion.Title = function AcoordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Acoordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
  };

Acoordion.Item = function AcoordionItem({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <toggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </toggleContext.Provider>
    )
}

Acoordion.Header = function AcoordionHeader({children, ...restProps}){
    
    const { toggleShow, setToggleShow} = useContext(toggleContext)

    return (
            <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} 
                {...restProps}>
                    {children}
                    {toggleShow ? (
                        <img src="/images/icons/close-slim.png" alt="Close"></img>
                    ):
                    (
                        <img src="/images/icons/add.png" alt="Open"></img>
                    )
                }
            </Header>
    )
}

Acoordion.Body = function AcoordionBody({children, ...restProps}){
    const { toggleShow } = useContext(toggleContext);

    return (
        toggleShow ? 
        <Body {...restProps}>{children}</Body>
        : (null)
    )
}



