module.exports = (sequelize, DataTypes) => {
    let alias = 'Brand';
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
        tableName: 'brands',
        timestamps: false
    }
    const Brand = sequelize.define(alias,cols,options);

    Brand.associate = function(models){
        // Relacion con Product
        Brand.hasMany(models.Product,{
            as:"products",
            foreignKey:"brands_id"
        });
    }

    return Brand;
}