/**
 * Created by k.allakhvierdov on 2/13/2015.
 */


keys = [];


exports.add = function(key, value){
    if (arguments.length != 2) {
        console.log('Parameter(s) missed.');
    } else {
        if (keys.length == 0) {
            keys.push({key: key, value: value});
            console.log('key added');
        }

        var counter = 0;
        for (var i in keys) {
            if (keys[i].key == key) {
                counter++;
            }
        }

        if (counter == 0) {
            keys.push({key: key, value: value});
            console.log('key added');
        }
    }
}


exports.get = function(key) {
    if (arguments.length != 1) {
        console.log('Parameter missed.');
    } else {
        for (var i in keys) {
            if (keys[i].key == key) {
                console.log(keys[i].value);
            }
        }
    }
}

exports.delete = function(key){
    if (arguments.length != 1) {
        console.log('Parameter missed.');
    } else {
        for (var i in keys) {
            if (keys[i].key == key) {
                keys.splice(i, 1);
            }
        }
    }
}

exports.update = function(key, value){
    if (arguments.length != 2) {
        console.log('Parameter(s) missed.');
    } else {
        for (var i in keys) {
            if (keys[i].key == key) {
                keys[i].value = value;
            }
        }
    }
}

// find(query)  // return array of {key: value} where finded search is substring “query” in values
exports.find = function(query){
    var res = [];

    if (arguments.length != 1) {
        console.log('Parameter missed.');
        return false;
    } else {
        for (var i in keys) {
            if (keys[i].value.toString().indexOf(query) >= 0) {
                res.push(JSON.parse('{"'+keys[i].key+'":'+keys[i].value+'}'));
            }
        }
        return res;
    }
}

// calculate value length by key (if key not set - calculate sum of values length in all cache)
exports.count = function(key){
    var res = 0;
    if (arguments.length > 0){
        for (var i in keys){
            if (keys[i].key == key) {
                console.log(keys[i].value.toString().length);
            }
        }
    } else {
        for (var i in keys){
            res += keys[i].value.toString().length;
        }
        console.log(res);
    }
}