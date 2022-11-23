const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY, url: 'https://api.eu.mailgun.net' });

export default async (req, res) => {
    console.log(req.body);
    const {name, email, number, subject, text} = req.body;

    mg.messages.create('expresso.qzem.be', {
        from: email,
        to: 'ralph.magnette@in-medio.be',
        subject: subject,
        text: text,
        html: `
            <b>Van:</b> ${name} <br /> 
            <b>Nummer:</b> ${number} <br /> 
            <b>Onderwerp:</b> ${subject} <br /> 
            <b>Bericht:</b> ${text} 
        ` 
      })
      .then(body => {
        console.log(body);
          res.status(200).send({ message: 'Email is verzonden.' });
        }
      )
      .catch(error => {
        console.log(error);
          res.status(500).send({ message: 'Probleem met het verzenden email.' });
        }
      );
}