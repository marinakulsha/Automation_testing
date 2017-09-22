let podarok = {
    name: 'New_Years_present'
};

let myset = object(podarok);


function object(item){
function MyFunction(){};

MyFunction.prototype = item;
return new MyFunction();
}
console.log(myset.name);


