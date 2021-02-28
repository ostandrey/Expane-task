import { observable, action, reaction} from "mobx";
import { createContext } from "react";
import request, {gql} from "graphql-request/dist";

export interface Client {
    id?: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    avatarUrl: string
}

const endpoint = "https://test-task.expane.pro/api/graphql";

class ClientsStore {
    constructor() {
        reaction(() => this.clients, _ => console.log(this.clients.length));
    }

    @observable clients: Client[] =[
        { id: '1', firstName: 'Rob', lastName: 'Robson', phoneNumber: '0532', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Rob_McElhenney_by_Gage_Skidmore_3.jpg'},
        { id: '2', firstName: 'Dob', lastName: 'Pobson', phoneNumber: '789789797', avatarUrl: 'https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2019/09/Kings_Of_Pain_Bio_Rob_Caveman_Avella.jpg?w=900'},
    ];

    @action getClients = async () => {
        const { getClients: clients } = await request(
            endpoint,
            gql`
        query {
          getClients {
            id
            firstName
            lastName
            phone
            avatarUrl
          }
        }
      `
        );
        console.log(clients);
        this.clients = clients;
    };

    @action addClient = (client: Client) => {
        this.clients.push({...client, id: String(this.clients.length)});
    }
}

export default createContext(new ClientsStore())
