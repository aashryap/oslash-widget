import {users} from "../models/users";

export const getUsers = () => {
    return setTimeout(() => {
        return users;
    })
}