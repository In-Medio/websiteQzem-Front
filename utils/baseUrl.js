const baseUrl = process.env.NODE_ENV === "production" 
? 'https://qzem.be' 
: 'http://localhost:3000';

export default baseUrl;