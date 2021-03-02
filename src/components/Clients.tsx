import React, {useContext} from "react";
import ClientsStore from "../store/ClientsStore";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";

const Clients = () => {
    const clientsStore = useContext(ClientsStore);
    const { clients, getClients, selectClient } = clientsStore;
    useQuery("clients", () => {getClients()});
    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            <button type="button"
                    className="btn btn-success btn-lg "
                    style={{margin: "10px 0"}}

            >
                <Link to={'/client'}>Add client</Link>
            </button>
            <div className="list-group">
                {
                    clients.map(client => (
                        <button className="list-group-item list-group-item-action" aria-current="true">
                            <div className="d-flex w-100">
                                <div style={{width: "10rem"}}>
                                    <img src={client.avatarUrl} className="rounded img-thumbnail" alt="avatar"/>
                                </div>
                                <div className="d-flex flex-column ms-4">
                                    <h4 className="mb-1">{client.firstName} {client.lastName}</h4>
                                    <small>Phone number: {client.phone}</small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end m-2">
                                <Link to={'/client'}>
                                    <button type="button"
                                            className="btn btn-outline-primary me-2"
                                            onClick={() => {
                                                selectClient(client)
                                            }}>
                                        Update
                                    </button>
                                </Link>

                            </div>
                        </button>
                    ))
                }
            </div>
        </div>
    )
};

export default Clients
