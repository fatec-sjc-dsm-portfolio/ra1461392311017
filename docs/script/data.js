// Projetos APIs - Aprendizado por Projeto Integrador
export const projetosAPI = [
  {
    id: "api1",
    titulo: "Data-SARS",
    descricao: "Sistema para monitoramento da COVID longa - API 1º Semestre",
    categoria: "API",
    semestre: "1º Semestre",
    tecnologias: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Pandas",
      "Selenium",
      "Trello",
      "Docker",
      "Figma",
    ],
    contribuicao:
      "Este foi o projeto integrador do primeiro semestre da Fatec, participei como Product Owner e dev, contribuindo ativamente na criação das telas do sistema e auxiliando na integração com Flask.",
    dificuldade:
      "Esse API foi minha primeira experiência com um projeto na área de programação, desenvolvendo um sistema. Também foi minha primeira vez atuando como P.O. Por conta disso, vejo que cometi muitas falhas técnicas, minha comunicação com o cliente não foi tão eficiente e tive bastante dificuldade para elaborar lógicas e resolver os desafios propostos durante o projeto. Por sorte, tive o apoio dos meus professores e colegas que me ajudaram durante essa trajetória.",
  },
  {
    id: "api2",
    titulo: "CallGenie",
    descricao: "Sistema help-desk no âmbito de informática - API 2º Semestre",
    categoria: "API",
    semestre: "2º Semestre",
    tecnologias: [
      "JavaScript",
      "React",
      "MySQL",
      "Express",
      "Sequelize",
      "Figma",
    ],
    contribuicao:
      "Este foi o projeto integrador do segundo semestre da Fatec, participei como Product Owner e dev, contribuindo ativamente com a integração do front-end com o backend e criando as telas do sistema, ainda desenvolvi e consumi APIs para melhorar o sistema.",
    dificuldade:
      "Meu segundo API foi uma soma de experiências que levei do meu primeiro projeto. Procurei ser um P.O. melhor, comunicar de forma mais clara e me integrar ainda mais com o time. Consegui melhorar muito nesse aspecto, não houve tantas dificuldades, apenas algumas dúvidas com relação à linguagem e lógica, mas no geral senti que eu e todo o time conseguimos crescer juntos.",
  },
  {
    id: "api3",
    titulo: "Assetbox",
    descricao:
      "Sistema para controle e gestão empresarial de ativos - API 3º Semestre",
    categoria: "API",
    semestre: "3º Semestre",
    parceria: "Youtan",
    tecnologias: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "JavaScript",
      "SPA",
      "Bulma",
      "Figma",
      "Zube",
    ],
    contribuicao:
      "Este foi o projeto integrador do terceiro semestre da Fatec, participei como dev, contribuindo quase inteiramente com a integração do front-end com o backend, comunicação de APIs externas e performance de código, e contribuí parcialmente com a criação de endpoints e controles do back-end também.",
    dificuldade:
      "Este projeto foi meu terceiro API. As maiores dificuldades do projeto foram na linguagem de programação Java. Eu e o grupo lutamos muito para aprender e levamos muito mais tempo para fazer coisas que fazíamos de maneira simples com outras linguagens. Também tivemos grandes dificuldades com relação ao tempo hábil para desenvolver, que muitas vezes era curto, mas conseguimos entregar um projeto satisfatório e à altura do que nos foi pedido.",
  },
  {
    id: "api4",
    titulo: "Tupã",
    descricao:
      "Sistema para monitoramento e controle de estações meteorológicas - API 4º Semestre",
    categoria: "API",
    semestre: "4º Semestre",
    tecnologias: [
      "C++",
      "Arduino",
      "Next.js",
      "React",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "Redis",
      "Django",
      "Python",
    ],
    contribuicao:
      "Este foi o projeto integrador do quarto semestre da Fatec, participei como dev, contribuindo quase inteiramente com a integração do front-end com o backend, comunicação de APIs externas, performance de código e atuando com a parte de CI de DevOps.",
    dificuldade:
      "Este projeto foi meu quarto API. As maiores dificuldades do projeto foram adaptar o código de forma a ganhar dinamismo pela parte de DevOps. Trabalhar em duas frentes se mostrou desafiador, somado a isso, o grupo passou por algumas dificuldades e demissão de dois membros. Mas, com esforço, lutamos muito para nos adaptar, re-aprender e conciliar o tempo para trabalhar tanto em Dev como em Ops. Conseguimos entregar mais um projeto satisfatório e à altura do que nos foi pedido.",
  },
];

