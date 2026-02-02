// Banco de Questões - Simulado DETRAN 2026
// Questões atualizadas conforme o Código de Trânsito Brasileiro (CTB)
// e Resoluções do CONTRAN vigentes em 2026
// Banco com 120 questões para garantir máxima variedade entre simulados

const questoes = [
    {
        id: 1,
        pergunta: "Qual é a velocidade máxima permitida para veículos em vias urbanas locais, quando não houver sinalização regulamentadora?",
        alternativas: [
            "20 km/h",
            "30 km/h",
            "40 km/h",
            "50 km/h"
        ],
        correta: 1,
        explicacao: "Conforme o Art. 61 do CTB, nas vias urbanas locais, quando não houver sinalização regulamentadora, a velocidade máxima permitida é de 30 km/h. Esta é uma das questões mais frequentes na prova teórica do DETRAN."
    },
    {
        id: 2,
        pergunta: "O condutor que dirigir sob influência de álcool ou de qualquer outra substância psicoativa que determine dependência, comete:",
        alternativas: [
            "Infração leve",
            "Infração média",
            "Infração grave",
            "Infração gravíssima"
        ],
        correta: 3,
        explicacao: "De acordo com o Art. 165 do CTB, dirigir sob influência de álcool ou qualquer outra substância psicoativa é considerada INFRAÇÃO GRAVÍSSIMA, com multa multiplicada por 10 e suspensão do direito de dirigir por 12 meses. Além disso, pode configurar crime de trânsito."
    },
    {
        id: 3,
        pergunta: "Ao aproximar-se de um cruzamento sem sinalização, o condutor deve:",
        alternativas: [
            "Dar preferência ao veículo que vier pela esquerda",
            "Dar preferência ao veículo que vier pela direita",
            "Acelerar para passar primeiro",
            "Parar completamente em todos os casos"
        ],
        correta: 1,
        explicacao: "O Art. 29, inciso III do CTB estabelece que em cruzamentos não sinalizados, a preferência de passagem é do veículo que estiver circulando por via de maior fluxo ou, no caso de vias de mesmo fluxo, do veículo que vier pela DIREITA."
    },
    {
        id: 4,
        pergunta: "Qual documento é obrigatório o condutor portar durante a condução do veículo?",
        alternativas: [
            "Apenas o CRLV",
            "Apenas a CNH",
            "CNH ou Permissão para Dirigir e CRLV",
            "Apenas o comprovante de seguro obrigatório"
        ],
        correta: 2,
        explicacao: "Conforme o Art. 133 do CTB, é obrigatório o porte da Carteira Nacional de Habilitação (CNH) ou Permissão para Dirigir (PPD) e do Certificado de Registro e Licenciamento de Veículo (CRLV) durante a condução."
    },
    {
        id: 5,
        pergunta: "O que significa a luz amarela do semáforo?",
        alternativas: [
            "Pode prosseguir com cuidado",
            "Deve parar imediatamente",
            "Indica atenção, devendo o condutor parar, salvo se isso resultar em perigo",
            "Pode acelerar para passar antes do vermelho"
        ],
        correta: 2,
        explicacao: "De acordo com o Art. 41 do CTB, a luz amarela indica 'ATENÇÃO', devendo o condutor parar o veículo, salvo se isso resultar em situação de perigo. Nunca se deve acelerar para 'pegar' o sinal."
    },
    {
        id: 6,
        pergunta: "Qual é a distância mínima de seguimento em relação ao veículo da frente em condições normais?",
        alternativas: [
            "1 segundo",
            "2 segundos",
            "3 segundos",
            "4 segundos"
        ],
        correta: 1,
        explicacao: "A regra dos 2 segundos é uma técnica segura para manter distância de seguimento. Em condições adversas (chuva, neblina, pista molhada), essa distância deve ser aumentada para 3 ou mais segundos."
    },
    {
        id: 7,
        pergunta: "O uso do cinto de segurança é obrigatório:",
        alternativas: [
            "Apenas para o condutor",
            "Para condutor e passageiro do banco da frente",
            "Para todos os ocupantes do veículo",
            "Apenas em rodovias"
        ],
        correta: 2,
        explicacao: "O Art. 65 do CTB determina que o uso do cinto de segurança é OBRIGATÓRIO para TODOS os ocupantes do veículo, em todas as vias do território nacional. A infração é gravíssima quando o passageiro for menor de 7 anos."
    },
    {
        id: 8,
        pergunta: "O que fazer ao presenciar um acidente de trânsito com vítimas?",
        alternativas: [
            "Seguir viagem para não se envolver",
            "Remover as vítimas imediatamente do veículo",
            "Sinalizar o local, chamar socorro especializado e prestar primeiros socorros sem mover a vítima",
            "Apenas ligar para a polícia e ir embora"
        ],
        correta: 2,
        explicacao: "O procedimento correto é: 1) Sinalizar o local do acidente para evitar novos acidentes; 2) Chamar socorro especializado (SAMU 192, Bombeiros 193); 3) Prestar primeiros socorros básicos SEM MOVER a vítima, a menos que haja risco iminente de incêndio ou explosão."
    },
    {
        id: 9,
        pergunta: "Em qual situação é permitido ultrapassar pela direita?",
        alternativas: [
            "Nunca é permitido",
            "Quando o veículo da frente estiver sinalizando que vai virar à esquerda",
            "Quando houver congestionamento",
            "Quando o veículo da frente estiver em baixa velocidade"
        ],
        correta: 1,
        explicacao: "O Art. 29, inciso IX do CTB permite a ultrapassagem pela direita APENAS quando o veículo à frente estiver sinalizando o propósito de entrar à esquerda. Em todas as outras situações, a ultrapassagem deve ser feita pela esquerda."
    },
    {
        id: 10,
        pergunta: "Qual é a penalidade para quem estaciona em vaga destinada a pessoas com deficiência sem a devida credencial?",
        alternativas: [
            "Infração leve",
            "Infração média",
            "Infração grave",
            "Infração gravíssima"
        ],
        correta: 3,
        explicacao: "Estacionar em vagas reservadas a pessoas com deficiência, idosos, gestantes ou pessoas com crianças de colo sem a devida credencial é INFRAÇÃO GRAVÍSSIMA, conforme Art. 181, inciso XX do CTB."
    },
    {
        id: 11,
        pergunta: "O que representa uma placa de formato triangular com fundo amarelo?",
        alternativas: [
            "Regulamentação",
            "Advertência",
            "Indicação",
            "Serviços auxiliares"
        ],
        correta: 1,
        explicacao: "As placas de ADVERTÊNCIA têm formato triangular com fundo amarelo e símbolos pretos. Elas alertam os condutores sobre condições perigosas da via ou situações que exigem atenção especial."
    },
    {
        id: 12,
        pergunta: "Qual a quantidade máxima de pontos permitida na CNH antes da suspensão do direito de dirigir?",
        alternativas: [
            "15 pontos em 12 meses",
            "20 pontos em 12 meses",
            "30 pontos em 12 meses ou 40 pontos para quem não cometeu infração gravíssima",
            "40 pontos em 12 meses"
        ],
        correta: 2,
        explicacao: "Conforme o Art. 261 do CTB (atualizado pela Lei 14.071/2020), o limite é de 20 pontos em 12 meses para quem possui infração gravíssima, 30 pontos para quem possui infração grave e 40 pontos para quem não cometeu infração grave ou gravíssima no período."
    },
    {
        id: 13,
        pergunta: "O condutor que recusar a se submeter ao teste do etilômetro (bafômetro):",
        alternativas: [
            "Será apenas advertido",
            "Será multado como se tivesse cometido a infração de dirigir alcoolizado",
            "Não sofrerá nenhuma penalidade",
            "Será apenas encaminhado para exame de sangue"
        ],
        correta: 1,
        explicacao: "De acordo com o Art. 165-A do CTB, a recusa em se submeter ao teste do etilômetro ou a qualquer procedimento que permita verificar o uso de álcool ou substância psicoativa é considerada infração gravíssima, com as mesmas penalidades aplicadas a quem é flagrado dirigindo alcoolizado."
    },
    {
        id: 14,
        pergunta: "O que é aquaplanagem?",
        alternativas: [
            "Quando o veículo derrapa em curvas",
            "Quando os pneus perdem aderência por acúmulo de água entre o pneu e o pavimento",
            "Quando o motor é afetado pela água",
            "Quando os freios não funcionam na chuva"
        ],
        correta: 1,
        explicacao: "A aquaplanagem ocorre quando há uma camada de água entre os pneus e o pavimento, fazendo com que o veículo perca aderência e deslize. Para evitar, deve-se reduzir a velocidade em pistas molhadas e manter os pneus em bom estado."
    },
    {
        id: 15,
        pergunta: "A partir de qual idade é permitido o transporte de crianças no banco dianteiro do veículo?",
        alternativas: [
            "5 anos",
            "7 anos e 6 meses",
            "10 anos",
            "12 anos"
        ],
        correta: 2,
        explicacao: "Conforme a Resolução 819/2021 do CONTRAN, crianças com idade inferior a 10 anos devem ser transportadas nos bancos traseiros, usando dispositivo de retenção adequado. Exceção: veículos que só possuam banco dianteiro."
    },
    {
        id: 16,
        pergunta: "Qual é a velocidade máxima permitida em rodovias de pista dupla para automóveis?",
        alternativas: [
            "80 km/h",
            "100 km/h",
            "110 km/h",
            "120 km/h"
        ],
        correta: 2,
        explicacao: "De acordo com o Art. 61 do CTB, a velocidade máxima para automóveis em rodovias de pista dupla (com canteiro central divisório) é de 110 km/h, quando não houver sinalização regulamentadora."
    },
    {
        id: 17,
        pergunta: "O que significa a sigla DPVAT?",
        alternativas: [
            "Departamento de Proteção de Veículos Automotores Terrestres",
            "Danos Pessoais Causados por Veículos Automotores de Via Terrestre",
            "Documento de Pagamento de Veículos Automotores Terrestres",
            "Departamento de Polícia de Veículos Automotores Terrestres"
        ],
        correta: 1,
        explicacao: "DPVAT significa Danos Pessoais causados por Veículos Automotores de Via Terrestre. É um seguro obrigatório que cobre despesas médicas, invalidez permanente e morte decorrentes de acidentes de trânsito. Nota: A partir de 2020, houve mudanças na gestão deste seguro."
    },
    {
        id: 18,
        pergunta: "Quando o condutor deve usar a luz baixa durante o dia?",
        alternativas: [
            "Nunca, a luz diurna é suficiente",
            "Apenas em túneis",
            "Obrigatoriamente em rodovias, mesmo durante o dia",
            "Apenas em dias de chuva"
        ],
        correta: 2,
        explicacao: "O Art. 40 do CTB determina que o uso de farol baixo é OBRIGATÓRIO em rodovias, mesmo durante o dia. Esta medida aumenta a visibilidade do veículo e reduz o risco de acidentes, especialmente em ultrapassagens."
    },
    {
        id: 19,
        pergunta: "Qual é a função do sistema ABS nos veículos?",
        alternativas: [
            "Aumentar a potência do motor",
            "Evitar o travamento das rodas durante a frenagem",
            "Melhorar o consumo de combustível",
            "Aumentar a velocidade máxima do veículo"
        ],
        correta: 1,
        explicacao: "O sistema ABS (Anti-lock Braking System) evita o travamento das rodas durante uma frenagem brusca, permitindo que o condutor mantenha o controle da direção. Isso é fundamental para evitar derrapagens e acidentes."
    },
    {
        id: 20,
        pergunta: "Em uma rotatória, quem tem a preferência de passagem?",
        alternativas: [
            "Quem está entrando na rotatória",
            "Quem está na rotatória",
            "Quem vier pela direita",
            "Sempre o veículo maior"
        ],
        correta: 1,
        explicacao: "Segundo o Art. 29, inciso III do CTB, em rotatórias, a preferência de passagem é do veículo que já está circulando dentro dela. Quem deseja entrar deve aguardar uma oportunidade segura."
    },
    {
        id: 21,
        pergunta: "O que fazer em caso de pane elétrica no veículo à noite em uma rodovia?",
        alternativas: [
            "Permanecer dentro do veículo aguardando socorro",
            "Sinalizar com o triângulo, sair do veículo pela porta do lado da rodovia e aguardar atrás da defensa",
            "Tentar consertar o problema na própria pista",
            "Caminhar pela pista até encontrar ajuda"
        ],
        correta: 1,
        explicacao: "O procedimento correto é: 1) Ligar o pisca-alerta; 2) Colocar o triângulo de segurança a pelo menos 30 metros do veículo; 3) Sair do veículo pelo lado oposto à pista de rolamento; 4) Aguardar o socorro em local seguro, fora da pista."
    },
    {
        id: 22,
        pergunta: "Qual é a infração para o condutor que utiliza o telefone celular durante a condução do veículo?",
        alternativas: [
            "Infração leve",
            "Infração média",
            "Infração grave",
            "Infração gravíssima"
        ],
        correta: 3,
        explicacao: "Conforme o Art. 252, inciso VI do CTB, usar o telefone celular durante a condução do veículo é INFRAÇÃO GRAVÍSSIMA. A única exceção é o uso de dispositivo viva-voz ou fone de ouvido."
    },
    {
        id: 23,
        pergunta: "Qual o prazo para transferência de propriedade de veículo após a compra?",
        alternativas: [
            "10 dias",
            "15 dias",
            "30 dias",
            "60 dias"
        ],
        correta: 2,
        explicacao: "De acordo com o Art. 123 do CTB, o novo proprietário tem o prazo de 30 dias para realizar a transferência de propriedade do veículo junto ao órgão de trânsito, sob pena de multa."
    },
    {
        id: 24,
        pergunta: "O que indica uma placa de fundo vermelho com símbolo ou legenda em branco?",
        alternativas: [
            "Advertência",
            "Indicação de destino",
            "Regulamentação (proibição)",
            "Serviços auxiliares"
        ],
        correta: 2,
        explicacao: "As placas de REGULAMENTAÇÃO com fundo vermelho indicam PROIBIÇÃO. Exemplo: 'Proibido Estacionar', 'Proibido Retornar'. As de fundo branco com orla vermelha indicam restrições ou obrigações."
    },
    {
        id: 25,
        pergunta: "Qual é a principal causa de acidentes de trânsito no Brasil?",
        alternativas: [
            "Defeitos mecânicos nos veículos",
            "Condições climáticas adversas",
            "Falha humana (imprudência, negligência e imperícia)",
            "Má conservação das vias"
        ],
        correta: 2,
        explicacao: "Estudos mostram que aproximadamente 90% dos acidentes de trânsito são causados por FALHA HUMANA, incluindo: excesso de velocidade, uso de álcool, distração, desrespeito à sinalização e ultrapassagens indevidas."
    },
    {
        id: 26,
        pergunta: "O que é direção defensiva?",
        alternativas: [
            "Dirigir em alta velocidade para evitar perigos",
            "Técnica de direção que visa prevenir acidentes, antecipando situações de risco",
            "Dirigir apenas em horários de menor movimento",
            "Utilizar veículos com sistemas de segurança avançados"
        ],
        correta: 1,
        explicacao: "Direção Defensiva é o conjunto de técnicas e procedimentos que permitem ao condutor antecipar situações de perigo e tomar decisões corretas para evitar acidentes. Baseia-se em 5 elementos: conhecimento, atenção, previsão, decisão e habilidade."
    },
    {
        id: 27,
        pergunta: "Em caso de acidente sem vítimas e com acordo entre as partes, qual é o procedimento correto?",
        alternativas: [
            "Obrigatoriamente chamar a polícia e aguardar no local",
            "Deixar o local sem qualquer registro",
            "Remover os veículos da pista e preencher a Declaração Amigável de Acidente (DAA)",
            "Aguardar a seguradora no local"
        ],
        correta: 2,
        explicacao: "Em acidentes sem vítimas e com acordo entre os envolvidos, o Art. 178 do CTB permite que os veículos sejam removidos da pista para não obstruir o trânsito. É importante preencher a Declaração Amigável de Acidente (DAA) para fins de seguro."
    },
    {
        id: 28,
        pergunta: "Qual é o tempo de validade da CNH para condutores com menos de 50 anos?",
        alternativas: [
            "3 anos",
            "5 anos",
            "10 anos",
            "15 anos"
        ],
        correta: 2,
        explicacao: "Conforme o Art. 147 do CTB (alterado pela Lei 14.071/2020), a CNH tem validade de 10 anos para condutores com menos de 50 anos; 5 anos para condutores de 50 a 69 anos; e 3 anos para condutores com 70 anos ou mais."
    },
    {
        id: 29,
        pergunta: "O que significa a placa R-1 (PARE)?",
        alternativas: [
            "Reduzir a velocidade",
            "Dar preferência",
            "Parar obrigatoriamente e só prosseguir quando houver condição segura",
            "Parar apenas se houver outros veículos"
        ],
        correta: 2,
        explicacao: "A placa R-1 (PARE) indica obrigatoriedade de PARAR completamente o veículo antes de entrar na via preferencial. O condutor deve parar, verificar as condições de segurança e só então prosseguir. É uma das placas mais importantes do CTB."
    },
    {
        id: 30,
        pergunta: "O que é fadiga ao volante e como preveni-la?",
        alternativas: [
            "É o cansaço do veículo; deve-se fazer manutenção preventiva",
            "É o cansaço do condutor; deve-se parar a cada 2 horas ou 200 km para descanso",
            "É o desgaste dos pneus; deve-se calibrar regularmente",
            "É a perda de potência do motor; deve-se abastecer com combustível de qualidade"
        ],
        correta: 1,
        explicacao: "A fadiga ao volante é o cansaço físico e mental do condutor, que reduz a capacidade de reação e atenção. Para prevenir: dormir bem antes de viajar, parar a cada 2 horas ou 200 km, evitar dirigir após refeições pesadas ou uso de medicamentos que causem sonolência."
    },
    // NOVAS QUESTÕES ADICIONAIS PARA VARIEDADE
    {
        id: 31,
        pergunta: "O que significa a placa R-2 (Dê a preferência)?",
        alternativas: [
            "Parar obrigatoriamente",
            "Reduzir a velocidade e dar preferência aos veículos da via principal",
            "Acelerar para entrar na via",
            "Buzinar antes de entrar"
        ],
        correta: 1,
        explicacao: "A placa R-2 indica que o condutor deve reduzir a velocidade e dar preferência aos veículos que circulam pela via em que vai entrar. Diferente da R-1 (PARE), não exige parada total obrigatória."
    },
    {
        id: 32,
        pergunta: "Qual é a velocidade máxima em vias urbanas coletoras?",
        alternativas: [
            "30 km/h",
            "40 km/h",
            "50 km/h",
            "60 km/h"
        ],
        correta: 1,
        explicacao: "Segundo o Art. 61 do CTB, a velocidade máxima em vias urbanas coletoras é de 40 km/h, quando não houver sinalização indicando outro limite."
    },
    {
        id: 33,
        pergunta: "O que é o efeito 'visão em túnel' na direção?",
        alternativas: [
            "Dificuldade de enxergar dentro de túneis",
            "Redução do campo de visão periférica causada pela alta velocidade",
            "Problema de visão que impede dirigir à noite",
            "Efeito causado pelo uso de óculos escuros"
        ],
        correta: 1,
        explicacao: "O efeito 'visão em túnel' ocorre quando o condutor dirige em alta velocidade, reduzindo seu campo de visão periférica. Quanto maior a velocidade, menor o ângulo de visão, dificultando perceber pedestres e veículos nas laterais."
    },
    {
        id: 34,
        pergunta: "Quantos pontos são atribuídos a uma infração gravíssima?",
        alternativas: [
            "3 pontos",
            "4 pontos",
            "5 pontos",
            "7 pontos"
        ],
        correta: 3,
        explicacao: "Conforme o Art. 259 do CTB: infrações leves = 3 pontos; médias = 4 pontos; graves = 5 pontos; gravíssimas = 7 pontos. Esses pontos são computados na CNH."
    },
    {
        id: 35,
        pergunta: "É permitido estacionar o veículo em quantos metros antes e depois de hidrantes?",
        alternativas: [
            "3 metros",
            "5 metros",
            "10 metros",
            "É proibido estacionar a qualquer distância"
        ],
        correta: 1,
        explicacao: "O Art. 181, inciso VIII do CTB proíbe estacionar a menos de 5 metros de hidrantes de incêndio. Esta regra existe para garantir acesso rápido dos bombeiros em caso de emergência."
    },
    {
        id: 36,
        pergunta: "Qual a função do catalisador no sistema de escapamento?",
        alternativas: [
            "Aumentar a potência do motor",
            "Reduzir os gases poluentes emitidos pelo veículo",
            "Diminuir o ruído do escapamento",
            "Economizar combustível"
        ],
        correta: 1,
        explicacao: "O catalisador é um componente que transforma gases tóxicos (monóxido de carbono, hidrocarbonetos) em gases menos nocivos, reduzindo a poluição atmosférica causada pelos veículos."
    },
    {
        id: 37,
        pergunta: "O que fazer quando o veículo começar a derrapar em uma curva?",
        alternativas: [
            "Frear bruscamente",
            "Acelerar para sair da curva",
            "Tirar o pé do acelerador e virar o volante na direção da derrapagem",
            "Puxar o freio de mão"
        ],
        correta: 2,
        explicacao: "Em caso de derrapagem, deve-se tirar o pé do acelerador e virar o volante para o mesmo lado que a traseira do veículo está indo (direção da derrapagem), sem movimentos bruscos, para recuperar o controle."
    },
    {
        id: 38,
        pergunta: "Qual é o principal objetivo da Semana Nacional de Trânsito?",
        alternativas: [
            "Arrecadar fundos para obras viárias",
            "Conscientizar a população sobre segurança no trânsito",
            "Fiscalizar veículos irregulares",
            "Promover a venda de veículos novos"
        ],
        correta: 1,
        explicacao: "A Semana Nacional de Trânsito, realizada de 18 a 25 de setembro, tem como objetivo promover campanhas de conscientização sobre segurança viária, educação no trânsito e redução de acidentes."
    },
    {
        id: 39,
        pergunta: "O que indica a cor azul em placas de trânsito?",
        alternativas: [
            "Advertência de perigo",
            "Regulamentação e proibição",
            "Serviços auxiliares e indicação",
            "Obras na via"
        ],
        correta: 2,
        explicacao: "A cor azul é utilizada em placas de INDICAÇÃO e SERVIÇOS AUXILIARES, como indicação de destinos, distâncias, locais de interesse turístico, postos de combustível, hospitais, etc."
    },
    {
        id: 40,
        pergunta: "O que significa CNH com observação 'EAR' (Exerce Atividade Remunerada)?",
        alternativas: [
            "O condutor só pode dirigir veículos automáticos",
            "O condutor está autorizado a trabalhar como motorista profissional",
            "O condutor necessita de adaptações no veículo",
            "O condutor está em período de permissão"
        ],
        correta: 1,
        explicacao: "A observação EAR indica que o condutor está habilitado a exercer atividade remunerada (taxista, motorista de aplicativo, motorista de ônibus, etc.). Para obter, é necessário curso específico."
    },
    {
        id: 41,
        pergunta: "Qual é a multa por dirigir veículo sem possuir CNH ou Permissão?",
        alternativas: [
            "Infração leve",
            "Infração média",
            "Infração grave",
            "Infração gravíssima (multa multiplicada por 3)"
        ],
        correta: 3,
        explicacao: "Dirigir sem possuir CNH ou Permissão para Dirigir é infração gravíssima com multa multiplicada por 3, conforme Art. 162, I do CTB. O veículo é retido até apresentação de condutor habilitado."
    },
    {
        id: 42,
        pergunta: "Qual o procedimento correto para fazer uma conversão à esquerda?",
        alternativas: [
            "Aproximar-se do bordo direito da via",
            "Aproximar-se do eixo central da via ou da faixa da esquerda",
            "Manter-se no centro da pista até o momento da conversão",
            "Fazer a conversão rapidamente de qualquer faixa"
        ],
        correta: 1,
        explicacao: "Para converter à esquerda, o condutor deve, com antecedência, sinalizar e aproximar-se do eixo da via ou da faixa mais à esquerda, conforme Art. 38 do CTB."
    },
    {
        id: 43,
        pergunta: "O que é hidroplanagem e como evitá-la?",
        alternativas: [
            "É quando o motor afoga; deve-se desligar o ar-condicionado",
            "É a perda de aderência dos pneus na água; deve-se reduzir a velocidade",
            "É o superaquecimento do motor; deve-se parar o veículo",
            "É uma falha elétrica; deve-se verificar a bateria"
        ],
        correta: 1,
        explicacao: "Hidroplanagem (ou aquaplanagem) ocorre quando os pneus perdem contato com o asfalto devido à água acumulada. Para evitar: reduza a velocidade em pistas molhadas e mantenha os pneus em bom estado."
    },
    {
        id: 44,
        pergunta: "Qual documento comprova que o veículo está em dia com as obrigações anuais?",
        alternativas: [
            "CRV (Certificado de Registro de Veículo)",
            "CRLV (Certificado de Registro e Licenciamento de Veículo)",
            "CNH (Carteira Nacional de Habilitação)",
            "DUT (Documento Único de Trânsito)"
        ],
        correta: 1,
        explicacao: "O CRLV (Certificado de Registro e Licenciamento de Veículo) é o documento que comprova que o veículo está licenciado para circular, com IPVA e seguro obrigatório pagos."
    },
    {
        id: 45,
        pergunta: "Em uma via de mão dupla, onde é permitido estacionar?",
        alternativas: [
            "Dos dois lados da via",
            "Apenas do lado direito da via, no sentido de circulação",
            "Apenas do lado esquerdo",
            "Em qualquer lugar, desde que não atrapalhe o trânsito"
        ],
        correta: 1,
        explicacao: "Em vias de mão dupla, o estacionamento deve ser feito do lado direito da via, no sentido do fluxo de trânsito, junto ao meio-fio, conforme Art. 181 do CTB."
    },
    {
        id: 46,
        pergunta: "O que representa uma faixa contínua amarela no centro da pista?",
        alternativas: [
            "É permitido ultrapassar",
            "É proibido ultrapassar",
            "Indica área de estacionamento",
            "Indica faixa exclusiva para ônibus"
        ],
        correta: 1,
        explicacao: "A faixa contínua amarela no centro da via indica proibição de ultrapassagem. O condutor não pode cruzar essa linha para ultrapassar outro veículo."
    },
    {
        id: 47,
        pergunta: "Qual é a função do sistema de direção hidráulica?",
        alternativas: [
            "Aumentar a velocidade do veículo",
            "Facilitar o esterçamento do volante, reduzindo o esforço do condutor",
            "Melhorar a frenagem",
            "Economizar combustível"
        ],
        correta: 1,
        explicacao: "A direção hidráulica utiliza fluido pressurizado para reduzir o esforço necessário para girar o volante, tornando a direção mais leve e confortável, especialmente em manobras."
    },
    {
        id: 48,
        pergunta: "Qual a distância mínima para estacionar antes de uma esquina?",
        alternativas: [
            "3 metros",
            "5 metros",
            "10 metros",
            "15 metros"
        ],
        correta: 1,
        explicacao: "Conforme o Art. 181 do CTB, é proibido estacionar a menos de 5 metros do bordo do alinhamento da via transversal (esquina), para não prejudicar a visibilidade."
    },
    {
        id: 49,
        pergunta: "O que é direção evasiva?",
        alternativas: [
            "Fugir de uma blitz policial",
            "Desviar de um obstáculo inesperado para evitar colisão",
            "Dirigir em alta velocidade",
            "Ultrapassar pela direita"
        ],
        correta: 1,
        explicacao: "Direção evasiva é uma manobra de emergência que consiste em desviar rapidamente de um obstáculo quando a frenagem não é suficiente para evitar a colisão. Requer habilidade e controle do veículo."
    },
    {
        id: 50,
        pergunta: "Qual é a finalidade do espelho retrovisor interno?",
        alternativas: [
            "Ver os passageiros do banco traseiro",
            "Visualizar o trânsito atrás do veículo através do vidro traseiro",
            "Verificar se há veículos no ponto cego",
            "Ajustar a aparência pessoal"
        ],
        correta: 1,
        explicacao: "O espelho retrovisor interno permite visualizar o trânsito que vem atrás do veículo através do vidro traseiro, sendo essencial para manobras seguras como mudança de faixa e ultrapassagens."
    },
    {
        id: 51,
        pergunta: "Quando os faróis de neblina traseiros devem ser utilizados?",
        alternativas: [
            "Sempre à noite",
            "Apenas em situações de neblina intensa ou chuva forte",
            "Para sinalizar ultrapassagem",
            "Para indicar frenagem"
        ],
        correta: 1,
        explicacao: "Os faróis de neblina traseiros devem ser usados APENAS em condições de neblina intensa ou chuva forte, pois sua luz é muito intensa e pode ofuscar os condutores que vêm atrás."
    },
    {
        id: 52,
        pergunta: "Qual é a categoria da CNH necessária para conduzir motocicletas?",
        alternativas: [
            "Categoria A",
            "Categoria B",
            "Categoria C",
            "Categoria D"
        ],
        correta: 0,
        explicacao: "A categoria A da CNH habilita o condutor a pilotar veículos de duas ou três rodas, como motocicletas, motonetas e triciclos. É independente das outras categorias."
    },
    {
        id: 53,
        pergunta: "O que significa a expressão 'ponto cego' na direção veicular?",
        alternativas: [
            "Área da via sem iluminação",
            "Região ao redor do veículo não visível pelos retrovisores",
            "Local onde é proibido estacionar",
            "Trecho da via em obras"
        ],
        correta: 1,
        explicacao: "O ponto cego é a área ao redor do veículo que não é coberta pelos espelhos retrovisores. Antes de mudar de faixa, é importante virar brevemente a cabeça para verificar se não há veículos nessa região."
    },
    {
        id: 54,
        pergunta: "Qual é o procedimento correto ao se aproximar de uma passarela ou passagem subterrânea de pedestres?",
        alternativas: [
            "Acelerar, pois os pedestres devem usar a passarela",
            "Manter velocidade, pois a preferência é do veículo",
            "Reduzir a velocidade e estar atento, pois pedestres podem atravessar fora da passarela",
            "Buzinar para alertar os pedestres"
        ],
        correta: 2,
        explicacao: "Mesmo existindo passarela ou passagem subterrânea, o condutor deve estar atento, pois pedestres podem atravessar fora desses locais. A segurança sempre prevalece sobre a regra."
    },
    {
        id: 55,
        pergunta: "O que é o 'tempo de reação' do condutor?",
        alternativas: [
            "Tempo para o veículo atingir a velocidade máxima",
            "Intervalo entre perceber o perigo e iniciar a ação de frenagem",
            "Tempo para o motor aquecer",
            "Duração da CNH"
        ],
        correta: 1,
        explicacao: "O tempo de reação é o intervalo entre o condutor perceber um perigo e iniciar a ação de resposta (frear, desviar). Em média, é de 0,75 a 1,5 segundos. Álcool, cansaço e distrações aumentam esse tempo."
    },
    {
        id: 56,
        pergunta: "Qual a penalidade para quem transporta crianças sem o dispositivo de retenção adequado?",
        alternativas: [
            "Infração leve",
            "Infração média",
            "Infração grave",
            "Infração gravíssima"
        ],
        correta: 3,
        explicacao: "Transportar crianças sem observar as normas de segurança (cadeirinha, assento de elevação) é infração GRAVÍSSIMA, conforme Art. 168 do CTB, com multa e retenção do veículo."
    },
    {
        id: 57,
        pergunta: "O que significa sinalização semafórica com luz amarela piscante?",
        alternativas: [
            "Pare obrigatoriamente",
            "Atenção, siga com cuidado",
            "O semáforo está com defeito, ignore",
            "Via interditada"
        ],
        correta: 1,
        explicacao: "A luz amarela piscante indica ATENÇÃO. O condutor deve reduzir a velocidade e atravessar o cruzamento com cuidado. É comum em horários de menor movimento ou em vias secundárias."
    },
    {
        id: 58,
        pergunta: "Qual é a distância de parada de um veículo a 60 km/h em pista seca?",
        alternativas: [
            "Aproximadamente 15 metros",
            "Aproximadamente 25 metros",
            "Aproximadamente 35 metros",
            "Aproximadamente 45 metros"
        ],
        correta: 2,
        explicacao: "A distância de parada inclui a distância de reação + distância de frenagem. A 60 km/h em pista seca, um veículo percorre aproximadamente 35 metros até parar completamente."
    },
    {
        id: 59,
        pergunta: "O que fazer ao avistar uma ambulância com sirene e luzes ligadas?",
        alternativas: [
            "Manter a velocidade e a posição na via",
            "Acelerar para liberar a via mais rapidamente",
            "Reduzir a velocidade e parar à direita, liberando passagem",
            "Seguir a ambulância para aproveitar a via livre"
        ],
        correta: 2,
        explicacao: "Conforme o Art. 29, VII do CTB, ao ouvir sirene de veículos de emergência, todos os condutores devem deixar livre a passagem, parando à direita da via."
    },
    {
        id: 60,
        pergunta: "Qual é a função do diferencial no veículo?",
        alternativas: [
            "Diferenciar marchas",
            "Permitir que as rodas girem em velocidades diferentes nas curvas",
            "Regular a pressão dos pneus",
            "Controlar a direção"
        ],
        correta: 1,
        explicacao: "O diferencial permite que as rodas de um mesmo eixo girem em velocidades diferentes, o que é necessário nas curvas, pois a roda externa percorre uma distância maior que a interna."
    },
    {
        id: 61,
        pergunta: "Qual é a velocidade máxima permitida em rodovias de pista simples para automóveis?",
        alternativas: [
            "60 km/h",
            "80 km/h",
            "100 km/h",
            "110 km/h"
        ],
        correta: 2,
        explicacao: "Conforme o Art. 61 do CTB, a velocidade máxima para automóveis em rodovias de pista simples (mão dupla, sem canteiro central) é de 100 km/h, quando não houver sinalização."
    },
    {
        id: 62,
        pergunta: "O que é o curso de reciclagem para condutores infratores?",
        alternativas: [
            "Curso obrigatório para renovar a CNH",
            "Curso exigido para condutores que tiveram a CNH suspensa",
            "Curso opcional para quem quer dirigir melhor",
            "Treinamento para instrutores de autoescola"
        ],
        correta: 1,
        explicacao: "O curso de reciclagem é obrigatório para condutores que tiveram a CNH suspensa ou cassada. Tem duração de 30 horas e aborda legislação, direção defensiva, primeiros socorros e meio ambiente."
    },
    {
        id: 63,
        pergunta: "Qual é a multa para quem avança o sinal vermelho do semáforo?",
        alternativas: [
            "Infração leve",
            "Infração média",
            "Infração grave",
            "Infração gravíssima"
        ],
        correta: 3,
        explicacao: "Avançar o sinal vermelho do semáforo é infração GRAVÍSSIMA, conforme Art. 208 do CTB. É uma das infrações mais perigosas, responsável por muitos acidentes graves."
    },
    {
        id: 64,
        pergunta: "O que caracteriza uma ultrapassagem em local proibido?",
        alternativas: [
            "Ultrapassar em reta",
            "Ultrapassar em locais com faixa contínua, curvas, pontes, viadutos, etc.",
            "Ultrapassar veículos lentos",
            "Ultrapassar pela esquerda"
        ],
        correta: 1,
        explicacao: "É proibido ultrapassar em curvas, aclives, pontes, viadutos, túneis, passagens de nível, trechos com faixa contínua e onde houver placa de proibição. A infração é gravíssima."
    },
    {
        id: 65,
        pergunta: "Qual equipamento é obrigatório para motociclistas?",
        alternativas: [
            "Apenas capacete",
            "Capacete com viseira ou óculos de proteção",
            "Capacete, luvas e botas",
            "Apenas colete refletivo"
        ],
        correta: 1,
        explicacao: "Conforme o Art. 54 do CTB, é obrigatório o uso de capacete com viseira ou óculos de proteção para condutores e passageiros de motocicletas, motonetas e ciclomotores."
    },
    {
        id: 66,
        pergunta: "O que significa a placa de 'Área Escolar'?",
        alternativas: [
            "Proibido estacionar",
            "Velocidade máxima de 20 km/h",
            "Atenção: presença de crianças, reduzir velocidade",
            "Via exclusiva para pedestres"
        ],
        correta: 2,
        explicacao: "A placa de Área Escolar é uma placa de advertência que indica proximidade de escolas. O condutor deve redobrar a atenção e reduzir a velocidade devido à presença de crianças."
    },
    {
        id: 67,
        pergunta: "O que é o sistema de freios a tambor?",
        alternativas: [
            "Freio acionado por pedal",
            "Sistema onde as sapatas pressionam a parte interna de um tambor",
            "Freio de mão",
            "Sistema ABS"
        ],
        correta: 1,
        explicacao: "No freio a tambor, as sapatas de freio são pressionadas contra a parte interna de um tambor que gira junto com a roda. É mais comum nas rodas traseiras de veículos populares."
    },
    {
        id: 68,
        pergunta: "Qual é a principal função do radiador?",
        alternativas: [
            "Aquecer o interior do veículo",
            "Arrefecer (resfriar) o motor",
            "Filtrar o ar do motor",
            "Armazenar combustível"
        ],
        correta: 1,
        explicacao: "O radiador é o componente responsável por dissipar o calor do líquido de arrefecimento, mantendo o motor na temperatura ideal de funcionamento e evitando o superaquecimento."
    },
    {
        id: 69,
        pergunta: "O que é a técnica de frenagem de emergência?",
        alternativas: [
            "Frear suavemente até parar",
            "Pressionar o freio com força máxima, mantendo o controle do veículo",
            "Usar apenas o freio de mão",
            "Desligar o motor para parar"
        ],
        correta: 1,
        explicacao: "A frenagem de emergência consiste em pressionar o pedal de freio com força máxima para parar o veículo no menor espaço possível. Veículos com ABS permitem manter o controle da direção durante a frenagem."
    },
    {
        id: 70,
        pergunta: "Qual é a penalidade para disputar 'racha' em via pública?",
        alternativas: [
            "Infração grave com multa",
            "Infração gravíssima com multa multiplicada por 10 e suspensão da CNH",
            "Apenas advertência",
            "Apreensão do veículo por 30 dias"
        ],
        correta: 1,
        explicacao: "Participar de 'racha' (competição não autorizada) é infração gravíssima com multa multiplicada por 10, suspensão da CNH e apreensão do veículo. Também pode configurar crime de trânsito."
    },
    {
        id: 71,
        pergunta: "O que significa PPD (Permissão para Dirigir)?",
        alternativas: [
            "Documento provisório válido por 2 anos para condutores recém-habilitados",
            "Permissão para dirigir apenas de dia",
            "Autorização para dirigir em outros estados",
            "Documento para condutores profissionais"
        ],
        correta: 0,
        explicacao: "A PPD é o documento emitido para condutores recém-habilitados, válido por 1 ano. Durante esse período, se o condutor não cometer infração grave, gravíssima ou reincidência em média, recebe a CNH definitiva."
    },
    {
        id: 72,
        pergunta: "O que é reboque e quando deve ser utilizado?",
        alternativas: [
            "Veículo para transportar cargas pesadas",
            "Veículo sem motor destinado a ser puxado por outro",
            "Veículo de emergência",
            "Veículo para transporte de passageiros"
        ],
        correta: 1,
        explicacao: "Reboque é um veículo sem motor próprio, destinado a ser tracionado (puxado) por outro veículo. Pode ser usado para transporte de cargas, veículos (guincho), barcos, trailers, etc."
    },
    {
        id: 73,
        pergunta: "Qual é a importância da calibragem correta dos pneus?",
        alternativas: [
            "Apenas estética",
            "Segurança, economia de combustível e maior durabilidade dos pneus",
            "Aumentar a velocidade máxima",
            "Reduzir o barulho do veículo"
        ],
        correta: 1,
        explicacao: "A calibragem correta dos pneus garante: melhor aderência e segurança, economia de combustível, desgaste uniforme e maior vida útil dos pneus. Deve ser verificada semanalmente com os pneus frios."
    },
    {
        id: 74,
        pergunta: "O que é 'força centrífuga' em uma curva?",
        alternativas: [
            "Força que puxa o veículo para o centro da curva",
            "Força que empurra o veículo para fora da curva",
            "Força de frenagem",
            "Força do motor"
        ],
        correta: 1,
        explicacao: "A força centrífuga é a tendência do veículo de sair da trajetória da curva, sendo 'empurrado' para fora. Quanto maior a velocidade e mais fechada a curva, maior essa força. Por isso, deve-se reduzir a velocidade antes de curvas."
    },
    {
        id: 75,
        pergunta: "O que fazer se os freios do veículo falharem?",
        alternativas: [
            "Desligar o motor imediatamente",
            "Puxar o freio de mão bruscamente",
            "Reduzir marchas progressivamente e usar o freio de estacionamento suavemente",
            "Acelerar para buscar ajuda"
        ],
        correta: 2,
        explicacao: "Em caso de falha dos freios: 1) Mantenha a calma; 2) Tire o pé do acelerador; 3) Reduza as marchas progressivamente (freio motor); 4) Use o freio de estacionamento suavemente; 5) Busque uma área de escape ou obstáculo que reduza o impacto."
    },
    // NOVAS QUESTÕES - EXPANDINDO PARA 120
    {
        id: 76,
        pergunta: "O que é o pisca-alerta e quando deve ser usado?",
        alternativas: [
            "Apenas para estacionar em fila dupla",
            "Para sinalizar emergências, veículo parado na via ou em comboio sob escolta",
            "Para ultrapassar outros veículos",
            "Para indicar que vai virar"
        ],
        correta: 1,
        explicacao: "O pisca-alerta deve ser usado em situações de emergência, quando o veículo estiver imobilizado na via, em deslocamento sob escolta ou para advertir outros condutores de perigo iminente."
    },
    {
        id: 77,
        pergunta: "Qual a altura máxima permitida para carga em veículos de transporte?",
        alternativas: [
            "3,50 metros",
            "4,40 metros",
            "5,00 metros",
            "Não há limite de altura"
        ],
        correta: 1,
        explicacao: "Conforme a legislação de trânsito, a altura máxima permitida para veículos, incluindo a carga, é de 4,40 metros. Cargas que excedam esse limite necessitam de autorização especial."
    },
    {
        id: 78,
        pergunta: "O que significa 'força de inércia' aplicada à direção veicular?",
        alternativas: [
            "Força que faz o veículo andar",
            "Tendência do veículo em manter seu estado de movimento ou repouso",
            "Força dos freios",
            "Potência do motor"
        ],
        correta: 1,
        explicacao: "A inércia é a tendência de um corpo manter seu estado atual. Um veículo em movimento tende a continuar em movimento, por isso é mais difícil parar em alta velocidade. Por isso o uso do cinto é essencial."
    },
    {
        id: 79,
        pergunta: "Qual a penalidade para o condutor que deixar de prestar socorro à vítima de acidente?",
        alternativas: [
            "Infração média",
            "Infração grave",
            "Infração gravíssima",
            "Crime de trânsito com detenção de 6 meses a 1 ano"
        ],
        correta: 3,
        explicacao: "Deixar de prestar socorro à vítima ou deixar de pedir socorro à autoridade quando não puder prestá-lo constitui CRIME DE TRÂNSITO, conforme Art. 304 do CTB, com pena de detenção de 6 meses a 1 ano."
    },
    {
        id: 80,
        pergunta: "O que é 'comportamento seguro' no trânsito?",
        alternativas: [
            "Dirigir em alta velocidade para chegar rápido",
            "Agir com responsabilidade, respeito às leis e consideração aos outros usuários",
            "Buzinar sempre que necessário",
            "Ultrapassar sempre que possível"
        ],
        correta: 1,
        explicacao: "Comportamento seguro envolve respeitar as leis de trânsito, ter consideração com pedestres e outros condutores, manter o veículo em boas condições e praticar direção defensiva."
    },
    {
        id: 81,
        pergunta: "Qual é o limite de tolerância para o teste do bafômetro?",
        alternativas: [
            "Zero - qualquer quantidade de álcool é proibida",
            "0,05 mg/L de ar",
            "0,10 mg/L de ar",
            "0,30 mg/L de ar"
        ],
        correta: 0,
        explicacao: "A Lei Seca (Lei 12.760/2012) estabelece tolerância zero para álcool ao dirigir. Qualquer concentração de álcool no sangue é proibida. O limite técnico do bafômetro considera apenas margem de erro do equipamento."
    },
    {
        id: 82,
        pergunta: "O que é a CNH Digital?",
        alternativas: [
            "Uma CNH provisória",
            "Versão eletrônica da CNH com mesma validade do documento físico",
            "Aplicativo de simulados",
            "Carteira apenas para motos elétricas"
        ],
        correta: 1,
        explicacao: "A CNH Digital é a versão eletrônica da Carteira Nacional de Habilitação, disponível no aplicativo Carteira Digital de Trânsito (CDT). Tem a mesma validade jurídica do documento físico."
    },
    {
        id: 83,
        pergunta: "Quando é obrigatório o uso do farol alto?",
        alternativas: [
            "Em vias bem iluminadas",
            "Em rodovias e vias não iluminadas, desde que não ofusque outros condutores",
            "Sempre que estiver chovendo",
            "Apenas em emergências"
        ],
        correta: 1,
        explicacao: "O farol alto deve ser usado em vias não iluminadas para melhorar a visibilidade. Porém, deve-se alternar para o farol baixo ao cruzar com outro veículo ou ao segui-lo, para não ofuscar o condutor."
    },
    {
        id: 84,
        pergunta: "O que significa a sigla CONTRAN?",
        alternativas: [
            "Controle de Trânsito Nacional",
            "Conselho Nacional de Trânsito",
            "Confederação Nacional de Transportes",
            "Comissão Nacional de Trânsito"
        ],
        correta: 1,
        explicacao: "CONTRAN é o Conselho Nacional de Trânsito, órgão máximo normativo e consultivo do Sistema Nacional de Trânsito. É responsável por estabelecer as normas e diretrizes da Política Nacional de Trânsito."
    },
    {
        id: 85,
        pergunta: "Qual é a função da embreagem no veículo?",
        alternativas: [
            "Frear o veículo",
            "Fazer a ligação entre o motor e a caixa de câmbio, permitindo a troca de marchas",
            "Acelerar o veículo",
            "Controlar a direção"
        ],
        correta: 1,
        explicacao: "A embreagem conecta e desconecta o motor da caixa de câmbio, permitindo a troca de marchas suave. Ao pisar no pedal, desacopla o motor da transmissão; ao soltar, reconecta."
    },
    {
        id: 86,
        pergunta: "Qual é a velocidade máxima permitida em vias arteriais urbanas?",
        alternativas: [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "80 km/h"
        ],
        correta: 2,
        explicacao: "Conforme o Art. 61 do CTB, a velocidade máxima em vias arteriais urbanas é de 60 km/h, quando não houver sinalização regulamentadora indicando outro limite."
    },
    {
        id: 87,
        pergunta: "O que fazer quando o veículo à frente indicar que vai virar à esquerda?",
        alternativas: [
            "Ultrapassar pela esquerda",
            "Buzinar para que ele desista",
            "Aguardar ou ultrapassar pela direita com segurança",
            "Acelerar e passar antes dele virar"
        ],
        correta: 2,
        explicacao: "Quando o veículo à frente sinaliza conversão à esquerda, deve-se aguardar ou, se houver espaço seguro, ultrapassar pela direita. Esta é a única situação onde a ultrapassagem pela direita é permitida."
    },
    {
        id: 88,
        pergunta: "O que é substerço (ou subesterçamento)?",
        alternativas: [
            "Quando o veículo derrapa de traseira",
            "Quando o veículo não responde à direção e tende a seguir em linha reta",
            "Quando o volante trava",
            "Quando os pneus dianteiros furam"
        ],
        correta: 1,
        explicacao: "O substerço ocorre quando as rodas dianteiras perdem aderência e o veículo não responde ao comando do volante, tendendo a seguir em linha reta. Geralmente acontece por velocidade excessiva em curvas."
    },
    {
        id: 89,
        pergunta: "O que é sobresterço (ou superesterçamento)?",
        alternativas: [
            "Quando o veículo não responde ao volante",
            "Quando a traseira do veículo perde aderência e tende a ultrapassar a frente",
            "Quando o motor perde potência",
            "Quando o câmbio falha"
        ],
        correta: 1,
        explicacao: "O sobresterço ocorre quando as rodas traseiras perdem aderência, fazendo a traseira 'escapar' e ultrapassar a dianteira. É comum em veículos com tração traseira e curvas feitas com velocidade excessiva."
    },
    {
        id: 90,
        pergunta: "Qual o significado da cor laranja em placas de trânsito?",
        alternativas: [
            "Serviços auxiliares",
            "Advertência permanente",
            "Sinalização de obras",
            "Atrativos turísticos"
        ],
        correta: 2,
        explicacao: "Placas de fundo laranja indicam SINALIZAÇÃO DE OBRAS. São temporárias e alertam sobre obras na via, desvios, máquinas na pista, entre outras situações relacionadas a trabalhos na via."
    },
    {
        id: 91,
        pergunta: "Qual é a distância mínima para estacionar de uma parada de ônibus?",
        alternativas: [
            "10 metros",
            "15 metros",
            "20 metros",
            "30 metros"
        ],
        correta: 1,
        explicacao: "Conforme o Art. 181 do CTB, é proibido estacionar a menos de 15 metros antes e depois de pontos de parada de transporte coletivo, para garantir acesso seguro dos passageiros."
    },
    {
        id: 92,
        pergunta: "O que é o sistema de ignição do veículo?",
        alternativas: [
            "Sistema que controla os freios",
            "Sistema responsável por dar partida e manter o motor funcionando",
            "Sistema de ar-condicionado",
            "Sistema de som"
        ],
        correta: 1,
        explicacao: "O sistema de ignição é responsável por produzir a centelha (faísca) que inflama a mistura ar/combustível nos cilindros do motor, dando partida e mantendo o funcionamento do veículo."
    },
    {
        id: 93,
        pergunta: "O que é condução econômica (eco-driving)?",
        alternativas: [
            "Dirigir sempre na marcha mais alta",
            "Técnicas de direção que reduzem consumo de combustível e emissões",
            "Dirigir apenas em cidade",
            "Usar apenas combustível econômico"
        ],
        correta: 1,
        explicacao: "Condução econômica envolve: acelerar e frear suavemente, manter velocidade constante, antecipar situações de trânsito, manter o veículo revisado e usar o ar-condicionado com moderação."
    },
    {
        id: 94,
        pergunta: "Qual a penalidade por estacionar em calçadas?",
        alternativas: [
            "Infração leve",
            "Infração média",
            "Infração grave",
            "Infração gravíssima"
        ],
        correta: 2,
        explicacao: "Estacionar sobre a calçada, passeio ou canteiro é infração GRAVE, conforme Art. 181 do CTB. A calçada é espaço exclusivo para pedestres e deve ser respeitada."
    },
    {
        id: 95,
        pergunta: "O que é 'fadiga visual' ao dirigir?",
        alternativas: [
            "Cansaço do motor do veículo",
            "Cansaço dos olhos que prejudica a percepção e reação do condutor",
            "Falta de combustível",
            "Problemas no painel do veículo"
        ],
        correta: 1,
        explicacao: "A fadiga visual ocorre após longas horas dirigindo, especialmente à noite ou sob luz intensa. Causa visão turva, dificuldade de foco e lentidão nas reações. Recomenda-se pausas regulares."
    },
    {
        id: 96,
        pergunta: "Quantas categorias de CNH existem no Brasil?",
        alternativas: [
            "3 categorias",
            "5 categorias",
            "6 categorias",
            "7 categorias"
        ],
        correta: 1,
        explicacao: "No Brasil existem 5 categorias de CNH: A (motos), B (automóveis), C (caminhões), D (ônibus) e E (carretas e veículos articulados). Cada uma habilita para tipos específicos de veículos."
    },
    {
        id: 97,
        pergunta: "O que significa ACC (Adaptative Cruise Control)?",
        alternativas: [
            "Sistema de ar-condicionado automático",
            "Piloto automático adaptativo que mantém distância do veículo à frente",
            "Controle de aceleração",
            "Sistema anti-colisão"
        ],
        correta: 1,
        explicacao: "O ACC é um sistema de piloto automático que mantém a velocidade definida e ajusta automaticamente para manter distância segura do veículo à frente, freando e acelerando conforme necessário."
    },
    {
        id: 98,
        pergunta: "Qual a multa por transportar passageiros em compartimento de carga?",
        alternativas: [
            "Infração leve",
            "Infração média",
            "Infração grave",
            "Infração gravíssima"
        ],
        correta: 3,
        explicacao: "Transportar pessoas em compartimento de carga (caçamba de picape, carroceria de caminhão) é infração GRAVÍSSIMA, conforme Art. 230 do CTB, por expor os passageiros a grave risco."
    },
    {
        id: 99,
        pergunta: "O que é a vistoria veicular?",
        alternativas: [
            "Lavagem obrigatória do veículo",
            "Inspeção que verifica as condições de segurança do veículo",
            "Troca de óleo obrigatória",
            "Pintura do veículo"
        ],
        correta: 1,
        explicacao: "A vistoria veicular é uma inspeção que verifica itens de segurança do veículo como freios, pneus, iluminação, escapamento, vidros, entre outros, garantindo que está apto a circular."
    },
    {
        id: 100,
        pergunta: "Em que situação o condutor pode ser preso em flagrante por infração de trânsito?",
        alternativas: [
            "Estacionamento em local proibido",
            "Excesso de velocidade",
            "Homicídio culposo no trânsito ou dirigir alcoolizado",
            "Usar celular ao dirigir"
        ],
        correta: 2,
        explicacao: "Crimes de trânsito como homicídio culposo, lesão corporal culposa grave, embriaguez ao volante e participação em racha podem resultar em prisão em flagrante, conforme o CTB."
    },
    {
        id: 101,
        pergunta: "O que é 'meio ambiente de trânsito'?",
        alternativas: [
            "Apenas as árvores nas ruas",
            "O conjunto de condições físicas, psicológicas e sociais que envolvem o trânsito",
            "O ar poluído pelos veículos",
            "Os parques próximos às vias"
        ],
        correta: 1,
        explicacao: "O meio ambiente de trânsito engloba todos os fatores que influenciam a circulação: condições da via, clima, sinalização, comportamento dos usuários, iluminação, além do meio ambiente natural."
    },
    {
        id: 102,
        pergunta: "Qual é a função do alternador no veículo?",
        alternativas: [
            "Dar partida no motor",
            "Gerar energia elétrica para recarregar a bateria e alimentar o sistema elétrico",
            "Controlar a temperatura do motor",
            "Filtrar o combustível"
        ],
        correta: 1,
        explicacao: "O alternador transforma energia mecânica do motor em energia elétrica, recarregando a bateria e alimentando os sistemas elétricos do veículo (faróis, vidros, injeção, etc.) enquanto o motor funciona."
    },
    {
        id: 103,
        pergunta: "O que fazer ao se aproximar de um ciclista na via?",
        alternativas: [
            "Buzinar para que ele saia da pista",
            "Ultrapassar rapidamente e próximo",
            "Manter distância lateral mínima de 1,5m ao ultrapassar",
            "Seguir atrás buzinando"
        ],
        correta: 2,
        explicacao: "Conforme o Art. 201 do CTB, ao ultrapassar ciclistas, o condutor deve guardar distância lateral mínima de 1,5 metros. Buzinar em excesso pode assustar o ciclista e causar acidentes."
    },
    {
        id: 104,
        pergunta: "O que significa a placa 'Proibido Retornar'?",
        alternativas: [
            "Proibido fazer conversão à esquerda",
            "Proibido fazer manobra de retorno (meia-volta)",
            "Proibido voltar de ré",
            "Proibido ultrapassar"
        ],
        correta: 1,
        explicacao: "A placa R-5a 'Proibido Retornar' indica que é proibido fazer manobra de retorno (meia-volta) naquele trecho. Geralmente está em locais onde essa manobra oferece risco."
    },
    {
        id: 105,
        pergunta: "O que é o controle eletrônico de estabilidade (ESC/ESP)?",
        alternativas: [
            "Sistema de som do veículo",
            "Sistema que detecta perda de controle e aplica freios individualmente para estabilizar",
            "Sistema de navegação",
            "Alarme antifurto"
        ],
        correta: 1,
        explicacao: "O ESC/ESP monitora a trajetória do veículo e, ao detectar perda de controle (derrapagem), aplica os freios em rodas específicas e reduz a potência do motor para estabilizar o veículo."
    },
    {
        id: 106,
        pergunta: "Qual é a idade mínima para obter a PPD (Permissão para Dirigir)?",
        alternativas: [
            "16 anos",
            "18 anos",
            "21 anos",
            "25 anos"
        ],
        correta: 1,
        explicacao: "Conforme o Art. 140 do CTB, a idade mínima para obter a PPD é de 18 anos completos. O candidato também deve saber ler e escrever, possuir documento de identidade e CPF."
    },
    {
        id: 107,
        pergunta: "O que são as 'Áreas de Escape' nas rodovias?",
        alternativas: [
            "Locais para estacionar",
            "Rampas especiais para veículos com falha de freios",
            "Áreas de descanso",
            "Postos de combustível"
        ],
        correta: 1,
        explicacao: "Áreas de escape são rampas especiais construídas em rodovias com declives acentuados, destinadas a veículos que perderam os freios. São preenchidas com areia ou cascalho para frear o veículo."
    },
    {
        id: 108,
        pergunta: "Qual é a infração por dirigir com apenas uma das mãos?",
        alternativas: [
            "Não há infração específica",
            "Infração leve",
            "Infração média",
            "Infração grave"
        ],
        correta: 2,
        explicacao: "Conforme o Art. 252, inciso II do CTB, dirigir com apenas uma das mãos, exceto para fazer sinais ou trocar marchas, é infração MÉDIA. O condutor deve manter ambas as mãos no volante."
    },
    {
        id: 109,
        pergunta: "O que significa 'via de trânsito rápido'?",
        alternativas: [
            "Qualquer rodovia",
            "Via com acessos especiais, sem cruzamentos em nível e sem acessibilidade direta a lotes lindeiros",
            "Via com limite de 100 km/h",
            "Via exclusiva para motos"
        ],
        correta: 1,
        explicacao: "Vias de trânsito rápido são caracterizadas por acessos especiais (alças de acesso), sem cruzamentos em nível (viadutos ou passagens), sem semáforos e sem acesso direto a propriedades laterais."
    },
    {
        id: 110,
        pergunta: "Qual a diferença entre CRV e CRLV?",
        alternativas: [
            "São o mesmo documento",
            "CRV comprova propriedade; CRLV comprova licenciamento anual",
            "CRV é para motos; CRLV para carros",
            "CRV é digital; CRLV é físico"
        ],
        correta: 1,
        explicacao: "O CRV (Certificado de Registro de Veículo) comprova a propriedade e é usado na transferência. O CRLV (Certificado de Registro e Licenciamento) comprova o licenciamento anual e deve ser portado."
    },
    {
        id: 111,
        pergunta: "O que é 'pilotagem segura' para motociclistas?",
        alternativas: [
            "Andar em alta velocidade",
            "Conjunto de práticas defensivas específicas para motos",
            "Usar apenas vias exclusivas",
            "Dirigir apenas de dia"
        ],
        correta: 1,
        explicacao: "Pilotagem segura inclui: uso de equipamentos de proteção, manter-se visível, não trafegar em pontos cegos, antecipar ações de outros veículos e respeitar os limites da moto e do piloto."
    },
    {
        id: 112,
        pergunta: "O que fazer quando há formação de neblina na via?",
        alternativas: [
            "Ligar o farol alto para ver melhor",
            "Reduzir velocidade, usar farol baixo e manter distância",
            "Parar no acostamento com luzes apagadas",
            "Seguir o veículo da frente de perto"
        ],
        correta: 1,
        explicacao: "Na neblina: use farol baixo (o alto reflete na névoa), reduza a velocidade, aumente a distância de seguimento, use o farol de neblina se houver, e evite parar no acostamento."
    },
    {
        id: 113,
        pergunta: "Qual a validade do exame toxicológico para motoristas profissionais?",
        alternativas: [
            "6 meses",
            "1 ano",
            "2 anos e 6 meses",
            "5 anos"
        ],
        correta: 2,
        explicacao: "O exame toxicológico é obrigatório para CNH nas categorias C, D e E, com validade de 2 anos e 6 meses. Detecta uso de drogas em período de até 90 dias anteriores ao exame."
    },
    {
        id: 114,
        pergunta: "O que é a 'faixa azul' de estacionamento?",
        alternativas: [
            "Faixa exclusiva para ônibus",
            "Área de estacionamento rotativo com tempo limitado",
            "Faixa para veículos de emergência",
            "Área de carga e descarga"
        ],
        correta: 1,
        explicacao: "A faixa azul indica zona de estacionamento rotativo, onde é permitido estacionar por tempo limitado mediante pagamento (parquímetro). O objetivo é aumentar a rotatividade de vagas."
    },
    {
        id: 115,
        pergunta: "O que significa RENAVAM?",
        alternativas: [
            "Registro Nacional de Veículos Antigos e Modernos",
            "Registro Nacional de Veículos Automotores",
            "Rede Nacional de Vigilância Automotiva",
            "Regulamento Nacional de Vistoria Automotiva"
        ],
        correta: 1,
        explicacao: "RENAVAM é o Registro Nacional de Veículos Automotores, um sistema que contém o cadastro de todos os veículos registrados no Brasil. Cada veículo tem um número único de RENAVAM."
    },
    {
        id: 116,
        pergunta: "O que é 'carga indivisível'?",
        alternativas: [
            "Carga muito leve",
            "Carga que não pode ser fracionada sem prejuízo para o transporte",
            "Carga perigosa",
            "Carga de alimentos"
        ],
        correta: 1,
        explicacao: "Carga indivisível é aquela que não pode ser dividida sem perda de valor ou utilidade, como máquinas industriais, turbinas, etc. Pode exceder dimensões regulamentares com autorização especial."
    },
    {
        id: 117,
        pergunta: "Qual é a função do sistema de arrefecimento do motor?",
        alternativas: [
            "Esquentar o motor rapidamente",
            "Manter o motor na temperatura ideal de funcionamento",
            "Lubrificar as peças do motor",
            "Aumentar a potência do motor"
        ],
        correta: 1,
        explicacao: "O sistema de arrefecimento mantém o motor na temperatura ideal (geralmente entre 90°C e 100°C). Inclui radiador, bomba d'água, ventoinha, válvula termostática e o líquido de arrefecimento."
    },
    {
        id: 118,
        pergunta: "O que é a 'direção preventiva'?",
        alternativas: [
            "Manutenção preventiva da direção hidráulica",
            "Mesmo conceito que direção defensiva: antecipar riscos",
            "Dirigir apenas em dias claros",
            "Usar apenas estradas conhecidas"
        ],
        correta: 1,
        explicacao: "Direção preventiva é sinônimo de direção defensiva: conjunto de técnicas para antecipar situações de risco e agir preventivamente para evitar acidentes, mesmo diante de erros dos outros."
    },
    {
        id: 119,
        pergunta: "Qual a frequência recomendada para verificar o nível de óleo do motor?",
        alternativas: [
            "Uma vez por ano",
            "A cada 6 meses",
            "Semanalmente ou a cada 1.000 km",
            "Apenas quando trocar o óleo"
        ],
        correta: 2,
        explicacao: "Recomenda-se verificar o nível de óleo semanalmente ou a cada 1.000 km rodados. O óleo lubrifica, refrigera e limpa o motor. Nível baixo pode causar danos graves e irreversíveis."
    },
    {
        id: 120,
        pergunta: "O que é o 'efeito elástico' no trânsito?",
        alternativas: [
            "Desgaste dos amortecedores",
            "Variação de velocidade que se propaga e amplifica em congestionamentos",
            "Elasticidade do cinto de segurança",
            "Flexibilidade das normas de trânsito"
        ],
        correta: 1,
        explicacao: "O efeito elástico ocorre em congestionamentos: quando um veículo freia, os seguintes também freiam progressivamente mais, causando ondas de desaceleração. Por isso é importante manter distância segura."
    }
];

