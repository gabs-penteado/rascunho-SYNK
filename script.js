// Função para trocar de página
function mostrarPagina(idDaPagina) {
    // Esconde todas as páginas
    let paginas = document.querySelectorAll('.pagina');
    for (let i = 0; i < paginas.length; i++) {
        paginas[i].classList.remove('ativa');
    }
    // Mostra a página clicada
    document.getElementById(idDaPagina).classList.add('ativa');
}

// Função para mostrar o nome do arquivo selecionado
document.getElementById('file-input').addEventListener('change', function(evento) {
    let arquivo = evento.target.files[0];
    if (arquivo) {
        document.getElementById('file-status').innerText = "Arquivo pronto: " + arquivo.name;
    }
});

// Função de busca simples
function fazerBusca() {
    let termo = document.getElementById('search-input').value.toLowerCase();
    let resultadoDiv = document.getElementById('search-results');
    resultadoDiv.innerHTML = ""; // Limpa a tela

    // "Banco de dados" falso
    let arquivos = ["Relatório Anual", "Contrato de Serviços", "Planilha de Gastos"];

    if (termo === "") {
        resultadoDiv.innerHTML = "<p>Digite algo para buscar.</p>";
        return;
    }

    let encontrou = false;
    for (let i = 0; i < arquivos.length; i++) {
        if (arquivos[i].toLowerCase().includes(termo)) {
            resultadoDiv.innerHTML += "<div>" + arquivos[i] + "</div>";
            encontrou = true;
        }
    }

    if (!encontrou) {
        resultadoDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    }
}