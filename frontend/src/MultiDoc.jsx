import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function MultiDoc() {
    const [dob, setdob] = useState()
    const [adhar, setadhar] = useState()
    const [tc, settc] = useState()
    const [documents, setDocuments] = useState([])


    const userInstance = axios.create({
        baseURL: "http://localhost:5000"
    })

    const handleUploadDocs = async e => {
        e.preventDefault()
        const fd = new FormData()
        fd.append("dob", dob)
        fd.append("adhar", adhar)
        fd.append("tc", tc)

        const { data } = await userInstance.post("doc/add", fd)
        console.log(data);
    }

    const getAllDocs = async e => {
        const { data: { result } } = await userInstance.get("doc")
        setDocuments(result)
    }
    useEffect(() => {
        getAllDocs()
    }, [])
    return <>
        {/* {JSON.stringify(documents)} */}
        <form onSubmit={handleUploadDocs}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 offset-4">
                        <div class="card">
                            <div class="card-header">Upload Documents</div>
                            <div class="card-body">
                                <div>
                                    <label for="dob" class="form-label">DOB </label>
                                    <input
                                        type="file"
                                        class="form-control"
                                        id="dob"
                                        onChange={e => setdob(e.target.files[0])}
                                    />

                                </div>
                                <div>
                                    <label for="adhar" class="form-label">Adhar </label>
                                    <input
                                        type="file"
                                        class="form-control"
                                        id="adhar"
                                        onChange={e => setadhar(e.target.files[0])}
                                    />

                                </div>
                                <div>
                                    <label for="tc" class="form-label">TC </label>
                                    <input
                                        type="file"
                                        class="form-control"
                                        id="tc"
                                        onChange={e => settc(e.target.files[0])}
                                    />

                                </div>
                                <button type="submit" class="btn btn-outline-dark mt-5">Upload</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>


        <div className="mt-5">
            {
                documents.map(item => <div class="card">
                    <h3>DOB</h3>
                    <img
                        src={`http://localhost:5000/${item.userDob}`}
                        height={100}
                        width={100}
                        className="img-fluid "
                        alt=""
                    />
                    <h3>Adhar</h3>
                    <img
                        src={`http://localhost:5000/${item.userAdhar}`}
                        height={100}
                        width={100}
                        className="img-fluid "
                        alt=""
                    />
                    <h3>TC</h3>
                    <img
                        src={`http://localhost:5000/${item.userTc}`}
                        height={100}
                        width={100}
                        className="img-fluid "
                        alt=""
                    />

                </div>)
            }

        </div>
    </>
}
