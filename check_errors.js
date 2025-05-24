const fetchSite = async () => {
  try {
    const response = await fetch('http://localhost:5173/');
    const text = await response.text();
    console.log('Site loaded successfully');
    return text;
  } catch (error) {
    console.error('Error fetching site:', error);
    return null;
  }
};

fetchSite(); 