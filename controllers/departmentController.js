const { createDepartmentRepo } = require("../repositories/departmentRepo");

const createDepartment = async (req, res) => {
  try {
    const department = await createDepartmentRepo(req.body);
    res.status(200).send(department);
  } catch (error) {
    res.status(500).send("Error");
  }
};

module.exports = { createDepartment };
