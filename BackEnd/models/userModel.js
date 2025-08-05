// let users = []; // dynamic user list
// const mongoose = require('mongoose');




/*
const addUser = ({ name, id, dpt, rollNum }) => {
  const newUser = { name, id: String(id), dpt, rollNum }; // ensure id is string
  users.push(newUser);
  return newUser;
};



const getAllUsers = () => users;

const getUserById = (id) =>
  users.find(user => String(user.id) === String(id));

function updateUser(id, updates) {
  const index = users.findIndex(user => String(user.id) === String(id));
  if (index === -1) {
    console.error('❌ User not found for update:', id);
    return null;
  }

  users[index] = { ...users[index], ...updates };
  return users[index];
}

const deleteUser = (id) => {
  users = users.filter(user => String(user.id) !== String(id));
};



module.exports = mongoose.model('User', userSchema);

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser
};

*/




const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNum: { type: String, required: true },
  password: { type:String,rrquired: true },
});

module.exports = mongoose.model('User', userSchema);



