import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface PostInstance extends Model{
    id: number,
    userfrom: string,
    userto: string,
    likes: number,
    postcontent: string
};

export const Posts = sequelize.define<PostInstance>('posts', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    userfrom: {
        type: DataTypes.STRING
    },
    userto: {
        type: DataTypes.STRING
    },
    likes: {
        type: DataTypes.INTEGER
    },
    postcontent: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'posts',
    timestamps: false
})