import { ChatService } from "./../chat.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChaDialogComponent } from "./cha-dialog/cha-dialog.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [ChaDialogComponent],
  imports: [CommonModule, FormsModule],
  exports: [ChaDialogComponent],
  providers: [ChatService]
})
export class ChatModule {}
