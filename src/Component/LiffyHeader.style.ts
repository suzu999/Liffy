import styled from "styled-components"

export const LiffyHeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #000000;
    box-sizing: border-box; 
    justify-content: space-between;
    align-items: center;
    padding : 0 115px;

`;

export const HeaderSection = styled.div`
width: fit-content;
height: fit-content;
display: flex;
align-items:center;

&.left{
    gap: 17px;

}

&.right{
    gap: 13px;

}

`;

export const Box = styled.div`
    width:40px;
    height: 40px;
    background: #d9d9d9;
`;

export const TitleWrapper = styled.div`
    width:fit-content;
    height: 40px;
    padding-right: 131px;
    background: #d9d9d9;
    font-style: normal;
    font-size: 40px;
    display: flex;
    align-items:center;

`;

export const LongBox = styled.div`
    width: 128px;
    height: 40px;
    background: #d9d9d9;

`;
