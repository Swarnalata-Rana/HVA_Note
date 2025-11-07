class Message {
    constructor(sender, text, time) {
        this.sender = sender;
        this.text = text;
        this.time = time;
    }
}

let formatMessages = function (messages, callback) {
    messages.forEach(arr => {
        console.log(callback(arr))
    })

}

let simpleFormat = function (arr) {
    let a = (`[${arr.time}] ${arr.sender}: ${arr.text}`)
    return a;

}
let messages = [
    new Message("Ali", "Hello!", "10:00"),
    new Message("Sara", "Hi Ali!", "10:01"),
    new Message("Ali", "How are you?", "10:02")
];

formatMessages(messages, simpleFormat);