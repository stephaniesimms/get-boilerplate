const fetch = require('node-fetch');

console.log('FETCH ME!');

async function query() {
  const resp = await fetch('https://icanhazdadjoke.com/', {
    method: 'get',
    headers: { 'Accept': 'text/plain' },
  });
  const content = await resp.text();
  console.log(content); //logs joke text once promise resolves
  return resp;
}

async function query2() {
  const resp = await fetch('https://icanhazdadjoke.com/', {
    method: 'get',
    headers: { 'Accept': 'application/json' },
  });
  const content = await resp.json();
  console.log(content); //logs joke JSON obj once promise resolves
  return resp;
}

console.log(query2()); //logs pending promise
