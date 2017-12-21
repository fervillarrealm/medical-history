import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SolicitudService } from '../../../_services/solicitud.service';

@Component({
    selector: 'app-solicitud-consultar',
    templateUrl: './consultar-solicitudes.component.html',
    styleUrls: ['consultar-solicitudes.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class ConsultarSolicitudesComponent implements OnInit {

  divisiones = [
    { claDivision: 1, nomDivision: 'NORTE' },
    { claDivision: 2, nomDivision: 'CENTRO' },
    { claDivision: 3, nomDivision: 'SUR' }
  ];

  constructor(private solicitudService: SolicitudService) { 
  }

  ngOnInit(){
    
  }

  onClickEnviar(){
    this.solicitudService.consultarSolicitudes();
  }
}