import { Component } from '@angular/core';
import { EnquiryFormComponent } from '../enquiry-form/enquiry-form.component';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.scss']
})
export class LandingComponentComponent {

  isVisible = false;
  notifyMe() {
    this.isVisible = true;
  }

  handleCancel(value:boolean) {
    this.isVisible = false;
  }

  handleOk(form:any) {
    fetch("https://api.apispreadsheets.com/data/Ldrj6qkoq4bICFTd/", {
      method: "POST",
      body: JSON.stringify({"data": {"EmailID": form.emailID, "Artist": form.isArtist}}),
    }).then(res =>{
      if (res.status === 201){
        // SUCCESS
        console.log("Success");
        this.isVisible = false;
      }
      else{
        // ERROR
        console.log("Error");
      }
    })
  }
}
