//const { localeData } = require("moment");

const URI_API="https://swapi.dev/api/";
const loadCharacters=()=>fetch(URI_API+"people")
.then(response=>response.json());

/*const buildCharacter = (($name)=>{
   return '<li>
     <p><b><${name}</b></p>
     <p><b><${skin_color}</b></p>
     <p><b><${gender}</b></p>
     </li> 
     '
});*/

const buildCharacter = ({name, skin_color,gender }) => {
   var tr=document.createElement("TR");
   var td1=document.createElement("TD");
   var td2=document.createElement("TD");
   var td3=document.createElement("TD");
   td1.innerHTML=`${name}`;
   td2.innerHTML=`${skin_color}`;
   td3.innerHTML=`${gender}`;
   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3); 
   return tr
    /*`<tr>
      <td ><b>${name}</b</td>
      <td >${skin_color}</td>
      <td ">${gender}</td>
    </tr>`*/
  ;
      
};

const buildCharactersList=(data)=>{
    let characterList=document.createElement("table");
    characterList.classList.add("blueTable");
    var caption=document.createElement("caption");
    caption.innerHTML="Personajes";
    characterList.appendChild(caption);
    
    
    if(data?.results?.length>0)
    {
        let allCharacters=[];
        data.results.map((element)=>{
              allCharacters.push(buildCharacter(element))
           }
        );
        var thead=document.createElement('thead');
       
        characterList.appendChild(thead);
       
        thead.appendChild(document.createElement("th")).appendChild(document.createTextNode("Nombre"));
        thead.appendChild(document.createElement("th")).appendChild(document.createTextNode("Color de la piel"));
        thead.appendChild(document.createElement("th")).appendChild(document.createTextNode("Género"));
        
        characterList.appendChild(thead);
        
        for(var i=0;i<allCharacters.length;i++)
        {
          characterList.appendChild(allCharacters[i]);
        }
    }
    return characterList;
};

const drawCharacters = (data)=>{
    document.getElementById("cargando").style.display = "none";
    let currentCharacters=document.getElementById('characters');
    let newCharacters=buildCharactersList(data);

    currentCharacters.appendChild(newCharacters);
    var footer=document.createElement("footer");
    footer.innerHTML="Copyright 2022 We-hat-new-trilogy";
    footer.style="position:absolute;margin-bottom:1%";
    currentCharacters.appendChild(footer);
}

loadCharacters().then(data=>drawCharacters(data));
