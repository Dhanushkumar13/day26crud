import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Table,Button} from 'semantic-ui-react'
import { API_URL} from '../Constants/Url'
import { useNavigate} from 'react-router-dom'

export default function Read() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();
  const updateuser = ({firstName,lastName,email,id}) =>{
    localStorage.setItem('ID',id)
    localStorage.setItem('firstName',firstName)
    localStorage.setItem('lastName',lastName)
    localStorage.setItem('email',email)
    navigate('/update')
  }

  const deleteuser = async (id) => {
    await axios.delete(API_URL + `${id}`)
    callGetAPI()

  }
  const callGetAPI = async () => {
    const response = await axios.get(API_URL);
    setApiData(response.data)
  }

  useEffect(()=> {
    callGetAPI()
  },[])

  return (
    <Table singleLine >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            First Name
          </Table.HeaderCell>
          <Table.HeaderCell>
            Last Name
          </Table.HeaderCell>
          <Table.HeaderCell>
            Email ID
          </Table.HeaderCell>
          <Table.HeaderCell>
            Delete
          </Table.HeaderCell>
          <Table.HeaderCell>
            Update
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          apiData.map(data => (
            <Table.Row key={data.id}>
            <Table.Cell>
              {data.firstName}
            </Table.Cell>
            <Table.Cell>
            {data.lastName}
            </Table.Cell>
            <Table.Cell>
              {data.email}
            </Table.Cell>
            <Table.Cell>
              <button onClick={()=> 
                deleteuser(data.id)
              }> Delete </button>
            </Table.Cell>
            <Table.Cell>
              <button onClick={()=> 
                updateuser(data.id)
              }> Update </button>
            </Table.Cell>
          </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  )
}
