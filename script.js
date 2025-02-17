document.addEventListener("DOMContentLoaded", function () {
    const fields = ["row1", "row2", "row3", "row4", "row5", "row6", "row7", "row8"];

    if (document.getElementById("edit-form")) {
        // Load stored values into input fields
        fields.forEach(field => {
            document.getElementById(`edit-${field}`).value = localStorage.getItem(field) || "";
        });

        document.getElementById("edit-form").addEventListener("submit", function (e) {
            e.preventDefault();
            fields.forEach(field => {
                localStorage.setItem(field, document.getElementById(`edit-${field}`).value.trim());
            });
            alert("Changes saved!");
        });
    } else {
        // Display stored values in table and hide rows with empty values
        fields.forEach(field => {
            let storedValue = localStorage.getItem(field);
            let cell = document.getElementById(field);
            let row = cell.parentElement;

            if (storedValue && storedValue.trim() !== "") {
                cell.innerText = storedValue;
            } else {
                row.style.display = "none"; // Hides the row if column 2 is empty
            }
        });
    }
});

