const db = require("../models/index");

const getUsersRepo = async () => {
  try {
    console.log("db", db.User)
    const users = await db.User.findAll({
      attributes: ["id", "firstName", "lastName", "departmentId", "projectId"],
    });
    return users;
  } catch (error) {
    console.log(error);
  }
};

const getUserRepo = async (userId) => {
  try {
    const user = await db.User.findAll({
      where: {
        id: userId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createUserRepo = async (userObj) => {
    console.log(userObj)
  try {
    const user = await db.User.create({
    id: userObj.id,
      firstName: userObj.firstName,
      lastName: userObj.lastName,
      departmentId: userObj.departmentId,
      projectId: userObj.projectId,
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const deleteUserRepo = async (reqId) => {
  try {
    const user = await db.User.destroy({
      where: {
        id: reqId,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const updateUserRepo = async (reqId, updatedObj) => {
  try {
    const user = await db.User.update(updatedObj, {
      where: {
        id: reqId,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsersRepo,
  getUserRepo,
  createUserRepo,
  updateUserRepo,
  deleteUserRepo};
