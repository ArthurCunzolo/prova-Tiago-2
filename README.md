# prova-Tiago-2
Prova segundo semestre de GTI
# Restaurante Website

Desenvolvido por [Arthur S. Cunzolo] e [Lui P. Moschetto]

Linguagens utilizadas:
- HTML5
- CSS3
- JavaScript
- Bootstrap 4
- GitHub Pages

## Prévia do Site
[Veja o Site Aqui](https://arthurcunzolo.github.io/prova-Tiago-2/)

Explicações e Questões

1. Explicação do sistema de grade do Bootstrap 4:
O sistema de grade do Bootstrap 4 é baseado em uma grade flexível de 12 colunas que é dimensionada com base no tamanho da tela. Veja como ele está organizado em nosso código:

A estrutura básica consiste em contêineres, linhas e colunas:

<div class="container"> <!-- or container-fluid for full width -->
    <div class="row">
        <div class="col-md-6">Content</div>
        <div class="col-md-6">Content</div>
    </div>
</div>

Para diferentes tamanhos de dispositivos, usamos classes responsivas:

col-* para dispositivos extra pequenos (<576px)
col-sm-* para dispositivos pequenos (≥576px)
col-md-* para dispositivos médios (≥768px)
col-lg-* para dispositivos grandes (≥992px)
col-xl-* para dispositivos extra grandes (≥1200px)
Por exemplo, em nossa página de menu, usamos:

<div class="col-md-6 col-lg-4">
Isso significa:

Em telas médias (≥768px), cada item ocupa 6 colunas (2 itens por linha)
Em telas grandes (≥992px), cada item ocupa 4 colunas (3 itens por linha)
Em telas pequenas, o padrão é largura total (12 colunas)
Estrutura do formulário de contato:
Nosso formulário de contato usa o sistema de grade do Bootstrap para organizar os campos:

O formulário é encapsulado em um grupo horizontal de colunasform-row
Os campos de nome e e-mail estão em um layout de duas colunas na área de trabalho (cada)col-md-6
Os campos de telefone e mensagem abrangem toda a largura
O botão enviar usa as classes do Bootstrap para estilizarbtn btn-primary
Tabela de Horários de Funcionamento:
A tabela usa classes Bootstrap para estilizar:

table: Estilo básico da tabela
table-striped: Cores de linha alternadas
table-bordered: Bordas ao redor das células
thead-dark: Linha de cabeçalho escura

