import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/sequelize";
import { Students } from "../students";

class Score extends Model {}
Score.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    subject: DataTypes.STRING,
    score: DataTypes.DECIMAL,
    student_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "scores",
  }
);
Score.belongsTo(Students, { constraints: true, foreignKey: "student_id" });

export { Score };
