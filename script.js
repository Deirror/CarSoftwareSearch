async function fetchHello() {
    try {
        const response = await fetch('https://staging-carsoft-srch-b962.encr.app/hello'); // Use your live backend endpoint
        if (!response.ok) { // Check if response is okay (status in the range 200-299)
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        document.getElementById('result').innerText = data;
    } catch (error) {
        console.error('Fetch error:', error); // Log error for debugging
        document.getElementById('result').innerText = 'Error fetching data.';
    }
}
