// Write your solution in this file!
const employee={
    name: Abdullah,
    streetAddress: Bahelievler,
};
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {
        ...employee,
        [key]:value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    return employee.key=value;
}
function deleteFromEmployeeByKey(employee,key){
    let temp= {...employee} ;
    return delete temp.key;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    return delete employee.key;
}