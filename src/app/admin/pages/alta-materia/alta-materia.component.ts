import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { MateriaService } from 'src/app/01-services/materia.service';
import { StorageService } from 'src/app/01-services/storage.service';
import { UserService } from 'src/app/01-services/user.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { IdModel } from 'src/app/02-models/idModel';
import { Materia } from 'src/app/02-models/materia';
import { Mensaje } from 'src/app/02-models/mensaje';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  user:User;
  mensaje:Mensaje;
  users:IdModel<User>[];
  docenteSeleccionado:IdModel<User>;
  public form: FormGroup;
  docenteEmail:string;
  file:File;

  constructor(private autService:AuthService, 
    private userService:UserService,
    private spinner: NgxSpinnerService,
    private bf:FormBuilder,
    private materiaService: MateriaService, 
    private router:Router,
    private storageService:StorageService) { 
    this.users=[];
    this.docenteEmail = "";
  }

  ngOnInit(): void {
    this.mensaje = null;
    this.spinner.show();

    this.initForm();
    this.user = this.autService.GetCurrentUser();
    
    // this.userService.getItemByFilter("rol", Rol.Profesor)
    // .then((querySnapshot)=>{
    //   querySnapshot.forEach((doc) => {
    //     let model:IdModel<User>={
    //       id:doc.id,
    //       model:doc.data()
    //     };
    //     this.users.push(model);        
    //   });            
    // })
    // .catch((err)=>{
    //   this.mensaje = {
    //     tipo:TipoMje.Danger,
    //     txt:"Ocurrió un error inesperado, vuelva a intentarlo más tarde."
    //   }
    //   console.log(err);
    // })
    // .finally(()=>{
    //   this.spinner.hide();
    // })
  }

  setDocente(docente:IdModel<User>){
    this.docenteSeleccionado = docente;
    this.docenteEmail = this.docenteSeleccionado.model.email;
  }

  async createMateria(){
    this.spinner.show();  

    let materia:Materia = {
      imgSrc: await this.uploadPhoto(this.file),
      docente: this.docenteSeleccionado.model,
      name: this.getName().value,
      cuatrimestre: this.getCuatri().value,
      cupo: this.getCupo().value,
      year: this.getYear().value,
    };

    this.materiaService.addItem(materia)
    .then(async(ref)=>{
      const model:IdModel<Materia> = {
        id:ref.id,
        model:materia
      };

      //await this.userService.setMateriaToUser(this.docenteSeleccionado.id, model);
      
      materia.docente = null;
      this.router.navigate(["admin/home"]);
    })
    .catch((err)=>{
      this.mensaje = {
        tipo:TipoMje.Danger,
        txt:"Ocurrió un error inesperado, vuelva a intentarlo más tarde."
      }
      console.log(err);
    })
    .finally(()=>{
      this.docenteSeleccionado = null;
      this.docenteEmail = "";
      this.spinner.hide();
    })
  }

  private async uploadPhoto(file:File) {  
    const filePath = new Date().getTime() + '-perfil';  
    const uploadTask = this.storageService.uploadFile(file, filePath);  

    return await(await uploadTask).ref.getDownloadURL();     
  }

  fileChangeEvent(e){
    this.file = e.target.files[0];
  }

  initForm(){
    this.form = this.bf.group({
      imgCtrl:['', [Validators.required]],
      nameCtrl:['', [Validators.required]],
      cuatriCtrl:['', [Validators.required]],
      cupoCtrl:['', [Validators.required, Validators.max(100), Validators.min(1), Validators.pattern("^[0-9]*$")]],
      yearCtrl:['', [Validators.required, Validators.max(2050), Validators.min(2000), Validators.pattern("^[0-9]*$")]],
      docCtrl:['',[Validators.required]]
    });
  }

  getImgCtrl(){return this.form.get('imgCtrl');}
  getName(){ return this.form.get('nameCtrl'); }
  getCuatri(){ return this.form.get('cuatriCtrl'); }
  getCupo(){ return this.form.get('cupoCtrl'); }
  getYear(){ return this.form.get('yearCtrl'); }
  getDoc(){ return this.form.get('docCtrl'); }
}
