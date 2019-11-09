
function MembershipNo(){
    //var x = document.getElementById("radioNO");
    //var y = document.getElementById("membertext");

   if (radioNO.checked ){
        membertext.style.display = "none";

    } else{
        membertext.style.display = "block";
    }
    

}

function checkSubmitType(){

    if (document.getElementById('radioME').checked){
        window.location = "https://felicia7865.github.io/deco1016-website/formpg2.html";
    }

    else if (document.getElementById('radioSOME').checked){
        window.location = "https://felicia7865.github.io/deco1016-website/formpg2.1.html";
    }
}