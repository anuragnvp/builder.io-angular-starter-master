import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuilderBlock } from '@builder.io/angular';
// import { BrandedPage } from 'src/app/models/branded/brandedPage';
// import { ClientList } from 'src/app/models/dtos/clientDTO/clientList';
// import { MailDTO } from 'src/app/models/dtos/mailDTO';
// import { Notes } from 'src/app/models/dtos/notes';
// import { UserWebStatDTO } from 'src/app/models/dtos/userWebStatDTO';
// import { Leads } from 'src/app/models/listing/leads';
// import { ActivityService } from 'src/app/services/activity.service';
// import { AdvertisingService } from 'src/app/services/advertising.service';
// import { BrandedService } from 'src/app/services/branded.service';
// import { ClientService } from 'src/app/services/client.service';
// import { LeadsService } from 'src/app/services/leads.service';
// import { MailService } from 'src/app/services/mail.service';
// import { UserService } from 'src/app/services/user.service';
// import { AuthService, NotificationService } from 'src/app/shared';
// import { StatsType } from 'src/app/shared/enums/statsType';
// import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-dynamic-landing-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // cid: string = '';
  // brandpage: BrandedPage = new BrandedPage();
  // isLoaded: boolean = false;
  // logoUrl: string = '';

  // display: boolean = false;
  // emailForm: UntypedFormGroup;
  // mailSeller: MailDTO;
  // noImagePath: string = "";

  constructor(
    // public _authService: AuthService,
    // public _clientService: ClientService,
    // public _advertisingService: AdvertisingService,
    // public _brandedService: BrandedService,
    // private _router: Router,
    // private fb: UntypedFormBuilder,
    // private _notificationService: NotificationService,
    // private _mailService: MailService,
    // private _activityService: ActivityService,
    // private _leadsService: LeadsService,
    // private _userService: UserService
  ) {
    // this.mailSeller = new MailDTO();
    // this.createForm();
    //this.noImagePath = environment.noImageAvailable;
  }
  ngOnInit() {
    // this.mailSeller.emailContent = "Hi,";
    // this.cid = Utils.getCookie('LeadCookieId');
    // if (this.cid != undefined && this.cid.length > 0 && !this.isLoaded) {
    //   this._brandedService.getBrandedPageByCookieId(this.cid)
    //     .subscribe({
    //       next: (response) => {
    //         if (response) {
    //           this.isLoaded = true;
    //           this.brandpage = response;
    //           this.logoUrl = response?.logo.files?.length > 0 ? response?.logo?.files?.find(x => x.isPrimary)?.uploadedLink : environment.noImageAvailable;
    //         }
    //       }, error: (error) => { }
    //     });
    // }
  }
  // createForm() {
  //   this.emailForm = this.fb.group({
  //     name: [this.mailSeller.name, [Validators.required]],
  //     email: [this.mailSeller.email, [Validators.required, Validators.pattern('^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$')]],
  //     phone: [this.mailSeller.phone, [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]],
  //     emailContent: [this.mailSeller.emailContent]
  //   });
  // }

  // sendMessage() {
  //   this.display = false;
  //   this.mailSeller = new MailDTO();
  //   this._notificationService.showMessage('info', true, 'Please wait...', 'Landing Page');
  //   this.mailSeller.email = this.emailForm.value.email;
  //   this.mailSeller.phone = this.emailForm.value.phone;
  //   this.mailSeller.name = this.emailForm.value.name;
  //   this.mailSeller.emailContent = this.emailForm.value.emailContent;
  //   this.mailSeller.invitedBy = this.brandpage.accountEmail;
  //   this.mailSeller.url = this._router.url;
  //   this.saveMarketingContact(this.mailSeller);
  //   this._mailService.SendEmailContact(this.mailSeller).subscribe({
  //     next: (res) => {
  //       this._notificationService.showMessage('success', true, 'The email is sent', 'profile');
  //       this.emailForm.reset();
  //       this.saveUserWebStats(this.brandpage.accountId, StatsType.ClickEmailcount);
  //       this.addLead(this.brandpage.brandPageUserType != 2 ? this.brandpage.contactInformation.primaryPhone : this.brandpage.corporateContactInformation.primaryPhone,
  //         StatsType.ClickEmailcount, this.brandpage.accountId, this.mailSeller.email, this.mailSeller.name, this.mailSeller.phone, this.mailSeller.emailContent);
  //       let note = `<a href='${this._router.url}' target='_blank'>Client emailed from Landing Page</a>`;
  //       this.addMarketingActivitySystemNote(this.mailSeller.email, note, this.brandpage.accountId);
  //     }, error: (err) => { }
  //   })
  // }
  // saveMarketingContact(mailDTO: MailDTO) {
  //   if (this.brandpage.accountId > 0) {
  //     let addContact = new ClientList();
  //     addContact.emailAddress = mailDTO.email;
  //     addContact.contactInformation.name = mailDTO.name;
  //     addContact.contactInformation.lastName = mailDTO.lastName;
  //     addContact.contactInformation.primaryPhone = mailDTO.phone;
  //     this._clientService.SaveContactByAccountId(addContact, this.brandpage.accountId).subscribe({
  //       next: (res) => {
  //       },
  //       error: (error: any) => {
  //         let errMsg = `${error.status} - ${error.statusText} - ${error.apiErrorMessage} - ${error.apiErrorCode}`;
  //         console.error(errMsg);
  //       }
  //     });
  //   }
  // }
  // getCid() {
  //   let cid = Utils.getCookie('LeadCookieId');
  //   return (cid.length > 0 ? '?cid=' + cid : '');
  // }
  // saveUserWebStats(accountId, type) {
  //   let userstat: UserWebStatDTO = new UserWebStatDTO();
  //   userstat.accountId = accountId;
  //   userstat.statsType = type;
  //   this._userService.saveUserWebStats(userstat).subscribe({
  //     next: (response) => {
  //     },
  //     error: (error: any) => {
  //       console.log('error on user web stat save');
  //     }
  //   });
  // }
  // addLead(clickedPhone: string, Action: StatsType, accountId: number, userEmail?: string, userName?: string, userPhone?: string, userMessage?: string) {
  //   if (userPhone == null) userPhone = localStorage.getItem('telephones');
  //   const userid = localStorage.getItem('sub');
  //   let list = new Leads();
  //   list.accountId = accountId;
  //   list.clickedPhone = clickedPhone;
  //   list.statsType = Action;
  //   list.userId = userid == undefined ? null : userid;
  //   list.streetAddress = '';
  //   list.city = '';
  //   list.landingForm = '';
  //   // list.landingForm = this.landingUrlField;
  //   list.inquiryDate = new Date();
  //   list.userMessage = userMessage;
  //   if (userName != null && userName != undefined) {
  //     var fullName = userName.split(" ");
  //     if (userName.split(" ").length > 0) {
  //       list.firstName = userName.split(" ")[0];
  //     }
  //     if (userName.split(" ").length > 1) {
  //       list.lastName = userName.split(" ")[1];
  //     }
  //   }
  //   list.userEmail = userEmail;
  //   list.userPhone = userPhone;
  //   list.state = '';
  //   list.zip = '';
  //   var res = this._leadsService.saveLead(list).subscribe({
  //     next: (response) => {
  //     }, error: (error: any) => {
  //       console.log(error.apiErrorMessage);
  //     }
  //   });
  //   if (res != null)
  //     return true;
  // }
  // addMarketingActivitySystemNote(email: string, note: string, accountId) {
  //   let noteObj = new Notes();
  //   noteObj.note = note;
  //   noteObj.noteDate = new Date();
  //   noteObj.createdBy = localStorage.getItem('username');
  //   let notes = [];
  //   notes.push(noteObj);
  //   this._activityService.addMarketingActivitySystemNote(notes, email, accountId).subscribe({
  //     next: (response) => {
  //     }
  //   });
  // }
}

BuilderBlock({
  tag: 'app-dynamic-landing-header',
  name: 'Header'
})(HeaderComponent);
