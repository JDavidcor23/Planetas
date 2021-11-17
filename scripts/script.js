let nombrePlanetas = ["Tierra", "Marte", "jupiter"];

let distancia =[5, 3, '67'];

const tamanio = [];

// let i = 0;

// while(i<= nombrePlanetas.length -1){
//     console.log(i)
//     console.log(nombrePlanetas[i])
//     i +=1
// }

// for(let i = 0; i < nombrePlanetas.length; i++){
//     console.log(nombrePlanetas[i])
// }

// for(const key in nombrePlanetas){
//     console.log(nombrePlanetas[key])
// }

// for(const planetas of nombrePlanetas){
//     console.log(planetas)
// }

// for(const key in distancia){
//     if(distancia[key] == '5'){
//         console.log('Se encontró la distancia')
//     }
//     else{
//         console.log('No encontró la distancia')
//     }
// }

for(const key in distancia){
    if(distancia[key] === '5'){
        console.log('Se encontró la distancia')
    }
    else{
        console.log('No encontró la distancia')
    }
}