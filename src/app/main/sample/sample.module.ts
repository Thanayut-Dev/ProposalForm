import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';
import { SearchModule } from '../search/search.module';
import { MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { ProposalModule } from '../proposal/proposal.module';

const routes = [
    {
        path: 'sample',
        component: SampleComponent,
        // canActivate: [AuthenGuardService]
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,

        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatButtonModule,

        SearchModule,
        ProposalModule
    ],
    exports: [
        SampleComponent
    ]
})

export class SampleModule {
}
