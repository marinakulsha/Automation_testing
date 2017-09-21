let Podarok = function (name, weight) {
    this.name = name || "Happy_New_Year";
    this.weight = weight || "15";
    return {
        getName: function () {
            return this.name;
        },
        getWeight: function () {
            return parseInt(this.weight);
        }
    };
};
Podarok.prototype.getType = function () {
    return "Podarok";
};

function Sweets(name, weight) {
    Podarok.apply(this, arguments);
};
Sweets.prototype = new Podarok();
Sweets.prototype.getType = function () {
return "Sweets";
};

function Drops(name, weight) {
    Podarok.apply(this, arguments);
};
Drops.prototype = new Podarok();

Drops.prototype.getType = function () {
    return "Drops";

};


function Chokolate(name, weight) {
    Podarok.apply(this, arguments);
};
Chokolate.prototype = new Podarok();

Chokolate.prototype.getType = function () {
    return "Chokolate";
};
let writeType = function (obj) {
    console.log("This Podarok has type " + obj.getType())

};

let weight = ["10", "15", "50", "100"];
let set = [];
for (let i = 0; i < 6; i++) {
    let sweet = new Sweets("Sweets " + (i + 1), weight[(i + 1) % weight.length]);
    set.push(sweet);
};

for (let i = 0; i < 4; i++) {
    let drops = new Drops("Drops " + (i + 1), weight[(i + 1) % weight.length]);
    set.push(drops);
};

for (let i = 0; i < 4; i++) {
    let chokolate = new Chokolate("Chokolate " + (i + 1), weight[(i + 1) % weight.length]);
    set.push(chokolate);
};
console.log(set)
writeType(set[0])
console.log (set[0].getName())

function calculateWeight(arr) {
    let total= 0
    arr.forEach(function(item){
        total = total+item.getWeight()
    });
    return total
}
console.log(calculateWeight(set))







