import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../../shared/frase.model';
import { FRASES } from './frases-mock'
 
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public resposta: string = "";
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  public atualizaRodada(){
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';    
  }

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
    
  }

  public atualizaResposta(resposta): void{
    this.resposta = resposta.target.value;   
  }

  verificarResposta(): void{
    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert("A traduçao está correta");

      //troca pergunta da rodada
      this.rodada++;
      this.progresso += 25;

      if(this.rodada === 4){
        this.encerrarJogo.emit("vitoria")
      }
      
      //atualiza objeto frase da rodada
      this.atualizaRodada();

    }else{
      alert("A traduçao esta incorreta");

      //diminuir tentativas
      this.tentativas--

      if(this.tentativas === -1){    
        this.encerrarJogo.emit("Derrota")
      }
    }
  }

}
