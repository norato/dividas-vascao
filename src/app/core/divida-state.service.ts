import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tap } from 'rxjs/operators';

import { Divida } from './divida.interface';
import { DividaService } from './divida.service';

interface DividaState {
  divida: Divida[];
}

const initialState: DividaState = {
  divida: [],
};

@Injectable({
  providedIn: 'root',
})
export class DividaStateService extends ComponentStore<DividaState> {
  /**
   *
   * Updaters
   *
   */

  dividas$ = this.select((state: DividaState) => state.divida);

  /**
   *
   * Updaters
   *
   */

  private setDividas = this.updater((state: DividaState, divida: Divida[]) => {
    return {
      ...state,
      divida,
    };
  });

  /**
   *
   * Effects
   *
   */
  private getDividas = this.effect(() =>
    this.dividaService
      .getDividas()
      .pipe(tap((dividas) => this.setDividas(dividas)))
  );

  constructor(private dividaService: DividaService) {
    super(initialState);
    this.getDividas();
  }
}
