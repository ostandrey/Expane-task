import React from "react";
import {Link} from "react-router-dom";
import {IClient} from "../store/ClientsStore";

type ClientsListItemProps = {
    client: IClient,
    selectClient: Function
}
const ClientsListItem = ({client, selectClient}: ClientsListItemProps) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full"
                             src={client.avatarUrl}
                             alt="avatar"/>
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {client.firstName} {client.lastName}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{client.phone}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link to={'/client'}>
                    <button type="button"
                            className="bg-lightBlue-600 text-white px-3 py-2 rounded
                            hover:bg-lightBlue-800"
                            onClick={() => {
                                selectClient(client)
                            }}>
                        Update
                    </button>
                </Link>
            </td>
        </tr>
    )
};

export default ClientsListItem
