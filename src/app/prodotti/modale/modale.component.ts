import { Inject } from '@angular/core';
import {Component } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Prodotto } from 'src/app/shared/Prodotto';


@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.scss']
})
export class ModaleComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {prodotto : Prodotto}){
    
  }  

}
