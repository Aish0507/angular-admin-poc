import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { PredictiveMaintenanceComponent } from '../../predictive-maintenance/predictive-maintenance.component';
import { HistoricalDataComponent } from '../../historical-data/historical-data.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'predictive-maintenance', component: PredictiveMaintenanceComponent },
    { path: 'historical-data', component: HistoricalDataComponent }
];
