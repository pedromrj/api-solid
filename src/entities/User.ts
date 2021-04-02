//import { uuid } from "uuidv4";
import { Document, Schema , Model, model } from "mongoose";

interface IUser extends Document {
    name: String;
    email: String;
    password: String;
};

// class User {
    
//     public readonly id: string;
//     public name: string;
//     public email: string;
//     public password: string;

//     constructor(props: Omit<User, 'id'>, id?: string ) {
//         Object.assign(this, props);

//         this.id = !id ? uuid() : id;
//     }
// }

const SchemaUser: Schema = new Schema({
    name: { type: String , require: true},
    email: { type: String , require: true},
    password: { type: String, require: true},
});

const User: Model<IUser> = model('User', SchemaUser);

export { IUser , User }