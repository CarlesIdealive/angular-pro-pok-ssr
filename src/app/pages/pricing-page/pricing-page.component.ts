import { isPlatformServer } from '@angular/common';
import { Component, PLATFORM_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css'
})
export class PricingPageComponent {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);


  ngOnInit(): void {
    this.title.setTitle('Prices Page');
    this.meta.updateTag( {name: 'description', content: 'Prices Page Description'});

    // if ( isPlatformServer(this.platform) ) {
    //   console.log('I am on the server');
    // }else {
    //   document.title = 'Prices Page';
    // }
    

  }


}
