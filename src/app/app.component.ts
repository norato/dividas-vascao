import { Component } from '@angular/core';

import { DividaService } from './core/divida.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dividas-vascao';
  divida$ = this.dividaService.getDividas();

  constructor(
    private dividaService: DividaService
  ) { }
}
