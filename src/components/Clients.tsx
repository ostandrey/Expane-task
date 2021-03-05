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
        <div>
            <Link to={'/client'}>
                <button type="button"
                        className="bg-teal-600 px-5 py-3 text-white
                        hover:bg-teal-500 rounded max-w-md mx-auto"
                        style={{margin: "10px 0"}}
                        onClick={() => { resetClient()}}
                >
                    Add client
                </button>
            </Link>
            <div className="list-group overflow-y-scroll h-96">
                <div className="flex flex-col">
                    <div className="-my-2sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name Surname
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Phone
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {
                                            clients.map(client =>
                                                ( <ClientsListItem client={client}
                                                                   selectClient={() => {selectClient(client)}}
                                                                   key={client.id}
                                                /> )
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Clients
