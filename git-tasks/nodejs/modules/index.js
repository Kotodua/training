/**
 * Created by k.allakhvierdov on 2/13/2015.
 */

var data = require('./data.json');
var cache = require('./cache.js');



cache.add('key11', 2034);
cache.get('key11');

for (var i in data.results){
    for (var key in data.results[i]){
        console.log(data.results[i][key]);
        cache.add(key, data.results[i][key]);
    }
}

cache.count();