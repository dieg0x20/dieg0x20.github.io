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
},
{
  "id": 3,
  "nome": "Basico de Ruby para iniciantes",
  "file": "../assets/ruby.md"
}
];

const resPDF = document.getElementById("container");

function abrirArquivo(fileUrl) {
  if (fileUrl.endsWith(".md")) {
    window.location.href = `markdown-viewer.html?file=${encodeURIComponent(fileUrl)}`;
  } else if (fileUrl.endsWith(".pdf")) {
    window.location.href = `pdf-viewer.html?file=${encodeURIComponent(fileUrl)}`;
  }
}

if (resPDF) {
  dados.forEach(data => {
    resPDF.innerHTML += `
    <div class="papers-list">
                <ul>
                    <li><a href='${encodeURIComponent(data.file)}'>${data.nome}</a>
                        </li>
                </ul>
            </div>
    `;
  });
}
