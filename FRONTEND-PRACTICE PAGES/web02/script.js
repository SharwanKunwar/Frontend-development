// Selecting Input Fields
var titleInput = document.querySelector("#title");
var quoteInput = document.querySelector("#quote");
var submitButton = document.querySelector("#submit-btn");
var imageInput = document.querySelector("#img-input");

// Selecting Display Elements
var previewImg = document.querySelector("#Preview");
var names = document.querySelector("#name");
var description = document.querySelector("#description");

// Image Upload Event (Updates Instantly)
imageInput.addEventListener("change", function(event) {
    var file = event.target.files[0];

    if (file) {
        var reader = new FileReader();
        
        reader.onload = function(event) {
            previewImg.src = event.target.result; // Change image preview
            console.log("Selected Image:", event.target.result); // Logs Base64 image data
        };
        
        reader.readAsDataURL(file);
        
    } else {
        previewImg.src = ""; // Clear image preview if no file selected
    }
});



// Submit Button Click Event
submitButton.addEventListener("click", function() {
    var box02Title = titleInput.value.trim();
    var box02Quote = quoteInput.value.trim();

    // Update the Display Section
    names.innerHTML = box02Title || "Title"; // Default text if empty
    description.innerHTML = box02Quote || "Quote"; // Default text if empty

    // console.log("Title:", box02Title);
    // console.log("Quote:", box02Quote);
});
