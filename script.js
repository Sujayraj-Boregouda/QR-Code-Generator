/*Form Container*/
const container = document.querySelector(".qr-container");

/*Text or Url Input Field*/
const qrInput = container.querySelector(".form input");

/*Generate QR Button*/
const generateBtn = container.querySelector(".form button");

/*QR Output*/
const qrImg = container.querySelector(".qr-code img");

/*Event Listener for Button*/
generateBtn.addEventListener("click", () => {
    // Getting Text or Url value from Input
    let qrValue = qrInput.value;

    // Exit if the input field is empty
    if (!qrValue) return;

    // Changing the button text while fetching
    generateBtn.innerText = "Generating QR Code...";

    // Generating the QR Code on the basis of user input from from the qrserver API
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    // Event Listener to show the response image
    qrImg.addEventListener("load", () => {
        container.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

/*Remove QR Code if user input is empty*/
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        container.classList.remove("active");
    }
});