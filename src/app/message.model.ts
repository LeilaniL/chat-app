export class Message {
    constructor(public body: string, public userName: string, public userPic: string) {}
    timeStamp = new Date().toString();
    // msgColor: boolean = true;

    // switchColor() {
    //     this.msgColor = (!this.msgColor);
    //     if (this.msgColor==true){
    //       return "lighter-msg";
    //     } else {
    //       return "darker-msg";
    //     }
    //       }
}