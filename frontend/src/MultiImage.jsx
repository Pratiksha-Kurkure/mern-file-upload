import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function MultiImage() {

    const [name, setname] = useState("kate")
    const [documents, setdocuments] = useState()
    const [users, setUsers] = useState([])

    const userInstance = axios.create({
        baseURL: "http://localhost:5000"
    })

    const handleSubmit = async e => {
        e.preventDefault()
        // console.log(documents);
        const fd = new FormData()
        fd.append("name", name)
        for (let d of documents) {
            fd.append("doc", d)
        }

        //Print fromdata
        // for (const x of fd.entries()) {
        // console.log(x);
        // }
        const { data } = await userInstance.post("/user/add-to-gallery", fd)
        console.log(data);
    }

    const getAllUsers = async e => {
        const { data: { result } } = await userInstance.get("/user/fetch")
        setUsers(result)
    }
    useEffect(() => {
        getAllUsers()
    }, [])


    return <>
        {JSON.stringify(documents, null, 2)}
        <form onSubmit={handleSubmit}>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header">Login</div>
                            <div class="card-body">
                                <div>
                                    <label for="email" class="form-label">Name </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        value={name}
                                        onChange={e => setname(e.target.value)}
                                        placeholder="Enter Your name"
                                    />

                                </div>
                                <div>
                                    <input
                                        multiple
                                        type="file"
                                        class="form-control"
                                        id="name"
                                        placeholder="Enter Your name"
                                        onChange={e => setdocuments(e.target.files)}

                                    />

                                </div>
                                <button type="submit" class="btn btn-primary">Go</button>



                                <div className="mt-5">
                                    {
                                        users.map(item => <div class="card">
                                            <div class="card-body">
                                                <h1>{item.name}</h1>
                                                {
                                                    item.docs.map(url => <img
                                                        src={`http://localhost:5000/${url}`}
                                                        height={100}
                                                        className="img-fluid"
                                                        alt=""
                                                    />)
                                                }
                                            </div>
                                        </div>)
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>
}
