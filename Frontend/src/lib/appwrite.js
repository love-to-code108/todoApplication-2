import { Client, Account , Databases} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('670d1186001e9df1159f'); 

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';
