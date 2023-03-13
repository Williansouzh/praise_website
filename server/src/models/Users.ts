import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface UsersInstance extends Model{
    id: number,
    name: string,
    age: number,
    post: string,
    email: string,
    password: string
};

export const Users = sequelize.define<UsersInstance>('users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    post:{
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    tableName:'users',
    timestamps: false
})