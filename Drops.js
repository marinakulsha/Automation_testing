const Present = require('./Present');
function Drops(name, weight) {
    Present.apply(this, arguments);
};

Drops.prototype = new Present();

Drops.prototype.getType = function () {
    return "Drops";
};
module.exports = Drops;