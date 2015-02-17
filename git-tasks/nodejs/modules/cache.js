/**
 * Created by k.allakhvierdov on 2/13/2015.
 */
function Cache(){
    this.keys = [];
}


Cache.prototype.add = function(key, value){
    if (arguments.length != 2) {
        console.log('Parameter(s) missed.');
    } else {
        if (this.keys.length == 0) {
            this.keys.push({key: key, value: value});
            console.log('key added');
        }

        var counter = 0;
        for (var i in this.keys) {
            if (this.keys[i].key == key) {
                counter++;
            }
        }

        if (counter == 0) {
            this.keys.push({key: key, value: value});
            console.log('key added');
        }
    }
}


Cache.prototype.get = function(key) {
    if (arguments.length != 1) {
        console.log('Parameter missed.');
    } else {
        for (var i in this.keys) {
            if (this.keys[i].key == key) {
                console.log(this.keys[i].value);
                return(this.keys[i].value);
            }
        }
    }
}

Cache.prototype.delete = function(key){
    if (arguments.length != 1) {
        console.log('Parameter missed.');
    } else {
        for (var i in this.keys) {
            if (this.keys[i].key == key) {
                this.keys.splice(i, 1);
            }
        }
    }
}

Cache.prototype.update = function(key, value){
    if (arguments.length != 2) {
        console.log('Parameter(s) missed.');
    } else {
        for (var i in this.keys) {
            if (this.keys[i].key == key) {
                this.keys[i].value = value;
            }
        }
    }
}

// find(query)  // return array of {key: value} where finded search is substring “query” in values
Cache.prototype.find = function(query){
    var res = [];

    if (arguments.length != 1) {
        console.log('Parameter missed.');
        return false;
    } else {
        for (var i in this.keys) {
            if (this.keys[i].value.toString().indexOf(query) >= 0) {
                res.push(JSON.parse('{"'+this.keys[i].key+'":'+this.keys[i].value+'}'));
            }
        }
        return res;
    }
}

// calculate value length by key (if key not set - calculate sum of values length in all cache)
Cache.prototype.count = function(key){
    var res = 0;
    if (arguments.length > 0){
        for (var i in this.keys){
            if (this.keys[i].key == key) {
                console.log(this.keys[i].value.toString().length);
                return(this.keys[i].value.toString().length);
            }
        }
    } else {
        for (var i in this.keys){
            res += this.keys[i].value.toString().length;
        }
        console.log(res);
        return res;
    }
}

module.exports = Cache;