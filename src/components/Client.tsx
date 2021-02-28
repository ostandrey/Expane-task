import React, {useContext, useState} from "react";
import ClientsStore from "../store/ClientsStore";
import {Link} from "react-router-dom";

const Client = () => {
    const [firstName, setFirstName] = useState("");
    const clientsStore = useContext(ClientsStore);
    const { addClient } = clientsStore;
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8 shadow p-3 mb-5 bg-body rounded">
                    <div className="mb-3">
                        <label className="form-label">First name</label>
                        <input type="text"
                               value={firstName}
                               className="form-control"
                               placeholder="Bob"
                               onChange={firstName => setFirstName(firstName.target.value)}
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
                                    addClient({
                                        firstName: firstName,
                                        lastName: 'asa',
                                        phoneNumber: '232',
                                        avatarUrl: 'trytyyt',
                                    });
                                    setFirstName('');
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
