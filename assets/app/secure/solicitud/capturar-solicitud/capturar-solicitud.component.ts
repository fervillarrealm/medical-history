import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SolicitanteComponent } from './solicitante.component';

@Component({
    selector: 'app-solicitud-capturar',
    providers: [SolicitanteComponent],
    templateUrl: './capturar-solicitud.component.html',
    styleUrls: ['capturar-solicitud.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class CapturarSolicitudComponent implements OnInit {

  solicitanteForm: FormGroup;
  viviendaForm:FormGroup;

    public handleEvent(solicitanteForm:any){
      
      console.log(solicitanteForm);
      
      this.solicitanteForm = this.formBuilder.group({
        solicitanteGroup: this.formBuilder.group(solicitanteForm), 
        viviendaGroup: this.formBuilder.group(this.viviendaForm)
      });
    }

  constructor(
    private solicitanteComponent: SolicitanteComponent,
    private formBuilder: FormBuilder
  ) { 

    this.viviendaForm = formBuilder.group({
      claTipoVivienda: 1,
      nomEstado: 'Nuevo León'
    });

  }

  ngOnInit(){
    
  }
 

  onClickEnviar(){
    console.log(this.solicitanteForm);
  }

}