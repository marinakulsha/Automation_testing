const Present = require('./Present');
function Chokolate(name, weight) {
    Present.apply(this, arguments);
};

Chokolate.prototype.getType = function () {
    return "Chokolate";
};
module.exports = Chokolate;