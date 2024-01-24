const db = require("../models/index");

const createProjectRepo = async (projectObj) => {
  console.log(projectObj);
  try {
    const project = await db.Project.create({
      id: projectObj.id,
      projectName: projectObj.projectName,
      departmentId: projectObj.departmentId,
    });
    return project;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    createProjectRepo,
};
