const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY, url: 'https://api.eu.mailgun.net' });

export default async (req, res) => {
    console.log(req.body);
    const {name, email} = req.body;

    const newsMember = await mg.lists.members.createMember('nieuwsbrief@expresso.qzem.be', {
        address: email,
        name: name,
        subscribed: 'yes'
      })
      .then(body => {
          console.log(body);
          res.status(200).send({ message: 'Succesvol ingeschreven voor nieuwsletter.' });
        }
      )
      .catch(error => {
        console.log(error);
          res.status(500).send({ message: 'Probleem met inschrijven voor nieuwsletter.' });
        }
      );
}