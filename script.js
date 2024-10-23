function customEncodeURIComponent() {
    const input = document.getElementById("inputText").value;
    const encoded = encodeURIComponent(input);
    displayResult(encoded);
}

function customDecodeURIComponent() {
    const input = document.getElementById("inputText").value;
    try {
        const decoded = decodeURIComponent(input);
        displayResult(decoded);
    } catch (e) {
        displayResult("Error: No se pudo decodificar la entrada.");
    }
}

function displayResult(result) {
    document.getElementById("resultText").innerText = result;
    document.getElementById("copyButton").style.display = "inline-block"; // Mostrar botón copiar
}

function copyToClipboard() {
    const resultText = document.getElementById("resultText").innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        alert("Hubo un error al copiar el texto");
    });
}