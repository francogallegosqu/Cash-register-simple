export class Producto{
    nombre:string;
    imgUrl:string;
    precio:number;
    cantidad:number;

    constructor(pNombre:string,pUrl:string,pPrecio:number){
        this.nombre=pNombre;
        this.imgUrl=pUrl;
        this.precio=pPrecio;
        this.cantidad=0;

    }
}