import React, { useState, useEffect } from 'react'
import Dishes from '../components/dish/Dishes';
import { auth,fs } from '../config/Config';



const Menu = (props) => {

    const [dishes, setDishes] = useState([]);

    const getDishes = async () => {
        const dishes = await fs.collection('dishes').get();
        const dishArray = [];
        for(let snap of dishes.docs){
            let data = snap.data();
            data.ID = snap.id;
            dishArray.push({
                ...data
            })
            if(dishArray.length === dishes.docs.length){
                setDishes(dishArray)
            }
        }
    }
    
    useEffect(() => {
        getDishes();
    }, [])
    
    function GetUserUid(){
        const [uid, setUid]=useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if(user){
                    setUid(user.uid);
                }
            })
        }, [])
        return uid;
    }

    const uid = GetUserUid();

    let Dish;
    const addToCart = (dish) =>{
        if(uid!==null){
            Dish=dish;
            dish['qty']=1;
            dish['TotalDishPrice']=Dish.qty*Dish.price;
            fs.collection('Cart ' + uid).doc(dish.ID).set(dish).then(()=>{
                console.log('successfully added to cart');
            })
        }else{
            props.history.push('/signin');
        }
    }

    return (
        <>
            { dishes.length > 0 && (
                <div>
                    <div>
                        <Dishes dishes={dishes} addToCart={addToCart}/>
                    </div>
                </div>
            )}
            { 
                dishes.length < 1 && (
                    <div>Please Wait...</div>
                )
            }
        </>
    )}

export default Menu