// Histórico de questões usadas nos últimos simulados
let historicoQuestoes = [];

// Função para embaralhar array
function embaralharArray(array) {
    const novoArray = [...array];
    for (let i = novoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
    }
    return novoArray;
}

// Função inteligente para selecionar questões com 70% de diferença
function selecionarQuestoesInteligente(totalQuestoes = 30) {
    const todasQuestoes = [...questoes];
    const questoesSelecionadas = [];
    
    // Questões que foram usadas na última prova
    const questoesUltimaProva = historicoQuestoes.length > 0 ? historicoQuestoes[0] : [];
    
    // Separa questões novas (não usadas na última prova) das repetidas
    const questoesNovas = todasQuestoes.filter(q => !questoesUltimaProva.includes(q.id));
    const questoesRepetidas = todasQuestoes.filter(q => questoesUltimaProva.includes(q.id));
    
    // Calcula quantas questões novas precisamos (70% = 21 questões)
    const minimoNovas = Math.ceil(totalQuestoes * 0.7); // 21 questões novas
    const maximoRepetidas = totalQuestoes - minimoNovas; // 9 questões podem repetir
    
    // Embaralha as listas
    const questoesNovasEmbaralhadas = embaralharArray(questoesNovas);
    const questoesRepetidasEmbaralhadas = embaralharArray(questoesRepetidas);
    
    // Seleciona questões novas (pelo menos 70%)
    const quantidadeNovas = Math.min(questoesNovasEmbaralhadas.length, minimoNovas);
    for (let i = 0; i < quantidadeNovas; i++) {
        questoesSelecionadas.push(questoesNovasEmbaralhadas[i]);
    }
    
    // Completa com questões repetidas se necessário (até 30%)
    let quantidadeRepetidas = Math.min(maximoRepetidas, questoesRepetidasEmbaralhadas.length);
    
    // Se não temos questões novas suficientes, completa com repetidas
    const faltam = totalQuestoes - questoesSelecionadas.length;
    if (faltam > 0) {
        const repetidasParaAdicionar = Math.min(faltam, questoesRepetidasEmbaralhadas.length);
        for (let i = 0; i < repetidasParaAdicionar; i++) {
            questoesSelecionadas.push(questoesRepetidasEmbaralhadas[i]);
        }
    }
    
    // Se ainda faltam questões (caso o banco seja pequeno), adiciona mais novas
    if (questoesSelecionadas.length < totalQuestoes) {
        const restantes = questoesNovasEmbaralhadas.slice(quantidadeNovas);
        for (let i = 0; i < restantes.length && questoesSelecionadas.length < totalQuestoes; i++) {
            if (!questoesSelecionadas.find(q => q.id === restantes[i].id)) {
                questoesSelecionadas.push(restantes[i]);
            }
        }
    }
    
    // Salva o histórico das questões selecionadas
    const idsQuestoesSelecionadas = questoesSelecionadas.map(q => q.id);
    historicoQuestoes.unshift(idsQuestoesSelecionadas);
    
    // Mantém apenas os últimos 3 simulados no histórico
    if (historicoQuestoes.length > 3) {
        historicoQuestoes = historicoQuestoes.slice(0, 3);
    }
    
    // Salva no localStorage para persistir entre sessões
    try {
        localStorage.setItem('historicoQuestoesDetran', JSON.stringify(historicoQuestoes));
    } catch (e) {
        console.log('LocalStorage não disponível');
    }
    
    // Retorna as questões embaralhadas
    return embaralharArray(questoesSelecionadas);
}

// Carrega histórico do localStorage ao iniciar
function carregarHistorico() {
    try {
        const salvo = localStorage.getItem('historicoQuestoesDetran');
        if (salvo) {
            historicoQuestoes = JSON.parse(salvo);
        }
    } catch (e) {
        console.log('LocalStorage não disponível');
        historicoQuestoes = [];
    }
}

// Carrega o histórico quando o script é carregado
carregarHistorico();

// Função legada para compatibilidade (agora usa a seleção inteligente)
function embaralharQuestoes(array) {
    return selecionarQuestoesInteligente(30);
}

// Exportar para uso no app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questoes, embaralharQuestoes, selecionarQuestoesInteligente };
}
