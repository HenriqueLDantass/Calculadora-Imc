export type Level = {
    title:string;
    color:string;
    icon:"down" | "up";
    imc:number[];
    yourIMC?:number;
}

export const levels: Level[] = [
    { title:"Margreza", color:"#96A3Ab", icon:"down", imc:[0,18.5] },
    { title:"Normal", color:"#0EAd69", icon:"up", imc:[18.6,24.9] },
    { title:"Sobrepeso", color:"#E2B039", icon:"down", imc:[25,30] },
    { title:"Obesidade", color:"#C3423F", icon:"down", imc:[30.1,99] }
];

export const calculateImc = (height:number,weight:number) =>{
    const imc = weight/(height*height);

    for(let i in levels){
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
            let levelCopy:Level ={...levels[i]}
            levelCopy.yourIMC = parseFloat(imc.toFixed(2)) ;
            return levelCopy;
        }
    }
    return null;
}