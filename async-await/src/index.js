import AppInit from './utils/utils';
import { successMessage, errorMessage } from './utils/responses';
import { 
    employeeCreation,
    getUser,
    readEmployee,
    update,
    deleteEmp, 
    companyCreation,
    mannager
} from "./utils/functions";
let Employee = null;
let Company = null;
let Mapping = null;

export const createTenant = async(event, context,callback) => {
    const {
        sequelize,
        EmployeeModel,
        CompanyModel,
        MappingModel
    } = await AppInit();
    try{
        Employee = await EmployeeModel.sync({ force: false });
        Company = await CompanyModel.sync({force:false});
        Mapping =  await MappingModel.sync({ force:false });
        if(event && event.body){
            const eventData = JSON. parse(event.body);
            if(eventData.name && eventData.email && eventData.age && eventData.salary && eventData.tenant_name)
            {
                const res = await getUser(Employee, eventData.id);
                if(res){
                    callback(null, errorMessage("Employee already exists!"));
                }
                else{
                    const res = await employeeCreation(Employee, eventData.name, eventData.email, eventData.age, eventData.salary);
                    const done = await companyCreation(Company, eventData.tenant_name);
                    const Eid = res.id;
                    const Cid = done.id;
                    const success = await mannager(Mapping, Eid, Cid);
                    callback(null, successMessage("Employee inserted successfully!", "", done.id));     
                }
            }
            else{
                callback(null, errorMessage("Incomplete data!"));
            }
        }
        else{
            callback(null, errorMessage("No event present!"));
        }
    } catch (e) {
        console.log(e);
        callback(null, errorMessage("fatalError", e.message));
    } finally {
        sequelize.close();
    }
}

export const searchEmployee = async(event, context, callback) => {
    const {
        sequelize,
        EmployeeModel 
    } = await AppInit();
    try{
        Employee = await EmployeeModel.sync({ force: false });
        if(event && event.body){
            const eventData = JSON. parse(event.body);
            if(eventData.id){
                const res = await readEmployee(Employee, eventData.id);
                callback(null, successMessage("Employee read successfully!", "", res));   
            }
            else{
                callback(null, errorMessage("Incomplete data!"));
            }
        }
        else{
            callback(null, errorMessage("No event present!"));
        }
    } catch (e) {
        console.log(e);
        callback(null, errorMessage("fatalError", e.message));
    } finally {
        sequelize.close();
    }
}

export const updateEmployee = async(event, context,callback) => {
    const {
        sequelize,
        EmployeeModel 
    } = await AppInit();
    try{
        Employee = await EmployeeModel.sync({ force: false });
        if(event && event.body){
            const eventData = JSON. parse(event.body);
            if(eventData.id){
                const emp = getUser(Employee, eventData.id);
                if(emp){
                    const dataToUpdate = eventData;
                    const res =await update(Employee, eventData.id, dataToUpdate);
                    callback(null, successMessage("Employee updated successfully!"));
                }
                else{
                    callback(null, errorMessage("Employee doesn't exists!"));
                }
            }
            else{
                callback(null, errorMessage("Incomplete data!"));
            }
        }
        else{
            callback(null, errorMessage("No event present!"));
        }
    } catch (e) {
        console.log(e);
        callback(null, errorMessage("fatalError", e.message));
    } finally {
        sequelize.close();
    }
}

export const deleteEmployee = async(event, context,callback) => {
    const {
        sequelize,
        EmployeeModel 
    } = await AppInit();
    try{
        Employee = await EmployeeModel.sync({ force: false });
        if(event && event.body){
            const eventData = JSON. parse(event.body);
            if(eventData.id){
                const res =  await deleteEmp(Employee, eventData.id);
                callback(null, successMessage("Employee deleted successfully!"));
            }
            else{
                callback(null, errorMessage("Incomplete data!"));
            }
        }
        else{
            callback(null, errorMessage("No event present!"));
        }
    } catch (e) {
        console.log(e);
        callback(null, errorMessage("fatalError", e.message));
    } finally {
        sequelize.close();
    }
}
