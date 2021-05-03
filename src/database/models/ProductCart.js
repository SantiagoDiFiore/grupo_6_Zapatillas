module.exports = (sequelize, DataTypes) => {
    let alias = 'ProductCart';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        size: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING(100)
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {model: "User", key:"id"}
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {model: "Product", key:"id"}
        },
        amount: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'product_cart',
        timestamps: false
    };
    const ProductCart = sequelize.define(alias, cols, config)

    ProductCart.associate = function(models){
        // Relacion con Products
        ProductCart.belongsTo(models.Product,{
            as:"products",
            foreignKey:"product_id"
        });
        // Relacion con User
        ProductCart.belongsTo(models.User,{
            as:"user",
            foreignKey:"user_id"
        });
    }

    return ProductCart
}