import { Model, DataTypes } from 'sequelize';
import sequelize from "../database.js";
import Etablissement from './Etablissement.js';

class Users extends Model{}

Users.init({
    mail: {
        type: DataTypes.TEXT,
        allowNull: false,
        // validate: {
        //     notEmpty: false,
        //     isEmail : false,
        // },
        set(value) {
            this.setDataValue('mail', value.toLowerCase());
        }
    },
    address: {
        type: DataTypes.TEXT,
    },
    role: {
        type: DataTypes.TEXT,
    },
    lastname: {
        type: DataTypes.TEXT,
    },
    firstname: {
        type: DataTypes.TEXT,
    },
    number: {
        type: DataTypes.TEXT,
    },
    password: {
        type: DataTypes.STRING,
    },
    isConfirmed: {
        type: DataTypes.BOOLEAN,
    }
}, {
    sequelize,
    modelName: 'Users',
    tableName: 'users'
});

// Users.hasMany(Etablissement, { as: 'etablissements', foreignKey: 'userId' });

export default Users;