/*!

=========================================================
* Material Dashboard Angular - v2.6.0
=========================================================

* Product Page: /product/poc2
* Copyright 2021 Aishvarya Shrivastava ()
* Licensed under MIT ()

* Coded by Aishvarya Shrivastava

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
