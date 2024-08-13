const livros = [
    {
        "nome": "Código Limpo: Habilidades Práticas do Agile Software",
        "descricao": "Edição padrão, 8 setembro 2009",
        "link": "https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675",
        "url": "../assets/Codigo Limpo - Completo PT.pdf",
        "categoria": "C"
    }
]

const res = document.getElementById('livros')
function fetch() {
    // Usando forEach em vez de map para modificar o DOM
    livros.forEach(d => {
        res.innerHTML += `
            <article class="course">
                <h2>${d.nome}</h2>
                <p>${d.descricao}</p>
                <p>${d.categoria}</p>
                <a href="${d.link}" target="_blank">Assistir Curso</a>
            </article>
        `;
    });
}
function filters() {
    const inputElement = document.getElementById('input');
    const text = inputElement.value.trim(); 

    res.innerHTML = ''; 

    const filter = livros.filter(d => d.categoria.toLowerCase() === text.toLowerCase());

    if (filter.length === 0) {
        res.innerHTML = '<p>Nenhum curso encontrado para a categoria fornecida.</p>';
    } else {
        filter.forEach(d => {
            res.innerHTML += `
                <article class="course">
                    <h2>${d.nome}</h2>
                    <p>${d.descricao}</p>
                    <p>${d.categoria}</p>
                    <a href="${d.link}" target="_blank">Leia</a>
                    <a href="${d.url}" download>Dowload</a>
                </article>
            `;
        });
    }  
    inputElement.value = '';
}
fetch();
  
