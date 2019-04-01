export const employeeCreation = (
    Employee,
    name,
    email,
    age,
    salary
) => new Promise((resolve, reject) => {
    Employee.create({
        name: name,
        email: email,
        age: age,
        salary: salary
    })
    .then((data) => {
        return resolve(data);
    })
});

export const companyCreation = (
    Company,
    tenant_name
) => new Promise((resolve, reject)=> {
    Company.create({
        tenant_name: tenant_name
    })
    .then((data) => {
        return resolve(data)
    })
})

export const getUser = (Employee, id) => new Promise((resolve, reject) => {
    Employee.findOne({
        where: {
            id: id
        }
    })
    .then((data) => {
        resolve(data);
    })
});


export const readEmployee = (Employee, id) => new Promise((resolve, reject) => {
    Employee.findOne({
        where: {
            id: id
        }
    })
    .then((Employee) => {
        return resolve(Employee);
    })
})

export const update = (Employee, id, dataToUpdate) => new Promise((resolve, reject) => {
    Employee.update(dataToUpdate, {
        where: {
            id: id
        }
    })
    .then((data) => {
        resolve(data);
    })
})


export const deleteEmp = (Employee, id) => new Promise((resolve, reject)=> {
    Employee.destroy({
        where: {
            id: id
        }
    })
    .then((data) => {
        resolve(data);
    })
})


export const mannager = (
    Mapping, 
    Eid, 
    Cid
) => new Promise((resolve, reject)=>{
    Mapping.create({
        is_manager: true,
        employeeId: Eid,
        companyId: Cid
    }).then((data)=>{
        return resolve(data);
    })
})