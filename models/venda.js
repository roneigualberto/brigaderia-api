module.exports = (sequelize, DataType) => {

    const config = {
        tableName: 'venda',
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
        dataRealizacao: {
            type: DataType.DATE,
            allowNull: false,
            field:'data_realizacao',
            validate: {
                notEmpty: true
            }
        },
        situacao: {
            type: DataType.ENUM,
            values: ['PENDENTE', 'PAGA']
        }
    };
    const Venda = sequelize.define("Venda", columns, config);

    Venda.associate = models => {
        Venda.belongsTo(models.Usuario);
        Venda.belongsTo(models.Cliente);
        Venda.hasMany(models.Item);
    };


    return Venda;
}

