const {
  getUsersRepo,
  getUserRepo,
  createUserRepo,
  deleteUserRepo,
  updateUserRepo,
} = require("../repositories/userRepo");

const getUsers = async (req, res) => {
  try {
    const users = await getUsersRepo();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Error");
  }
};

const getUserById = async (req, res) => {
  console.log(req.body);
  try {
    const users = await getUserRepo(req.body);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Error");
  }
};

const createUser = async (req, res) => {
  try {
    const user = await createUserRepo(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("Error");
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await deleteUserRepo(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("Error");
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await updateUserRepo(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("Error");
  }
};

module.exports = { getUsers, getUserById, createUser, deleteUser, updateUser };
