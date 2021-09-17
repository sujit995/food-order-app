import styled from 'styled-components';


export const CardContainer = styled.div`
width: 450px;
display: flex;
flex-direction: column;
border-radius: 19px;
background-color: #fff;
box-shadow: 0 0 8px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
margin-top: 90px;
margin-left: 60px;
`;

export const CardBody = styled.div`
  width: 40%;
  cursor: pointer;
`
export const CardImage = styled.img`
    height: 12rem;
    width: 100%;
    object-fit: cover;
    margin-top: 0.6rem;
    margin-bottom: 0.4rem;
`
export const CardTitle = styled.h2`
    padding: 1rem;
`
export const CardDescription = styled.p`
    padding: 0 1rem;
`
export const Price = styled.h3`
    padding: 0 1rem;
`
export const SubHeading = styled.span`
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
`

export const QuantityBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
`

export const Input = styled.div`
    width: 40%;
    text-align: center;
    background-color: aliceblue;
    padding:0.5rem;
`

export const CardWrapper = styled.div`
    display: flex;
`

export const Button = styled.button`
    margin-top: 1rem;
    margin-left: 3rem;
    padding: .8rem 1.5rem .8rem 1.5rem;
    background-color: orange;
    color: white;
`

