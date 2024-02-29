import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogConfirmComponent } from '../../shared/components/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatButtonModule, MatCardModule,TitleCasePipe, CurrencyPipe,MatIcon],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  @Input() food?:Food; 
  constructor (public serviceFood:FoodService, public dialog:MatDialog){
    
  }

  openDialog(deleteFood:Food) {
    const dialogRef = this.dialog.open(DialogConfirmComponent,{
      data:deleteFood
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        this.serviceFood.deleteFood(deleteFood);
      } 
    });
  }



}
