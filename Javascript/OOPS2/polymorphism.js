class Notification{
    recipient;
    message;
    constructor(recipient, message){
        this.recipient = recipient;
        this.message = message;
    };

    send(){
        console.log(`Message sent to ${this.recipient} `);
        console.log(`Message: ${this.message}`);
    }
}

class EmailNotification extends Notification{
    constructor(recipient, message, emailAddress, subject){
        super(recipient, message);
        this.emailAddress =emailAddress;
        this.subject = subject;
    };

    send(){
        super.send();
        console.log(`Email address: [ ${this.emailAddress} ]`);
        console.log(`Subject: ${this.subject}`);
    }
}

class SMSNotification extends Notification{
    phoneNumber;
    constructor(recipient, message, phoneNumber){
        super(recipient, message);
        this.phoneNumber = phoneNumber;
    }

    send(){
        super.send();
        console.log(`Phone Number: ${this.phoneNumber}`);
    }
}

class PushNotification extends Notification{
    deviceId;

    constructor(recipient, message, deviceId){
        super(recipient, message);
        this.deviceId = deviceId;
    };
    
    send(){
        super.send();
        console.log(`Device ID: ${this.deviceId}`);
    }

}

const notification = new Notification("Prada", "Wake up");
const email = new EmailNotification("John", "Meeting at 10 AM", "john@gmail.com", "Reminder");
const sms = new SMSNotification("Mike", "Your OTP is 1234", "+91 9080344322");
const push = new PushNotification("Sarah", "New Message received", "device-122");

console.log("Calling the Notification method: ");
console.log(notification["recipient"]);
console.log(notification["message"]);

console.log(notification.recipient);
console.log(notification.message);


console.log("Calling methods from email notification");
email.send();

console.log("Calling methods from sms notication");
sms.send();

console.log("Calling method from push");
push.send();
