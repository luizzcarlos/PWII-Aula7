import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world';
  foto = 'favicon.icon';
  peso = 0;
  altura = 0;
  
  exibir(){
    alert(this.title);
  }

  
  IMC(){
    let calculo = this.peso/(this.altura*this.altura);
      alert (calculo);
  }
}
