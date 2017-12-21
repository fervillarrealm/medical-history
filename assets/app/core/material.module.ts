import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatChipsModule,
  MatTableModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatProgressBarModule,
  MatInputModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatLineModule,
  MatPaginatorModule,
  MatSliderModule,
  MatStepperModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTooltipModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSidenavModule,
  MatTabsModule,
} from "@angular/material";

import {MatNativeDateModule, MatRippleModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import {PortalModule} from '@angular/cdk/portal';

const MAT_MODULES  = [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatChipsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatLineModule,
    MatPaginatorModule,
    MatSliderModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTooltipModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatTabsModule,
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
  declarations: []
})
export class MaterialModule { }