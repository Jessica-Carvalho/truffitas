import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {
  email: string;
  constructor(private ls: LoginService) { }

  public recuperar() {
    this.ls.recuperar(this.email);
  }

  ngOnInit() {
  }

}
