
function MembershipNo(){
    //var x = document.getElementById("radioNO");
    //var y = document.getElementById("membertext");

   if (radioNO.checked ){
        membertext.style.display = "block";

    } else{
        membertext.style.display = "none";
    }
    

}

function checkSubmitType(){

    if (document.getElementById('radioME').checked){
        window.location = "";
    }

    else if (document.getElementById('radioSOME').checked){
        window.location = "";
    }
}