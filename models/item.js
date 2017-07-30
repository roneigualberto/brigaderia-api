module.exports = (sequelize, DataType) => {

    const config = {
        tableName: 'item',
        underscored: true,
        paranoid: true,
        version: true
    };

    const columns = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantidade: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    };
    const Item = sequelize.define("Item", columns, config);

    Item.associate = models => {
        Item.belongsTo(models.Venda);
        Item.belongsTo(models.Produto);
    };


    return Item;
}

