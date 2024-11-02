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

// Function to populate the brand dropdown
function populateBrandDropdown() {
    console.log("Populating brand dropdown..."); // Debugging line
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
    console.log("Brand dropdown populated successfully."); // Debugging line
}

// Function to update the version dropdown based on the selected brand
function updateVersions() {
    const brandSelect = document.getElementById("brandSelect");
    const versionSelect = document.getElementById("versionSelect");
    const selectedBrand = brandSelect.value;

    console.log("Selected brand:", selectedBrand); // Debugging line

    // Clear the version dropdown
    versionSelect.innerHTML = '<option value="">--Select a Version--</option>';

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
        console.log("Version dropdown updated for", selectedBrand); // Debugging line
    } else {
        console.warn("No versions found for the selected brand"); // Debugging line
    }
}

// Initialize the brand dropdown on page load
document.addEventListener("DOMContentLoaded", populateBrandDropdown);
