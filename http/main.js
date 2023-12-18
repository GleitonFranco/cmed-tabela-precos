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
        tbody.append("<tr class='border border-slate-500'><td class='block md:inline px-2'>" + produto.PRODUTO
            + "</td><td class='px-2'>" + produto.APRESENTACAO
            + "</td><td class='px-2'>" + produto.SUBSTANCIA
            + "</td><td class='px-2 text-right'>" + formatNumber(produto["PMC" + icmsSelected])
            + "</td></tr>"
        );
    });
}

function formatNumber(numero) {
    let formatado = numero.toString().replace('.', ',');
    return formatado;
}

function limparCampo() {
    $('#procura').val('');
}

function mudarICMS() {
    icmsSelected = $('#icms option:selected').val();
    console.log(icmsSelected);
    loadRows(indexAtFirstRow);
}

function mudarPaginacao() {
    const paginacaoSelected = $('#paginacao option:selected').val();
    console.log(paginacaoSelected);
    pageSize = parseInt(paginacaoSelected);
    irPage(pageNumber);
}

function applyStyles() {
    const btn = 'px-4 py-1 text-sm text-purple-100 bg-purple-600 font-semibold border border-purple-800';
    const btnRound = btn + ' rounded-full';
    const btnRoundR = btn + ' rounded-r-full';
    const btnRoundL = btn + ' rounded-l-full';
    $('.btn-nav-r').attr({class: btnRoundR});
    $('.btn-nav-l').attr({class: btnRoundL});
    $('.btn-search-r').attr({class: btnRoundR});
    $('.btn-search-l').attr({class: btnRoundL});
    const input = 'px-3 py-0.5 bg-indigo-100 rounded-lg border-2 border-purple-600';
    $('.input').attr({class: input});
    $('.toolbar').attr({class: 'mt-4 px-4 block md:inline'});
}

irPage(0);
applyStyles();

function ordenarTabelaPorNomeComercial() {
    tabela.sort((a,b) => {
        const an = a.PRODUTO.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const bn = b.PRODUTO.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return an.localeCompare(bn);
    });
}

function gerarChaves() {
    let chaveAnterior = tabela[0].PRODUTO.substring(0, 3);
    let chaves = [{
        pos: 0, val: chaveAnterior
    }];
    for (let i=0; i < tabela.length; i++) {
        let chaveAtual = tabela[i].PRODUTO.substring(0,3);
        if (chaveAtual != chaveAnterior) {
            chaveAnterior = chaveAtual;
            chaves.push({
                pos: i, val: chaveAnterior
            });
        }
    }
    console.log(chaves);
}

//https://tailwindcss.com/docs/utility-first
//https://tailwindcss.com/docs/padding