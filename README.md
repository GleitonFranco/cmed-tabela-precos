# cmed-tabela-precos
Projeto de transformação de dados de medicamentos e preços migrando dados abertos da CMED (planilha xls/ods) para outras bases de dados.
Contém:
- informações oficiais de especialidades médicas de uso comercial e hospitalar;
- substâncias ativas;
- preços de fábrica (PF) e ao consumidor (PMC) dde acordo com o ICMS de cada Estado;
- outras classificações e restrições de venda e de uso.
O objetivo deste projeto é disponibilizar bases de dados que podem ser usadas em implementações que desenvolvedores possam usar em seus projetos, em seus estudos de tecnologias sem precisar passar muito tempo desenvolvendo muitos dados em banco. É um bom modelo de treinamento por ser de dados reais e em uma quantidade considerável para ver e trabalhar em otimizações de código.

# Arquivos disponíveis:
- cmed_transformacao_xls.ktr: projeto de automatização de migração e transformação de dados pelo pentaho (spoon), cujo ponto inicial é a planilha oficial da CMED no link abaixo:
[https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos]
OBS: a planilha XLS obtida foi previamente convertida para ODS.
- Pasta output: os dados finais em banco de dados ou outros formatos texto utilizáveis por programas.
-- mariadb: contém o script SQL;
  json: arquivo texto JSON que poderá ser usado em front end;
OBS: o dump do banco de dados SQLite é um binário e está disponível para download no link:
[https://cmed-site.s3.sa-east-1.amazonaws.com/cmed_precos_sqlite.db]

Exemplo de front end usando o JSON gerado:
[https://cmed-site.s3.sa-east-1.amazonaws.com/index.html]
