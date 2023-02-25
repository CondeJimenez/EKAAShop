import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class TypeDiscount extends Model {}

TypeDiscount.init(
  {
    name: {
      type: Dt.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: conn,
    modelName: "Type_Discount",
    timestamps: false,
  }
);
export default TypeDiscount;
