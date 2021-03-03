import React, {useContext} from "react";
import ClientsStore from "../store/ClientsStore";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import ClientsListItem from "./ClientsListItem";

const Clients = () => {
    const clientsStore = useContext(ClientsStore);
    const { clients, getClients, selectClient, resetClient } = clientsStore;
    useQuery("clients", () => {getClients()});
    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            <button type="button"
                    className="btn btn-success btn-lg"
                    style={{margin: "10px 0"}}
                    onClick={() => { resetClient()}}
            >
                <Link to={'/client'}>Add client</Link>
            </button>
            <div className="list-group">
                {
                    clients.map(client =>
                        ( <ClientsListItem client={client}
                                           selectClient={() => {selectClient(client)}}
                                           key={client.id}
                        /> )
                        )
                }
            </div>
        </div>
    )
};

export default Clients
