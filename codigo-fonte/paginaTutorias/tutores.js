var db = {
    dados: [
        {
            imagem:'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true',
            nome: 'Luiz Campos',
            genero: 'Não-binário',
            instituicao: 'PUC Minas',
            cidade: 'Belo Horizonte',
            disciplinas: 'Engenharia de software, Matemática básica',
            contato: 'luizcampos@pucminas.com'
    

        }, {
            imagem: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true',
            nome: 'Vanessa Alves',
            genero:'Feminino',
            instituicao: 'UFMG',
            cidade: 'Belo Horizonte',
            disciplinas: 'História da Arquitetura, Análise e Gestão Ambiental',
            contato: 'vanessaa@ufmg.com'

        }, {
            imagem: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true',
            nome: 'Luciano Silva',
            genero: 'Masculino',
            instituicao: 'PUC Minas',
            cidade: 'Belo Horizonte',
            disciplinas: 'Direito Empresarial, Direito Civil',
            contato: 'lucianosilva55@pucminas.com'

        }, {
            imagem:'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true',
            nome: 'Lívia Moreira',
            genero: 'Feminino (transgenêro)',
            instituicao: 'UFRJ',
            cidade: 'Rio de Janeiro',
            disciplinas: 'Anatomia, Pediatria' ,
            contato: 'liviamoreira78@ufrj.com'

        }, {
            imagem: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true',
            nome: 'Caio Marques', 
            genero: 'Masculino',
            instituicao: 'UFOP',
            cidade: 'Ouro Preto',
            disciplinas: 'Engenharia de Software',
            contato: 'caiom@ufop.com'

        }, {
            imagem: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true',
            nome: 'Luiza Aleixo', 
            genero: 'Feminino',
            instituicao: 'UNIBH',
            cidade: 'Belo Horizonte',
            disciplinas: 'Medicina Veterinária 1, Animais Silvestres',
            contato: 'luizaaleixo98@unibh.com'

        }
    ]
}

let listaTesteTutor = JSON.parse(localStorage.getItem("listaTutores"));
if(listaTesteTutor == null){
    localStorage.setItem('listaTutores', JSON.stringify(db));
}

let lista = JSON.parse(localStorage.getItem("listaTutores"));

var tutores = '';
for (i=0; i < lista.dados.length; i++) {
    tutores += `<p class="Tutor-item"><img src="${ lista.dados[i].imagem }"> <br> Nome: ${ lista.dados[i].nome } <br> Gênero: ${ lista.dados[i].genero } <br> Instituição de ensino: ${ lista.dados[i].instituicao } <br> Cidade: ${ lista.dados[i].cidade } <br> Disciplina(s): ${ lista.dados[i].disciplinas } <br> Contato: ${ lista.dados[i].contato }</p>`;
}

document.getElementById('lista-Tutor').innerHTML = tutores;
