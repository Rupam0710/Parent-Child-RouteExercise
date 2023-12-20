import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ResearchDepartmentComponent } from './components/research-department/research-department.component'
import { BusinessComponent } from './components/business/business.component'
import { TechnologyComponent } from './components/technology/technology.component'
import { CatalystComponent } from './components/research-department/catalyst/catalyst.component'
import { OneReserachComponent } from './components/research-department/one-reserach/one-reserach.component'
import { MarketingComponent } from './components/business/marketing/marketing.component'
import { SalesComponent } from './components/business/sales/sales.component'
import { AccountsComponent } from './components/business/accounts/accounts.component'
import { SoftEngineeringComponent } from './components/technology/soft-engineering/soft-engineering.component'
import { PublicationComponent } from './components/technology/publication/publication.component'
import { CloudComputingComponent } from './components/technology/cloud-computing/cloud-computing.component'
import { DataTransformationComponent } from './components/technology/soft-engineering/data-transformation/data-transformation.component'
import { PassportComponent } from './components/technology/soft-engineering/passport/passport.component'
import { IssacComponent } from './components/technology/soft-engineering/issac/issac.component'
import { EcomComponent } from './components/technology/soft-engineering/ecom/ecom.component'
import { Dt1Component } from './components/technology/soft-engineering/data-transformation/dt1/dt1.component'
import { Dt2Component } from './components/technology/soft-engineering/data-transformation/dt2/dt2.component'
import { Dt3Component } from './components/technology/soft-engineering/data-transformation/dt3/dt3.component'
import { Pp1Component } from './components/technology/soft-engineering/passport/pp1/pp1.component'
import { Pp2Component } from './components/technology/soft-engineering/passport/pp2/pp2.component'
import { Pp3Component } from './components/technology/soft-engineering/passport/pp3/pp3.component'
import { Pp4Component } from './components/technology/soft-engineering/passport/pp4/pp4.component'
import { ErrorPageComponent } from './components/error-page/error-page.component'

const appRoutes: Routes = [
    { path: '', redirectTo: '/research', pathMatch: 'full' },
    {
        path: 'research', component: ResearchDepartmentComponent, children: [
            { path: 'catalyst', component: CatalystComponent },
            { path: 'oneResearch', component: OneReserachComponent },
        ]
    },
    {
        path: 'business', component: BusinessComponent, children: [
            { path: 'marketing', component: MarketingComponent },
            { path: 'sales', component: SalesComponent },
            { path: 'accounts', component: AccountsComponent },
        ]
    },
    {
        path: 'technology', component: TechnologyComponent, children: [
            {
                path: 'softEngineering', component: SoftEngineeringComponent, children: [
                    {
                        path: 'dataTransformation', component: DataTransformationComponent, children: [
                            { path: 'dt1', component: Dt1Component, },
                            { path: 'dt2', component: Dt2Component },
                            { path: 'dt3', component: Dt3Component },

                        ]
                    },
                    {
                        path: 'passport', component: PassportComponent, children: [
                            { path: 'pp1', component: Pp1Component, },
                            { path: 'pp2', component: Pp2Component },
                            { path: 'pp3', component: Pp3Component },
                            { path: 'pp4', component: Pp4Component },

                        ]
                    },
                    { path: 'issac', component: IssacComponent },
                    { path: 'ecom', component: EcomComponent },
                ]
            },
            { path: 'publication', component: PublicationComponent },
            { path: 'cloudComputing', component: CloudComputingComponent },
        ]
    },
    {
        path: 'not-found', component: ErrorPageComponent
    },

    {
        path: '**', redirectTo: '/not-found',
    }

]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [RouterModule]
})
export class AppRoutingModule {

}