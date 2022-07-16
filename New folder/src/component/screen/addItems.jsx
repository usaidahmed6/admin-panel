import React, { useState } from 'react'
import Navebar from '../navebar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './addItems.css';
import {
    BiscuitsRef,
    addDoc,
    storage,
    getDownloadURL,
    ref,
    uploadBytes
} from './firebase';


const AddItems = () => {
    const [ItemName, setItemName] = useState('');
    const [ItemPrice, setItemPrice] = useState('');
    const [ItemDescription, setItemDescription] = useState('');
    const [ItemImage, setItemImage] = useState('');
    const [Premium, setPremium] = useState('');
    const [Cakes, setCakes] = useState('');
    const [Cookies, setCookies] = useState('');
    const [Brownies, setBrownies] = useState('');

    // controls input field **************

    const onCahangeName = (e) => {
        setItemName(e.target.value);
        // console.log('name=>',ItemName);
    }

    const onCahangePrice = (e) => {
        setItemPrice(e.target.value);
        // console.log('name=>',ItemName);
    }

    const onCahangeDescription = (e) => {
        setItemDescription(e.target.value);
        // console.log('name=>',ItemName);
    }

    const onCahangeImage = (e) => {

        setItemImage(e.target.files[0]);
        // console.log('name=>',ItemName);
    }
    // radio button *************************
    const onchangePremium_Biscuits = (e) => {
        setPremium(e.target.value)
        // console.log('radio==>', e.target.value);
    }

    const onchangeCakes = (e) => {
        setCakes(e.target.value)
        // console.log('radio==>', e.target.value);

    }

    const onchangeCookies = (e) => {
        setCookies(e.target.value)
        // console.log('radio==>', e.target.value);

    }

    const onchangeBrownies = (e) => {
        setBrownies(e.target.value)
        console.log('radio==>', e.target.value);

    }
    // console*************************

    // console.log('image=======>', ItemImage);
    // console.log('name========>', ItemName);
    // console.log('price=======>', ItemPrice);
    // console.log('Description=>', ItemDescription);

    console.log('Premium=>',Premium);
    // console.log('Cakes===>',Cakes);
    // console.log('Cookies=>',Cookies);
    // console.log('Brownies>',Brownies);

    const onFinish = async () => {

        // console.log('name========>', ItemName);
        // console.log('price=======>', ItemPrice);
        // console.log('Description=>', ItemDescription);
        // console.log('image=======>', ItemImage);

        const image = await uploadImageToFirebase(ItemImage);
        // console.log('upload=======>', image);
        if (image && Premium == 'Premium' && Cakes == 'Cakes') {
            console.log('Premium=>',Premium);

            // const obj = {
            //     name: ItemName,
            //     price: ItemPrice,
            //     description: ItemDescription,
            //     // Category: Premium,
            //     image
            // }

            // console.log('objects======>', obj)

            // await addDoc(BiscuitsRef, obj)

        }
        else{
            console.log('error');
        }

    }



    const uploadImageToFirebase = async (file) => {
        let imageItem;
        try {
            const storeageRef = ref(storage, file.name)
            const upload = await uploadBytes(storeageRef, file)
            // console.log('file uploaded')
            const imageUrl = await getDownloadURL(storeageRef)
            imageItem = imageUrl
            // console.log('image item========', imageItem)
        } catch (err) {
            // console.log(err.msg)
        }
        return imageItem
    }

    return (
        <Navebar>
            <h2 className='text-center mb-4'>
                Add Items
            </h2>
            <Form>
                <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1" >Name</InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={onCahangeName}
                        maxLength='50'

                    />
                </InputGroup>

                <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                    <Form.Control
                        placeholder="price"
                        aria-label="price"
                        aria-describedby="basic-addon2"
                        onChange={onCahangePrice}
                        maxLength='6'
                    />
                </InputGroup>

                <Form.Group controlId="formFileSm" className="my-4">
                    <Form.Label>Chose Image </Form.Label>

                    <Form.Control type="file" onChange={onCahangeImage} />
                </Form.Group>

                <InputGroup>
                    <InputGroup.Text>Description</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" onChange={onCahangeDescription} maxLength='100' />
                </InputGroup>
                <fieldset className='my-4'>
                    <legend className='mx-1'>Select a Category:</legend>

                    <div className='Category-Div'>
                        <input type="radio" name="drone" value="Premium" onChange={onchangePremium_Biscuits} />
                        <label>Premium Biscuits</label>
                    </div>

                    <div className='Category-Div'>
                        <input type="radio" name="drone" value="Cakes" onChange={onchangeCakes} />
                        <label>Cakes & Desserts</label>
                    </div>

                    <div className='Category-Div'>
                        <input type="radio" name="drone" value="Cookies" onChange={onchangeCookies} />
                        <label>Cookies & Biscuits</label>
                    </div>

                    <div className='Category-Div'>
                        <input type="radio" name="drone" value="Brownies" onChange={onchangeBrownies} />
                        <label>Brownies & Pastries</label>
                    </div>
                </fieldset>

            </Form>
            <Button variant="primary" type="submit" className='my-4' onClick={onFinish}>
                Submit
            </Button>
        </Navebar>
    )
}

export default AddItems
