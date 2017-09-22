const Present = require('../Present.js');
function Drops(name, weight) {
    Present.apply(this, arguments);
};

Drops.prototype = new Present();

Drops.prototype.getType = function () {
    return "Drops";
};
Drops.prototype.color = "green";
module.exports = Drops;