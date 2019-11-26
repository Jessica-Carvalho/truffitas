import { Component, OnInit } from '@angular/core';
import { PrevisaoService } from 'src/app/services/previsao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  data: any;
  resultado: any;
  icone: string;
  constructor(private tempo: PrevisaoService, private rota: ActivatedRoute) {
    
   }

  ngOnInit() {
    
  }

  buscarPrevisao(){
    const cidade = this.data;
    console.log(cidade);
    this.tempo.buscarPrevisao(cidade).subscribe(resp => {
      this.resultado = resp;
      const codigo = resp.weather[0].icon;
      this.icone = `http://openweathermap.org/img/wn/${codigo}@2x.png`;
    });
  }

}
