import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Meta, Title } from '@angular/platform-browser';

import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { GetCoffeeList, AddToCart } from '../../state/app.actions';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  @Select((state: AppApp) => state.app.coffeeList)
  list$;

  isFeatureRemixOn = environment.features.remix;

  constructor(
    private router: Router,
    private store: Store,
    private title: Title,
    private route: ActivatedRoute,
    private meta: Meta) {
    // minimal SEO: https://moz.com/blog/meta-data-templates-123
    // <meta name="description" content="Page description. No longer than 155 characters." />

    // <!-- Twitter Card data -->
    // <meta name="twitter:card" value="summary">

    // <!-- Open Graph data -->
    // <meta property="og:title" content="Title Here" />
    // <meta property="og:type" content="article" />
    // <meta property="og:url" content="http://www.example.com/" />
    // <meta property="og:image" content="http://example.com/image.jpg" />
    // <meta property="og:description" content="Description Here" />

    title.setTitle('coffee menu | crafty');
    console.log(route.snapshot.url.join('/'));
    meta.addTags([
      { name: 'description', content: 'crafty - the one stop coffee shop for the caffeine lover.' },
      { name: 'twitter:card', value: 'summary_large_image' },
      { name: 'twitter:image:src', content: 'https://ngxs-coffee.firebaseapp.com/assets/menu-hero.png' },
      { property: 'og:title', content: 'coffee menu | crafty' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: location.href },
      { property: 'og:image', content: '/assets/menu-hero.png' },
      { property: 'og:description', content: 'crafty - the one stop coffee shop for the caffeine lover.' },
    ], false);
  }

  ngOnInit() {
    this.store.selectOnce(x => x.app.coffeeList.length)
      .subscribe(x => {
        if (x) { return; }
        this.store.dispatch(new GetCoffeeList());
      });
  }

  addToCart(name: string) {
    this.store.dispatch(new AddToCart(name));
  }

  addToCartAndCheckout(name: string) {
    this.addToCart(name);
    this.router.navigateByUrl('/cart');
  }
}
