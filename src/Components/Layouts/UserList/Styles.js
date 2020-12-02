import styled from 'styled-components';

export const Background = styled.div`
    height:100vh;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
`;

export const Table = styled.table`
    font-size: 14px;
    color: ${props => props.theme.color};
`;