const Sequelize = require("sequelize");

const db = new Sequelize("ecommerce_sequelize", "root", "12345678", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        min: 0,
        max: 5,
    }
})
const User = db.define('users', {
    // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    timestemp: true

})
const Product = db.define('products', {
    // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 0.0
    },
    timestemp: true

});
// var db = {}

// db.User = sequelize.import(__dirname + "/routs/users.js");

// db.Product = sequelize.import(__dirname + "/routes/products.js");


// db.User.associate(db);
// db.Product.associate(db);


// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

db.sync()
    .then(() => console.log("database has been synced"))
    .catch((err) => console.log("error creating databases"))


exports = module.exports = {
    User
}