// Projetos Acadêmicos e Profissionais
export const projetosAcademicos = [
  {
    id: "acad1",
    titulo: "PetLovers",
    descricao: "Sistema de atendimento e gestão para pet shops",
    categoria: "Acadêmico",
    materia: "Técnicas de Programação",
    tecnologias: [
      "React",
      "SPA",
      "TypeScript",
      "Express",
      "Bootstrap",
      "JavaScript",
    ],
    contribuicao:
      "Projeto desenvolvido como atividade da matéria de Técnicas de Programação, com o intuito de desenvolver habilidades com projetos dinâmicos, neste caso, um sistema de atendimento para lojas e empresas do ramo pet.",
    dificuldade:
      "Este projeto foi destinado à matéria de Técnicas de Programação. Foi um projeto que desenvolvi em conjunto com meu colega Wellington Faria. Foi um projeto tranquilo; tive muita dificuldade para seguir os padrões pedidos pelo cliente (neste caso, pelo professor). Outra grande dificuldade foi conciliar o tempo para desenvolver o projeto e trabalhar no API; contudo, eu e Wellington Faria conseguimos atingir os resultados esperados.",
  },
  {
    id: "acad2",
    titulo: "Atlantis",
    descricao: "Sistema de gerenciamento e atendimento para parques aquáticos",
    categoria: "Acadêmico",
    materia: "Técnicas de Programação 2",
    tecnologias: ["React", "SPA", "TypeScript", "Tailwind CSS", "Next.js"],
    contribuicao:
      "Projeto desenvolvido como atividade da matéria de Técnicas de Programação 2, com o intuito de desenvolver habilidades com projetos dinâmicos, neste caso, um sistema de atendimento para parques aquáticos.",
    dificuldade:
      "Este projeto foi destinado à matéria de Técnicas de Programação 2. Foi um projeto que desenvolvi de maneira autônoma. Foi um projeto tranquilo; minha maior dificuldade ainda foi conciliar o tempo para desenvolver o projeto, trabalhar no API e fazer as outras atividades das matérias. Por ser um projeto que fiz sozinho, me requeriu um alto nível de compromisso e dedicação, visto que não haveria alguém para me auxiliar no desenvolvimento.",
  },
];

// Array combinado para manter compatibilidade com o código existente
export const projetos = [...projetosAPI, ...projetosAcademicos];

// Conhecimentos Técnicos de Fundamentos
export const fundamentos = [
  {
    categoria: "Algoritmos e Estruturas de Dados",
    habilidades: [
      "Algoritmos de ordenação e busca",
      "Listas, pilhas, filas e árvores",
      "Grafos e algoritmos de percurso",
      "Complexidade algorítmica (Big O)",
    ],
  },
  {
    categoria: "Bancos de Dados",
    habilidades: [
      "Modelagem de dados (conceitual, lógico, físico)",
      "SQL avançado e otimização de queries",
      "Normalização e desnormalização",
      "Transações e controle de concorrência",
    ],
  },
  {
    categoria: "Arquitetura de Software",
    habilidades: [
      "Padrões de projeto (Design Patterns)",
      "Arquitetura MVC e Clean Architecture",
      "Microserviços e arquitetura distribuída",
      "API REST e GraphQL",
    ],
  },
  {
    categoria: "DevOps e Infraestrutura",
    habilidades: [
      "Containerização (Docker)",
      "CI/CD (GitHub Actions, Jenkins)",
      "Versionamento (Git/GitHub)",
      "Cloud Computing (AWS, Azure)",
    ],
  },
];

// Habilidades Comportamentais
export const habilidadesComportamentais = [
  {
    habilidade: "Liderança",
    descricao:
      "Experiência como Product Owner em projetos APIs, coordenando equipes e tomando decisões estratégicas.",
    nivel: "Avançado",
  },
  {
    habilidade: "Comunicação",
    descricao:
      "Capacidade de comunicar ideias complexas de forma clara, tanto com equipes técnicas quanto stakeholders.",
    nivel: "Avançado",
  },
  {
    habilidade: "Trabalho em Equipe",
    descricao:
      "Colaboração efetiva em equipes multidisciplinares, adaptação a diferentes dinâmicas de grupo.",
    nivel: "Avançado",
  },
  {
    habilidade: "Resolução de Problemas",
    descricao:
      "Análise crítica de problemas complexos e desenvolvimento de soluções criativas e eficientes.",
    nivel: "Avançado",
  },
  {
    habilidade: "Adaptabilidade",
    descricao:
      "Flexibilidade para aprender novas tecnologias e se adaptar a mudanças de contexto rapidamente.",
    nivel: "Avançado",
  },
  {
    habilidade: "Gestão de Tempo",
    descricao:
      "Capacidade de priorizar tarefas e gerenciar múltiplos projetos simultâneos com eficiência.",
    nivel: "Intermediário",
  },
  {
    habilidade: "Pensamento Crítico",
    descricao:
      "Avaliação objetiva de situações e tomada de decisões baseada em análise fundamentada.",
    nivel: "Avançado",
  },
  {
    habilidade: "Proatividade",
    descricao:
      "Iniciativa para identificar oportunidades de melhoria e implementar soluções antes que problemas surjam.",
    nivel: "Avançado",
  },
];

export const imagensProjetos = [
  "assets/images/logoDataSars.png",
  "assets/images/callgenielogogit.png",
  "assets/images/assetboxlogogti.png",
  "assets/images/tupan.png",
  "assets/images/PetLovers.png",
  "assets/images/Atlantis.png",
];

export const linksProjetos = [
  "https://github.com/b4hia/DATA-SARS",
  "https://github.com/b4hia/Call-Genie",
  "https://github.com/b4hia/AssetBox",
  "https://github.com/b4hia/Tupan",
  "https://github.com/b4hia/PetLovers-PL",
  "https://github.com/b4hia/Atlantis",
];
