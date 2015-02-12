/**
 * Created by k.allakhvierdov on 2/11/2015.
 */

var Validator = (function(){

    var _isValid = function(value, regexp){
        var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        var phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
        var urlPattern = /^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;

        var res;

        if (regexp == 'email'){
            res = value.match(emailPattern);
        } else if (regexp == 'uuid'){
            res = value.match(uuidPattern);
        } else if (regexp == 'phone'){
            res = value.match(phonePattern);
        } else if (regexp == 'url') {
            res = value.match(urlPattern);
        }

        if(res) {
            return true
        } else return false;
    }

    var isEmailValue = function(value){
       return _isValid(value, 'email');
    }

    var isUUID = function(value){
        return _isValid(value, 'uuid');
    }

    var isPhone = function(value){
        return _isValid(value, 'phone');
    }

    var isUrl = function(value){
        return _isValid(value, 'url');
    }

    return {
        isEmailValue: isEmailValue,
        isUUID: isUUID,
        isPhone: isPhone,
        isUrl: isUrl
    };

})();


console.log(Validator.isEmailValue('test@host.com'));
console.log(Validator.isPhone('456-34-34'));
console.log(Validator.isUUID('2de967e4-28cf-44d5-b4df-03a89756b50f'));
console.log(Validator.isUrl('http://site.com'));

console.log(Validator.isEmailValue('testhost.com'));
console.log(Validator.isPhone('456-344-34'));
console.log(Validator.isUUID('aaaaa2de967e4-28cf-44d5-b4df-03a89756b50f'));
console.log(Validator.isUrl('site.com'));