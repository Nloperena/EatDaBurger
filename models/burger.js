var orm = require("../config/orm.js")

var burger = {
    selectAll: function () {
        orm.selectAll();
    }, 
    insertOne: function() {
        orm.insertOne();
    }
}