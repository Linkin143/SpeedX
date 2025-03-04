const nodemailer = require('nodemailer');
const pug = require('pug');

module.exports = class Email {
  constructor(user) {
    this.name = user.name;
    this.to = user.email;
  }

  async sendMail(templates) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        type:"oauth2",
        secure: false, // true for port 465, false for other ports
      auth: {
        user: `${process.env.Email_From}`,
        pass: `${process.env.Email_Pass}`
      }
    });

    const html = pug.renderFile(`${__dirname}/../views/emails/${templates}.pug`, {
      name: this.name,
    });

    const options = {
      from: `${process.env.Email_From}`,
      to: this.to,
      subject: 'Successfully Registered on SpeedX',
      html
    };

    await transporter.sendMail(options);
  }

  async registered() {
    await this.sendMail('registered');
  }
  
};