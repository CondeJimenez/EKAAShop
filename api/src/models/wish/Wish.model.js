import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class Wish extends Model {}

Wish.init({
name: {
  type: Dt.STRING(30),
  allowNull:false,
},
idUser: {
  type: Dt.INTEGER,
  allowNull:false
}
},{
sequelize:conn,
modelName: 'Wish',
timestamps:false
})

export default Wish;