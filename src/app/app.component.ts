import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';

  // ngOnInit(): void{
  //   this.title="Hello from Bridgelabz";
  // }

// Property Binding
imgUrl ="../assets/Bridgelabzz.jpg";

//Event Binding
url="https://www.bridgelabz.com";

onClick($event: any){
  console.log("save button is clicked!",$event);
  window.open(this.url,"_blank");
}

//User Inputted Name
userName: string="";

//Two Way Binding
nameError: string = "";

onInput($event:any){
  console.log("Change Event Occured!", $event.data);
  const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  if(nameRegex.test(this.userName)){
    this.nameError ="";
    return;
  }
  this.nameError = "Name is Incorrect!";
}
}
