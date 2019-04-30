class tablero {
    constructor(){
        this.casillas = [];
        for(var i = 1; i <=100;i++){
            this.casillas[i] = i;

        }
        this.randoms= []
        this.rd = [];
        for(i = 0; i<=10;i++){
            this.randoms[i] = Math.floor(Math.random() * ((100+1) - 1) + 1);
            this.rd.push(Math.floor(Math.random() * ((100+1) - 1) + 1));
            this.casillas[this.randoms[i]] = this.rd[i];
        }
        this.players = [];
    }

    addPlayer(p){
        this.players.push(p);
    }

   
    
    turno(){
        var p1 = this.players[0].lanzarDado() + this.players[0].posicion;
        this.verificar(p1,0);
        console.log("El jugador 1 está en la posición: "+this.players[0].posicion);
        var p2 = this.players[1].lanzarDado() + this.players[1].posicion;
        this.verificar(p2,1);
        console.log("El jugador 2 está en la posición: "+this.players[1].posicion);
        
    }

    verificar(p,n){
        if(p!=this.casillas[p]){
            if(p>this.casillas[p]){
                console.log("El jugador cayó en una serpiente")

            }else{
                console.log("El jugador cayó en una escalera");
                
            }
        }
        this.players[n].posicion = this.casillas[p];
    }
    
     
    verfinal(){
        for(i = 0; i<=1;i++){
            if(this.players[i].posicion >=100){
                return 1;
            }
        }
    }
}

class jugador{
    constructor(numero){
        this.posicion = 0;
        this.numero = numero;
    }

    lanzarDado(){
        let i = Math.floor(Math.random() * ((6+1) - 1) + 1)
        console.log("El dado marca"+i);
        return i;
    }

    set Posicion(p){
        this.posicion = p;
    }
    get Posicion(){
        return this.posicion;
    }
}


var juego = new tablero();
var p1 = new jugador(1);
var p2 = new jugador(2);
juego.addPlayer(p1);
juego.addPlayer(p2);
var final = 1;
var i = 2;
do{
    juego.turno();
    final = parseInt(prompt("Continuar? 1 - si, 0 - no"));
    console.log("---------------TURNO-"+i+"----------------")
    i++
    if(verfinal==1){
        final=0;
    }
}while(final!=0)

