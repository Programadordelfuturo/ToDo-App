const Users = require('./users.models');
const Tasks = require('./task.models');
const TasksCategories = require('./tasks_categories');
const Categories = require('./categories');
const Adresses = require('./adresses.models');

function initModels() {

  Adresses.belongsTo(Users, { as: 'resident', foreignKey: 'user_id'});
  Users.hasOne(Adresses, { as: 'home', foreignKey: 'user_id'});
  
  Tasks.belongsTo(Users, { as: 'author', foreignKey: 'user_id'});
  Users.hasMany(Tasks, { as: 'todo', foreignKey: 'user_id'});
  
  TasksCategories.belongsTo(Tasks, { as: 'todo', foreignKey: 'task_id'});
  Tasks.hasMany(TasksCategories, { as: 'categories', foreignKey: 'task_id'});

  TasksCategories.belongsTo(Categories, { as: 'categories', foreignKey: 'category_id'});
  Categories.hasMany(TasksCategories, { as: 'todos', foreignKey: 'category_id'})
}

module.exports = initModels;