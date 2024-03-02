
var password="";

var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+=\][;.,/?<>:{}'; //character list

Char_list_length=characters.length;

var button=document.getElementById("myButton");
button.addEventListener("click",generate);





function generate(){



    var myVal = document.getElementById("myText").value;// passing in # of characters
    //console.log("Hello",myVal);
    size=myVal;
    if (size>30){
    alert("ENTER PROPER PASSWORD LENGTH");
    return;
    }
    
    for(i=0;i<size;i++){
        randonum = Math.random()
        randonum=randonum*Char_list_length;
        randonum=Math.floor(randonum);
        //console.log(randonum);
        
        
        password+=characters[randonum];

      
     


    
    
}
    

out1=document.getElementById('output1').innerHTML=password;
password = "";




}


















