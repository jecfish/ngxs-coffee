import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private _destroy$ = new Subject();

  constructor(router: Router, meta: Meta) {
    router.events.pipe(
      takeUntil(this._destroy$)
    ).subscribe(event => {
      if (!(event instanceof NavigationStart)) {
        return;
      }

      const tags = [
        'name="description"',
        'name="twitter:card"',
        'name="twitter:image"',
        'name="twitter:image:src"',
        'property="og:title"',
        'property="og:type"',
        'property="og:url"',
        'property="og:image"',
        'property="og:description"'
      ];

      tags.forEach(x => meta.removeTag(x));

    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
