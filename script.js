async function fetchHello() {
    const response = await fetch('https://staging-carsoft-srch-b962.encr.app/hello'); // Use your live backend endpoint
    const data = await response.text();
    document.getElementById('result').innerText = data;
}
