import React, { Component } from 'react';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import '../App.css';
require('dotenv').config({ path: '../../../.env' });

const API_HOST = process.env.REACT_APP_API_HOST
const API_PORT = process.env.REACT_APP_API_PORT

const api = axios.create({
    baseURL: `http://${API_HOST}:${API_PORT}/users`
})


class DataTable extends Component {

    state = {
        users: []
    }

    constructor() {
        super();
        this.getUsers();
    }
    
    getUsers = async () => {
        try {
        //let data = await api.get('/').then(({ data }) => data);
            let data = await axios({
                method: 'get',
                url: `http://${API_HOST}:${API_PORT}/users`
            }).then(({ data }) => data);
            this.setState({ users: data })
        } catch (err) {
            console.log(err)
        }
    }

    deleteUser = async (id) => {
       let data = await api.delete(`/delete/${id}`)
       console.log(`deleting ${id}`)
       this.getUsers(); 
    }

    
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td >
                    <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        startIcon={<EditIcon />}
                        //onClick={()=>this.updateUser(this.props.id)}
                    >

                    </Button>
                </td>
                <td key={this.props.obj._id}>
                    <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        onClick={()=>this.deleteUser(this.props.obj._id)}
                    >

                    </Button>
                </td>

            </tr >

        );
    }
}

export default DataTable;