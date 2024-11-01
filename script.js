async function fetchHello(name) {
console.log("Name entered:", name); // Log the name

    if (!name) {
        document.getElementById('result').innerText = 'Please enter a name.';
        return;
    }

    // Make the API request
    const response = await fetch(`https://staging-carsoft-srch-b962.encr.app/hello/${name}`);
    console.log("Response:", response); // Log the response object

    // Check if the response is OK
    if (!response.ok) {
        const errorData = await response.json();
        document.getElementById('result').innerText = `Error: ${errorData.message}`;
        console.error("Error data:", errorData); // Log the error data
        return;
    }

    // Parse the response as JSON
    const data = await response.json();
    console.log("Data received:", data); // Log the parsed data

    // Display the message in the result div
    if (data && data.message) {
        document.getElementById('result').innerText = data.message; // Access the message field
    } else {
        document.getElementById('result').innerText = 'Response format is incorrect.';
        console.error("Unexpected response format:", data);
    }
}
