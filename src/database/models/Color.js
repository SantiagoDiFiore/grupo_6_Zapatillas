module.exports = (sequelize, DataTypes) => {
    let alias = 'Color';
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
        tableName: 'colors',
        timestamps: false
    }
    const Color = sequelize.define(alias,cols,options);

    Color.associate = function(models){
        // Relacion con Product
        Color.hasMany(models.Product,{
            as:"products",
            foreignKey:"colors_id"
        });
    }

    return Color;
}