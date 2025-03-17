const dados = [
  {
    "id": 1,
    "nome": "Remote Code Execution(RCE)",
    "des": "Relatorio de pesquisa sobre RCE",
    "file": "../assets/Relatorio de pesquisa sobre Remote Code Execution(RCE).pdf"
  },
  {
    "id": 2,
    "nome": "Manual de Vim para iniciantes",
    "file": "/assets/vim_by_diego.pdf"
  }
];

const resPDF = document.getElementById("container");

function abrirPdf(fileUrl) {
  window.location.href = `pdf-viewer.html?file=${encodeURIComponent(fileUrl)}`;
}

if (resPDF) {
  dados.forEach(data => {
    resPDF.innerHTML += `
      <button class="btn1" onclick="abrirPdf('${encodeURIComponent(data.file)}')">
        ${data.nome}
      </button>
    `;
  });
}

