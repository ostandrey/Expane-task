import { observable, action, reaction} from "mobx";
import { createContext } from "react";
import request, {GraphQLClient} from "graphql-request/dist";
import {ADD_CLIENT_MUTATION, GET_CLIENTS_MUTATION, UPDATE_CLIENT_MUTATION} from "./client.mutitons";

export interface IClient {
    id?: string,
    firstName: string,
    lastName: string,
    phone: string,
    avatarUrl: string
}

const endpoint = "https://test-task.expane.pro/api/graphql";
const graphQLClient = new GraphQLClient(endpoint);


class ClientsStore {
    constructor() {
        reaction(() => this.clients, _ => console.log(this.clients.length));
    }

    @observable clients: IClient[] = [];
    @observable client: IClient | null = null;

    @action getClients = async () => {
        const { getClients: clients } = await request(endpoint, GET_CLIENTS_MUTATION);
        this.clients = clients;
    };

    @action addClient = (client: IClient) => {
        try {
            graphQLClient.request(ADD_CLIENT_MUTATION, client);
        }
        catch (e) {
            throw new Error(e)
        }
    };

    @action selectClient = (client: IClient) => {
        this.client = client
    };

    @action updateClient = (client: IClient) => {
        try {
            graphQLClient.request(UPDATE_CLIENT_MUTATION, client);
        }
        catch(e) {
            throw new Error(e)
        }
    };

    @action resetClient = async () => {
        this.client = null;
    }
}

export default createContext(new ClientsStore())
