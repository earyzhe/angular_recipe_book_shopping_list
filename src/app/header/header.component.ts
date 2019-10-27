import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MenuSelection } from '../models/menu_selections';
import { Print } from '../../utils/browser_log';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuSelection : EventEmitter<MenuSelection> = new EventEmitter<MenuSelection>()

  constructor(){ }

  ngOnInit() : void {
  }

  recipeButtonClicked() : void {
    Print.purple("Pressed recipe button");
    this.menuSelection.emit(MenuSelection.Recipe);
  }

  shoppingListButtonClicked() : void {
    Print.pink("Pressed the shopping list button");
    this.menuSelection.emit(MenuSelection.ShoppingList);
  }
}
