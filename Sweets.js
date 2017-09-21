const Present = require('./Present');
function Sweets(name, weight) {
    Present.apply(this, arguments);
};

Sweets.prototype = new Present();

Sweets.prototype.getType = function () {
    return "Sweets";
};
module.exports = Sweets;