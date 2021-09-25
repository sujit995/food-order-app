import React, {useState} from 'react'
import styled from 'styled-components';
import { auth, fs} from '../config/Config';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShadeArea = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalContainer = styled.div`
    width: 250px;
    height: auto;
    padding: 20px;
    background-color: #fff;
    position: relative;
`
const Form = styled.form`
    height: 300px;
`
const Input = styled.input`
    width: 200px;
    height: 30px;
    background-color: #C5C5C5;
    border: none;
    outline: none;
    padding: 7px;
`

const Button = styled.button`
    height: 28px;
    width: 120px;
    background-color: #00E400;
    border: none;
    border-radius: 5px;
    box-shadow: .5px .5px .5px .5px rgba(0,0,0,0.5);
    color: #fff;
    font-weight: 400;
    cursor: pointer;
`

const DeleteIcon = styled.div`
    background-color: #e00a02;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    top: -15px;
    right: -15px;
    cursor: pointer;
`
const Modal = ({ totalPrice, totalQty, hideModal}) => {

    const history = useHistory();
    // form states
    const [cell, setCell] = useState(null);
    const [residentialAddress, setResidentalAddress] = useState('');
    const [cartPrice] = useState(totalPrice);
    const [cartQty] = useState(totalQty);

    // 
    const handleCashOnDelivery = async (e) => {
        e.preventDefault();
        const uid = auth.currentUser.uid;
        const userData = await fs.collection('users').doc(uid).get();
        await fs.collection('Buyer Personal Info').add({
            Name: userData.data().FullName,
            Email: userData.data().Email,
            CellNo: cell,
            ResidentialAddress: residentialAddress, 
            CartPrice: cartPrice,
            CartQty: cartQty,
        })
        const cartData = await fs.collection('Cart ' + uid).get();
        for(var snap of cartData.docs){
            var data = snap.data();
            data.ID = snap.id;
            await fs.collection('Buyer-Cart ' + uid).add(data);
            await fs.collection('Cart '+ uid).doc(snap.id).delete();
        }
        hideModal();
        history.push('/menu');
        toast.success('Your order has been placed successfully', {
            backgroundColor: 'green',
            color: '#fff',
        })
    }

    // close modal
    const handleCloseModal = () => {
        hideModal();
    }

    return (
        <ShadeArea>
            <ModalContainer>
                <Form onSubmit={handleCashOnDelivery}>
                    <Input type="number" placeholder=" Cell No" required 
                        onChange={(e)=>setCell(e.target.value)} value={cell}
                    /><br /><br />
                    <Input type="text" placeholder=" Residental Address" required 
                        onChange={(e)=>setResidentalAddress(e.target.value)} value={residentialAddress} 
                    /><br /><br />
                    <label>Total Quantity</label>
                    <Input type="text" readOnly required value={cartQty}/><br /><br />
                    <label>Total Price</label>
                    <Input type="text" readOnly required value={cartPrice}/><br /><br />
                    <Button>Submit</Button>
                </Form>
                <DeleteIcon onClick={handleCloseModal}>x</DeleteIcon>
            </ModalContainer>
        </ShadeArea>
    )
}

export default Modal
