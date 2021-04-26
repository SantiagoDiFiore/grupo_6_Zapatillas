module.exports = (sequelize, DataTypes) => {
    let alias = 'Genre';
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
        tableName: 'genresproducts',
        timestamps: false
    }
    const Genre = sequelize.define(alias,cols,options);

    Genre.associate = function(models){
        // Relacion con Product
        Genre.hasMany(models.Product,{
            as:"products",
            foreignKey:"genre_id"
        });
    }

    return Genre;
}