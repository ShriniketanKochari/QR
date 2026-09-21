function generateQR() {

    const urlInput = document.getElementById("urlInput");

    const url = urlInput.value.trim();

    const qrSection = document.getElementById("qrSection");

    const qrContainer = document.getElementById("qrcode");

    const errorMessage = document.getElementById("errorMessage");


    // Clear previous QR code

    qrContainer.innerHTML = "";

    errorMessage.textContent = "";


    // Check if URL is empty

    if (url === "") {

        errorMessage.textContent =
            "Please enter a website URL.";

        qrSection.style.display = "none";

        return;
    }


    // Check whether URL starts with http or https

    if (
        !url.startsWith("http://") &&
        !url.startsWith("https://")
    ) {

        errorMessage.textContent =
            "Please enter a valid URL starting with http:// or https://";

        qrSection.style.display = "none";

        return;
    }


    // Generate QR code

    new QRCode(qrContainer, {

        text: url,

        width: 200,

        height: 200,

        colorDark: "#000000",

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H

    });


    // Show QR section

    qrSection.style.display = "block";
}



function downloadQR() {

    const qrContainer = document.getElementById("qrcode");

    const qrImage = qrContainer.querySelector("img");


    if (!qrImage) {

        alert("Please generate a QR code first.");

        return;
    }


    // Create temporary download link

    const downloadLink =
        document.createElement("a");


    downloadLink.href = qrImage.src;

    downloadLink.download = "website-qr-code.png";


    // Start download

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
}