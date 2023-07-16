import React, {useState} from 'react';
import {Form,Button} from 'semantic-ui-react'
import {API_URL} from '../Constants/Url'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Createtech() {
    const [firstName, setfirstName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setemail] = useState('')
    const navigate = useNavigate();

    const postData = async()=> {
        await axios.post(API_URL, {firstName,number,email})
        navigate('/read')
    }
  return (
    <Form>
        <Form.Field className='Form'>
            <label>Teacher Name</label>
            <input value={firstName} onChange={event => setfirstName(event.target.value)} placeholder='Enter Student Name' />
        </Form.Field>
        <br/>
        <Form.Field>
            <label>Teacher PhoneNumber</label>
            <input value={number} onChange={event => setNumber(event.target.value)} placeholder='Enter Phone Number' />
        </Form.Field>
        <br/>
        <Form.Field>
            <label>Teacher Email</label>
            <input value={email} onChange={event => setemail(event.target.value)} placeholder='Enter email ID' />
        </Form.Field>
        <Form.Field>
            <button onClick={postData}>Submit</button>
        </Form.Field>
    </Form>

  )
}
