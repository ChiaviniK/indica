# Indica - Prototipagem de Site para Consultoria de BI

Este projeto é um protótipo de site desenvolvido para a consultoria de Business Intelligence "Indica". O objetivo principal é servir como material de apresentação para investidores e incubadoras, como o SEBRAE e a UNESP. O protótipo demonstra as capacidades da consultoria em transformar dados brutos em dashboards dinâmicos e interativos para clientes de diferentes setores.

## Funcionalidades Principais

* **Página Inicial Profissional**: Uma landing page com design moderno, responsivo e um vídeo de fundo para causar uma primeira impressão impactante.
* **Sistema de Acesso Simulado**: Um fluxo de login simples que redireciona usuários (representando diferentes clientes e um perfil master) para seus respectivos dashboards.
* **Dashboards Dinâmicos**: Três dashboards interativos para empresas fictícias de setores estratégicos:
    * **CrediMais Soluções Financeiras**: Foco em análise de performance financeira, produtos e perfil de clientes.
    * **EduAvance - Instituto de Ensino**: Foco em desempenho acadêmico, satisfação dos alunos e perfil dos docentes.
    * **AgroTech Soluções Agrícolas**: Foco em produtividade, monitoramento de sensores e análise de custos.
* **Filtros Interativos**: Dashboards com filtros dinâmicos que permitem ao usuário explorar os dados de forma aprofundada, como filtrar por fazenda ou tipo de sensor.
* **Visualizações de Dados Avançadas**: Utilização da biblioteca Chart.js para criar diversos tipos de gráficos (barras, linhas, pizza, radar) que ilustram os indicadores de forma clara e profissional.

## Estrutura do Projeto

A organização dos arquivos segue uma arquitetura modular e de fácil manutenção, ideal para protótipos e projetos de pequena escala.

/projeto-indica
├── index.html              # Página inicial
├── login.html              # Página de login
├── fin.html                # Dashboard da CrediMais
├── edu.html                # Dashboard da EduAvance
├── agro.html               # Dashboard da AgroTech
├── style.css               # Estilos globais
├── app.js                  # Lógica compartilhada (login, menu)
├── dashboardfin.js         # Lógica específica do dashboard financeiro
├── dashboardedu.js         # Lógica específica do dashboard de educação
├── dashboardagro.js        # Lógica específica do dashboard do agronegócio
└── assets/
├── movies/
│   └── banner.mp4      # Vídeo de fundo da página inicial
└── img/
├── analytics.jpg   # Imagem do card
├── custos.jpg      # Imagem do card
├── data.jpg        # Imagem do card
├── gemeos.webp     # Imagem do card
├── produtor.jpg    # Imagem do card
├── sensors.jpg     # Imagem do card
├── target.jpg      # Imagem do card
└── vr.avif         # Imagem do card


## Como Visualizar

1.  Clone este repositório para a sua máquina local.
2.  Abra o arquivo `index.html` em seu navegador web.

Alternativamente, você pode usar um servidor web local para testar a aplicação, embora isso não seja estritamente necessário, já que o protótipo funciona de forma estática.

## Tecnologias Utilizadas

* **HTML5**: Para a estrutura das páginas.
* **CSS3**: Para o design e responsividade.
* **JavaScript (ES6+)**: Para a lógica interativa e dinâmica.
* **Chart.js**: Biblioteca de visualização de dados para a criação dos gráficos.
* **Google Fonts**: Para uma tipografia profissional.

## Contato

* **Nome**: [Seu Nome]
* **Email**: [Seu Email]
* **LinkedIn**: [Seu Perfil do LinkedIn]

---

Sinta-se à vontade para personalizar este `README` com seus detalhes e quaisquer outras informações que considerar relevantes.
