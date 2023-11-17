import config from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client);

    }
// account creation  Sign up
    async createAccount({email, password, name}){
        try {
           const userAccount =  await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login(email, password);
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // login 
    async login({email,password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }
// checking current user 
    async getCurrentAccount(){
        try {
            return await this.account.get();
        } catch (error) {
            // throw error;
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }
// log out

    async LogOut(){
        try {
            await this.account.deleteSessions(); //delete all the sessions
        } catch (error) {
            console.log("Appwrite service :: LogOut :: error", error);
        }
    }

}

const authService = new AuthService();

export default authService 