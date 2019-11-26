import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Trufa } from 'src/app/models/Trufa';
import { Observable } from 'rxjs';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-trufa',
  templateUrl: './trufa.page.html',
  styleUrls: ['./trufa.page.scss']
})
export class TrufaPage implements OnInit {
  trufas: any;
  trufaCorrente: Trufa;
  constructor(private fs: FirestoreService, private camera: Camera) {
    this.trufaCorrente = new Trufa();
    this.trufas = fs.listar();
  }

  ngOnInit() {}

  public editar(trufaEditado) {
    this.trufaCorrente = trufaEditado;
  }

  public gravar(): void {
    this.fs.gravar(this.trufaCorrente);
    this.trufaCorrente = new Trufa();
  }
  public apagar(uid: string) {
    this.fs.remover(uid);
  }
  public tirarFoto(uid: string) {
    this.camera
      .getPicture({
        quality: 10,
        destinationType: this.camera.DestinationType.DATA_URL
      })
      .then(foto => {
        this.fs.enviarFoto(foto, uid);
      });
  }
  aumentarQuantidade(trufa){
    this.trufaCorrente = trufa;
    this.trufaCorrente.quantidade++;
    this.gravar();
   
  }
  diminuirQuantidade(trufa){
    this.trufaCorrente = trufa;    
    this.trufaCorrente.quantidade--;
    this.gravar();
  }
}
