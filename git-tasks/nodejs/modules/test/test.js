/**
 * Created by k.allakhvierdov on 2/14/2015.
 */

var assert = require("assert");
var CacheMain = require("../cache.js");
var cache = new CacheMain();
var data = require("../data");

cache.add("test", 1000);

for (var i in data.results){
    for (var key in data.results[i]){
        console.log(data.results[i][key]);
        cache.add(key, data.results[i][key]);
    }
}

describe('#get()', function(){
    it('respond with matching records', function(){
        assert.equal(cache.get("test"), 1000);
    })
})

describe('#count()', function(){
    it('respond ', function(){
        assert.equal(cache.count(), 20);
    })
})


/*
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));

        })
    })
})
*/











