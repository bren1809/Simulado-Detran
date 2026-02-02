// Simulado DETRAN 2026 - Lógica Principal
// Aplicação para prática de prova teórica do DETRAN

class SimuladoDetran {
    constructor() {
        // Elementos do DOM
        this.telaInicial = document.getElementById('tela-inicial');
        this.telaSimulado = document.getElementById('tela-simulado');
        this.telaResultado = document.getElementById('tela-resultado');
        this.telaGabarito = document.getElementById('tela-gabarito');
        
        this.btnIniciar = document.getElementById('btn-iniciar');
        this.btnAnterior = document.getElementById('btn-anterior');
        this.btnProximo = document.getElementById('btn-proximo');
        this.btnFinalizar = document.getElementById('btn-finalizar');
        
        this.questaoContainer = document.getElementById('questao-container');
        this.indicadoresContainer = document.getElementById('indicadores');
        this.progressoFill = document.getElementById('progresso');
        this.questaoAtualSpan = document.getElementById('questao-atual');
        this.tempoSpan = document.getElementById('tempo');
        
        this.resultadoContainer = document.getElementById('resultado-container');
        this.gabaritoContainer = document.getElementById('gabarito-container');
        
        // Estado do simulado
        this.questoesEmbaralhadas = [];
        this.questaoAtual = 0;
        this.respostas = {};
        this.tempoInicio = null;
        this.tempoFinal = null;
        this.timerInterval = null;
        
        // Constantes
        this.TOTAL_QUESTOES = 30;
        this.MINIMO_APROVACAO = 21;
        
        // Inicializar eventos
        this.inicializarEventos();
    }
    
    inicializarEventos() {
        this.btnIniciar.addEventListener('click', () => this.iniciarSimulado());
        this.btnAnterior.addEventListener('click', () => this.questaoAnterior());
        this.btnProximo.addEventListener('click', () => this.proximaQuestao());
        this.btnFinalizar.addEventListener('click', () => this.confirmarFinalizacao());
        document.getElementById('btn-voltar-resultado').addEventListener('click', () => this.voltarResultado());
    }
    
    iniciarSimulado() {
        // Embaralhar questões
        this.questoesEmbaralhadas = embaralharQuestoes(questoes);
        this.questaoAtual = 0;
        this.respostas = {};
        this.tempoInicio = new Date();
        
        // Trocar telas
        this.telaInicial.classList.remove('ativa');
        this.telaSimulado.classList.add('ativa');
        
        // Criar indicadores
        this.criarIndicadores();
        
        // Exibir primeira questão
        this.exibirQuestao();
        
        // Iniciar timer
        this.iniciarTimer();
    }
    
    criarIndicadores() {
        this.indicadoresContainer.innerHTML = '';
        for (let i = 0; i < this.TOTAL_QUESTOES; i++) {
            const indicador = document.createElement('div');
            indicador.className = 'indicador';
            indicador.textContent = i + 1;
            indicador.addEventListener('click', () => this.irParaQuestao(i));
            this.indicadoresContainer.appendChild(indicador);
        }
        this.atualizarIndicadores();
    }
    
    atualizarIndicadores() {
        const indicadores = this.indicadoresContainer.querySelectorAll('.indicador');
        indicadores.forEach((ind, index) => {
            ind.classList.remove('atual', 'respondida');
            if (index === this.questaoAtual) {
                ind.classList.add('atual');
            }
            if (this.respostas[index] !== undefined) {
                ind.classList.add('respondida');
            }
        });
    }
    
