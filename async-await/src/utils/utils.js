const Sequelize = require("sequelize");
const AppInit = () => {
  const sequelize = new Sequelize(process.env.PG_CONNECTION_STRING, {
    dialect: "postgres",
    protocol: "postgres",
    logging: false,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  const EmployeeModel = sequelize.define(
    "employee",{
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
          type: Sequelize.STRING,
          notNull: true,
      },
      email: {
          type: Sequelize.STRING,
          notNull: true,
          isEmail: true,
          isLowercase: true
      },
      age: {
          type: Sequelize.STRING,
          notNull: true,
          min: 18,
          max: 60
      },
      salary: {
          type: Sequelize.INTEGER,
          notNull: true
      }
    }
);
const CompanyModel = sequelize.define(
  "company",{
    id:{
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    tenant_name:{
      type: Sequelize.STRING,
      notNull: true
    }
  }
);

const DeptModel = sequelize.define(
  "dept",{
    id:{
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    dept_name:{
      type: Sequelize.STRING,
      notNull: true
    }
  }
);

const MappingModel =  sequelize.define(
  "mapping",{
    is_manager:{
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }
)

CompanyModel.belongsToMany(EmployeeModel, {through:MappingModel});
EmployeeModel.belongsToMany(CompanyModel, { through: MappingModel });
  return {
    sequelize,
    EmployeeModel,
    CompanyModel,
    MappingModel
  };
};
export default AppInit;
