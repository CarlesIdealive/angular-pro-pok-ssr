import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.addTags([
      {name: 'description', content: 'About Page Description'},
      {name: 'og:title', content: 'Este es mi About Page'},
      {name: 'keywords', content: 'About Page, Carles Labraña, Angular SEO'},
    ]
    );

  }




}
