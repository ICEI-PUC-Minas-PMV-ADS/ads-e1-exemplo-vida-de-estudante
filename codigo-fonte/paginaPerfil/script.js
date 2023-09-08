let userLogado = JSON.parse(localStorage.getItem("userLogado"));
document.getElementById("nomeTitulo").innerHTML = userLogado.nome;

function cadastrar() {
  
  
  if (nome.value == "" || nome.value.length < 2) {
    alert("Preencha o formulário corretamente!");
    nome.focus();
    return;
  }
  if (genero.value == "" || genero.value.length < 3) {
    alert("Preencha o formulário corretamente!");
    genero.focus();
    return;
  }
  if (instituicao.value == "" || instituicao.value.length < 3) {
    alert("Preencha o formulário corretamente!");
    instituicao.focus();
    return;
  }
  if (cidade.value == "" || cidade.value.length < 2) {
    alert("Preencha o formulário corretamente!");
    cidade.focus();
    return;
  }
  if (disciplinas.value == "" || disciplinas.value.length < 4) {
    alert("Preencha o formulário corretamente!");
    disciplinas.focus();
    return;
  }
  if (contato.value == "" || contato.value.length < 6) {
    alert("Preencha o formulário corretamente!");
    contato.focus();
    return;
  }

  let listaTutores = JSON.parse(localStorage.getItem('listaTutores'));
  if(listaTutores == null){
    listaTutores = {
      dados: [
        {
            imagem:'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true',
            nome: 'Luiz Campos',
            genero: 'não-binário',
            instituicaoDeEnsino: 'PUC Minas',
            cidade: 'Belo Horizonte',
            disciplinas: 'Engenharia de software, Matemática básica',
            contato: 'luizcampos@pucminas.com'  
          
        }, {
            imagem: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true',
            nome: 'Vanessa Alves',
            genero:'feminino',
            instituicaoDeEnsino: 'UFMG',
            cidade: 'Belo Horizonte',
            disciplinas: 'História da Arquitetura, Análise e Gestão Ambiental',
            contato: 'vanessaa@ufmg.com'
          
        }, {
            imagem: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true',
            nome: 'Luciano Silva',
            genero: 'masculino',
            instituicaoDeEnsino: 'PUC Minas',
            cidade: 'Belo Horizonte',
            disciplinas: 'Direito Empresarial, Direito Civil',
            contato: 'lucianosilva55@pucminas.com'
          
        }, {
            imagem:'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true',
            nome: 'Lívia Moreira',
            genero: 'feminino (transgenêro)',
            instituicaoDeEnsino: 'UFRJ',
            cidade: 'Rio de Janeiro',
            disciplinas: 'Anatomia, Pediatria' ,
            contato: 'liviamoreira78@ufrj.com'

        }, {
            imagem: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true',
            nome: 'Caio Marques', 
            genero: 'masculino',
            instituicaoDeEnsino: 'UFOP',
            cidade: 'Ouro Preto',
            disciplinas: 'Engenharia de Software',
            contato: 'caiom@ufop.com'

        }, {
             imagem: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true',
             nome: "Luiza Aleixo",
             genero:'feminino',
             instituicaoDeEnsino: 'UNA',
             cidade: 'Belo Horizonte',
             disciplinas: 'Medicina Veterinária 1, Animais Silvestres',
             contato: 'luizaaleixo98@una.com'
        }
    ]
    };
  }
    listaTutores.dados.push(
    {      
      imagem:"https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/usernb.png?raw=true",
      nome: formulario.nome.value,
      genero: formulario.genero.value,
      instituicao: formulario.instituicao.value,
      cidade: formulario.cidade.value,
      disciplinas: formulario.disciplinas.value,
      contato: formulario.contato.value,
      }
    );
  
  localStorage.setItem('listaTutores', JSON.stringify(listaTutores));

  alert("Tutor(a) cadastrado(a) com sucesso!");
  window.location.href = "../paginaTutorias/paginaTutorias.html"
}
