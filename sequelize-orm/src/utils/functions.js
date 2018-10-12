export const employeeCreation = (
    Employee,
    id,
    name,
    email,
    age,
    salary
) => new Promise((resolve, reject) => {
    Employee.create({
        id: id,
        name: name,
        email: email,
        age: age,
        salary: salary
    })
    .then((data) => {
        resolve(data);
    })
});

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