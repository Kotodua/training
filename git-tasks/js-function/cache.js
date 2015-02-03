/**
 * Created by k.allakhvierdov on 1/31/2015.
 */
//Practice
// Create file: js-function/cache.js in your “training” directory.
//    Implement in-memory cache as function-constructor with next methods:
//    add(key, value)  // for adding some data by key and value
// get(key)  // return value of stored data by key
// update(key, value)  // update value by key (if not exist - add new record to cache)
// delete(key)  // delete record by key
// find(query)  // return array of {key: value} where finded search is substring “query” in values
// count([key])  // calculate value length by key (if key not set - calculate sum of values length in all cache)
// Implement validation of input parameters:
//     add - check of duplicate key on adding
// add, get, update, delete - required key and/or value
//
// Example
//
//
// var cache = new Cache();
// cache.add(‘root’, 1024);
// cache.get(‘root’); // 1024

function Cache(){
    this.keys = [];
}

Cache.prototype.add = function(key, value){
    if (this.keys.length == 0) {
        this.keys.push({key: key, value: value});
        console.log('key added');
    }

    var counter = 0;
    for (var i in this.keys){
        if (this.keys[i].key == key) {
            counter++;
        }
    }

    if (counter == 0){
        this.keys.push({key: key, value: value});
        console.log('key added');
    }
}


Cache.prototype.get = function(key) {
    for (var i in this.keys) {
        if (this.keys[i].key == key) {
            console.log(this.keys[i].value);
        }
    }
}

Cache.prototype.delete = function(key){
    for (var i in this.keys){
        if (this.keys[i].key == key){
            this.keys.splice(i, 1);
        }
    }
}

Cache.prototype.update = function(key, value){
    for (var i in this.keys){
        if (this.keys[i].key == key) {
            this.keys[i].value = value;
        }
    }
}

// find(query)  // return array of {key: value} where finded search is substring “query” in values
Cache.prototype.find = function(query){
    var res = [];

    for (var i in this.keys){
        if (this.keys[i].value.toString().indexOf(query) >= 0) {
            res.push(this.keys[i]);
        }
    }

    return res;
}

// calculate value length by key (if key not set - calculate sum of values length in all cache)
Cache.prototype.count = function(key){
    console.log(key);
    var res = 0;
    if (arguments.length > 0){
        for (var i in this.keys){
            if (this.keys[i].key == key) {
                console.log(this.keys[i].value.toString().length);
            }
        }
    } else {
        for (var i in this.keys){
               res += this.keys[i].value.toString().length;
        }
        console.log(res);
    }
}





var cache = new Cache();

cache.add('root', 1024);
cache.add('root5', 1024);
cache.add('root2', 32);
cache.add('root4', 128);
cache.add('root2', 64);
cache.add('root5', 16);
cache.count();
cache.delete('root5');
cache.update('root', 2048);
cache.get('root');
cache.get('root2');
cache.get('root3');
cache.get('root5');
cache.get('root2');
cache.get('root4');
console.log(cache.find('2'));
//cache.get('root2');