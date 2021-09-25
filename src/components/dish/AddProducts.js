import React, { useState } from 'react'
import styled from 'styled-components';
import { storage, fs } from '../../config/Config';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductContainer = styled.div`
margin-top: 40px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const WrapperContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
`;


const FormContainer = styled.form`
width: 80%;
display: flex;
flex-direction: column;
`;

const Input = styled.input`
width: 100%;
height: 42px;
outline: none;
padding: 0 10px;
border: 1px solid rgba(200, 200, 200, 0.4);
margin-top: 10px;

 &::placeholder{
     color: rgba(200, 200, 200, 1);
 }
 &:focus{
     outline: none;
     border-bottom: 2px solid rgba(0,212,255,1);
 }
`;

const File = styled.input`
margin-top: 10px;
cursor: pointer;

 &::placeholder{
     color: rgba(200, 200, 200, 1);
 }
`;

export const SubmitButton = styled.button`
width: 100%;
padding: 10px 40%;
color: #fff;
font-size: 15px;
font-weight: bold;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
margin-top: 30px;

&:hover{
    filter: brightness(1.03);
}
`;

const AddProducts = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const [uploadError, setUploadError] = useState('');
    const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG'];

    const handleProductImg = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && types.includes(selectedFile.type)) {
                setImage(selectedFile);
            }
            else {
                setImage(null);
                toast.error('please select a valid image file type { png or jpg)');
            }
        }
        else {
            console.log('please select your file');
        }
    }

    const handleAddDishes = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`dish-images/${image.name}`).put(image);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(progress);
        }, error => console.log(error.message), () => {
            storage.ref('dish-images').child(image.name).getDownloadURL().then(url => {
                fs.collection('products').add({
                    title,
                    description,
                    price: Number(price),
                    url
                }).then(() => {
                    toast.success('Product added Successfully');
                    setTitle('');
                    setDescription('');
                    setPrice('');
                    document.getElementById('file').value = "";
                    setUploadError('')
                }).catch(error => setUploadError(error.message))
            })
        })
    }
    return (
        <ProductContainer>
            <WrapperContainer>
                <FormContainer onSubmit={handleAddDishes}>
                    <Input type="text" placeholder="Dish Name" required onChange={(e) => setTitle(e.target.value)} value={title} />
                    <Input type="text" placeholder="Dish Description" required onChange={(e) => setDescription(e.target.value)} value={description} />
                    <Input type="number" placeholder="Dish Price" required onChange={(e) => setPrice(e.target.value)} value={price} />
                    <File type="file" id="file" required onChange={handleProductImg} />
                    <SubmitButton type="submit">Submit</SubmitButton>
                </FormContainer>
                {uploadError && <>
                    <br />
                    <div>{uploadError}</div>
                </>}
            </WrapperContainer>
        </ProductContainer>
    )
}

export default AddProducts
