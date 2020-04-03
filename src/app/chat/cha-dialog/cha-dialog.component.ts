import { ChatService, Message } from "../../chat.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { scan } from "rxjs/operators";

@Component({
  selector: "cha-dialog",
  templateUrl: "./cha-dialog.component.html",
  styleUrls: ["./cha-dialog.component.css"]
})
export class ChaDialogComponent implements OnInit {
  messages: Observable<Message[]>;
  formValue: string;
  constructor(private chat: ChatService) {}

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation
      .asObservable()
      .pipe(scan((acc, val) => acc.concat(val)));
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = "";
  }
}
