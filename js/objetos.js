class MasoTipo{
    
    constructor(nombre){
        this.nombre=nombre;
        this.cartas=[];
    }
    
}

class Carta {
    constructor(tipo, numero, ruta){
        this.tipo=tipo;
        this.numero=numero;
        this.imagen=ruta+"/"+tipo+numero;
    }

}