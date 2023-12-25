
const ajaxCalltemplate= (url,method)=>{
    var xhr=new XMLHttpRequest();
    xhr.open(method,url);
    xhr.send();
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4){
            var respose=xhr.responseText;
            var characterList = JSON.parse(respose);
            characterList.forEach(characters => {
                if(characters["image"]!=""){
                    onload(characters);
                }
            });
        }
    }
}
function onload(characters){
    let characterList=document.getElementById("character-card-list");
    let charactercard=document.createElement("div");
    charactercard.classList.add("character-card");

    let img=document.createElement("img");
    img.classList.add("character-image");
    img.setAttribute("src",characters["image"]);
    img.setAttribute("alt",characters["name"]);

    let name=document.createElement("h2");
    name.classList.add("character-name");        
    name.innerText=characters["name"];

    let house=document.createElement("p");
    house.classList.add("house-name");
    house.innerText=characters["house"];

    let actor=document.createElement("p");
    actor.classList.add("actor");
    actor.innerText=characters["actor"];

    charactercard.append(img,name,house,actor);
    // charactercard.appendChil(name);
    // charactercard.appendChild(house);
    // charactercard.appendChild(actor);          
    characterList.appendChild(charactercard);
}
let url="https://hp-api.onrender.com/api/characters";

ajaxCalltemplate(url,"GET");