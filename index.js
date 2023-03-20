// Write your solution in this file!
const employee={
    name: "Abdullah",
    streetAddress: "Bahelievler",
};
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {
        ...employee,
        [key]:value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
  employee[key]=value;  
  return employee;
}
function deleteFromEmployeeByKey(employee,key){
    let temp= {...employee} ;
    delete temp[key];
    return temp;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}