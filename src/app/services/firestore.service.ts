import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Trufa } from '../models/Trufa';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {}

  public gravar(trufa: Trufa) {
    // verifica se tem id
    if (trufa.uid) {
      // trata-se de uma atualizacao
      const url = 'trufas/' + trufa.uid;
      console.log(trufa)
      this.firestore.doc(url).update({ ...trufa });
    } else {
      // cria uma nova entrada
      this.firestore.collection('trufas').add({ ...trufa });
    }
  }

  public remover(uid: string) {
    const url = 'trufas/' + uid;
    this.firestore.doc(url).delete();
  }

  public listar() {
    return this.firestore
      .collection('trufas')
      .snapshotChanges()
      .pipe(
        map(item =>
          item.map(trufa => {
            const uid = trufa.payload.doc.id;
            const dados = trufa.payload.doc.data();
            return { uid, ...dados };
          })
        )
      );
  }

  public enviarFoto(foto: string, trufaUid: string) {
    const url = `fotos/${trufaUid}/${new Date().getTime()}.jpg`;

    this.storage
      .ref(url)
      .putString(foto, 'base64', { contentType: 'image/jpg' })
      .then(resp => {
        console.log('envio finalizado!', resp);
      });
  }
}
