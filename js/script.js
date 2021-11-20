function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id = (profile.getId());
    var name =('Bem-Vindo: ' + profile.getName());
    var name2 =(profile.getName());
    var image = (profile.getImageUrl());
    var email = (profile.getEmail());
    document.querySelector("header").style.display="none"
    document.getElementById("name").innerHTML = name
    document.getElementById("imglogo").src = image
    document.getElementById("name2").innerHTML = name2
    document.getElementById("name3").innerHTML = "Olá," + name2 +", Eu sou um web developer,disign e tecnico em informatica, caso queira ver mais do meu trabalho voce pode ver meu INSTAGRAM"
    document.getElementById("email").innerHTML = email
    document.getElementById("id").innerHTML = id
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
        window.location.href="index.html"
  });
}
document.getElementById("active").addEventListener("click",function(){
    document.getElementById("profile").style.display="flex"
    setTimeout(() => {
        document.getElementById("profile").style.transform="translate(0,0)"
    }, 1);
})
document.getElementById("closed").addEventListener("click",function(){
    document.getElementById("profile").style.display="none"
    document.getElementById("profile").style.transform=""
})