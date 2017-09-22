const Present = require('../Present.js');
function Sweets(name, weight) {
    Present.apply(this, arguments);
};

Sweets.prototype = new Present();

Sweets.prototype.getType = function () {
    return "Sweets";
};
Sweets.prototype.filling = "cream";
module.exports = Sweets;