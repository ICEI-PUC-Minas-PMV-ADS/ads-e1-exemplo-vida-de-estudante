let userLogado = JSON.parse(localStorage.getItem("userLogado"));
document.getElementById("nomeTitulo").innerHTML = userLogado.nome;

function cadastrar() {
  if (titulo.value == "" || titulo.value.length < 6) {
    alert("Preencha o formulário corretamente!");
    titulo.focus();
    return;
  }
  if (imagem.value == "" || imagem.value.length < 6) {
    alert("Preencha o formulário corretamente!");
    imagem.focus();
    return;
  }
  if (resumo.value == "" || resumo.value.length < 10) {
    alert("Preencha o formulário corretamente!");
    resumo.focus();
    return;
  }
  if (autor.value == "" || autor.value.length < 6) {
    alert("Preencha o formulário corretamente!");
    autor.focus();
    return;
  }
  if (ano.value == "" || ano.value.length < 4) {
    alert("Preencha o formulário corretamente!");
    ano.focus();
    return;
  }
  if (area.value == "null") {
    alert("Preencha o formulário corretamente!");
    area.focus();
    return;
  }
  if (estado.value == "null") {
    alert("Preencha o formulário corretamente!");
    estado.focus();
    return;
  }
  if (proprietario.value == "" || proprietario.value.length < 2) {
    alert("Preencha o formulário corretamente!");
    proprietario.focus();
    return;
  }
  if (contato.value == "" || contato.value.length < 6) {
    alert("Preencha o formulário corretamente!");
    contato.focus();
    return;
  }
  
  let listaLivros = JSON.parse(localStorage.getItem('listaLivros'));
  if(listaLivros == null){
    listaLivros = {
      dados: [
        {
            titulo: 'O processo',
            imagem: 'https://m.media-amazon.com/images/I/41tdWKtVAmL.jpg',
            resumo: 'Uma crítica à burocracia, O Processo conta a história de Joseph K., preso e julgado por um crime que desconhece. Como ninguém lhe diz qual foi o crime que cometeu, o protagonista não consegue se defender. A história fica cada vez mais bizarra, enquanto Joseph K. procura uma solução para uma situação impossível.',
            autor: 'Franz Kafka',
            dataDePublicacao: '2006',
            areaDeConhecimento: 'Linguística, letras e artes',
            estadoDeConservacao: 'Bom',
            nomeDoProprietario: 'Luiz Campos',
            contato: 'luizc@puc.br'

        }, {
            titulo: 'História da arte',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/51DEdZYXwbL._SX370_BO1,204,203,200_.jpg',
            resumo: 'Todos os grandes movimentos artísticos, tendências e artistas, além de materiais e técnicas utilizadas, estão presentes nesta obra, que abrange de forma contextualizada toda a História da Arte em linguagem clara e didática.',
            autor: 'Graça Proença',
            dataDePublicacao: '2013',
            areaDeConhecimento: 'Linguística, letras e artes',
            estadoDeConservacao: 'Algumas páginas estão grifadas com marca-texto amarelo',
            nomeDoProprietario: 'Alice Souza',
            contato: 'alices@ufmg.br'

        }, {
            titulo: 'Manual de direito constitucional',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/41rYK0vgQtL._SX357_BO1,204,203,200_.jpg',
            resumo: 'O livro aborda de maneira sistematizada todos os assuntos do Direito Constitucional, tratando com leveza os temas sem se afastar do necessário aprofundamento teórico e jurisprudencial exigido pelas bancas de Concurso Público, pelo Exame de Ordem e, até mesmo, por aqueles que desejam uma leitura mais profunda e crítica.',
            autor: 'Eduardo Rodrigues dos Santos',
            dataDePublicacao: '2022',
            areaDeConhecimento: 'Ciências sociais aplicadas',
            estadoDeConservacao: 'Novíssimo',
            nomeDoProprietario: 'Carlos Andrade',
            contato: 'carlosa@una.br'

        }, {
            titulo: 'Manual da residência de medicina intensiva',
            imagem: 'https://m.media-amazon.com/images/I/41ayPfFVeCL.jpg',
            resumo: 'Contém informações básicas sobre doses, diluições, indicações, efeitos colaterais, critérios diagnósticos e tratamento das situações mais frequentes do dia a dia do intensivista.',
            autor: 'Andréa Remigio de Oliveira e outros',
            dataDePublicacao: '2020',
            areaDeConhecimento: 'Ciências da saúde',
            estadoDeConservacao: 'Bom, algumas páginas amassadas',
            nomeDoProprietario: 'Antônio Silva',
            contato: 'antonios@estacio.br'

        }, {
            titulo: 'Introdução à engenharia mecânica',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/51PUNFJJz8L._SX344_BO1,204,203,200_.jpg',
            resumo: 'Este livro traz uma abordagem introdutória ao campo da Engenharia Mecânica e proporciona aos estudantes uma visão de como os engenheiros devem projetar máquinas e equipamentos, os quais contribuem para o avanço de nossa sociedade.',
            autor: 'Jonathan Wickert e Kemper Lewis',
            dataDePublicacao: '2015',
            areaDeConhecimento: 'Engenharias',
            estadoDeConservacao: 'Ótimo',
            nomeDoProprietario: 'João Costa',
            contato: 'joaoc@unibh.br'

        }, {
            titulo: 'Engenharia de software',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/91w7TnGT9PL.jpg',
            resumo: 'Obra de referência para estudantes de ciência da computação, engenharia da computação e sistemas de informação, e para qualquer profissional que deseje atualizar seus conhecimentos sobre reúso de software, arquitetura de projetos, confiabilidade e segurança e engenharia de sistemas.',
            autor: 'Ian Sommerville',
            dataDePublicacao: '2019',
            areaDeConhecimento: 'Engenharias',
            estadoDeConservacao: 'Novo',
            nomeDoProprietario: 'Carla Soares',
            contato: 'carlas@pitagoras.br'

        }, {
            titulo: 'Pesquisa em ciências humanas e sociais',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/71+JvqUnHdL.jpg',
            resumo: 'O livro destina-se a pesquisadores em formação, aos pós-graduandos em geral e também aos alunos de ensino superior que procuram iniciar-se na pesquisa.',
            autor: 'Antonio Chizzotti',
            dataDePublicacao: '2018',
            areaDeConhecimento: 'Ciências humanas',
            estadoDeConservacao: 'Bom, com pequenas marcas na capa',
            nomeDoProprietario: 'Thiago Assis',
            contato: 'thiagoa@fgv.br'

        }, {
            titulo: 'Tópicos de matemática básica',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/81sZ5jcEQGL.jpg',
            resumo: 'Aborda conteúdos de matemática básica, trabalhados nos ensinos fundamental e médio.',
            autor: 'Cabrera, Molter e Nachtigall',
            dataDePublicacao: '2020',
            areaDeConhecimento: 'Ciências exatas e da terra',
            estadoDeConservacao: 'Um pouco amassado',
            nomeDoProprietario: 'Valéria Rodrigues',
            contato: 'valeriar@fdc.br'

        }, {
            titulo: 'Moderna gramática portuguesa',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/41f61avMUQL._SX335_BO1,204,203,200_.jpg',
            resumo: 'Esta confiável obra de consulta se destina a estudiosos de todas as idades e àqueles que precisam se preparar bem para as provas de concurso público no Brasil.',
            autor: 'Evanildo Bechara',
            dataDePublicacao: '2019',
            areaDeConhecimento: 'Linguística, letras e artes',
            estadoDeConservacao: 'Perfeito',
            nomeDoProprietario: 'Marcos Figueiredo',
            contato: 'marcosf@ead.pucpr.br'

        }
    ]
    };
  }
  listaLivros.dados.push(
    {
      titulo: titulo.value,
      resumo: formulario.resumo.value,
      autor:formulario.autor.value,
      dataDePublicacao: formulario.ano.value,
      areaDeConhecimento: formulario.area.value,
      estadoDeConservacao: formulario.estado.value,
      nomeDoProprietario: formulario.proprietario.value,
      contato: formulario.contato.value,
      imagem: formulario.imagem.value
    }
  );

  localStorage.setItem('listaLivros', JSON.stringify(listaLivros));

  alert("Livro cadastrado com sucesso!");
  window.location.href = "../paginaLivros/paginaLivros.html"
}