    exibirQuestao() {
        const questao = this.questoesEmbaralhadas[this.questaoAtual];
        const letras = ['A', 'B', 'C', 'D'];
        
        let html = `
            <span class="questao-numero">Questão ${this.questaoAtual + 1}</span>
            <p class="questao-texto">${questao.pergunta}</p>
            <div class="alternativas">
        `;
        
        questao.alternativas.forEach((alt, index) => {
            const selecionada = this.respostas[this.questaoAtual] === index ? 'selecionada' : '';
            html += `
                <div class="alternativa ${selecionada}" data-index="${index}">
                    <span class="alternativa-letra">${letras[index]}</span>
                    <span class="alternativa-texto">${alt}</span>
                </div>
            `;
        });
        
        html += '</div>';
        this.questaoContainer.innerHTML = html;
        
        // Adicionar eventos de clique nas alternativas
        const alternativas = this.questaoContainer.querySelectorAll('.alternativa');
        alternativas.forEach(alt => {
            alt.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                this.selecionarResposta(index);
            });
        });
        
        // Atualizar navegação
        this.atualizarNavegacao();
        
        // Atualizar progresso
        this.atualizarProgresso();
        
        // Atualizar indicadores
        this.atualizarIndicadores();
    }
    
    selecionarResposta(index) {
        this.respostas[this.questaoAtual] = index;
        
        // Atualizar visual
        const alternativas = this.questaoContainer.querySelectorAll('.alternativa');
        alternativas.forEach((alt, i) => {
            alt.classList.remove('selecionada');
            if (i === index) {
                alt.classList.add('selecionada');
            }
        });
        
        // Atualizar indicadores
        this.atualizarIndicadores();
    }
    
    atualizarNavegacao() {
        this.btnAnterior.disabled = this.questaoAtual === 0;
        
        if (this.questaoAtual === this.TOTAL_QUESTOES - 1) {
            this.btnProximo.textContent = 'Finalizar →';
        } else {
            this.btnProximo.textContent = 'Próxima →';
        }
        
        this.questaoAtualSpan.textContent = `Questão ${this.questaoAtual + 1} de ${this.TOTAL_QUESTOES}`;
    }
    
    atualizarProgresso() {
        const porcentagem = ((this.questaoAtual + 1) / this.TOTAL_QUESTOES) * 100;
        this.progressoFill.style.width = `${porcentagem}%`;
    }
    
    questaoAnterior() {
        if (this.questaoAtual > 0) {
            this.questaoAtual--;
            this.exibirQuestao();
        }
    }
    
    proximaQuestao() {
        if (this.questaoAtual < this.TOTAL_QUESTOES - 1) {
            this.questaoAtual++;
            this.exibirQuestao();
        } else {
            this.confirmarFinalizacao();
        }
    }
    
    irParaQuestao(index) {
        this.questaoAtual = index;
        this.exibirQuestao();
    }
    
    iniciarTimer() {
        this.timerInterval = setInterval(() => {
            const agora = new Date();
            const diff = Math.floor((agora - this.tempoInicio) / 1000);
            const minutos = Math.floor(diff / 60).toString().padStart(2, '0');
            const segundos = (diff % 60).toString().padStart(2, '0');
            this.tempoSpan.textContent = `⏱️ ${minutos}:${segundos}`;
        }, 1000);
    }
    
    pararTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.tempoFinal = new Date();
    }
    
    confirmarFinalizacao() {
        const respondidas = Object.keys(this.respostas).length;
        
        if (respondidas < this.TOTAL_QUESTOES) {
            const naoRespondidas = this.TOTAL_QUESTOES - respondidas;
            const confirmar = confirm(
                `Você ainda tem ${naoRespondidas} questão(ões) não respondida(s).\n\n` +
                `Deseja finalizar mesmo assim?\n\n` +
                `Questões não respondidas serão consideradas como ERRADAS.`
            );
            if (!confirmar) return;
        } else {
            const confirmar = confirm('Deseja finalizar o simulado e ver seu resultado?');
            if (!confirmar) return;
        }
        
        this.finalizarSimulado();
    }
    
    finalizarSimulado() {
        this.pararTimer();
        
        // Calcular resultado
        let acertos = 0;
        let erros = 0;
        
        this.questoesEmbaralhadas.forEach((questao, index) => {
            if (this.respostas[index] === questao.correta) {
                acertos++;
            } else {
                erros++;
            }
        });
        
        const aprovado = acertos >= this.MINIMO_APROVACAO;
        const porcentagem = (acertos / this.TOTAL_QUESTOES) * 100;
        
        // Calcular tempo
        const tempoTotal = Math.floor((this.tempoFinal - this.tempoInicio) / 1000);
        const minutos = Math.floor(tempoTotal / 60);
        const segundos = tempoTotal % 60;
        const tempoFormatado = `${minutos}m ${segundos}s`;
        
        // Exibir resultado
        this.exibirResultado(acertos, erros, aprovado, porcentagem, tempoFormatado);
        
        // Trocar telas
        this.telaSimulado.classList.remove('ativa');
        this.telaResultado.classList.add('ativa');
        
        // Criar confetti se aprovado
        if (aprovado) {
            this.criarConfetti();
        }
    }
    
    exibirResultado(acertos, erros, aprovado, porcentagem, tempo) {
        const icone = aprovado ? '🎉' : '😔';
        const titulo = aprovado ? 'APROVADO!' : 'REPROVADO';
        const mensagem = aprovado 
            ? 'Parabéns! Você está pronto para a prova oficial!' 
            : 'Continue estudando! Você consegue na próxima!';
        
        this.resultadoContainer.innerHTML = `
            <div class="resultado-icone">${icone}</div>
            <h2 class="resultado-titulo ${aprovado ? 'aprovado' : 'reprovado'}">${titulo}</h2>
            <p class="resultado-mensagem">${mensagem}</p>
            
            <div class="resultado-stats">
                <div class="stat-card">
                    <span class="stat-valor acertos">${acertos}</span>
                    <span class="stat-label">Acertos</span>
                </div>
                <div class="stat-card">
                    <span class="stat-valor erros">${erros}</span>
                    <span class="stat-label">Erros</span>
                </div>
                <div class="stat-card">
                    <span class="stat-valor tempo">${tempo}</span>
                    <span class="stat-label">Tempo</span>
                </div>
            </div>
            
            <div class="barra-resultado">
                <div class="barra-acertos" style="width: ${porcentagem}%"></div>
                <div class="linha-aprovacao"></div>
            </div>
            
            <p style="color: #94a3b8; margin-bottom: 30px;">
                Você acertou <strong style="color: #10b981;">${acertos}</strong> de 
                <strong>${this.TOTAL_QUESTOES}</strong> questões 
                (${porcentagem.toFixed(1)}%)
            </p>
            
            <div class="resultado-botoes">
                <button class="btn-resultado btn-gabarito" id="btn-ver-gabarito">
                    📋 Ver Gabarito Comentado
                </button>
                <button class="btn-resultado btn-refazer" id="btn-refazer">
                    🔄 Refazer Simulado
                </button>
            </div>
        `;
        
        // Adicionar eventos aos botões
        document.getElementById('btn-ver-gabarito').addEventListener('click', () => this.verGabarito());
        document.getElementById('btn-refazer').addEventListener('click', () => this.refazerSimulado());
    }
    
    verGabarito() {
        this.gerarGabarito();
        this.telaResultado.classList.remove('ativa');
        this.telaGabarito.classList.add('ativa');
    }
    
    gerarGabarito() {
        const letras = ['A', 'B', 'C', 'D'];
        let html = '';
        
        this.questoesEmbaralhadas.forEach((questao, index) => {
            const respostaUsuario = this.respostas[index];
            const correto = respostaUsuario === questao.correta;
            const status = correto ? 'correto' : 'incorreto';
            const statusTexto = correto ? '✓ Correto' : '✗ Incorreto';
            
            const suaResposta = respostaUsuario !== undefined 
                ? `${letras[respostaUsuario]}) ${questao.alternativas[respostaUsuario]}`
                : 'Não respondida';
            
            const respostaCorreta = `${letras[questao.correta]}) ${questao.alternativas[questao.correta]}`;
            
            html += `
                <div class="gabarito-item ${status}">
                    <div class="gabarito-header">
                        <span class="gabarito-numero">Questão ${index + 1}</span>
                        <span class="gabarito-status ${status}">${statusTexto}</span>
                    </div>
                    
                    <p class="gabarito-pergunta">${questao.pergunta}</p>
                    
                    <div class="gabarito-respostas">
                        <div class="gabarito-sua-resposta">
                            <span>Sua resposta:</span>
                            <span class="${correto ? 'resposta-correta' : 'resposta-incorreta'}">${suaResposta}</span>
                        </div>
                        ${!correto ? `
                        <div class="gabarito-resposta-correta">
                            <span>Resposta correta:</span>
                            <span class="resposta-correta">${respostaCorreta}</span>
                        </div>
                        ` : ''}
                    </div>
                    
                    <div class="gabarito-explicacao">
                        <h4>💡 Explicação</h4>
                        <p>${questao.explicacao}</p>
                    </div>
                </div>
            `;
        });
        
        this.gabaritoContainer.innerHTML = html;
    }
    
    voltarResultado() {
        this.telaGabarito.classList.remove('ativa');
        this.telaResultado.classList.add('ativa');
    }
    
    refazerSimulado() {
        // Resetar estado
        this.telaResultado.classList.remove('ativa');
        this.telaGabarito.classList.remove('ativa');
        this.telaInicial.classList.add('ativa');
    }
    
    criarConfetti() {
        const cores = ['#7c3aed', '#00d4ff', '#10b981', '#fbbf24', '#ef4444', '#ec4899'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 4000);
            }, i * 50);
        }
    }
}

// Inicializar o simulado quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new SimuladoDetran();
});
