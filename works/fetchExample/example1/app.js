document.querySelector("#button1").addEventListener("click", getTextFile);
document.querySelector("#button2").addEventListener("click", getJSON);
document.querySelector("#button3").addEventListener("click", getApi);


function getTextFile() {
    
    fetch("textFile.txt").then(response => response.text()).then(data => {
        document.getElementById("output").innerHTML += data;
    });
}

function getJSON() {
    
    fetch("app.json").then(function(response){
      return response.json();
    }).then(function(apps){


        let output = "<ul>";


        apps.forEach(function(app){
            output += `<li>İd: ${app.id} Description:${app.description} Name: ${app.name} </li>`
        })

        output += "</ul>";

        document.getElementById("output").innerHTML += output;

       // console.log(app);
    
    });
}

function getApi() {
    
    fetch("https://api.github.com/users").then(function(response){
      return response.json();
    }).then(function(users){


        let output = "<ul>";


        users.forEach(function(user){
            output += `<li>Kullanıcı Adi: ${user.login} </li>`
        })

        output += "</ul>";

        document.getElementById("output").innerHTML += output;

       // console.log(app);
    
    });
}