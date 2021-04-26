module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(100)
        },
        lastName: {
            type: DataTypes.STRING(100)
        },
        birthday: {
            type: DataTypes.DATE
        },
        image: {
            type: DataTypes.STRING(100)
        },
        email: {
            type: DataTypes.STRING(100)
        },
        password: {
            type: DataTypes.STRING(100)
        },
        checkPassword: {
            type: DataTypes.STRING(100)
        },
        terms: {
            type: DataTypes.STRING(100)
        },
        offers: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        gender_id: {
            type: DataTypes.INTEGER  
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config)

    User.associate = function(models){
        // Relacion con Genders
        User.belongsTo(models.Gender,{
            as:"gender",
            foreignKey:"gender_id"
        });
    }

    return User
}