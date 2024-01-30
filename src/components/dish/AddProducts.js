import React, { useState } from 'react';
import { storage, fs } from '../../config/Config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [uploadError, setUploadError] = useState('');
    const types = ['image/jpg', 'image/jpeg', 'image/png'];

    const handleProductImg = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (types.includes(selectedFile.type)) {
                setImage(selectedFile);
            } else {
                setImage(null);
                toast.error('Please select a valid image file type (PNG or JPG)');
            }
        } else {
            toast.error('Please select a file');
        }
    };

    const handleAddDishes = (e) => {
        e.preventDefault();
        if (!title || !description || !price || !image) {
            toast.error('Please fill in all fields');
            return;
        }
        const uploadTask = storage.ref(`dish-images/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
            },
            (error) => {
                console.log(error.message);
                setUploadError(error.message);
            },
            () => {
                storage
                    .ref('dish-images')
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        fs.collection('products')
                            .add({
                                title,
                                description,
                                price: Number(price),
                                url,
                            })
                            .then(() => {
                                toast.success('Product added successfully');
                                setTitle('');
                                setDescription('');
                                setPrice('');
                                setImage(null);
                                setUploadError('');
                                document.getElementById('file').value = '';
                            })
                            .catch((error) => setUploadError(error.message));
                    });
            }
        );
    };

    return (
        <div className="mt-10 w-full h-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center mt-4">
                <form className="w-[80%] d-flex flex-col" onSubmit={handleAddDishes}>
                    <input
                        className="w-full h-10 outline-none px-4 border border-solid border-gray-300 mt-4 placeholder-gray-400 focus:border-b-2 focus:border-blue-500"
                        type="text"
                        placeholder="Dish Name"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <input
                        className="w-full h-10 outline-none px-4 border border-solid border-gray-300 mt-4 placeholder-gray-400 focus:border-b-2 focus:border-blue-500"
                        type="text"
                        placeholder="Dish Description"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <input
                        className="w-full h-10 outline-none px-4 border border-solid border-gray-300 mt-4 placeholder-gray-400 focus:border-b-2 focus:border-blue-500"
                        type="number"
                        placeholder="Dish Price"
                        required
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                    <input className="placeholder-gray-400 mt-4 cursor-pointer" type="file" id="file" required onChange={handleProductImg} />
                    <button
                        className="w-full py-2 px-10 text-white text-base font-bold border-none rounded-full cursor-pointer transition-all duration-240 ease-in-out bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 mt-8 hover:brightness-103"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                {uploadError && (
                    <>
                        <br />
                        <div>{uploadError}</div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AddProducts;
