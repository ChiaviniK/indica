document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            const users = { 'master': '123', 'fin': '123', 'edu': '123', 'agro': '123' };
            if (users[username] && users[username] === password) {
                window.location.href = `${username}.html`;
            } else {
                errorMessage.style.display = 'block';
            }
        });
    }

    const dashboardDisplay = document.getElementById('dashboard-display');

    // Lógica para renderizar os Dashboards na página fin.html
       // Lógica para renderizar os Dashboards na página agro.html
    const dashboardCardsAgro = document.querySelectorAll('#dashboards-agro .card');
    if (dashboardCardsAgro.length > 0) {
        dashboardCardsAgro.forEach(card => {
            card.addEventListener('click', () => {
                const dashboardType = card.dataset.dashboard;
                loadAndRenderAgroDashboard(dashboardType);
            });
        });
    }

    // Lógica para renderizar os Dashboards na página edu.html
    const dashboardCardsEdu = document.querySelectorAll('#dashboards-edu .card');
    if (dashboardCardsEdu.length > 0) {
        dashboardCardsEdu.forEach(card => {
            card.addEventListener('click', () => {
                const dashboardType = card.dataset.dashboard;
                loadAndRenderEduDashboard(dashboardType);
            });
        });
    }

    // Função para carregar e renderizar Dashboards da CrediMais
    async function loadAndRenderFinDashboard(type) {
        dashboardDisplay.innerHTML = `<p>Carregando dados...</p>`;
        
        try {
            const path = 'CrediMais Soluções Financeiras/';
            const pagamentosData = await fetchAndParseCsv(path + 'pagamentos - CrediMais.csv');
            const produtosData = await fetchAndParseCsv(path + 'produtos - CrediMais.csv');
            const clientesData = await fetchAndParseCsv(path + 'clientes - CrediMais.csv');
            
            let content = '';

            switch (type) {
                case 'performance-financeira':
                    const totalReceita = pagamentosData.reduce((sum, row) => sum + (row.valor_pago || 0), 0).toFixed(2);
                    const atrasos = pagamentosData.filter(row => row.atraso_dias > 0).length;
                    const totalInadimplencia = pagamentosData.filter(row => row.atraso_dias > 0).reduce((sum, row) => sum + (row.valor_juros || 0), 0).toFixed(2);
                    
                    content = `
                        <div class="dashboard-content">
                            <h2>Dashboard de Performance Financeira</h2>
                            <div class="kpis" style="display:flex; justify-content:space-around; text-align:center;">
                                <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                    <strong>Receita Total:</strong><br> R$ ${totalReceita}
                                </div>
                                <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                    <strong>Atrasos:</strong><br> ${atrasos}
                                </div>
                                <div style="background-color:#f0f0f0; padding:20px; border-radius:8px;">
                                    <strong>Inadimplência:</strong><br> R$ ${totalInadimplencia}
                                </div>
                            </div>
                            <p style="margin-top:20px;"><strong>Amostra dos dados de Pagamentos:</strong></p>
                            <pre>${JSON.stringify(pagamentosData.slice(0, 3), null, 2)}</pre>
                        </div>
                    `;
                    break;
                case 'analise-produtos':
                    const valorMedioEmprestimo = produtosData
                        .filter(row => row.tipo === 'Empréstimo')
                        .reduce((sum, row) => sum + (row.valor_aprovado || 0), 0) / produtosData.filter(row => row.tipo === 'Empréstimo').length;
                    
                    content = `
                        <div class="dashboard-content">
                            <h2>Dashboard de Análise de Produtos</h2>
                            <p><strong>Valor médio de Empréstimos:</strong> R$ ${valorMedioEmprestimo.toFixed(2)}</p>
                            <p style="margin-top:20px;"><strong>Amostra dos dados de Produtos:</strong></p>
                            <pre>${JSON.stringify(produtosData.slice(0, 3), null, 2)}</pre>
                        </div>
                    `;
                    break;
                case 'perfil-clientes':
                    const totalClientes = clientesData.length;
                    const clientesRegiao = clientesData.reduce((acc, row) => {
                        acc[row.região] = (acc[row.região] || 0) + 1;
                        return acc;
                    }, {});
                    
                    content = `
                        <div class="dashboard-content">
                            <h2>Dashboard de Análise de Clientes</h2>
                            <p><strong>Total de Clientes:</strong> ${totalClientes}</p>
                            <p><strong>Clientes por Região:</strong> ${JSON.stringify(clientesRegiao)}</p>
                            <p style="margin-top:20px;"><strong>Amostra dos dados de Clientes:</strong></p>
                            <pre>${JSON.stringify(clientesData.slice(0, 3), null, 2)}</pre>
                        </div>
                    `;
                    break;
                default:
                    content = `<p>Dashboard não encontrado.</p>`;
            }
            dashboardDisplay.innerHTML = content;
        } catch (error) {
            console.error('Erro ao carregar ou renderizar o dashboard:', error);
            dashboardDisplay.innerHTML = `<p>Ocorreu um erro ao carregar o dashboard. Verifique o console para mais detalhes.</p>`;
        }
    }

    // Função para carregar e renderizar Dashboards da AgroTech
    async function loadAndRenderAgroDashboard(type) {
        dashboardDisplay.innerHTML = `<p>Carregando dados...</p>`;
        
        try {
            const path = 'AgroTech Soluções Agrícolas/';
            const colheitasData = await fetchAndParseCsv(path + 'colheitas - AgroTech.csv');
            const custosData = await fetchAndParseCsv(path + 'custos_operacionais - AgroTech.csv');
            const fazendasData = await fetchAndParseCsv(path + 'fazendas - AgroTech.csv');
            
            let content = '';

            switch (type) {
                case 'produtividade-agricola':
                    const produtividadeMedia = colheitasData.reduce((sum, row) => sum + (row.quantidade_toneladas / row.hectares_colhidos || 0), 0) / colheitasData.length;
                    const producaoTotal = colheitasData.reduce((sum, row) => sum + (row.quantidade_toneladas || 0), 0);
                    
                    content = `
                        <div class="dashboard-content">
                            <h2>Dashboard de Produtividade Agrícola</h2>
                            <p><strong>Produtividade Média:</strong> ${produtividadeMedia.toFixed(2)} ton/ha</p>
                            <p><strong>Produção Total:</strong> ${producaoTotal.toFixed(2)} toneladas</p>
                            <p style="margin-top:20px;"><strong>Amostra dos dados de Colheitas:</strong></p>
                            <pre>${JSON.stringify(colheitasData.slice(0, 3), null, 2)}</pre>
                        </div>
                    `;
                    break;
                case 'monitoramento-sensores':
                    // Lógica a ser implementada...
                    content = `<div class="dashboard-content"><h2>Dashboard de Monitoramento de Sensores</h2><p>Lógica a ser implementada.</p></div>`;
                    break;
                case 'analise-custos':
                    // Lógica a ser implementada...
                    content = `<div class="dashboard-content"><h2>Dashboard de Análise de Custos</h2><p>Lógica a ser implementada.</p></div>`;
                    break;
                default:
                    content = `<p>Dashboard não encontrado.</p>`;
            }
            dashboardDisplay.innerHTML = content;
        } catch (error) {
            console.error('Erro ao carregar ou renderizar o dashboard:', error);
            dashboardDisplay.innerHTML = `<p>Ocorreu um erro ao carregar o dashboard. Verifique o console para mais detalhes.</p>`;
        }
    }

    // Função para carregar e renderizar Dashboards da EduAvance
    async function loadAndRenderEduDashboard(type) {
        dashboardDisplay.innerHTML = `<p>Carregando dados...</p>`;
        
        try {
            const path = 'EduAvance Soluções Agrícolas/';
            const alunosData = await fetchAndParseCsv(path + 'alunos - EduAvance.csv');
            const notasData = await fetchAndParseCsv(path + 'notas - EduAvance.csv');
            const professoresData = await fetchAndParseCsv(path + 'professores - EduAvance.csv');
            
            let content = '';

            switch (type) {
                case 'desempenho-academico':
                    // Lógica a ser implementada...
                    content = `<div class="dashboard-content"><h2>Dashboard de Desempenho Acadêmico</h2><p>Lógica a ser implementada.</p></div>`;
                    break;
                case 'satisfacao-aluno':
                    // Lógica a ser implementada...
                    content = `<div class="dashboard-content"><h2>Dashboard de Satisfação do Aluno</h2><p>Lógica a ser implementada.</p></div>`;
                    break;
                case 'perfil-docentes':
                    // Lógica a ser implementada...
                    content = `<div class="dashboard-content"><h2>Dashboard de Perfil de Docentes</h2><p>Lógica a ser implementada.</p></div>`;
                    break;
                default:
                    content = `<p>Dashboard não encontrado.</p>`;
            }
            dashboardDisplay.innerHTML = content;
        } catch (error) {
            console.error('Erro ao carregar ou renderizar o dashboard:', error);
            dashboardDisplay.innerHTML = `<p>Ocorreu um erro ao carregar o dashboard. Verifique o console para mais detalhes.</p>`;
        }
    }

    async function fetchAndParseCsv(filePath) {
        return new Promise((resolve, reject) => {
            Papa.parse(filePath, {
                download: true,
                header: true,
                dynamicTyping: true,
                complete: (results) => {
                    if (results.data.length > 0 && results.data[0] !== null) {
                        resolve(results.data);
                    } else {
                        reject(new Error(`O arquivo ${filePath} está vazio, não foi encontrado ou mal formatado.`));
                    }
                },
                error: (err) => {
                    reject(err);
                }
            });
        });
    }
});