// Data for car brands and versions
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

function findVersionFast() {
     const brandSelect = document.getElementById("brandSelect");
     const versionToFind = document.getElementById("findv").value;
         const selectedBrand = brandSelect.value;

    if(!selectedBrand || !versionToFind) {
        document.getElementById('result').innerText = "Brand or Version not found!";
          console.error("Nothing is selected!");
        return;
    }

    const car = carData.find(car => car.brand === selectedBrand);

    if (car && car.softwareVersions.includes(versionToFind)) {
        document.getElementById("result").innerText = "Found Successfully!";
        console.error("YESSS is selected!");
    } else {
        document.getElementById("result").innerText = "Not Found!";
        console.error("WOw is selected!");
    }
}

// Function to populate the brand dropdown
function populateBrandDropdown() {
    const brandSelect = document.getElementById("brandSelect");

    // Check if brandSelect is found
    if (!brandSelect) {
        console.error("Brand select element not found!");
        return;
    }

    carData.forEach(car => {
        const option = document.createElement("option");
        option.value = car.brand;
        option.textContent = car.brand;
        brandSelect.appendChild(option);
    });
}

// Function to update the version dropdown based on the selected brand
function updateVersions() {
    const brandSelect = document.getElementById("brandSelect");
    const versionSelect = document.getElementById("versionSelect");
    const selectedBrand = brandSelect.value;
    
    versionSelect.innerHTML =  '<option value="">Software Versions</option>';

    // Find the selected brand's data
    const car = carData.find(car => car.brand === selectedBrand);
    if (car) {
        // Populate version dropdown with the selected brand's software versions
        car.softwareVersions.forEach(version => {
            const option = document.createElement("option");
            option.value = version;
            option.textContent = version;
            versionSelect.appendChild(option);
        });
    } else {
        console.warn("No versions found for the selected brand"); // Debugging line
    }
}

// Initialize the brand dropdown on page load
document.addEventListener("DOMContentLoaded", populateBrandDropdown);
