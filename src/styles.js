import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center
`

export const Content = styled.div`
    background-color: #000;
    padding: 5px;
    // width: 50%;
    // min-height: 350px;
    border: 3px solid #FFF;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex:1;
`

export const Column = styled.div`
    table-layout: fixed ; 
    width: 100%;
    align-items: center;
    flex:1;
`

