import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../../../_animations/index';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['navbar.component.css'],
    animations: [moveInLeft, fallIn, moveIn]
})

export class NavbarSecureComponent implements OnInit {

    private idUsuario: number;
    private nombreUsuario: string;
    private nomSucursal: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router){}

    ngOnInit(){
        var currentUser = JSON.parse(localStorage.getItem('currentUser'))[0];
        this.idUsuario = parseInt(currentUser['IdUsuario']);
        this.nombreUsuario = currentUser['NombreUsuario'] + ' ' + currentUser['ApellidoPaterno'];
    }

    goHome(){

        this.router.navigateByUrl("home");
    }

    onLogout(){
        localStorage.clear();
        this.router.navigateByUrl("login");
    }

}