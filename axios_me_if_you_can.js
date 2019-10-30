const axios = require('axios');

console.log('AXIOS ME!');

const API_URL = "https://icanhazdadjoke.com/";

async function query() {
  const resp = await axios.get(API_URL, {
    headers: { 'Accept': 'text/plain' },
  });
  const content = resp.data;
  console.log(content); //logs joke text once promise resolves
  return resp;
}

async function query2() {
  const resp = await axios.get(API_URL, {
    headers: { 'Accept': 'application/json' },
  });
  const content = resp.data;
  console.log(content); //logs joke JSON obj once promise resolves
  return resp;
}

console.log(query()); //logs pending promise