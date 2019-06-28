import styled from 'styled-components';

export const ParentForm = styled.form`
    display: grid;
    grid-template-columns:1fr;
    grid-template-rows:auto;
    border: 1px solid Black;
    margin: auto;
    *{
        margin: auto;
        padding: 0.5rem 1rem;
        display:grid
    }
`;
export const HeaderForm = styled.div`
    > p {
    font-size: 1.5em;
    font-weight: 600;
    }
`;
export const FormMainBody = styled.div`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: auto;
    label {
        text-align: left;
        text-transform: uppercase;
        font-weight: 600;
    }
    input {
        border: 1px solid Black;
        padding: 5px 10px;
        caret-color: green;
    }
`;
export const Button = styled.button`
    padding: 5px 20px;
    color: white;
    background-color: ${props => [props.bgcolor]};
`;