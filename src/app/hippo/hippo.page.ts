import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-hippo',
  templateUrl: './hippo.page.html',
  styleUrls: ['./hippo.page.scss']
})
export class HippoPage implements OnInit {
  isServer = true;
  constructor(seo: SeoService) {
    seo.addTwitterCard(
      'Hippos are rad!',
      'This is an Ionic Page about hippos and is SEO ready via Firebase Cloud Functions',
      'https://upload.wikimedia.org/wikipedia/commons/9/98/Hippo_at_dawn.jpg'
    );
  }

  ngOnInit() {}
}
