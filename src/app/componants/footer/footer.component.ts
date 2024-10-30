import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  copyrightYear = new Date().getFullYear();

  socialMediaLinks = [
    {
      icon: 'fab fa-facebook-f',
      url: 'https://www.facebook.com/'
},
{
      icon:'fa-brands fa-instagram',
       url :'https://www.instagram.com/'
},

{
  icon:'fa-brands fa-twitter',
   url :'https://www.twitter.com/'
},
{
  icon:'fa-brands fa-github',
   url :'https://www.github.com/'
},


  ];

}
