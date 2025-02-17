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
                localStorage.setItem(field, document.getElementById(`edit-${field}`).value);
            });
            alert("Changes saved!");
        });
    } else {
        // Display stored values in table
        fields.forEach(field => {
            document.getElementById(field).innerText = localStorage.getItem(field) || "";
        });
    }
});
