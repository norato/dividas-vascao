import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Divida } from './divida.interface';
import { DividaService } from './divida.service';

interface DividaState {
  divida: Divida[];
  dividaTotal: number;
}

const initialState: DividaState = {
  divida: [],
  dividaTotal: 0,
};

export interface DividaStateViewModel {
  divida: Divida[];
  dividaTotal: number;
}

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
  dividaTotal$ = this.select((state: DividaState) => state.dividaTotal);

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

  private setDiviaTotal = this.updater(
    (state: DividaState, dividaTotal: number) => ({
      ...state,
      dividaTotal,
    })
  );

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

  private updateDividaTotal = this.effect((dividas$: Observable<Divida[]>) =>
    dividas$.pipe(
      map((dividas) => this.calcularDividaTotal(dividas)),
      tap((dividas) => this.setDiviaTotal(dividas))
    )
  )(this.dividas$);

  /**
   *
   * ViewModel
   *
   */

  vm$: Observable<DividaStateViewModel> = combineLatest([
    this.dividas$,
    this.dividaTotal$,
  ]).pipe(
    map(([divida, dividaTotal]) => ({
      divida,
      dividaTotal,
    }))
  );

  constructor(private dividaService: DividaService) {
    super(initialState);
    this.getDividas();
  }

  calcularDividaTotal(dividas: Divida[]): number {
    return dividas.reduce((acc: number, divida: Divida) => {
      const valor = this.parseMoney(divida.valorAReceber);
      return acc + valor;
    }, 0);
  }

  parseMoney(divida: string): number {
    const removedTrash = divida
      .replace('R$', '')
      .replace('.', '')
      .replace(',', '.')
      .trim();
    return parseFloat(removedTrash);
  }
}
