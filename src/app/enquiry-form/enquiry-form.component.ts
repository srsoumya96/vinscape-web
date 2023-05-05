import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent {

  @Input()
  isVisible : boolean = false;

  @Output()
  handleOk = new EventEmitter();

  @Output()
  handleCancel = new EventEmitter();

  emailID : string = "";
  isArtist : boolean = false;

  formError : boolean = false;

  onClose() {
    this.handleCancel.emit(true);
  }

  emailIDChanged(value : string) {
    this.formError = false;
    this.emailID = value;
  }

  onSubmit() {
    if(this.emailID === "" || !this.emailID.toLowerCase().includes('@') || !this.emailID.toLowerCase().includes('.com')){
      console.log(this.emailID)
      this.formError = true;
    } else {
      this.handleOk.emit({ emailID : this.emailID, isArtist : this.isArtist });
    }
  }
}
