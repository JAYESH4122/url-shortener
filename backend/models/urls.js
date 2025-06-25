const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Url = sequelize.define(
  "Url",
  {
    original_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    short_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
    tableName: "url",
  }
);

module.exports = Url;
