module.exports = (sequelize, DataType) => {

    const config = {
        tableName: 'produto',
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
        nome: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        descricao: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        preco: {
            type: DataType.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        
    };
    const Produto = sequelize.define("Produto", columns, config);

    Produto.associate = models => {
        Produto.belongsTo(models.Usuario);
    };


    return Produto;
}

