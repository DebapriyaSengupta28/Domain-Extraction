# Domain-Extraction

Extract Domains from long string of URLs.


# Test cases

```
 console.log(extractDomain("https://studio.youtube.com/channel/UCntj-iDUfMBvc8_peZWbQ4g/editing/sections"));
 // Output: studio.youtube.com

 console.log(extractDomain("https://www.youtube.com/"));
 // Output: www.youtube.com
 
 console.log(extractDomain("https://www.youtube.com/channel/UCntj-iDUfMBvc8_peZWbQ4g"));
 // Output: www.youtube.com
 
 console.log(extractDomain("https://www.flipkart.com/helpcentre?otracker=${otracker}_navlinks"));
 // Output: www.flipkart.com
 
 console.log(extractDomain("www.flipkart.com?web=true"));
 // Output: www.flipkart.com
 
 console.log(extractDomain("https://aniwatchtv.to/watch/ninja-kamui-19018?ep=119953"));
 // Output: aniwatchtv.to

```
