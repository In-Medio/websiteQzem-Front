const baseUrl = process.env.NODE_ENV === "production" 
? 'https://www.qzem.be' 
: 'http://localhost:3000';

export default baseUrl;