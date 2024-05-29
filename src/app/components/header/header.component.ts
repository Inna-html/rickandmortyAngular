import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,
    MatButtonModule, MatMenuModule,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  // someMethod() {
  //   this.trigger.openMenu(menu);
  // }
  


  // menuBurger() {
      // document.querySelector('.header__main').classList.toggle('open')
  // }




  // const targetItem = e.target;

  //   if (targetItem.closest('.icon-menu')){
  //       document.documentElement.classList.toggle('menu-open');
  //   }



}





