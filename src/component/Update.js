import React, {useState,useEffect} from 'react'
import {Form,Button} from 'semantic-ui-react'
import {API_URL} from '../Constants/Url'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export default function Update() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('')
  const [id, setId] = useState('')
  // const navigate = useNavigate();
  const updateUser = async()=> {
    await axios.put(API_URL + id, {
      firstName, lastName, email
    });
  }
  // navigate('/read')


  useEffect(()=>{
    setId(localStorage.getItem('ID'))
    setfirstName(localStorage.getItem('firstName'))
    setlastName(localStorage.getItem('lastName'))
    setemail(localStorage.getItem('email'))
  },[])
  return (
    <Form>
    <Form.Field className='Form'>
        <label>First Name</label>
        <input value={firstName} onChange={event => setfirstName(event.target.value)} placeholder='Enter First Name' />
    </Form.Field>
    <br/>
    <Form.Field>
        <label>Last Name</label>
        <input value={lastName} onChange={event => setlastName(event.target.value)} placeholder='Enter Last Name' />
    </Form.Field>
    <br/>
    <Form.Field>
        <label>Email</label>
        <input value={email} onChange={event => setemail(event.target.value)} placeholder='Enter email ID' />
    </Form.Field>
    <Form.Field>
        <button onClick={updateUser}>Submit</button>
    </Form.Field>
</Form>
  )
}
