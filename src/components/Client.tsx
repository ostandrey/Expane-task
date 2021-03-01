import React, {useContext, useState} from "react";
import ClientsStore from "../store/ClientsStore";
import {Link} from "react-router-dom";

const Client = () => {
    const clientsStore = useContext(ClientsStore);
    const { updateClient, client } = clientsStore;
    const [form, setForm] = useState({firstName: client ? client.firstName : ''});
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8 shadow p-3 mb-5 bg-body rounded">
                    <div className="mb-3">
                        <label className="form-label">First name</label>
                        <input type="text"
                               value={form.firstName}
                               className="form-control"
                               placeholder="Bob"
                               onChange={firstName => setForm({...form, firstName: firstName.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Surname</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Bobson"

                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone number</label>
                        <input type="text"
                               className="form-control"
                               placeholder="+380501111111"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Photo url</label>
                        <input type="text"
                               className="form-control"
                               placeholder="URL"/>
                    </div>
                    <div>
                        <button type="button"
                                className="btn btn-success"
                                onClick={_ => {
                                    updateClient({
                                        id: client?.id,
                                        firstName: form.firstName,
                                        lastName: 'asa',
                                        phoneNumber: '232',
                                        avatarUrl: 'trytyyt',
                                    });
                                    setForm({firstName: ''});
                                }}
                        >
                            Add client</button>
                        <button type="button"
                                className="btn btn-success btn-lg "
                                style={{margin: "10px 0"}}

                        >
                            <Link to={'/clients'}>Back</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Client;
