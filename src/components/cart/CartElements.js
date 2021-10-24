import styled from 'styled-components';

export const CardBody = styled.div`
  width: 40%;
  cursor: pointer;
  padding: .5rem;
  img{
    height: 10rem;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`

export const CardDetails = styled.div`
  width: 40%;
  text-align: center;
  cursor: pointer;
  h3{
    padding: .5rem;
    font-size: 1.2rem;
  }
  span{
      color: green;
      font-size: 1.1rem;
      padding: 0 1rem;
  }
  .far{
      padding-top: 1rem;
      color: red;
  }
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


