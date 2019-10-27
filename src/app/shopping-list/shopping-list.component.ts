import { Ingrediant } from './../models/ingrediant_model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[] = [
    new Ingrediant('Apples', 10),
    new Ingrediant('Pears', 4)
  ]

  constructor() {

   }

  ngOnInit() {
  }

}
