const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: 'key-54nzq1lyxxczwsnrh0jdt-v68uz2w6m7',
    domain: 'expresso.qzem.be'
  }
}

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

export default async (req, res) => {
    console.log(req.body);
    const {name, email, number, subject, text} = req.body;

    nodemailerMailgun.sendMail({
        to: 'info@qzem.be',
        from: email,
        subject: subject,
        text: text,
        html: `
            <b>Van:</b> ${name} <br /> 
            <b>Nummer:</b> ${number} <br /> 
            <b>Onderwerp:</b> ${subject} <br /> 
            <b>Bericht:</b> ${text} 
        ` 
      }, (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: 'Probleem met het verzenden email.' });
        } else {
          console.log(body);
          res.status(200).send({ message: 'Email is verzonden.' });
        }
      }
    );
}

