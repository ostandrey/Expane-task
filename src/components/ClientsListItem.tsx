import React from "react";
import {Link} from "react-router-dom";
import {IClient} from "../store/ClientsStore";

type ClientsListItemProps = {
    client: IClient,
    selectClient: Function
}
const ClientsListItem = ({client, selectClient}: ClientsListItemProps) => {
    return (
        <li className="list-group-item list-group-item-action"
            aria-current="true"
            key={client.id}
        >
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
        </li>
    )
};

export default ClientsListItem
