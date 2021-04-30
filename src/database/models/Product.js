module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100)
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.INTEGER
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING(100)
        },
        size: {
            type: DataTypes.JSON
        },
        genre_id: {
            type: DataTypes.INTEGER  
        },
        brands_id: {
            type: DataTypes.INTEGER  
        },
        colors_id: {
            type: DataTypes.INTEGER  
        },
        category_id: {
            type: DataTypes.INTEGER  
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        // Relacion con Genres
        Product.belongsTo(models.Genre,{
            as:"genre",
            foreignKey:"genre_id"
        });
        // Relacion con Brands
        Product.belongsTo(models.Brand,{
            as:"brands",
            foreignKey:"brands_id"
        });
        // Relacion con Colors
        Product.belongsTo(models.Color,{
            as:"colors",
            foreignKey:"colors_id"
        });
        // Relacion con Category
        Product.belongsTo(models.Category,{
            as:"categories",
            foreignKey:"category_id"
        });
        Product.belongsToMany(models.User,{
            as:"user",
            through:"product_cart",
            foreignKey:"product_id",
            otherKey:"user_id",
            timestamps:false
        })
    }

    return Product
}