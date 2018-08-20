import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
@Component({
  selector: 'app-dolphin',
  templateUrl: './dolphin.page.html',
  styleUrls: ['./dolphin.page.scss']
})
export class DolphinPage implements OnInit {
  constructor(seo: SeoService) {
    seo.addTwitterCard(
      'Dolphins are magical!',
      'This is an Ionic Page about Dolphins and is SEO ready via Firebase Cloud Functions',
      'https://upload.wikimedia.org/wikipedia/commons/2/2d/Dolphin-Musandam_2.jpg'
    );
  }
  ngOnInit() {}
}
