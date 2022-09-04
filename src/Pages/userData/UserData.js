import React from 'react'
import { useState, useEffect } from 'react'
import { users } from '../../data/Users'

const statuses = [ "active", "inactive", "pending" , "all"]

export default function UserData() {

    const [status, setStatus] = useState("active")
    const [documentUser, setDocumentUser] = useState([])

    useEffect(() => {
        if(status !== "all"){

            let filterDocs = users.filter((user) => {
                return user.Status === status
               
            })
            setDocumentUser(filterDocs);
        } else{
            setDocumentUser(users)
        }
    }, [status])

    return (
        <div className='py-5 mx-auto'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                        <div className="card px-3 ">
                            <div className="row">
                                <div className="col text-center"><h2>Users</h2></div>
                                <div className="row text-center"><p>Total Users = {users.length}</p></div>
                            </div>
                            <div className="row py-2">
                                <div className="col">
                                    <select className='form-control my-3 w-25 m-auto ' onChange={e => setStatus(e.target.value)}>
                                        {statuses.map((status, i) => {
                                            return <option key={i} value={status} >{status}</option>
                                        })}
                                    </select>
                                    {documentUser.map((user, index) => {
                                        return <div className="p-2  my-2" key={index}> Name: <span>{user.name}</span> 👉 And Status <i>{user.Status}</i></div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
