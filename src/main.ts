/*!

=========================================================
* Material Dashboard Angular - v2.6.0
=========================================================

* Product Page: https://www.creative-tim.com/product/poc2
* Copyright 2021 Aishvarya Shrivastava (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/poc2/blob/master/LICENSE.md)

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