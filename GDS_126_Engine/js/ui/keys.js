/*-----------------------------
This Makes Keys Clickable
-----------------------------*/

//The keys object/associative array
/*--------------------------------------
Properties: 
    Boolean: keys.pressed 
        Used to check whether a key is being pressed or not. 
        It is a generic boolean and is independent of any specific key.
        It is not used in this engine by default
    Boolean: keys[String:KeyName] 
        Is added to the keys object or modified when a key is pressed/released
        Example:keys[`A`]
-----------------------------------------*/
var keys={pressed:false};

//Adds a key to the keys object or changes it's value to true or false
document.addEventListener("keydown", (e)=>{keys.pressed=true; keys[String.fromCharCode(e.keyCode)]=true});
document.addEventListener("keyup", (e)=>{keys.pressed=false; keys[String.fromCharCode(e.keyCode)]=false});

