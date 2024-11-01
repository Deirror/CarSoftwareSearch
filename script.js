async function fetchHello(name) {
    const response = await fetch(`https://staging-carsoft-srch-b962.encr.app/hello/${name}`); // Use your live backend endpoint
    const data = await response.json(); // Parse JSON response
    document.getElementById('result').innerText = data.message; // Access the message field
}

// Example usage
// Call this function with a name
fetchHello('World'); // You can change 'World' to any name you want
