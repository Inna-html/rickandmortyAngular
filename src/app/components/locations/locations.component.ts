import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { ILocation } from '../../interfaces';
import { LocationsService } from '../../services/locations.service';
import { LocationComponent } from '../location/location.component';


@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, LocationComponent,
    MatIconModule, MatPaginatorModule, MatPaginator
  ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit {

  locations: ILocation[];
  filteredLocations: ILocation[];
  inputValue: string

  length: number;
  pageSize: number;
  pageIndex: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('inputValue') inputValueInput: any; 


constructor(
  public locationsService: LocationsService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.getLocation();
  }


  getLocation() {
    this.activatedRoute.queryParams.subscribe(({ page }) => {
      this.locationsService.getAll(page).subscribe(res => {
        this.length = res.info.count;
        this.locations = res.results;
        this.filteredLocations = this.locations;
      })
    })
  }


  handlePageEvent(e: PageEvent) {
    this.router.navigate([], { queryParams: { page: e.pageIndex + 1 } })

    console.log(e);
  }

  
  onSearchInputChange(value: string) {
    this.filteredLocations = this.locations.filter((location) =>
      location.name.toLowerCase().includes(value.toLowerCase()))
      
    if (!this.inputValue) {
      this.router.navigate(['/locations']);
    }
  }


  clearInput() {
    // Clear the input field
    this.inputValueInput.nativeElement.value = '';
  }

}
  
