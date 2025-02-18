document.addEventListener("DOMContentLoaded", function () {
    const fields = [
        "row1", "row2", "row3", "row4", "row5", "row6", "row7", "row8",
        "drums", "instrument2", "instrument3", "instrument4",
        "misc1", "misc2", "misc3"
    ];

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

            // Redirect back to index.html after saving
            window.location.href = "index.html";
        });
    } else {
        // Display stored values in tables and hide empty rows
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

