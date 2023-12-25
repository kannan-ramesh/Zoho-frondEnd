

/* <img src="harry.jpg" alt="Harry Potter" class="character-image">
        <h2 class="character-name">Harry Potter</h2>
        <p class="house-name">Gryffindor</p>
        <p class="actor">by Daniel Radcliffe</p> */
       
        function onload(){
            let charactercard=document.getElementById("character-card");
            let img=document.createElement("img");
            img.classList.add("character-image");
            img.setAttribute("src","harry.jpg");
            img.setAttribute("alt","Harry Potter");

            let name=document.createElement("h2");
            name.classList.add("character-name");
            name.innerText="Harry Potter";

            let house=document.createElement("p");
            house.classList.add("house-name");
            house.innerText="Gryffindor";

            let actor=document.createElement("p");
            actor.classList.add("actor");
            actor.innerText="by Daniel Radcliffe";

            charactercard.appendChild(img);
            charactercard.appendChild(name);
            charactercard.appendChild(house);
            charactercard.appendChild(actor);
            //doucument.getElementById("character-card").appendChild(charactercard);
        }
        window.onload();
