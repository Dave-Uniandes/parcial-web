export class Coffee {
    public id: number;
    public nombre: string;
    public tipo: string;
    public region: string;
    public sabor: string;
    public altura: number;
    public imagen: string;

    public constructor(id: number, nombre: string, tipo: string, region: string, sabor: string, altura: number, imagen: string){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.region = region;
        this.sabor = sabor;
        this.altura = altura;
        this.imagen = imagen;
    }
}
