import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Divida, DividaResponse } from './divida.interface';

@Injectable({
  providedIn: 'root',
})
export class DividaService {
  constructor(private httpClient: HttpClient) {}

  getDividas(): Observable<Divida[]> {
    return this.httpClient
      .get<DividaResponse[]>(environment.dividaUrl)
      .pipe(
        map((dividas: DividaResponse[]) =>
          dividas.map((divida) => this.mapDivida(divida))
        )
      );
  }

  private mapDivida(divida: DividaResponse): Divida {
    return {
      nome: divida.nome,
      posicaoFuncao: divida['posicao-funcao'],
      tempoDeClube: divida['tempo-de-clube'],
      valorAReceber: divida['valor-a-receber'],
    };
  }
}
