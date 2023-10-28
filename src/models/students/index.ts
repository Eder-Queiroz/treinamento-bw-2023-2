import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/sequelize";

class Students extends Model {}
Students.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "students",
  }
);

export { Students };
