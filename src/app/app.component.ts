import { Component } from '@angular/core';

import { DividaStateService } from './core/divida-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dividas-vascao';
  divida$ = this.dividaStateService.dividas$;

  constructor(
    private dividaStateService: DividaStateService
  ) { }
}
