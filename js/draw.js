const increment = 5;
const t = 200;

const buildDot = (id, color) => `<img src="../public/images/fighter.png" class='dot' id='dot-${id}' style='background-color:${color}'></div>`;
const buildDotDestructor = (id, color) => `<img src="../public/images/xwing.png" class='dot' id='dotImperio-${id}' style='background-color:${color}'></div>`;


const draw = () => {
    const n = document.getElementById('ndots').value;

    let dots = '';

    if(!isNaN(n)){
        for(i=0; i < n*increment; i++){
            dots += buildDot(i, 'rgb(15, 126, 160)');
        }
    }

    let drawDiv = document.getElementById('draw');

    drawDiv.innerHTML = dots;
};

const drawDestructor = () => {
    const n = document.getElementById('ndotsDestructor').value;

    let dots = '';

    if(!isNaN(n)){
        for(i=0; i < n*increment; i++){
            dots += buildDotDestructor(i, 'rgb(15, 126, 160)');
        }
    }

    let drawDiv = document.getElementById('drawDestructor');

    drawDiv.innerHTML = dots;
};

const delay = ms => new Promise(res => setTimeout(res, ms));

const detonated = async () => {
    const redDot = buildDot(-1, '#993333');
    const redDotDestructor = buildDotDestructor(-1, '#993333');

    let drawDiv = document.getElementById('draw');

    drawDiv.innerHTML += redDot;

    let drawDivDestructor = document.getElementById('drawDestructor');

    drawDivDestructor.innerHTML += redDotDestructor;
    
    const n = document.getElementById('ndots').value;

    let destroy;
    for(i=0; i < n*increment; i++){
        if(numAleatorio() > 50){        
            destroy = document.getElementById('dot-'+i);
            destroy.remove();
        }else{
            destroy = document.getElementById('dotImperio-'+i);
            destroy.remove();
        }
        await delay(t);
    }


};

const numAleatorio =  () =>{
    return Math.random() * (100);
};