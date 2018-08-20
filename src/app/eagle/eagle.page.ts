import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
@Component({
  selector: 'app-eagle',
  templateUrl: './eagle.page.html',
  styleUrls: ['./eagle.page.scss']
})
export class EaglePage implements OnInit {
  constructor(seo: SeoService) {
    seo.addTwitterCard(
      'Eagles soar!',
      'This is an Ionic Page about Eagles and is SEO ready via Firebase Cloud Functions',
      'https://upload.wikimedia.org/wikipedia/commons/1/17/Alaskan_Bald_Eagle_cruising_for_a_salmon_dinner.jpg'
    );
  }
  ngOnInit() {}
}
