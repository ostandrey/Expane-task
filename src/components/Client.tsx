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
        <div className="text-gray-500">
                <form className="px-4 my-10 max-w-3xl mx-auto space-y-6">
                    <div className="flex space-x-4">
                        <div className="w-1/2 mb-3">
                            <label className="font-semibold">First name</label>
                            <input type="text"
                                   value={form.firstName}
                                   className="border border-gray-400 block py-2 px-4 w-full rounded
                               focus:outline-none focus:border-teal-500"
                                   placeholder="Bob"
                                   onChange={firstName => setForm({...form, firstName: firstName.target.value})}
                            />
                        </div>
                        <div className="w-1/2 mb-3">
                            <label className="font-semibold">Surname</label>
                            <input type="text"
                                   className="border border-gray-400 block py-2 px-4 w-full rounded
                               focus:outline-none focus:border-teal-500"
                                   placeholder="Bobson"
                                   value={form.lastName}
                                   onChange={lastName => setForm({...form, lastName: lastName.target.value})}
                            />
                        </div>
                    </div>
                    <div className="w-1/2 mb-3">
                        <label className="font-semibold">Phone number</label>
                        <input type="text"
                               className="border border-gray-400 block py-2 px-4 w-full rounded
                               focus:outline-none focus:border-teal-500"
                               placeholder="+380501111111"
                               value={form.phone}
                               onChange={phone => setForm({...form, phone: phone.target.value})}

                        />
                    </div>
                    <div className="mb-3">
                        <label className="font-semibold">Photo url</label>
                        <input type="text"
                               className="border border-gray-400 block py-2 px-4 w-full rounded
                               focus:outline-none focus:border-teal-500"
                               placeholder="URL"
                               value={form.avatarUrl}
                               onChange={avatarUrl => setForm({...form, avatarUrl: avatarUrl.target.value})}
                        />
                    </div>
                    <div>
                        {
                            client ?
                                <button type="button"
                                             className="bg-lightBlue-600 px-5 py-3 text-white
                                             hover:bg-lightBlue-800 rounded max-w-md mx-auto"
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
                                          className="bg-teal-600 px-5 py-3 text-white
                                          hover:bg-teal-500 rounded max-w-md mx-auto"
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
                        <Link to={'/clients'}>
                            <button type="button"
                                    className="ml-2 bg-blueGray-600 px-5 py-3 text-white
                                              hover:bg-blueGray-700 rounded max-w-md mx-auto"
                            >
                                Back
                            </button>
                        </Link>
                    </div>
                </form>
        </div>

    )
};

export default Client;
