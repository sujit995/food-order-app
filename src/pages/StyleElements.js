import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Cart Page Styling
export const MainCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`
export const TopHeading = styled.h1`
    text-align: center;
    padding-top: 2rem;
`

export const ProductCart = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
    }
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
    @media screen and (max-width: 650px){
        width: 200px;
        height: 250px;
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
     color: green;
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
    flex-direction: row;
    align-items: center;
    padding-top: 6rem;
    padding-left: 3rem;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 70px 0px;
    }
`
export const HeadContainer = styled.div`
    flex:1 1 45rem;
    @media screen and (max-width: 768px){
        flex:0 0 25rem;
        text-align: center;
    }
`
export const ImgContainer = styled.div`
    flex:1 1 45rem;
    @media screen and (max-width: 1125px){
       img{
        width: 100%;
        height: 100%;
       }
       @media screen and (max-width: 768px){
        flex:0 0 15rem;
    }
       
    }
`
export const Links = styled(Link)`
    margin-top: 1rem;
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background: #000333;
    border-radius: .5rem;
    cursor: pointer;
    padding: .6rem .6rem;
    text-decoration: none;
    &:hover {
        background: green;
    }
    @media screen and (max-width: 768px){
        
    }
`

export const Head = styled.span`
    color: green;
    font-size: 2rem;
    @media screen and (max-width: 768px){
        font-size: 40px;
       }
`
export const SubHead = styled.h3`
    color: #000333;
    font-size: 4rem;
       @media screen and (max-width: 768px){
        font-size: 60px;
       }
`
export const SmallText = styled.h4`
    font-size: 1.5rem;
    padding: .5rem 0;
    line-height: 1.5rem;
    color: #696969;
    @media screen and (max-width: 1000px){
        font-size: 20px
       }
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
// About Page

export const Container = styled.div`
    padding-top: 2rem;
    h3{
        text-align: center;
        font-size: 2rem;
        color: green;
    }
    h1{
        text-align: center;
        font-size: 2.5rem;
    }
`

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 5rem;
    @media screen and (max-width: 768px){
        display: flex;
        flex-wrap: wrap;
        align-items: center;
       }
`
export const ImgSection = styled.div`
    flex:1 1 45rem;
    img{
        width: 100%;
    }
`
export const Content = styled.div`
    flex:1 1 45rem;
    padding: .8rem 1rem;
    h3{
        color: black;
        font-size: 3rem;
        padding: 0.5rem 0;
    }
    p{
        color: #696969;
        font-size: 1.1rem;
        padding: .8rem 0;
        line-height: 1.2;
    }
    .btn{
    margin-top: 1rem;
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background: #000333;
    border-radius: .5rem;
    cursor: pointer;
    padding: .6rem .6rem;
    text-decoration: none;
    &:hover {
        background: green;
    }
    }
`
export const IconContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    padding: .5rem 0;
    margin-top: 0.5rem;
`
export const Icons = styled.div`
    background: #eeeeee;
    border-radius: .5rem;
    border: 1px solid rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex: 1 1 8rem;
    padding: 1.2rem 0rem;
    i{
        font-size: 1.2rem;
        color: green;
    }
    span{
        font-size: 1rem;
        color: black;
    }
`
export const ProdContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 1rem;
    padding: 1rem;
    @media screen and (max-width: 480px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        padding: 1rem;
    }
`