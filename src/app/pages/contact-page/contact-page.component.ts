import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  private title = inject(Title);
  private meta = inject(Meta);


  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.meta.addTags([
      {name: 'description', content: 'Contac Page Description'},
      {name: 'og:title', content: 'Este es mi contac Page'},
      {name: 'keywords', content: 'Contact Page, idealive consulting SL'},
    ]
    );

  }


}
