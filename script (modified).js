let prompt = require('prompt');
const Sweets = require('./Sweets');
const Drops = require('./Drops');
const Chokolate = require('./Chokolate');

prompt.start();
console.log('Enter count elements');
prompt.get(['count'], function (err, result) {
    let count = parseInt(result.count)
    enter(0, count)
})

let set = [];
function enter(currentCount, count) {
    if(currentCount >= count){
        console.log(set);
        return
    }
    let properties =
        {   name: 'Choose',
            validator: /^[1-3]{1}$/,
            warning: 'There must be only numbers from 1 to 3'
        };

    console.log('Choose type: \n 1 - Sweets,\n 2 - Drops, \n 3 - Chokolate');
    prompt.get(properties, function (err, result) {
        if (err) {
            return onErr(err);
        }

        let choose = result.Choose
        console.log('Enter name and weight:');
        prompt.get(['name', 'weight'], function (err, result) {
            if (err) {
                return onErr(err);
            }

            switch (choose) {
                case '1':
                    set.push(new Sweets(result.name, result.weight));
                    break;
                case '2':
                    set.push(new Drops(result.name, result.weight));
                    break;
                case '3':
                    set.push(new Chokolate(result.name, result.weight));
                    break

            };
            console.log("This Present has type " + set[currentCount].getType())

            console.log("Total weight " + calculateWeight(set))
            enter(currentCount + 1, count);

        });
    });
}
function onErr(err) {
    console.log(err);
    return 1;
};

function calculateWeight(arr) {
    let total= 0
    arr.forEach(function(item){
        total = total+item.getWeight()
    });
    return total
}





