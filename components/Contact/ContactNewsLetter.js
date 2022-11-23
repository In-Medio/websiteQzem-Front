import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
import baseUrl from '../../utils/baseUrl';

const alertContent = () => {
  MySwal.fire({
      title: 'Uw bent succesvol ingeschreven voor de niewsbrief!',
      text: 'Wij houden u via deze nieuwsbrief op de hoogte van de laatste verandering.',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
  })
}

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: ""
};

const ContactNewsLetter = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = e => {
      const { name, value } = e.target;
      setContact(prevState => ({ ...prevState, [name]: value }));
      // console.log(contact)
  }

  const handleSubmit = async e => {
      e.preventDefault();
      try {
          const url = `${baseUrl}/api/newsletter`;
          const { name, email } = contact;
          const payload = { name, email };
          const response = await axios.post(url, payload);
          console.log(response);
          setContact(INITIAL_STATE);
          alertContent();
      } catch (error) {
          console.log(error)
      }
  };

  return (
    <div className="container">
      <div className="subscribe-area">
        <div className="column align-items-center">
            <div className="row-lg-5 row-md-12">
                <div className="subscribe-content">
                    <h2>Schrijf je in voor onze nieuwsbrief!</h2>
                </div>
            </div>

            <div className="row-lg-7 row-md-12">
                <div className="subscribe-form">
                    <form onSubmit={handleSubmit}>
                        <input 
                          type="text" 
                          className="input-name-newsletter" 
                          placeholder="Naam" 
                          name="name"
                          value={contact.name}
                          onChange={handleChange} 
                          required  
                          />
                        <input 
                          type="email" 
                          className="input-email-newsletter" 
                          placeholder="Vul je e-mailadres in" 
                          name="email"
                          value={contact.email}
                          onChange={handleChange} 
                          required  
                          />
                        <button type="submit">
                            Schrijf je nu in <i className="flaticon-right-chevron"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactNewsLetter;