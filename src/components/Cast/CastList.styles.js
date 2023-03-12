import styled from "styled-components";

export const ListItem = styled.ul`
height: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
`;

export const Item = styled.li`
border: 1px solid var(--bs-gray);
border-radius: 5px;
padding: 5px;
margin: 5px;
`;


export const PhotoBox = styled.div`
display: flex;
align-items: center;
width: 214px;
height: 321px;
margin-bottom: 5px;
`;

export const Photo = styled.img`
display: flex;
width: 100%;
`;