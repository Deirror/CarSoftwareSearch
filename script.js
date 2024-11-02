// script.js

const carData = [
    {
        brand: "Toyota",
        softwareVersions: ["v1.0.0", "v1.1.0", "v1.2.0"]
    },
    {
        brand: "Ford",
        softwareVersions: ["v2.0.0", "v2.1.0"]
    },
    {
        brand: "BMW",
        softwareVersions: ["v3.0.0", "v3.1.1", "v3.2.2"]
    }
];

// Function to display car brands and software versions
function displayCarData() {
    const container = document.getElementById("carDataContainer");

    carData.forEach(car => {
        const brandHeader = document.createElement("h3");
        brandHeader.textContent = car.brand;
        container.appendChild(brandHeader);

        const versionList = document.createElement("ul");
        car.softwareVersions.forEach(version => {
            const versionItem = document.createElement("li");
            versionItem.textContent = version;
            versionList.appendChild(versionItem);
        });
        container.appendChild(versionList);
    });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", displayCarData);
