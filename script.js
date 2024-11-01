async function fetchHello(name) {
    if (!name) {
        document.getElementById('result').innerText = 'Please enter a name.';
        return;
    }

    const response = await fetch(`https://staging-carsoft-srch-b962.encr.app/hello/${name}`);
    
    if (!response.ok) {
        const errorData = await response.json();
        document.getElementById('result').innerText = `Error: ${errorData.message}`;
        return;
    }

    const data = await response.json(); // Parse JSON response
    document.getElementById('result').innerText = data.message; // Access the message field
}
