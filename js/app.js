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
    return `
    <li>
      <p><b>${name}</b</p>
      <p>${skin_color}</p>
      <p>${gender}</p>
    </li>
  `;
      
};

const buildCharactersList=(data)=>{
    let characterList=document.createElement("div");
    if(data?.results?.length>0)
    {
        let allCharacters='';
        data.results.map((element)=>{
              allCharacters+=buildCharacter(element)
           }
        );
        characterList.innerHTML=allCharacters;
    }
    return characterList;
};

const drawCharacters = (data)=>{
    let currentCharacters=document.getElementById('characters');
    let newCharacters=buildCharactersList(data);

    currentCharacters.appendChild(newCharacters);
}

loadCharacters().then(data=>drawCharacters(data));
//loadCharacters().then(data => console.log(data));