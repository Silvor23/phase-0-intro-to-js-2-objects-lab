// Write your solution in this file!
const employee={
    name: Abdullah,
    streetAddress: Bahelievler,
};
function updateEmployeeWithKeyAndValue(obj,key,value){
    return {
        ...obj,
        [key]:value,
    };
}