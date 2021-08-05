import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
    private collName:string;

    constructor(private afs: AngularFirestore, collName:string) {
      this.collName = collName;
    }

    public getAll(){      
      return this.afs.collection<T>(this.collName)
        .valueChanges({idField: "docId"});      
    }

    protected getAllOrderBy(field:string){
      return this.afs.collection<T>(this.collName, ref => ref.orderBy(field, "asc"))
        .valueChanges({idField: "docId"});
    }

    protected getAllOrderByOption(field:string, orderAsc:boolean){
      if(orderAsc){
        return this.afs.collection<T>(this.collName, ref => ref.orderBy(field, "asc"))
        .valueChanges({idField: "docId"});
      }else{
        return this.afs.collection<T>(this.collName, ref => ref.orderBy(field, "desc"))
        .valueChanges({idField: "docId"});
      }
    }

    protected getAllOrderBy2(field:string, field2:string){
      return this.afs.collection<T>(this.collName, ref => ref
        .orderBy(field, "asc")
        .orderBy(field2, "asc"))
        .valueChanges({idField: "docId"}); 
    }

    protected getByFilter(filterField:string, filterValue:any){
      return this.afs.collection<T>(this.collName, ref => ref 
        .where(filterField,'==',filterValue))
        .valueChanges({idField: "docId"});
    }

    protected getByFilterAndOrder(filterField:string, filterValue:any, orderfield:string, orderAsc:boolean){
      if(orderAsc){
        return this.afs.collection<T>(this.collName, ref => ref
          .where(filterField, '==', filterValue)
          .orderBy(orderfield, "asc"))
          .valueChanges({idField: "docId"});
      }else{
        return this.afs.collection<T>(this.collName, ref => ref
          .where(filterField, '==', filterValue)
          .orderBy(orderfield, "desc"))
          .valueChanges({idField: "docId"});
      }
    }

    public addItem(item: T) {
      return this.afs.collection<T>(this.collName).add(Object.assign({}, item));    
    }

    public setItemWithId(item: T, id:string) {
      return this.afs.collection<T>(this.collName).doc(id).set(Object.assign({}, item));    
    }
    
    public getItem(id:string){
      return this.afs.collection<T>(this.collName).doc(id).get();
    }

    public deleteItem(id:string){
      return this.afs.collection<T>(this.collName).doc(id).delete();
    }

    // protected setItemInSubColl(docId:string, subColl:string, item:IdModel<any>){
    //   return this.itemsCollection.doc(docId).collection(subColl).doc(item.id).set(item.model);
    // }

    // protected setItemsInSubColl(docId:string, subColl:string, items:any[]){
    //   let batch = this.afs.firestore.batch();
    //   let docRef = this.itemsCollection.doc(docId).ref;
      
    //   items.forEach(element => {
    //     batch.set(docRef.collection(subColl).doc(), element);        
    //   });
      
    //   return batch.commit();
    // }

    // protected getSubColl(docId:string, subColl:string){
    //   return this.itemsCollection.doc(docId).collection(subColl).ref.get();
    // }

    // protected deleteItemOfSubColl(docId:string, subColl:string, itemId:string){
    //   return this.itemsCollection.doc(docId).collection(subColl).doc(itemId).delete();
    // }

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
