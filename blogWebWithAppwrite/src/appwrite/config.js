import conf from '../conf/conf.js'
import { Client, Account, ID, Databases, Storage, Query} from "appwrite";

export class Service{
    Client = new Client();
    databases;
    bucket; // storage

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.Client);
        this.bucket = new Storage(this.client);
    }

    // post related services

    // post creation 

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }

    // update post 

    async updatePost(slug, {title,content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            )
            
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
        }
    }

    // delete post 

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false;
        }
    }

    // get post 
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug

            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
            return false;
        }
    }

    // get all active post 

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
           return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
            return false;
        }

    }

    // servises upload , delete and preview

    // file upload service method

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error)
            return false;
        }
    }

    // delete file 

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error)
            return false;
        }
    }

    // preview file 

    previewFile(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            console.log("Appwrite service :: previewFile :: error", error)
            return false;
        }
    }


}

const service = new Service()

export default service;