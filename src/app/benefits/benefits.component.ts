import { Component, Input, OnInit } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';
import { error } from 'console';
// import { BrandedPage } from 'src/app/models/branded/brandedPage';
// import { BrandedService } from 'src/app/services/branded.service';
// import { LandingService } from 'src/app/services/landing.service';
import { of } from 'rxjs';
// import { LandingPageUrl } from 'src/app/models/landing/landingPageUrl';
// import { Utils } from 'src/app/shared/utils';
// import { JobBenefitsLandingPage } from 'src/app/models/landing/jobBenefitsLandingPage';
@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  cid = '';
  // profileLandingPage: LandingPageUrl;
  // landingServices: JobBenefitsLandingPage[];
  // brandpage: BrandedPage=new BrandedPage();
   constructor(//private _landingService:LandingService,
  //   private _brandedService: BrandedService
    ) {
      //this.cid=Utils.getCookie('LeadCookieId');
     }

  ngOnInit(): void {
  //   if (this.cid != undefined && this.cid.length > 0) {
  //     this._brandedService.getBrandedPageByCookieId(this.cid)
  //       .subscribe({
  //         next: (response) => {
  //           if (response) {
  //             this.brandpage = response;
  //             if (this.brandpage?.benefitsAndPromotionalServices) {
  //               this._landingService.getJobBenefitsLandingPageByBenefitIdList(this.brandpage?.benefitsAndPromotionalServices?.toString())
  //                 .subscribe({
  //                   next: (response) => {
  //                     if (response) {
  //                       this.landingServices = response;
  //                     }

  //                   }, error: (error) => { }
  //                 });

  //             }
  //           }


  //         }, error: (error) => { }
  //       });
  //   }
   }
}
BuilderBlock({
  tag: 'app-benefits',
  name: 'Benefits',
})(BenefitsComponent);
