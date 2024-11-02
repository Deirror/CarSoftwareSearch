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

window.onload = function() {
    const brandSelect = document.getElementById("brandSelect");
    carData.forEach(car => {
        const option = document.createElement("option");
        option.value = car.brand;
        option.textContent = car.brand;
        brandSelect.appendChild(option);
    });
};

// Update versions dropdown based on selected brand
function updateVersions() {
    const brandSelect = document.getElementById("brandSelect");
    const versionSelect = document.getElementById("versionSelect");
    const selectedBrand = brandSelect.value;

    // Clear previous versions
    versionSelect.innerHTML = '<option value="">Software Versions</option>';

    // Find the selected brand and populate versions
    const car = carData.find(car => car.brand === selectedBrand);
    if (car) {
        car.softwareVersions.forEach(version => {
            const option = document.createElement("option");
            option.value = version;
            option.textContent = version;
            versionSelect.appendChild(option);
        });
    }
}

// Find the version based on input and selected brand
function findVersionFast() {
    const brandSelect = document.getElementById("brandSelect");
    const versionToFind = document.getElementById("findv").value.trim();
    const selectedBrand = brandSelect.value;

    if (!selectedBrand || !versionToFind) {
        document.getElementById("result").innerText = "Please select a brand and enter a version to find.";
        console.error("Brand or version not specified.");
        return;
    }

    const car = carData.find(car => car.brand === selectedBrand);

    if (car && car.softwareVersions.includes(versionToFind)) {
        document.getElementById("result").innerText = "Found Successfully!";
    } else {
        document.getElementById("result").innerText = "Version Not Found!";
    }
}
