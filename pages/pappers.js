const dados = [{
    "id": 1,
    "nome": "Maratona 2024",
    "des": "Material de estudos para maratona SBC 2024",
    "file": "../assets/Maratona de programação 2024.pdf"
}];

const res = document.getElementById("container");

function abrirPdf(fileUrl) {
    window.location.href = `pdf-viewer.html?file=${encodeURIComponent(fileUrl)}`;
}

dados.forEach(data => {
    res.innerHTML += `
    <div class="card" onclick="abrirPdf('${data.file}')">
        <h1>${data.nome}</h1>
        <p>${data.des}</p>
    </div>
    `;
});
