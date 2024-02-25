//THIS SIMPLE JAVASCRIPT FUNCTION HELPS TO EXTRACT DOMAIN NAME OF THE WEBSITES FROM LONG URLs.

function extractDomain(url) {
    // Remove protocol if exists
    let domain = url.replace(/^https?:\/\//i, '');

    // Remove www. if exists
    domain = domain.replace(/^www\./i, '');

    // Get the hostname from the URL
    try {
        domain = new URL('http://' + domain).hostname;
    } catch (error) {
        // If there's an error in URL parsing, return the original domain
        return domain;
    }

    // Extract subdomains
    const parts = domain.split('.');
    if (parts.length > 2) {
        // Check if the last part is a TLD (Top Level Domain)
        if (parts[parts.length - 1].length <= 3) {
            // Handles cases like co.uk, com.au, etc.
            domain = parts.slice(-3).join('.');
        } else {
            domain = parts.slice(-2).join('.');
        }
    }

    // Add www. prefix back if it exists in the original URL
    if (url.includes('www.')) {
        domain = 'www.' + domain;
    }

    return domain;
}

// Test cases

 console.log(extractDomain("https://studio.youtube.com/channel/UCntj-iDUfMBvc8_peZWbQ4g/editing/sections"));  // Output: studio.youtube.com
 console.log(extractDomain("https://www.youtube.com/"));                                                      // Output: www.youtube.com
 console.log(extractDomain("https://www.youtube.com/channel/UCntj-iDUfMBvc8_peZWbQ4g"));                      // Output: www.youtube.com
 console.log(extractDomain("https://www.flipkart.com/helpcentre?otracker=${otracker}_navlinks"));             // Output: www.flipkart.com
 console.log(extractDomain("www.flipkart.com?web=true"));                                                     // Output: www.flipkart.com
 console.log(extractDomain("https://aniwatchtv.to/watch/ninja-kamui-19018?ep=119953"));                       // Output: aniwatchtv.to
