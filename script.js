async function fetchHello() {
    const response = await fetch('/hello'); // Change this to your backend endpoint
    const data = await response.text();
    document.getElementById('result').innerText = data;
}
