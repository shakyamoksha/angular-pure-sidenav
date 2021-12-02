import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './component/dashboard.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, children:
      [
        {path: '', redirectTo: 'landing', pathMatch: 'full'},
        {path: 'landing', loadChildren: () => import('../components/landing/landing.module').then(m => m.LandingModule)},
        {path: 'analytics', loadChildren: () => import('../components/analytics/analytics.module').then(m => m.AnalyticsModule)},
        {path: 'category', loadChildren: () => import('../components/category/category.module').then(m => m.CategoryModule)},
        {path: 'chart', loadChildren: () => import('../components/chart/chart.module').then(m => m.ChartModule)},
        {path: 'explore', loadChildren: () => import('../components/explore/explore.module').then(m => m.ExploreModule)},
        {path: 'history', loadChildren: () => import('../components/history/history.module').then(m => m.HistoryModule)},
        {path: 'modules', loadChildren: () => import('../components/modules/modules.module').then(m => m.ModulesModule)},
        {path: 'posts', loadChildren: () => import('../components/posts/posts.module').then(m => m.PostsModule)},
        {path: 'setting', loadChildren: () => import('../components/setting/setting.module').then(m => m.SettingModule)}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
