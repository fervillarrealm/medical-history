import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { fadeInAnimation } from '../../../_animations/fade-in.animation';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, FormControlName } from '@angular/forms';
import { Uppercase } from '../../../_directives/helpers/uppercase.directive';
import { CatalogoService } from '../../../_services/catalogo.service';
import { Solicitante, SolicitanteModel } from './solicitante.model';

@Component({
    selector: 'app-solicitud-capturar-solicitante',
    templateUrl: './solicitante.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
    encapsulation: ViewEncapsulation.None,
    providers: [CatalogoService]
})
export class SolicitanteComponent implements OnInit {

  @Input() nacionalidades = [];
  @Input() estadosCiviles = [];
  @Input() colonias = [];
  @Input() localidades = [];
  
  @Output('solicitanteForm') solicitanteEmitter = new EventEmitter<FormGroup>();
  solicitanteForm: FormGroup;
  curp: AbstractControl;
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  
  ngOnInit(){
    
  }

  constructor(
    private formBuilder: FormBuilder, 
    private catalogoService: CatalogoService) { 
    
    this.solicitanteForm = formBuilder.group({
      curp: ['', 
          Validators.compose([
            Validators.pattern('^[A-Z]{1}[A-Z]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[A-Z]{3}[0-9A-Z]{1}[0-9]{1}$'),
            Validators.required
          ])
        ],
      nombreProspecto: ['',
          Validators.compose([
            Validators.required, Validators.maxLength(30)
          ])
        ],
      segNombreProspecto: ['',
        Validators.compose([
          Validators.required, Validators.maxLength(30)
        ])
      ],
      apellidoPatProspecto: ['',
        Validators.compose([
          Validators.required, Validators.maxLength(30)
        ])
      ],
      apellidoMatProspecto: ['',
        Validators.compose([
          Validators.required, Validators.maxLength(30)
        ])
      ],
      rfc: ['',
        Validators.compose([
          Validators.required, Validators.maxLength(13)
        ])
      ],
      ife: ['',
        Validators.compose([
          Validators.maxLength(30)
        ])
      ],
      claNacionalidad: -1,
      correoElectronico: ['',
        Validators.compose([
          Validators.required, Validators.maxLength(70), Validators.email
        ])
      ],
      claEstadoCivil: -1,
      noDependientes: '',
      telefonoParticular: '',
      telefonoCelular: ''
    });

    this.curp = this.solicitanteForm.controls['curp'];

    this.solicitanteForm.valueChanges.subscribe(data => {
      this.solicitanteEmitter.emit(data);
    })

    this.loadCombos();
  }

  loadCombos(){
    this.catalogoService.nacionalidadCmb()
    .subscribe(data => {
      this.nacionalidades = data;
    });

    this.catalogoService.estadoCivilCmb()
    .subscribe(data => {
      this.estadosCiviles = data;
    });

  }
}