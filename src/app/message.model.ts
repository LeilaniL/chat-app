export class Message {
    constructor(public body: string, public userName: string) {}
    timeStamp = new Date().toString();
}