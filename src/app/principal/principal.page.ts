import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario} from '../usuarios/usuarios.model';

import { Profesor} from '../Profesor/profesor.model';
//import { LonginServicioService } from '../login/longin-servicio.service';
import { DataBaseService } from '../servicios/data-base.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  public listaProfesor: Profesor[] = [];
  private Profesor: Profesor;
  
  //loginService: LonginServicioService;
  dbService: DataBaseService;
  

  constructor(private activateRoute: ActivatedRoute, 
    //private loginServices: LonginServicioService, 
    private dbServices:DataBaseService) { 
      //this.loginService=this.loginServices;
      this.dbService=this.dbServices;
    }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
    paramMap=>{
      const idContactoRecibido=paramMap.get('NombreUsuario');
      alert(idContactoRecibido); 
      this.dbServices.getDatabaseState().subscribe(rdy => {
        if (rdy) {
          this.dbServices.getNombreUsuario(idContactoRecibido).then(rs => {
            this.Profesor = rs;            
          });
        }
      });    
      }
    );
    
  }

  ionViewWillEnter() {
    //this.listaProfesor=this.loginService.getProfesores(); 
  }
}
