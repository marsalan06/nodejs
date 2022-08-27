import url from 'url';

const myURL = new URL ("https://neduet.edu.pk:8000c");
myURL.pathname = "/fed"
myURL.search = "?d=10dsa&e=ttS"
console.log(myURL)
console.log(myURL.searchParams.get('d'))