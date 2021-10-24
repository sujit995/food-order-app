import React from 'react'
import styled from 'styled-components';


const CardContainer = styled.div`
    background: #fff;
    border: .1rem solid rgba(0,0,0,0.4);
    border-radius: .5rem;
`;

const CardImage = styled.div`
    height: 15rem;
    width: 100%;
    padding: 1rem;
    overflow: hidden;
    posirion: relative;
    img{
        height: 100%;
        width: 100%;
        border-radius: 0.5rem;
        object-fit: cover;
    }
    }
`

const Content = styled.div`
    padding: 2rem;
    padding-top: 0;
    .stars{
        padding-bottom: .8rem;
    }
    i{
        font-size: 1.2rem;
        color: green;
    }
    h3{
        color: black;
        font-size: 1.5rem;
    }
    p{
        color: #696969;
        font-size: .8rem;
        padding: .3rem 0;
        line-height: 1.1;
    }
    span{
        color: green;
        margin-left: 1rem;
        font-size: 2rem;
    }
`
const Button = styled.button`
    margin-top: 1rem;
    display: inline-block;
    font-size: 1rem;
    color: #fff;
    background: #000333;
    border-radius: .5rem;
    cursor: pointer;
    padding: .6rem .6rem;
    text-decoration: none;
`

const IndividualProducts = ({ items, addToCart }) => {

    const handleAddToCart = () => {
        addToCart(items);
    }
    return (
        <>
            <CardContainer>
                <CardImage>
                    <img src={items.url} alt="dish-image" />
                </CardImage>
                <Content>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <h3>{items.title}</h3>
                    <p>{items.description}</p>
                    <Button onClick={handleAddToCart}>Add To Cart</Button>
                    <span>₹{items.price}</span>
                </Content>
            </CardContainer>
        </>
    )
}

export default IndividualProducts;