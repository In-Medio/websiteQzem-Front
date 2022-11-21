const mg = require('mailgun-js');

const mailgun = () =>
  mg({
    //Vul hier uw mailgun API key en domeinnaam in:
    apiKey: '...',
    domain: '...',
  });


export default async (req, res) => {
    console.log(req.body)
    const {name, email, number, subject, text} = req.body;

    mailgun()
    .messages()
    .send(
      {
        to: 'info@qzem.be',
        from: email,
        subject: 'Qzem.be/contact',
        text: text,
        html: `
            <b>Van:</b> ${name} <br /> 
            <b>Nummer:</b> ${number} <br /> 
            <b>Onderwerp:</b> ${subject} <br /> 
            <b>Bericht:</b> ${text} 
        ` 
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: 'Probleem met het verzenden email' });
        } else {
          console.log(body);
          res.send({ message: 'Email is verzonden zonder problemen' });
        }
      }
    );
}

