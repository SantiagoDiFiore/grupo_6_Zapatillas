module.exports = (sequelize, DataTypes) => {
    let alias = 'Gender';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100)
        }
    };
    let options = {
        tableName: 'genderusers',
        timestamps: false
    }
    const Gender = sequelize.define(alias,cols,options);

    Gender.associate = function(models){
        // Relacion con Product
        Gender.hasMany(models.User,{
            as:"users",
            foreignKey:"gender_id"
        });
    }

    return Gender;
}