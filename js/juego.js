let maso=[];
let rutaImagenes="img";
let viejas=[];

function crearCartas(nombre){

    var tipo=new MasoTipo(nombre);
    for(let i=0;i<14;i++){//crear diamantes
        let carta=new Carta(nombre,i,rutaImagenes)
        tipo.cartas.push(carta);
    }
    maso.push(tipo);
    
}
function buscarViejo(buscar){
    let resultado=viejas.find();
    console.log( resultado );
}

function SeleccionarCartas(){
    let tipo=0;
    let numero=0;
    let nombre="";
    //do{
        tipo=Math.trunc(Math.random()*4);
        numero=Math.trunc(Math.random()*13);
        nombre=tipo+" "+numero;
        console.log("SeleccionarCartas "+ nombre);
        buscarViejo(nombre);
    //}while(!viejas.find(nombre));
    
    viejas.push(nombre);
    return maso[tipo].cartas[numero];
}

console.log("cargado");

crearCartas("Diamantes");
crearCartas("Corazones");
crearCartas("Trevol");
crearCartas("Picas");


for(let i=0;i<5;i++){
    let seleccion=SeleccionarCartas()
    console.log("carta seleccionada " +seleccion.tipo+" "+seleccion.numero);
}


console.log("usadas "+viejas);

/*
//console.log("maso "+maso[0].cartas.length);
let temporal=maso[0].cartas;
console.log("maso "+temporal.length);
for(let i=0;i<temporal.length;i++){
    let carta=temporal[i];
    console.log("carta "+carta.tipo+carta.numero);
}*/