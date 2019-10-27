import { Print } from './../utils/browser_log';
import { MenuSelection } from './models/menu_selections';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-and-shopping-list';
  currentSelection: MenuSelection;

  constructor(){
    this.currentSelection = MenuSelection.Recipe;
  }

  setSelection(selection: MenuSelection) : void {
    Print.info("The incoming selection is " + selection.toString())
    this.currentSelection = selection;
  }

  recipesSelected() : boolean {
    return this.currentSelection === MenuSelection.Recipe;
  }
}
