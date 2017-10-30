export class Coracao{
    constructor(
        public cheio:boolean, 
        public urlCoracaoCheio: string = 'fa-heart', 
        public urlCoracaoVazio: string = 'fa-heart-o'){
    }

    public exibecoracao(): string{
        if(this.cheio){
            return this.urlCoracaoCheio
        }else{
            return this.urlCoracaoVazio
        }
    }

}