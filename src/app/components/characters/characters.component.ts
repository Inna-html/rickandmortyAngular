import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';

import { ICharacter } from '../../interfaces';
import { CharactersService } from '../../services/characters.service';
import { CharacterComponent } from '../character/character.component';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, CharacterComponent,
    MatIconModule, MatPaginatorModule, MatPaginator
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
  
  
export class CharactersComponent implements OnInit {

  characters: ICharacter[];
  filteredCharacters!: ICharacter[];
  inputValue: string

  length: number;
  pageSize: 20;
  pageIndex: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('inputValue') inputValueInput: any; 


  constructor(
    public charactersService: CharactersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.getCharacter();
  }


  getCharacter() {
    this.activatedRoute.queryParams.subscribe(({ page }) => {
      this.charactersService.getAll(page).subscribe(res => {
        this.length = res.info.count;
        this.characters = res.results;
        this.filteredCharacters = this.characters;
      })
    })
  }


  handlePageEvent(e: PageEvent) {
    this.router.navigate([], { queryParams: { page: e.pageIndex + 1 } })

    console.log(e);
  }

  
  onSearchInputChange(value: string) {
    this.filteredCharacters = this.characters.filter((character) =>
      character.name.toLowerCase().includes(value.toLowerCase()))
      
    if (!this.inputValue) {
  this.router.navigate(['/characters']);
    }
  }


  clearInput() {
    // Clear the input field
    this.inputValueInput.nativeElement.value = '';
  }
  
}
  
