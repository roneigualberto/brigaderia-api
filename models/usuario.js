module.exports = (sequelize, DataType) => {

    const config = {
        tableName: 'usuario',
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
        senha: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    };



    const Usuario = sequelize.define("Usuario",columns,config);

    Usuario.associate = models => {
        Usuario.hasMany(models.Produto);
    };


    return Usuario;
}