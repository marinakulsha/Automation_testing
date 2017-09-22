const Present = require('../Present.js');
function Chokolate(name, weight) {
    Present.apply(this, arguments);
};
Chokolate.prototype = new Present();
Chokolate.prototype.getType = function () {
    return "Chokolate";
};
Chokolate.prototype.size = "big";

module.exports = Chokolate;