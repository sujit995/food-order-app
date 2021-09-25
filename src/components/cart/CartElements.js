import styled from 'styled-components';

export const CardBody = styled.div`
  width: 40%;
  cursor: pointer;
`
export const CardImage = styled.img`
    height: 12rem;
    width: 100%;
    object-fit: cover;
`
export const CardDetails = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;
`
export const CardTitle = styled.h2`
    padding: 1rem;
    font-size: 1rem;
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
    width: 20%;
    text-align: center;
    background-color: aliceblue;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Button = styled.button`
    margin-top: 1rem;
    padding: .8rem 1.5rem .8rem 1.5rem;
    background-color: #ef5924;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

