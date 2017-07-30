module.exports = (sequelize, DataType) => {

    const config = {
        tableName: 'cliente',
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
    };
    const Cliente = sequelize.define("Cliente", columns, config);

    

    return Cliente;
}

