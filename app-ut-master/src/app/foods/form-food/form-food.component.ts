import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';

@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss',
})
export class FormFoodComponent {
  /*
  name:string;
  description:string;
  image:string;
  category:'drink' | 'food';
  price:number;*/

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    image: ['', [Validators.required]],
    category: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.min(2)]],
  });

  constructor(private formBuilder: FormBuilder, public serviceFood:FoodService) {}

  public sendData() {
    // Validando formulario
    if (this.form.status == 'VALID') {
      // Validando cada dato
      if (this.name?.value && this.description?.value && this.category?.value && this.image?.value && this.price?.value) {
        let price = parseInt(this.price.value);

        //Creando el objeto
        let comida: Food = {
          name: this.name.value,
          description: this.description.value,
          category: this.category?.value,
          image:this.image?.value,
          price: price
        };

        //Imprimiendo
        console.log(comida);
        this.serviceFood.addFood(comida);
        console.log(this.serviceFood.getAllFoods());
        
      }
  
    }
  }

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }
  get image() {
    return this.form.get('image');
  }
  get category() {
    return this.form.get('category');
  }
  get price() {
    return this.form.get('price');
  }

  getErros() {
    if (this.form.status == 'INVALID') {
      console.log(this.form.controls.description.hasError('minlenght'));
    }
  }
}
