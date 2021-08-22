import { Component } from '@angular/core';

import { DividaStateService } from '../core/divida-state.service';

@Component({
  selector: 'app-divida',
  templateUrl: './divida.component.html',
  styleUrls: ['./divida.component.scss'],
})
export class DividaComponent {
  vm$ = this.dividaStateService.vm$;

  constructor(private dividaStateService: DividaStateService) {}
}
