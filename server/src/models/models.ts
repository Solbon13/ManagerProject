const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')
  
const Departament = sequelize.define('departament', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
})

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    patronymic: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
})

Departament.hasMany(User)
User.belongsTo(Departament)

const Task = sequelize.define('task', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT },
    progressTask: { type: DataTypes.STRING },
    dateEnd: { type: DataTypes.STRING },
})

const TaskList = sequelize.define('taskList', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT },
})

TaskList.hasMany(Task)
Task.belongsTo(TaskList)

const TaskUser = sequelize.define('taskUser', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasMany(TaskUser);
TaskUser.belongsTo(User)

Task.hasMany(TaskUser);
TaskUser.belongsTo(Task)

module.exports = {
    User,
    Departament,
    Task,
    TaskList,
    TaskUser
}