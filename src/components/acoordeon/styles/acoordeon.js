import styled from "styled-components/macro"

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display:flex;
    padding: 75px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`;

export const Frame = styled.div`
    margin-bottom: 40px;
`;



export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em;
    user-select: none;

    img {
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 600px){
            width: 16px;
        }
    }
    @media (max-width: 600px){
        font-size: 16px;
    }
`;

export const Item = styled.div`
    color: white;
    margin-bottom: 10px;

    &:first-of-type {
        margin-top: 3em;
    }
`;

export const Title = styled.div`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-width: 600px){
        font-size: 35px;
    }
`;

export const Body = styled.div``;