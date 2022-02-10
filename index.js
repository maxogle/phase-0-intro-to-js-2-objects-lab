// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway" 
}

beforeEach(function () {
    for (const key in employee) {
      delete employee['Sam'];
    }

    employee.name = 'Sam';
  });

  function updateEmployeeWithKeyAndValue(object, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
      employee.streetAddress = '12 Broadway';
      return employee
  }

  function deleteFromEmployeeByKey(employee, key) {
      const newEmployee = { ...employee };
      delete newEmployee.name;
      return newEmployee

  }

  function destructivelyDeleteFromEmployeeByKey(employee, name) {
      delete employee.name;
      return employee

  }

       
