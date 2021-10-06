import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Cart Page Styling
export const MainCart = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin-top: 4rem;
    margin-bottom: 4rem;
    @media screen and (max-width: 480px){
        display: flex;
        flex-direction: column;
    }
`
export const TopHeading = styled.h1`
    text-align: center;
    text-decoration: underline 4px;
`

export const ProductCart = styled.div`
    width: 70%;
    @media screen and (min-width: 400px){
        margin: 20px;
    }
`

export const CartSummary = styled.div`
    width: 30%;
    height: 250px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
    margin-right: 10px;
    @media screen and (max-width: 876px){
        height: 300px;
    }
    @media screen and (max-width: 480px){
        width: 300px;
        margin: auto;
    }
`

export const TotalProduct = styled.div`
    font-size: 1.3rem;
    margin-top: 1rem;
    span{
        font-weight: bold;
    }
    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`
export const TotalPrice = styled.div`
    font-size: 1.3rem;
    span{
        font-weight: bold;
    }
    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`
export const CartHeading = styled.h3`
    font-size: 1.5rem;
    margin-top: 1rem;
    text-decoration: underline 4px;
    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`

export const Text = styled.h6`
    margin: 10px;
`

export const Button = styled.button`
    height: 28px;
    width: 120px;
    background-color: #00E400;
    border: #;
    border-radius: 5px;
    box-shadow: .5px .5px .5px .5px rgba(0,0,0,0.5);
    color: white;
    font-weight: bold;
    cursor: pointer;
`

export const EmptyCart = styled.div`
    font-size: 3rem;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    margin-top: 40px;
    @media screen and (max-width: 768px){
        font-size: 2rem;
        margin-top: 40px;
    }
` 

// Contact Page Styling
export const ContactFormWrapper = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
`
export const Form = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`
export const ContactHeading = styled.h1`
     margin-bottom: 30px;
`
export const Input = styled.input`
  width: 400px;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137);
  margin-bottom: 20px;
  border: 1px solid lightgray;
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`

export const TextArea = styled.textarea`
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); 
  margin-bottom: 20px;
  border: 1px solid lightgray;
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
  height: 150px;
  width: 400px;
  min-height: 100px;
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`

export const Title = styled.title`
  padding-bottom: 10px;
  color: rgb(0, 0, 32);
  font-weight: bold;
`
export const ContactButton = styled.button`
  padding: 20px;
  border: none;
  background-color: linear-gradient(90deg, rgba(218,121,17,1) 52%, rgba(240,207,13,1) 100%);
  font-weight: 500;
  font-size: 20px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 10px;
  width: 400px;
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`

// HomePage Styling

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-top: 4rem;
`

export const MainHeading = styled.div`
    border: 1px solid transparent;
    width: 50%;
`
export const Links = styled(Link)`
    padding: 1rem 1rem 1rem 1rem;
    width: 30%;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #ef5924;
    color: white;
    border-radius: 1rem;
    cursor: pointer;
    border: none;
    text-decoration: none;
    @media screen and (max-width: 768px){
        
    }
`
export const SubHeading = styled.div`
    border: 1px solid transparent;
    margin-left: 20px;
    width: 20%;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Line = styled.hr`
    width: 30%;
    background-color: #ef5924;
    height: 5px;
    border: none;
    border-radius: 5px;
    margin-top: 4px;
`
export const SmallText = styled.h4`
    margin-top: 30px;
    font-size: 1.5rem;
    color: #696969;
`

export const Heading = styled.h1`
    font-size: 6rem;
    @media screen and (max-width: 768px){
        font-size: 4rem;
        text-align: left;
    }
    @media screen and (max-width: 480px){
        font-size: 3rem;
        text-align: left;
    }
`
export const ImageContainer = styled.div`
   margin: 90px; 
   align-items: center;
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   gap: 10px 10px;

   @media screen and (max-width: 480px){
        justify-content: center;
    }
 `