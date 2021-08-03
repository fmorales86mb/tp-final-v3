import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { P2 } from '../home/pages/prueba/prueba.component';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  items$: Observable<P2[]>; 
  protected itemsCollection: AngularFirestoreCollection<P2>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection("prueba");
    this.items$ = this.itemsCollection.valueChanges({idField: 'id'});
    //console.log(this.items$);
  }

  public addItem(item:P2){
    this.itemsCollection.add(item);
  }

  public filter(filter:string){
    return this.itemsCollection.ref.where("tipoPrueba.tipo1", "==", 33).get();
  }
}
