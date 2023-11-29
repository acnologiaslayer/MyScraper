// src/models/PropertyModel.ts
import { DataTypes, Model, Sequelize } from 'sequelize';

interface PropertyAttributes {
  id: number;
  address: string;
  city: string;
  zipCode?: string;
  county?: string;
  phone?: string;
  type?: string;
  capacity?: number;
}

export class Property extends Model<PropertyAttributes> implements PropertyAttributes {
  public id!: number;
  public address!: string;
  public city!: string;
  public zipCode?: string;
  public county?: string;
  public phone?: string;
  public type?: string;
  public capacity?: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initPropertyModel = (sequelize: Sequelize) => {
  Property.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      county: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Property',
      tableName: 'Properties', // Optional: Specify the table name if needed
    }
  );
};
