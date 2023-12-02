let pageNumber = 0;
let pageSize = 20;
let icmsSelected = "20";
let indexAtFirstRow = 0;

function procurar() {
    const texto = $('#procura').val().toUpperCase();
    const primeiro = tabela.find(p => p.PRODUTO.startsWith(texto));
    const indice = tabela.indexOf(primeiro);
    loadRows(indice);
}

function irPage(pgNum) {
    console.log(pgNum, pageSize)
    loadRows(pgNum * pageSize);
}

function loadRows(indice) {
    const tbody = $('#gridrows');
    tbody.empty();
    let pageCut = tabela.slice(indice, indice + pageSize);
    indexAtFirstRow = tabela.indexOf(pageCut[0]);
    pageCut.forEach(produto => {
        tbody.append("<tr><td>" + produto.PRODUTO
            + "</td><td>" + produto.APRESENTACAO
            + "</td><td>" + produto.SUBSTANCIA
            + "</td><td>" + produto["PMC" + icmsSelected]
            + "</td></tr>"
        );
    });
}

function limparCampo() {
    $('#procura').val('');
}

function mudarICMS() {
    const icmsSelected = $('#icms option:selected').val();
    console.log(icmsSelected);
    loadRows(indexAtFirstRow);
}

function mudarPaginacao() {
    const paginacaoSelected = $('#paginacao option:selected').val();
    console.log(paginacaoSelected);
    pageSize = parseInt(paginacaoSelected);
    irPage(pageNumber);
}

irPage(0);
