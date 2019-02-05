export class Message {
    constructor(public body: string) {}
    timeStamp = new Date().toString();
}