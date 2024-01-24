const { createProjectRepo } = require("../repositories/projectRepo");

const createProject = async (req, res) => {
  try {
    const project = await createProjectRepo(req.body);
    res.status(200).send(project);
  } catch (error) {
    res.status(500).send("Error");
  }
};

module.exports = { createProject };
