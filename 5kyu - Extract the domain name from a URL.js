// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// SOLUTION
function domainName(url){
  if(url.match('http:\/\/')){
    url = url.replace('http:\/\/', '');
  }
  if(url.match('www.')){
    url = url.replace('www.', '');
  }
  if(url.match('https:\/\/')){
    url = url.replace('https:\/\/', '');
  }
  for(var i = 0; i < url.length; i++){
    if(url[i] === '.'){
      url = url.slice(0, i);
    }
  }
  return url;
}