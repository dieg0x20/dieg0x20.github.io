const url = "https://api.github.com/users/dieg0x20";
const res = document.getElementById("profile");

fetch(url)
  .then(response => response.json())
  .then(data => {
    res.innerHTML += `
            <img src="${data.avatar_url}" alt="avatar">
            <h1>Diego_dev</h1>
            <span>Desenvolvedor Backend</span>
        `;
  })
  .catch(error => console.error('Error fetching data:', error));
  
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

const resPDF = document.getElementById("container");

function abrirPdf(fileUrl) {
    window.location.href = `pdf-viewer.html?file=${encodeURIComponent(fileUrl)}`;
}

dados.forEach(data => {
    resPDF.innerHTML += `
    <div class="card" onclick="abrirPdf('${data.file}')">
        <h1>${data.nome}</h1>
        <p>${data.des}</p>
    </div>
    `;
});


document.addEventListener('DOMContentLoaded', function() {
  const toggleMenuButton = document.querySelector('.toggle-menu');
  const navList = document.querySelector('.nav-list');

  toggleMenuButton.addEventListener('click', function() {
    navList.classList.toggle('active');
  });
});
