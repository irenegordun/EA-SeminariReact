import React from 'react'
import {User} from '../model/User'
import { Link, useNavigate } from "react-router-dom"
import * as userService from '../Service/UserService'

interface Props {
    user:User
}

export const ListItem = ({user}: Props) => {
    let navigate = useNavigate();
    
    const remove = async (name: any) => {
        const res = await userService.delUser(name);
        console.log(res);
        navigate('/');
      }
  
      const deleteUser = (user: any) => {
        remove(user).then((response: any) => {
          //console.log(response.data);      
        })
    }

    const update  = async (name: any) => {
        const res = await userService.updateUser(name);
        console.log(res);
        navigate('/');
    }
        const updateUser = (user: any) => {
            update(user).then((response: any) => {
              //console.log(response.data);      
            })
        }
    
    
    
    return (
        <div className="container">
            <li className="col-md-4 card p-2">
                <div className="List-header">
                    <h4>Nom: {user.name}</h4>
                </div>
                <p>Mail: {user.email}</p>
                <p className="List-note">ID: {user._id}</p>
                <Link className="button" to={"/users"}>
                    <button id='deleteBtn' onClick={ () => deleteUser(user.name)}>
                        Delete
                    </button>  
                </Link>

                {/* deures irene */}
                <p>Write the new name: </p>
                <input type="text" name="" id="" />

                <Link className="button" to={"/users"}>
                    <button id='updateBtn' onClick={ () => updateUser(user.name)}>  Update </button>  
                </Link>
            </li>
        </div>

    )
}

export {}
export default ListItem