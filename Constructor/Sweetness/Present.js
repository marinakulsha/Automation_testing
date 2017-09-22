let Present = function (name, weight) {
    this.name = name || "Happy_New_Year";
    this.weight = weight || "15";
    this.getName = function () {
        return this.name;
    };
        this.getWeight = function () {
            return parseInt(this.weight);
        };


};


Present.prototype.getType = function () {
    return "Podarok";
};

Present.prototype.toString = function () {
    return 'This sweetness\'s name is ' + this.getName() + '. The weight is ' + this.getWeight() + '. The type is ' + this.getType();
};

module.exports = Present;





