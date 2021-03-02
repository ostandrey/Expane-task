import { observable, action, reaction} from "mobx";
import { createContext } from "react";
import request, {GraphQLClient, gql} from "graphql-request/dist";

export interface Client {
    id?: string,
    firstName: string,
    lastName: string,
    phone: string,
    avatarUrl: string
}

const endpoint = "https://test-task.expane.pro/api/graphql";
const graphQLClient = new GraphQLClient(endpoint);
const CREATE_CLIENT_MUTATION = gql`
    mutation updtClient(
    $id: ID!,
    $firstName: String!, 
    $lastName: String!,
    $phone: String!,
    $avatarUrl: String!,
    ) {
      updateClient( 
      id: $id,
      firstName: $firstName, 
      lastName: $lastName,
      phone: $phone,
      avatarUrl: $avatarUrl,
      ) {
        id
        firstName
        lastName
        phone
        avatarUrl
      }
    }
`;

class ClientsStore {
    constructor() {
        reaction(() => this.clients, _ => console.log(this.clients.length));
    }

    @observable clients: Client[] =[
        { id: '1', firstName: 'Rob', lastName: 'Robson', phone: '0532', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Rob_McElhenney_by_Gage_Skidmore_3.jpg'},
        { id: '2', firstName: 'Dob', lastName: 'Pobson', phone: '789789797', avatarUrl: 'https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2019/09/Kings_Of_Pain_Bio_Rob_Caveman_Avella.jpg?w=900'},
    ];

    @observable client: Client | null = null;

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
    };

    @action selectClient = (client: Client) => {
        this.client = client
    };

    @action updateClient =  async (client: Client) => {
        const data = await graphQLClient.request(CREATE_CLIENT_MUTATION, client);
        console.log(data)
    }
}

export default createContext(new ClientsStore())
