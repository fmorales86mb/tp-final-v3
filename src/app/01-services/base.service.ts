import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IdModel } from '../02-models/idModel';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

    protected itemsCollection: AngularFirestoreCollection<T>;
    items: Observable<T[]>; 
    snapshots:Observable<IdModel<T>[]>;   

    constructor(private afs: AngularFirestore) {
      
    }

    protected setCollection(collName:string){
      this.itemsCollection = this.afs.collection<T>(collName);
      this.items = this.itemsCollection.valueChanges();

      this.snapshots = this.itemsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const model:IdModel<T> = {
            id: a.payload.doc.id,
            model: a.payload.doc.data()
          };

          return model;
          // const data = a.payload.doc.data();
          // const id = a.payload.doc.id;
          // return { id, ...data };
        })));
    }

    protected setCollectionOrderBy(collName:string, field:string){
      this.itemsCollection = this.afs.collection<T>(collName, ref => ref.orderBy(field, "desc"));
      this.items = this.itemsCollection.valueChanges();
    }

    protected setCollFilter(valueFilter:string, collName:string, field:string, filterField:string){
      this.itemsCollection = this.afs.collection<T>(collName, ref => ref
        .where(filterField, '==', valueFilter)
        .orderBy(field, "desc"));
      this.items = this.itemsCollection.valueChanges();
    }
  
    getItemByFilter(campo:string, value:any){
      return this.itemsCollection.ref.where(campo,'==',value).get();
    }

    addItem(item: T) {
      return this.itemsCollection.add(Object.assign({}, item));    
    }

    setItemWithId(item: T, id:string) {
      return this.itemsCollection.doc(id).set(Object.assign({}, item));    
    }
    
    getItem(id:string){
      return this.itemsCollection.doc(id).get();
    }

    deleteItem(id:string){
      return this.itemsCollection.doc(id).delete();
    }

    protected setItemInSubColl(docId:string, subColl:string, item:IdModel<any>){
      return this.itemsCollection.doc(docId).collection(subColl).doc(item.id).set(item.model);
    }

    protected getSubColl(docId:string, subColl:string){
      return this.itemsCollection.doc(docId).collection(subColl).ref.get();
    }

    protected deleteItemOfSubColl(docId:string, subColl:string, itemId:string){
      return this.itemsCollection.doc(docId).collection(subColl).doc(itemId).delete();
    }

    /*
    < menor que
    <= menor o igual que
    == igual que
    > mayor que
    >= mayor que o igual que
    != no igual a
    array-contains
    array-contains-any
    in
    not-in

    this.service.items.subscribe((items) =>{
      // array de json
      console.log(items);
    });

    this.peliculaService.getItemByFilter("campo", valor).then((querySnapshot)=>{
      querySnapshot.forEach((doc) => {        
        console.log(doc.id, " => ", doc.data());        
      });            
    }).catch((err)=>{
      console.log(err);
    });

    */
}
