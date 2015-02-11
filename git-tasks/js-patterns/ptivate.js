/**
 * Created by k.allakhvierdov on 2/11/2015.
 */

function Users(){
    var password;
    var salt = 'salt';
    var saltedPassword;

    function _saltPassword(pass){
        return pass.split('').reverse().join(salt);
    }

    this.saltPassword = function(pass){
        this.saltedPassword = _saltPassword(pass);
    }

}

Users.prototype.setPassword = function(pass){
    this.password = pass;
}

Users.prototype.checkPassword = function(pass){
    return this.password == pass;
}

Users.prototype.getSaltedPassword = function(){
    return this.saltedPassword;
}






var petya = new Users();
petya.setPassword('password');
console.log(petya.checkPassword('password'));
console.log(petya.checkPassword('asdf'));
petya.saltPassword('ka');
console.log(petya.getSaltedPassword());