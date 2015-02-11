/**
 * Created by k.allakhvierdov on 1/30/2015.
 */

//Create file: js-base/if-else.js in your “training” directory.
//    Write example of using if...else operator for checking numbers multiple 5:
//if condition is met - write to console “Correct number”
//in other case - write “Next number”
//
//Write example of using if...else operator for checking input parameter:
//    if parameter equal ‘post’ - write to console “New item created”
//if parameter equal ‘put’ - write to console “Item updated”
//in other cases - write to console “Check operation value!”

//---------------------------------------
var array = [2, 5, 7, 10, 23, 20, 23, 34, 12, 10, 5, 10];

var checkNumberMultiple5 = function(number) {
    if (number % 5 > 0) {
        console.log('Next number')
    } else {
        console.log('Correct number');
    }
}

for (var i in array){
    checkNumberMultiple5(array[i]);
}

//----------------------------------------
var checkParameter = function(parameter){
    if (parameter == "post") {
        console.log("New item created");
    } else if (parameter == "put"){
        console.log("Item updated")
    } else {
        console.log("Check operatin value!")
    }
}



checkParameter("post");
checkParameter("put");
checkParameter("delete");


