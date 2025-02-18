document.addEventListener("DOMContentLoaded", function () {
    const fields = [
        "row1", "row2", "row3", "row4", "row5", "row6", "row7", "row8",
        "instrument1", "instrument2", "instrument3", "instrument4", "instrument5", "instrument6",
        "misc1", "misc2", "misc3",
    ];

    if (document.getElementById("edit-form")) {
        // Populate input fields with saved data
        fields.forEach(field => {
            const inputElement = document.getElementById(`edit-${field}`);
            if (inputElement) {
                inputElement.value = localStorage.getItem(field) || "";
            }
        });

        // Handle form submission
        document.getElementById("edit-form").addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent default form submission

            fields.forEach(field => {
                const inputElement = document.getElementById(`edit-${field}`);
                if (inputElement) {
                    localStorage.setItem(field, inputElement.value.trim());
                }
            });

            // Redirect after saving
            window.location.href = "index.html";
        });
    } else {
        // Load data into the table & hide empty rows
        fields.forEach(field => {
            const cell = document.getElementById(field);
            if (cell) {
                let storedValue = localStorage.getItem(field);
                if (storedValue && storedValue.trim() !== "") {
                    cell.innerText = storedValue;
                } else {
                    cell.parentElement.style.display = "none"; // Hide empty rows
                }
            }
        });
    }
});


