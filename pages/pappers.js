const dados = [{
    "id": 1,
    "nome": "Maratona 2024",
    "des": "Material de estudos para maratona SBC 2024",
    "file": "../assets/Maratona de programação 2024.pdf"
},
{
    "id": 2,
    "nome": "Remote Code Execution(RCE)",
    "des": "Relatorio de pesquisa sobre RCE",
    "file": "../assets/Relatorio de pesquisa sobre Remote Code Execution(RCE).pdf"
}
];

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

document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuButton = document.querySelector('.toggle-menu');
    const navList = document.querySelector('.nav-list');

    toggleMenuButton.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});