import styled from 'styled-components';

const MainCard = styled.div`
   padding: 20px;
   
`
const CardComp = styled.div`
    background: #eee5e9;
    border: none;
    box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
    border-radius: 20px;
    text-align: center;
    width: 250px;
    transition: transform 0.3s; 
    &:hover{
        transition: translateY(5px);
        box-shadow: 2px 2px 26px 0px rgba(0,0,0,0.3);
    }  
`

const Image = styled.img`
  width: 150px;
  height: 180px;  
`

const Text = styled.div`
    padding: 0 20px 20px;
`

const Title = styled.h4`
    text-transform: uppercase;
`

const data = [
    {
        image:
            "https://hurrythefoodup.com/wp-content/uploads/2017/07/Vegetarian-Tacos-8.jpg",
        name: "Maxican Tacos"
    },
    {
        image:
            "https://i.pinimg.com/originals/b9/b1/8a/b9b18ab3310089038b6dae2c386bfc5c.jpg",
        name: "Farmhouse Pizza"
    },
    {
        image:
            "https://curtisgallon.com/wp-content/uploads/2014/02/pulled-chicken-burger-l-chips-good-light-1-2.jpg",
        name: "Chicken Burger"
    },
    {
        image:
            "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Spicy_Chicken_Nachos_Recipe_With_Salsa_And_Sour_Cream-1.jpg",
        name: "Loaded Nachos"
    },
    {
        image:
            "https://tiffinandteaofficial.com/wp-content/uploads/2020/11/IMG_7663-1-scaled-e1605519663454.jpg",
        name: "Hakka Noodles"
    },
];

const HomeCard = () => {
    return (
        <>
            {data.map((item) => {
                return (
                    <MainCard>
                        <CardComp>
                            <Image src={item.image} alt="dishes" />
                            <Text>
                                <Title>{item.name}</Title>
                            </Text>
                        </CardComp>
                    </MainCard>
                );
            })}
        </>
    );
};

export default HomeCard;