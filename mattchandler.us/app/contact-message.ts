/*
  SendGrid.com - Email API Format
*/
export class ContactMessage {

      constructor(
        public fromName: string,
        public fromEmailAddess: string,
        public messageSubject: string,
        public messageBody?: string
      ) {  }

      getBody(){
        return "FROM: " + this.fromName + ", " + this.fromEmailAddess + "\n\n" + this.messageBody;
            }
      //This is the correct SendGrid JSON format
      toJSON(){

        return {
          "personalizations": [
            {
              "to": [
                {
                  "email": "matt.chandleraz@gmail.com"
                }
              ],
              "subject": "Message from mattchandler.us"
            }
          ],
          "from": {
            "name": this.fromName,
            "email": "matt@mattchandler.us"
          },
          "content": [
            {
              "type": "text/plain",
              "value": this.getBody()
            }
          ]
        };
      }
}
