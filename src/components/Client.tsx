import React, {useContext, useState} from "react";
import ClientsStore from "../store/ClientsStore";
import {Link} from "react-router-dom";

const Client = () => {
    const clientsStore = useContext(ClientsStore);
    const { updateClient, addClient, client } = clientsStore;
    const [form, setForm] = useState({
        firstName: client ? client.firstName : '',
        lastName: client ? client.lastName : '',
        phone: client ? client.phone : '',
        avatarUrl: client ? client.avatarUrl : '',
    });
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
                               value={form.lastName}
                               onChange={lastName => setForm({...form, lastName: lastName.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone number</label>
                        <input type="text"
                               className="form-control"
                               placeholder="+380501111111"
                               value={form.phone}
                               onChange={phone => setForm({...form, phone: phone.target.value})}

                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Photo url</label>
                        <input type="text"
                               className="form-control"
                               placeholder="URL"
                               value={form.avatarUrl}
                               onChange={avatarUrl => setForm({...form, avatarUrl: avatarUrl.target.value})}
                        />
                    </div>
                    <div>
                        {
                            client ?
                                <button type="button"
                                             className="btn btn-success"
                                             onClick={_ => {
                                                 updateClient({
                                                     id: client?.id,
                                                     firstName: form.firstName,
                                                     lastName: form.lastName,
                                                     phone: form.phone,
                                                     avatarUrl: form.avatarUrl,
                                                 });
                                                 setForm({firstName: '', lastName: '', phone: '', avatarUrl: ''});
                                             }}
                                >
                                    Update client
                                </button>
                                : <button type="button"
                                          className="btn btn-success"
                                          onClick={_ => {
                                              addClient({
                                                       firstName: form.firstName,
                                                       lastName: form.lastName,
                                                       phone: form.phone,
                                                       avatarUrl: form.avatarUrl,
                                                   });
                                                   setForm({firstName: '', lastName: '', phone: '', avatarUrl: ''});
                                               }}
                                >
                                    Add client
                                </button>
                        }
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
