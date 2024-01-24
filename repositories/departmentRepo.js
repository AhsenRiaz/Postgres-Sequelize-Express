const db = require("../models/index");

const createDepartmentRepo = async (departmentObj) => {
  console.log(departmentObj);
  try {
    const department = await db.Department.create({
      id: departmentObj.id,
      departmentName: departmentObj.departmentName,
      phone: departmentObj.phone,
    });
    return department;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    createDepartmentRepo,
};
