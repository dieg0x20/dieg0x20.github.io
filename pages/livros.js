const livros = [
    {
        "nome": "Código Limpo: Habilidades Práticas do Agile Software",
        "descricao": "Edição padrão, 8 setembro 2009",
        "link": "https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675",
        "url": "../assets/Codigo Limpo - Completo PT.pdf",
        "categoria": "C"
    }
];

const res = document.getElementById('livros');
const inputElement = document.getElementById('input');

function displayBooks() {
    res.innerHTML = '';
    livros.forEach(d => {
        res.innerHTML += `
            <article class="course">
                <h2>${d.nome}</h2>
                <p>${d.descricao}</p>
                <p>${d.categoria}</p>
                <a href="${d.link}" target="_blank">Leia</a>
                <a href="${d.url}" download>Download</a>
            </article>
        `;
    });
}

function filterBooks() {
    const text = inputElement.value.trim(); 

    res.innerHTML = ''; 

    const filteredBooks = livros.filter(d => d.categoria.toLowerCase() === text.toLowerCase());

    if (filteredBooks.length === 0) {
        res.innerHTML = '<p>Nenhum livro encontrado para a categoria fornecida.</p>';
    } else {
        filteredBooks.forEach(d => {
            res.innerHTML += `
                <article class="course">
                    <h2>${d.nome}</h2>
                    <p>${d.descricao}</p>
                    <p>${d.categoria}</p>
                    <a href="${d.link}" target="_blank">Leia</a>
                    <br>
                    <a href="${d.url}" download>Download</a>
                </article>
            `;
        });
    }  

    inputElement.value = '';
}

displayBooks();


