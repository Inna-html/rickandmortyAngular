// import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  // constructor(@Inject(DOCUMENT) private document: Document) { }

  goToUrl(): void {
    // this.document.location.href = ("url", "_blank") ;

    window.open("https://rickandmortyapi.com/documentation/#introduction", "_blank");
  }

  // goToUrlGit(): void {
  //   window.open("https://github.com/Inna-html", "_blank")
  // }

}
