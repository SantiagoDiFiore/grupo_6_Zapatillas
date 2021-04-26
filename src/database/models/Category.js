module.exports = (sequelize, DataTypes) => {
    let alias = 'Category';
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
        tableName: 'categories',
        timestamps: false
    }
    const Category = sequelize.define(alias,cols,options);

    Category.associate = function(models){
        // Relacion con Product
        Category.hasMany(models.Product,{
            as:"products",
            foreignKey:"category_id"
        });
    }

    return Category;
}