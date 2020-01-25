import { PreloadingStrategy, Route } from '@angular/router';
import { of, Observable } from 'rxjs';

export class BlacklistPreloadModules implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return !route.data || route.data && route.data.preload !== false ? load() : of(null);
  }
}
