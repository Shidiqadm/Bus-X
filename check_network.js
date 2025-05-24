const fetchWithTimeout = async (url, timeout = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    clearTimeout(id);
    
    const text = await response.text();
    console.log(`Status: ${response.status} ${response.statusText}`);
    console.log(`URL: ${url}`);
    
    // Look for script tags that might be loading resources
    const scriptRegex = /<script[^>]*src=["']([^"']+)["'][^>]*>/g;
    const scripts = [];
    let match;
    
    while ((match = scriptRegex.exec(text)) !== null) {
      scripts.push(match[1]);
    }
    
    console.log(`Found ${scripts.length} script resources`);
    
    return {
      status: response.status,
      text,
      scripts
    };
  } catch (error) {
    clearTimeout(id);
    console.error(`Error fetching ${url}:`, error.message);
    return null;
  }
};

const main = async () => {
  const baseUrl = 'http://localhost:5173';
  const result = await fetchWithTimeout(baseUrl);
  
  if (!result) return;
  
  // Check scripts
  for (const scriptSrc of result.scripts) {
    const scriptUrl = scriptSrc.startsWith('http') 
      ? scriptSrc 
      : `${baseUrl}${scriptSrc.startsWith('/') ? '' : '/'}${scriptSrc}`;
      
    console.log(`Checking script: ${scriptUrl}`);
    await fetchWithTimeout(scriptUrl);
  }
};

main(); 