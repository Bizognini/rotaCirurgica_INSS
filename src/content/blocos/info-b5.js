/**
 * Informática — Bloco 5
 *
 * Hierarquia: Matéria > Bloco > Tópico > Subtópico.
 * O SUBTÓPICO é a unidade de estudo: tem teoria, vídeo, questões e flashcards.
 * O TÓPICO é apenas um agrupador — seu progresso é derivado dos subtópicos.
 */
export default {
  id: 'info-b5',
  materiaId: 'info',
  nome: 'Bloco 5 — Informática',
  ordem: 5,
  objetivo: 'Internet, aplicativos, LibreOffice, Windows e segurança.',
  topicos: [
    {
      id: 'info-b5-t1',
      nome: 'Internet e ferramentas básicas',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'info-b5-t1-s1',
          nome: 'Conceitos de Internet e intranet',
          // conteúdo herdado do tópico 'info-b1-01' da estrutura de 3 níveis
          teoria: `
## Internet, intranet e extranet

| Rede | Alcance | Acesso |
|---|---|---|
| **Internet** | Mundial, pública | Aberto |
| **Intranet** | Interna de uma organização | Restrito aos membros |
| **Extranet** | Extensão da intranet a parceiros externos | Restrito, via autenticação (frequentemente VPN) |

> Ponto-chave: a intranet usa **os mesmos protocolos e tecnologias da internet** (TCP/IP, HTTP, navegador, e-mail). A diferença é o **alcance e o controle de acesso**, não a tecnologia.

## Protocolos essenciais

| Protocolo | Função | Porta padrão |
|---|---|---|
| **HTTP** | Transferência de páginas web | 80 |
| **HTTPS** | HTTP com criptografia TLS/SSL | 443 |
| **FTP** | Transferência de arquivos | 20/21 |
| **SMTP** | **Envio** de e-mail | 25/587 |
| **POP3** | **Recebimento** — baixa e, em regra, remove do servidor | 110 |
| **IMAP** | **Recebimento** — mantém no servidor, sincroniza | 143 |
| **DNS** | Traduz nomes em endereços IP | 53 |
| **DHCP** | Distribui IPs automaticamente | 67/68 |

**TCP × UDP:** o TCP é **orientado à conexão** e garante entrega e ordem; o UDP é **não confiável**, mas mais rápido (streaming, jogos, VoIP).

## POP3 × IMAP — a distinção mais cobrada

- **POP3:** baixa as mensagens para o dispositivo e, por padrão, **apaga do servidor**. Ruim para usar em vários aparelhos.
- **IMAP:** mantém as mensagens **no servidor** e sincroniza pastas e status de leitura entre todos os dispositivos.

## Endereçamento

**URL:** \`https://www.inss.gov.br/beneficios/index.html\`
- \`https\` → protocolo
- \`www.inss.gov.br\` → domínio
- \`/beneficios/\` → caminho
- \`index.html\` → arquivo

**IPv4:** 32 bits, notação decimal (192.168.0.1). **IPv6:** 128 bits, hexadecimal — criado para resolver o esgotamento de endereços.

## Computação em nuvem

| Modelo | O que o provedor entrega |
|---|---|
| **IaaS** | Infraestrutura (servidores, armazenamento) |
| **PaaS** | Plataforma de desenvolvimento |
| **SaaS** | Software pronto (Google Docs, Office 365) |

## Conceitos correlatos

- **VPN:** cria um túnel criptografado sobre a internet, permitindo acesso remoto seguro à intranet;
- **Firewall:** filtra o tráfego entre redes conforme regras — **não** é antivírus e **não** remove malware;
- **Proxy:** intermedeia requisições, podendo aplicar cache e filtros de conteúdo;
- **Cookies:** pequenos arquivos que armazenam preferências e sessão; não são programas e não executam código.
`,
          questoes: [
            {
              id: 'info-b1-01-q1',
              enunciado: 'A intranet utiliza os mesmos protocolos e tecnologias da internet, diferenciando-se pelo acesso restrito aos membros da organização.',
              certa: true,
              explicacao: 'Ambas usam TCP/IP, HTTP e navegadores. A diferença está no alcance e no controle de acesso.',
              variacoes: [
                { enunciado: 'A intranet utiliza protocolos proprietários, incompatíveis com os da internet.', certa: false, explicacao: 'A intranet usa exatamente os mesmos protocolos da internet.' },
              ],
            },
            {
              id: 'info-b1-01-q2',
              enunciado: 'O protocolo IMAP mantém as mensagens armazenadas no servidor, permitindo sincronização entre múltiplos dispositivos, ao contrário do POP3.',
              certa: true,
              explicacao: 'O POP3 baixa e, por padrão, remove do servidor; o IMAP sincroniza pastas e status de leitura entre aparelhos.',
              variacoes: [
                { enunciado: 'O protocolo SMTP é utilizado para o recebimento de mensagens de correio eletrônico.', certa: false, explicacao: 'O SMTP é usado para ENVIO. O recebimento é feito por POP3 ou IMAP.' },
              ],
            },
            {
              id: 'info-b1-01-q3',
              enunciado: 'O protocolo HTTPS acrescenta ao HTTP uma camada de criptografia, protegendo os dados trafegados entre o navegador e o servidor.',
              certa: true,
              explicacao: 'Usa TLS/SSL na porta 443, garantindo confidencialidade e integridade dos dados em trânsito.',
              variacoes: [
                { enunciado: 'Uma rede virtual privada (VPN) dispensa a criptografia, pois utiliza canais físicos exclusivos.', certa: false, explicacao: 'A VPN cria um túnel CRIPTOGRAFADO sobre a internet pública — não há canal físico exclusivo.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Internet, intranet e extranet?', r: 'Internet: pública e mundial. Intranet: interna e restrita. Extranet: intranet estendida a parceiros externos. Todas usam os mesmos protocolos.' },
            { p: 'POP3 x IMAP?', r: 'POP3 baixa e apaga do servidor. IMAP mantém no servidor e sincroniza entre dispositivos.' },
            { p: 'Qual protocolo envia e-mail?', r: 'SMTP (porta 25/587). Recebimento: POP3 (110) ou IMAP (143).' },
            { p: 'O que faz o DNS?', r: 'Traduz nomes de domínio em endereços IP.' },
            { p: 'IaaS, PaaS e SaaS?', r: 'IaaS: infraestrutura. PaaS: plataforma de desenvolvimento. SaaS: software pronto para uso.' },
          ],
        },
        {
          id: 'info-b5-t1-s2',
          nome: 'Navegação e correio eletrônico',
          // conteúdo herdado do tópico 'info-b1-05' da estrutura de 3 níveis
          teoria: `
## Navegadores

Principais: **Google Chrome**, **Mozilla Firefox**, **Microsoft Edge**.

| Recurso | Descrição |
|---|---|
| **Guias/abas** | Múltiplas páginas na mesma janela |
| **Favoritos** | Ctrl+D adiciona |
| **Histórico** | Ctrl+H |
| **Navegação privativa** | Chrome/Edge: **Ctrl+Shift+N**. Firefox: **Ctrl+Shift+P** |
| **Cache** | Armazena elementos para acelerar recarregamentos |
| **Cookies** | Guardam preferências e sessão; **não são programas** |
| **Downloads** | Ctrl+J |

> **Navegação privativa** não salva histórico, cookies nem dados de formulário **no dispositivo**. Mas **não** torna o usuário anônimo: o provedor, o empregador e os sites visitados ainda podem identificar o acesso.

## Atalhos do navegador

| Atalho | Ação |
|---|---|
| Ctrl+T | Nova guia |
| Ctrl+W | Fechar guia |
| Ctrl+Shift+T | Reabrir guia fechada |
| Ctrl+D | Favoritar |
| Ctrl+H | Histórico |
| Ctrl+J | Downloads |
| F5 / Ctrl+R | Atualizar |
| Ctrl+F5 | Atualizar ignorando o cache |
| Ctrl+ + / − | Zoom |
| F11 | Tela cheia |

## Segurança na navegação

- **HTTPS** (cadeado) garante criptografia do tráfego — **não** garante que o site seja idôneo;
- **Certificado digital** comprova a identidade do site;
- Verifique sempre o **domínio real**: sites de phishing imitam endereços legítimos.

## Correio eletrônico

**Campos de destinatário:**

| Campo | Visibilidade |
|---|---|
| **Para** | Destinatário principal, visível a todos |
| **Cc** (cópia carbono) | Visível a todos |
| **Cco/Bcc** (cópia oculta) | **Invisível** aos demais destinatários |

> Para enviar a muitos destinatários preservando privacidade, use **Cco** — questão recorrente.

**Ações:** responder (só o remetente), **responder a todos** (remetente + Para + Cc, nunca os de Cco), **encaminhar** (mantém anexos, permite novos destinatários).

**Anexos:** sujeitos a limite de tamanho; arquivos executáveis costumam ser bloqueados por segurança.

## Microsoft Outlook — recursos cobrados

| Recurso | Função |
|---|---|
| **Sinalizador** | Marca a mensagem para **acompanhamento** e cria lembrete. **Não** move para Lixo Eletrônico nem bloqueia remetente |
| **Lixo Eletrônico** | Pasta de spam; bloquear remetente envia mensagens futuras para lá |
| **Regras** | Automatizam a organização das mensagens |
| **Arquivo Morto** | Move mensagens antigas para armazenamento |
| **Caixa de Saída** | Mensagens aguardando envio |

> Na prova de 2022, um item afirmava que clicar em **Sinalizador** enviaria a mensagem ao Lixo Eletrônico e bloquearia o remetente — **errado**: sinalizar apenas marca para acompanhamento.
`,
          questoes: [
            {
              id: 'info-b1-05-q1',
              enunciado: 'A navegação privativa impede que o histórico e os cookies sejam salvos no dispositivo, mas não torna o usuário anônimo na internet.',
              certa: true,
              explicacao: 'Provedor, empregador e sites visitados continuam podendo identificar o acesso.',
              variacoes: [
                { enunciado: 'A navegação privativa impede que o provedor de acesso identifique os sites visitados pelo usuário.', certa: false, explicacao: 'O provedor continua registrando os acessos. A privacidade é apenas local.' },
              ],
            },
            {
              id: 'info-b1-05-q2',
              enunciado: 'O campo Cco permite enviar cópia da mensagem sem que os demais destinatários tenham conhecimento desse envio.',
              certa: true,
              explicacao: 'É o recurso adequado para envios em massa preservando a privacidade dos endereços. Quem está em Cco não aparece no "responder a todos".',
              variacoes: [
                { enunciado: 'Ao utilizar a opção "Responder a todos", os destinatários que constavam do campo Cco também recebem a resposta.', certa: false, explicacao: 'Os destinatários em Cco são ocultos e não são incluídos na resposta a todos.' },
              ],
            },
            {
              id: 'info-b1-05-q3',
              enunciado: 'No Microsoft Outlook, o recurso Sinalizador marca a mensagem para acompanhamento, sem movê-la para a pasta Lixo Eletrônico nem bloquear o remetente.',
              certa: true,
              explicacao: 'Sinalizar cria lembrete de acompanhamento. Bloquear remetente é ação distinta, na pasta Lixo Eletrônico. Item cobrado na prova de 2022.',
              variacoes: [
                { enunciado: 'O protocolo HTTPS garante que o site acessado é idôneo e confiável.', certa: false, explicacao: 'O HTTPS garante apenas a criptografia do tráfego. Sites fraudulentos também podem usar HTTPS.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Atalhos da navegação privativa?', r: 'Chrome e Edge: Ctrl+Shift+N. Firefox: Ctrl+Shift+P.' },
            { p: 'Navegação privativa deixa o usuário anônimo?', r: 'Não. Só evita registros locais; provedor, empregador e sites continuam identificando o acesso.' },
            { p: 'Para, Cc e Cco?', r: 'Para e Cc são visíveis a todos. Cco é oculto e não recebe "responder a todos".' },
            { p: 'O que faz o Sinalizador no Outlook?', r: 'Marca a mensagem para acompanhamento e cria lembrete. Não move para Lixo Eletrônico nem bloqueia remetente.' },
            { p: 'HTTPS garante que o site é confiável?', r: 'Não. Garante apenas criptografia do tráfego — sites fraudulentos também podem tê-lo.' },
          ],
        },
        {
          id: 'info-b5-t1-s3',
          nome: 'Ferramentas e aplicativos básicos de informática',
          // conteúdo herdado do tópico 'info-b1-02' da estrutura de 3 níveis
          teoria: `
## Hardware e software

**Hardware:** componentes físicos. **Software:** programas.

| Componente | Função |
|---|---|
| **CPU / processador** | Executa instruções (unidade de controle + ULA) |
| **Memória RAM** | **Volátil**: perde o conteúdo ao desligar. Área de trabalho ativa |
| **Memória ROM** | **Não volátil**: firmware, BIOS/UEFI |
| **HD / SSD** | Armazenamento permanente. O SSD não tem partes móveis e é bem mais rápido |
| **Placa-mãe** | Interliga todos os componentes |

**Periféricos:** de **entrada** (teclado, mouse, scanner), de **saída** (monitor, impressora, caixas de som) e **híbridos** (touchscreen, multifuncional, modem).

## Tipos de software

- **Básico/sistema:** sistema operacional, drivers, utilitários;
- **Aplicativo:** editores, navegadores, planilhas;
- **Livre:** liberdade de usar, estudar, modificar e redistribuir (LibreOffice, Linux, Firefox);
- **Proprietário:** código fechado, uso conforme licença (Windows, Microsoft Office);
- **Freeware:** gratuito, mas não necessariamente livre;
- **Shareware:** gratuito por tempo ou com funções limitadas.

## Atalhos universais

| Atalho | Ação |
|---|---|
| Ctrl+C / Ctrl+X / Ctrl+V | Copiar / recortar / colar |
| Ctrl+Z / Ctrl+Y | Desfazer / refazer |
| Ctrl+S | Salvar |
| Ctrl+P | Imprimir |
| Ctrl+F | Localizar |
| Ctrl+A | Selecionar tudo |
| Alt+Tab | Alternar janelas |
| Ctrl+Shift+Esc | Gerenciador de Tarefas |
| Win+E | Explorador de Arquivos |
| Win+L | Bloquear a estação |
| Print Screen | Capturar a tela |

## Extensões comuns

| Extensão | Tipo |
|---|---|
| .docx / .odt | Documento de texto (Word / Writer) |
| .xlsx / .ods | Planilha (Excel / Calc) |
| .pptx / .odp | Apresentação (PowerPoint / Impress) |
| .pdf | Documento portátil |
| .zip / .rar | Arquivo compactado |
| .exe | Executável (Windows) |

## Compactação

Reduz o tamanho dos arquivos. Pode ser **sem perdas** (ZIP, RAR, PNG) ou **com perdas** (JPEG, MP3). A compactação sem perdas permite reconstituir o arquivo original **integralmente**.

## Backup

| Tipo | O que copia | Marca o arquivo? |
|---|---|---|
| **Completo (full)** | Todos os arquivos | Sim |
| **Incremental** | Só o que mudou desde o **último backup de qualquer tipo** | Sim |
| **Diferencial** | Tudo que mudou desde o **último backup completo** | Não |

A restauração do **incremental** exige o completo **e todos** os incrementais; a do **diferencial** exige apenas o completo e o **último** diferencial.
`,
          questoes: [
            {
              id: 'info-b1-02-q1',
              enunciado: 'A memória RAM é volátil, perdendo seu conteúdo quando o computador é desligado.',
              certa: true,
              explicacao: 'A RAM é a área de trabalho ativa. A ROM é não volátil e armazena o firmware (BIOS/UEFI).',
              variacoes: [
                { enunciado: 'A memória RAM armazena permanentemente os dados do usuário, mesmo após o desligamento.', certa: false, explicacao: 'A RAM é volátil. O armazenamento permanente é feito em HD ou SSD.' },
              ],
            },
            {
              id: 'info-b1-02-q2',
              enunciado: 'Backup diferencial copia todos os arquivos alterados desde o último backup completo, ao passo que o incremental copia apenas o que mudou desde o último backup de qualquer tipo.',
              certa: true,
              explicacao: 'Por isso a restauração do diferencial é mais simples: basta o completo mais o último diferencial.',
              variacoes: [
                { enunciado: 'A restauração de um backup incremental exige apenas o último arquivo incremental gerado.', certa: false, explicacao: 'Exige o backup completo E todos os incrementais posteriores, na ordem.' },
              ],
            },
            {
              id: 'info-b1-02-q3',
              enunciado: 'Software livre é aquele que assegura ao usuário as liberdades de executar, estudar, modificar e redistribuir o programa.',
              certa: true,
              explicacao: 'Software livre não é sinônimo de gratuito: freeware é gratuito, mas pode ter código fechado.',
              variacoes: [
                { enunciado: 'Todo software gratuito é considerado software livre.', certa: false, explicacao: 'Freeware é gratuito, mas pode ser proprietário. Livre exige as quatro liberdades, inclusive acesso ao código-fonte.' },
              ],
            },
          ],
          flashcards: [
            { p: 'RAM x ROM?', r: 'RAM é volátil (perde ao desligar). ROM é não volátil (firmware, BIOS/UEFI).' },
            { p: 'Backup incremental x diferencial?', r: 'Incremental: desde o último backup de qualquer tipo. Diferencial: desde o último completo. Restaurar incremental exige o completo + todos os incrementais.' },
            { p: 'Software livre x freeware?', r: 'Livre garante as 4 liberdades (usar, estudar, modificar, redistribuir). Freeware é apenas gratuito, podendo ter código fechado.' },
            { p: 'Atalhos essenciais?', r: 'Ctrl+C/X/V, Ctrl+Z/Y, Ctrl+S, Ctrl+P, Ctrl+F, Alt+Tab, Ctrl+Shift+Esc (Gerenciador), Win+L (bloquear).' },
          ],
        },
      ],
    },
    {
      id: 'info-b5-t2',
      nome: 'LibreOffice',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'info-b5-t2-s1',
          nome: 'Editor de texto (Writer)',
          // conteúdo herdado do tópico 'info-b1-03' da estrutura de 3 níveis
          teoria: `
## O pacote e suas extensões

| Aplicativo | Função | Extensão nativa | Equivalente Microsoft |
|---|---|---|---|
| **Writer** | Textos | **.odt** | Word (.docx) |
| **Calc** | Planilhas | **.ods** | Excel (.xlsx) |
| **Impress** | Apresentações | **.odp** | PowerPoint (.pptx) |
| **Draw** | Desenhos | .odg | Visio |
| **Base** | Banco de dados | .odb | Access |
| **Math** | Fórmulas | .odf | Equation |

O formato **ODF (Open Document Format)** é padrão aberto ISO. O LibreOffice **abre e salva** também nos formatos da Microsoft.

## Calc — funções mais cobradas

| Função | Sintaxe | O que faz |
|---|---|---|
| **SOMA** | \`=SOMA(A1:A10)\` | Soma o intervalo |
| **MÉDIA** | \`=MÉDIA(A1:A10)\` | Média aritmética |
| **MÁXIMO / MÍNIMO** | \`=MÁXIMO(A1:A10)\` | Maior / menor valor |
| **CONT.NÚM** | \`=CONT.NÚM(A1:A10)\` | Conta células **numéricas** |
| **CONT.VALORES** | \`=CONT.VALORES(A1:A10)\` | Conta células **não vazias** |
| **CONT.SE** | \`=CONT.SE(A1:A10;">100")\` | Conta conforme critério |
| **SOMASE** | \`=SOMASE(A1:A7;"auxílio*";B1:B7)\` | Soma os valores cujo critério bate |
| **SE** | \`=SE(A1>7;"Aprovado";"Reprovado")\` | Condicional |
| **PROCV** | \`=PROCV(valor;matriz;coluna;0)\` | Busca vertical |

> **SOMASE** com curinga: \`"auxílio*"\` casa qualquer texto que **comece** com "auxílio". O \`*\` substitui qualquer sequência; o \`?\` substitui **um** caractere. Essa função caiu na prova de 2022.

## Referências

| Tipo | Notação | Comportamento ao copiar |
|---|---|---|
| **Relativa** | A1 | Ajusta linha e coluna |
| **Absoluta** | $A$1 | **Não muda** |
| **Mista** | $A1 ou A$1 | Fixa só a parte com $ |

A tecla **F4** alterna entre os tipos.

## Operadores

\`+ − * / ^\` (potência) \`%\` — e os de comparação \`= <> > < >= <=\`.

Toda fórmula começa com **=**. A ordem de precedência é: parênteses → potência → multiplicação/divisão → adição/subtração.

## Erros comuns do Calc

| Erro | Causa |
|---|---|
| **#DIV/0!** | Divisão por zero |
| **#NOME?** | Nome de função inválido |
| **#VALOR!** | Tipo de dado incompatível |
| **#REF!** | Referência de célula excluída |
| **###** | Coluna estreita demais (não é erro de fórmula) |

## Writer e Impress

**Writer:** estilos, sumário automático, controle de alterações, mala direta, cabeçalho/rodapé, quebra de página (Ctrl+Enter).

**Impress:** modos de exibição (normal, estrutura de tópicos, classificador de slides), transições, animações, slide mestre, apresentação com F5.
`,
          questoes: [
            {
              id: 'info-b1-03-q1',
              enunciado: 'No LibreOffice Calc, a fórmula =SOMASE(A1:A7;"auxílio*";B1:B7) soma os valores de B1:B7 cujas células correspondentes em A1:A7 comecem com o texto "auxílio".',
              certa: true,
              explicacao: 'O asterisco é curinga para qualquer sequência de caracteres. O ponto de interrogação substitui um único caractere. Função cobrada na prova de 2022.',
              variacoes: [
                { enunciado: 'Na função SOMASE, o caractere "?" substitui qualquer sequência de caracteres no critério de busca.', certa: false, explicacao: 'O "?" substitui UM caractere. Quem substitui qualquer sequência é o "*".' },
              ],
            },
            {
              id: 'info-b1-03-q2',
              enunciado: 'A referência $A$1, ao ser copiada para outras células, mantém-se inalterada, por tratar-se de referência absoluta.',
              certa: true,
              explicacao: 'O cifrão fixa a parte que o antecede. Em referências mistas ($A1 ou A$1), fixa-se apenas coluna ou linha.',
              variacoes: [
                { enunciado: 'A referência relativa A1, quando copiada para outra célula, mantém-se inalterada.', certa: false, explicacao: 'Referência relativa AJUSTA linha e coluna ao ser copiada. Quem não muda é a absoluta ($A$1).' },
              ],
            },
            {
              id: 'info-b1-03-q3',
              enunciado: 'A função CONT.NÚM conta apenas as células que contêm valores numéricos, enquanto CONT.VALORES conta todas as células não vazias.',
              certa: true,
              explicacao: 'Distinção clássica: CONT.NÚM ignora texto; CONT.VALORES considera qualquer conteúdo.',
              variacoes: [
                { enunciado: 'A extensão nativa de arquivos de planilha do LibreOffice Calc é .xlsx.', certa: false, explicacao: 'A extensão nativa é .ods (ODF). O .xlsx é do Microsoft Excel, embora o Calc consiga abri-lo e salvá-lo.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Extensões nativas do LibreOffice?', r: 'Writer .odt, Calc .ods, Impress .odp, Draw .odg, Base .odb.' },
            { p: 'O que fazem os curingas na SOMASE?', r: '"*" substitui qualquer sequência de caracteres; "?" substitui um único caractere.' },
            { p: 'Referência relativa, absoluta e mista?', r: 'A1 ajusta; $A$1 não muda; $A1 e A$1 fixam apenas coluna ou linha. F4 alterna.' },
            { p: 'CONT.NÚM x CONT.VALORES?', r: 'CONT.NÚM conta só números; CONT.VALORES conta todas as células não vazias.' },
            { p: 'O que significam #DIV/0!, #NOME? e #REF!?', r: 'Divisão por zero; função com nome inválido; referência a célula excluída. Já ### é só coluna estreita.' },
          ],
        },
        {
          id: 'info-b5-t2-s2',
          nome: 'Planilha (Calc)',
          // conteúdo herdado do tópico 'info-b1-03' da estrutura de 3 níveis
          teoria: `
## O pacote e suas extensões

| Aplicativo | Função | Extensão nativa | Equivalente Microsoft |
|---|---|---|---|
| **Writer** | Textos | **.odt** | Word (.docx) |
| **Calc** | Planilhas | **.ods** | Excel (.xlsx) |
| **Impress** | Apresentações | **.odp** | PowerPoint (.pptx) |
| **Draw** | Desenhos | .odg | Visio |
| **Base** | Banco de dados | .odb | Access |
| **Math** | Fórmulas | .odf | Equation |

O formato **ODF (Open Document Format)** é padrão aberto ISO. O LibreOffice **abre e salva** também nos formatos da Microsoft.

## Calc — funções mais cobradas

| Função | Sintaxe | O que faz |
|---|---|---|
| **SOMA** | \`=SOMA(A1:A10)\` | Soma o intervalo |
| **MÉDIA** | \`=MÉDIA(A1:A10)\` | Média aritmética |
| **MÁXIMO / MÍNIMO** | \`=MÁXIMO(A1:A10)\` | Maior / menor valor |
| **CONT.NÚM** | \`=CONT.NÚM(A1:A10)\` | Conta células **numéricas** |
| **CONT.VALORES** | \`=CONT.VALORES(A1:A10)\` | Conta células **não vazias** |
| **CONT.SE** | \`=CONT.SE(A1:A10;">100")\` | Conta conforme critério |
| **SOMASE** | \`=SOMASE(A1:A7;"auxílio*";B1:B7)\` | Soma os valores cujo critério bate |
| **SE** | \`=SE(A1>7;"Aprovado";"Reprovado")\` | Condicional |
| **PROCV** | \`=PROCV(valor;matriz;coluna;0)\` | Busca vertical |

> **SOMASE** com curinga: \`"auxílio*"\` casa qualquer texto que **comece** com "auxílio". O \`*\` substitui qualquer sequência; o \`?\` substitui **um** caractere. Essa função caiu na prova de 2022.

## Referências

| Tipo | Notação | Comportamento ao copiar |
|---|---|---|
| **Relativa** | A1 | Ajusta linha e coluna |
| **Absoluta** | $A$1 | **Não muda** |
| **Mista** | $A1 ou A$1 | Fixa só a parte com $ |

A tecla **F4** alterna entre os tipos.

## Operadores

\`+ − * / ^\` (potência) \`%\` — e os de comparação \`= <> > < >= <=\`.

Toda fórmula começa com **=**. A ordem de precedência é: parênteses → potência → multiplicação/divisão → adição/subtração.

## Erros comuns do Calc

| Erro | Causa |
|---|---|
| **#DIV/0!** | Divisão por zero |
| **#NOME?** | Nome de função inválido |
| **#VALOR!** | Tipo de dado incompatível |
| **#REF!** | Referência de célula excluída |
| **###** | Coluna estreita demais (não é erro de fórmula) |

## Writer e Impress

**Writer:** estilos, sumário automático, controle de alterações, mala direta, cabeçalho/rodapé, quebra de página (Ctrl+Enter).

**Impress:** modos de exibição (normal, estrutura de tópicos, classificador de slides), transições, animações, slide mestre, apresentação com F5.
`,
          questoes: [
            {
              id: 'info-b1-03-q1',
              enunciado: 'No LibreOffice Calc, a fórmula =SOMASE(A1:A7;"auxílio*";B1:B7) soma os valores de B1:B7 cujas células correspondentes em A1:A7 comecem com o texto "auxílio".',
              certa: true,
              explicacao: 'O asterisco é curinga para qualquer sequência de caracteres. O ponto de interrogação substitui um único caractere. Função cobrada na prova de 2022.',
              variacoes: [
                { enunciado: 'Na função SOMASE, o caractere "?" substitui qualquer sequência de caracteres no critério de busca.', certa: false, explicacao: 'O "?" substitui UM caractere. Quem substitui qualquer sequência é o "*".' },
              ],
            },
            {
              id: 'info-b1-03-q2',
              enunciado: 'A referência $A$1, ao ser copiada para outras células, mantém-se inalterada, por tratar-se de referência absoluta.',
              certa: true,
              explicacao: 'O cifrão fixa a parte que o antecede. Em referências mistas ($A1 ou A$1), fixa-se apenas coluna ou linha.',
              variacoes: [
                { enunciado: 'A referência relativa A1, quando copiada para outra célula, mantém-se inalterada.', certa: false, explicacao: 'Referência relativa AJUSTA linha e coluna ao ser copiada. Quem não muda é a absoluta ($A$1).' },
              ],
            },
            {
              id: 'info-b1-03-q3',
              enunciado: 'A função CONT.NÚM conta apenas as células que contêm valores numéricos, enquanto CONT.VALORES conta todas as células não vazias.',
              certa: true,
              explicacao: 'Distinção clássica: CONT.NÚM ignora texto; CONT.VALORES considera qualquer conteúdo.',
              variacoes: [
                { enunciado: 'A extensão nativa de arquivos de planilha do LibreOffice Calc é .xlsx.', certa: false, explicacao: 'A extensão nativa é .ods (ODF). O .xlsx é do Microsoft Excel, embora o Calc consiga abri-lo e salvá-lo.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Extensões nativas do LibreOffice?', r: 'Writer .odt, Calc .ods, Impress .odp, Draw .odg, Base .odb.' },
            { p: 'O que fazem os curingas na SOMASE?', r: '"*" substitui qualquer sequência de caracteres; "?" substitui um único caractere.' },
            { p: 'Referência relativa, absoluta e mista?', r: 'A1 ajusta; $A$1 não muda; $A1 e A$1 fixam apenas coluna ou linha. F4 alterna.' },
            { p: 'CONT.NÚM x CONT.VALORES?', r: 'CONT.NÚM conta só números; CONT.VALORES conta todas as células não vazias.' },
            { p: 'O que significam #DIV/0!, #NOME? e #REF!?', r: 'Divisão por zero; função com nome inválido; referência a célula excluída. Já ### é só coluna estreita.' },
          ],
        },
        {
          id: 'info-b5-t2-s3',
          nome: 'Apresentação (Impress)',
          // conteúdo herdado do tópico 'info-b1-03' da estrutura de 3 níveis
          teoria: `
## O pacote e suas extensões

| Aplicativo | Função | Extensão nativa | Equivalente Microsoft |
|---|---|---|---|
| **Writer** | Textos | **.odt** | Word (.docx) |
| **Calc** | Planilhas | **.ods** | Excel (.xlsx) |
| **Impress** | Apresentações | **.odp** | PowerPoint (.pptx) |
| **Draw** | Desenhos | .odg | Visio |
| **Base** | Banco de dados | .odb | Access |
| **Math** | Fórmulas | .odf | Equation |

O formato **ODF (Open Document Format)** é padrão aberto ISO. O LibreOffice **abre e salva** também nos formatos da Microsoft.

## Calc — funções mais cobradas

| Função | Sintaxe | O que faz |
|---|---|---|
| **SOMA** | \`=SOMA(A1:A10)\` | Soma o intervalo |
| **MÉDIA** | \`=MÉDIA(A1:A10)\` | Média aritmética |
| **MÁXIMO / MÍNIMO** | \`=MÁXIMO(A1:A10)\` | Maior / menor valor |
| **CONT.NÚM** | \`=CONT.NÚM(A1:A10)\` | Conta células **numéricas** |
| **CONT.VALORES** | \`=CONT.VALORES(A1:A10)\` | Conta células **não vazias** |
| **CONT.SE** | \`=CONT.SE(A1:A10;">100")\` | Conta conforme critério |
| **SOMASE** | \`=SOMASE(A1:A7;"auxílio*";B1:B7)\` | Soma os valores cujo critério bate |
| **SE** | \`=SE(A1>7;"Aprovado";"Reprovado")\` | Condicional |
| **PROCV** | \`=PROCV(valor;matriz;coluna;0)\` | Busca vertical |

> **SOMASE** com curinga: \`"auxílio*"\` casa qualquer texto que **comece** com "auxílio". O \`*\` substitui qualquer sequência; o \`?\` substitui **um** caractere. Essa função caiu na prova de 2022.

## Referências

| Tipo | Notação | Comportamento ao copiar |
|---|---|---|
| **Relativa** | A1 | Ajusta linha e coluna |
| **Absoluta** | $A$1 | **Não muda** |
| **Mista** | $A1 ou A$1 | Fixa só a parte com $ |

A tecla **F4** alterna entre os tipos.

## Operadores

\`+ − * / ^\` (potência) \`%\` — e os de comparação \`= <> > < >= <=\`.

Toda fórmula começa com **=**. A ordem de precedência é: parênteses → potência → multiplicação/divisão → adição/subtração.

## Erros comuns do Calc

| Erro | Causa |
|---|---|
| **#DIV/0!** | Divisão por zero |
| **#NOME?** | Nome de função inválido |
| **#VALOR!** | Tipo de dado incompatível |
| **#REF!** | Referência de célula excluída |
| **###** | Coluna estreita demais (não é erro de fórmula) |

## Writer e Impress

**Writer:** estilos, sumário automático, controle de alterações, mala direta, cabeçalho/rodapé, quebra de página (Ctrl+Enter).

**Impress:** modos de exibição (normal, estrutura de tópicos, classificador de slides), transições, animações, slide mestre, apresentação com F5.
`,
          questoes: [
            {
              id: 'info-b1-03-q1',
              enunciado: 'No LibreOffice Calc, a fórmula =SOMASE(A1:A7;"auxílio*";B1:B7) soma os valores de B1:B7 cujas células correspondentes em A1:A7 comecem com o texto "auxílio".',
              certa: true,
              explicacao: 'O asterisco é curinga para qualquer sequência de caracteres. O ponto de interrogação substitui um único caractere. Função cobrada na prova de 2022.',
              variacoes: [
                { enunciado: 'Na função SOMASE, o caractere "?" substitui qualquer sequência de caracteres no critério de busca.', certa: false, explicacao: 'O "?" substitui UM caractere. Quem substitui qualquer sequência é o "*".' },
              ],
            },
            {
              id: 'info-b1-03-q2',
              enunciado: 'A referência $A$1, ao ser copiada para outras células, mantém-se inalterada, por tratar-se de referência absoluta.',
              certa: true,
              explicacao: 'O cifrão fixa a parte que o antecede. Em referências mistas ($A1 ou A$1), fixa-se apenas coluna ou linha.',
              variacoes: [
                { enunciado: 'A referência relativa A1, quando copiada para outra célula, mantém-se inalterada.', certa: false, explicacao: 'Referência relativa AJUSTA linha e coluna ao ser copiada. Quem não muda é a absoluta ($A$1).' },
              ],
            },
            {
              id: 'info-b1-03-q3',
              enunciado: 'A função CONT.NÚM conta apenas as células que contêm valores numéricos, enquanto CONT.VALORES conta todas as células não vazias.',
              certa: true,
              explicacao: 'Distinção clássica: CONT.NÚM ignora texto; CONT.VALORES considera qualquer conteúdo.',
              variacoes: [
                { enunciado: 'A extensão nativa de arquivos de planilha do LibreOffice Calc é .xlsx.', certa: false, explicacao: 'A extensão nativa é .ods (ODF). O .xlsx é do Microsoft Excel, embora o Calc consiga abri-lo e salvá-lo.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Extensões nativas do LibreOffice?', r: 'Writer .odt, Calc .ods, Impress .odp, Draw .odg, Base .odb.' },
            { p: 'O que fazem os curingas na SOMASE?', r: '"*" substitui qualquer sequência de caracteres; "?" substitui um único caractere.' },
            { p: 'Referência relativa, absoluta e mista?', r: 'A1 ajusta; $A$1 não muda; $A1 e A$1 fixam apenas coluna ou linha. F4 alterna.' },
            { p: 'CONT.NÚM x CONT.VALORES?', r: 'CONT.NÚM conta só números; CONT.VALORES conta todas as células não vazias.' },
            { p: 'O que significam #DIV/0!, #NOME? e #REF!?', r: 'Divisão por zero; função com nome inválido; referência a célula excluída. Já ### é só coluna estreita.' },
          ],
        },
      ],
    },
    {
      id: 'info-b5-t3',
      nome: 'Sistema operacional e segurança',
      videoConfirmado: false,
      subtopicos: [
        {
          id: 'info-b5-t3-s1',
          nome: 'Windows 7 e 10 — noções básicas',
          // conteúdo herdado do tópico 'info-b1-04' da estrutura de 3 níveis
          teoria: `
## Estrutura de arquivos

O Windows organiza dados em **unidades** (C:, D:), **pastas** e **arquivos**. O **Explorador de Arquivos** (Win+E) é a ferramenta de navegação.

**Caracteres proibidos em nomes:** \`\\ / : * ? " < > |\`

**Bibliotecas:** agrupam pastas de locais diferentes numa visualização única.

## Ferramentas administrativas

| Ferramenta | Função |
|---|---|
| **Gerenciador de Tarefas** (Ctrl+Shift+Esc) | Processos, desempenho, inicialização |
| **Painel de Controle / Configurações** | Ajustes do sistema |
| **Desfragmentador de Disco** | Reorganiza dados fragmentados em **HDs** — melhora a eficiência |
| **Limpeza de Disco** | Remove arquivos temporários |
| **Restauração do Sistema** | Retorna a um ponto anterior |
| **Prompt de Comando / PowerShell** | Linha de comando |
| **Gerenciamento de Disco** | Partições e volumes |

> A **desfragmentação** faz sentido em **HD mecânico**. Em **SSD**, o Windows executa o comando **TRIM**, não a desfragmentação tradicional — desfragmentar SSD reduz sua vida útil.

## Segurança do Windows

No Windows 10, a central **Segurança do Windows** reúne:

- **Microsoft Defender Antivírus** — proteção em tempo real contra vírus e malware;
- **Firewall e proteção de rede** — controla o tráfego de entrada e saída;
- **Controle de aplicativos e navegador** — SmartScreen;
- **Proteção da conta**, **segurança do dispositivo** e **desempenho e integridade**.

> Item cobrado em 2022: a Segurança do Windows **inclui o Microsoft Defender Antivírus** e verifica continuamente a existência de malware → **certo**.

## Criptografia — não confundir

| Recurso | Função |
|---|---|
| **BitLocker** | Criptografa **unidades/discos** inteiros |
| **EFS (Encrypting File System)** | Criptografa **arquivos e pastas** individuais (NTFS) |
| **Windows Defender Firewall** | **Filtra tráfego de rede** — **não criptografa nada** |

> Também cobrado em 2022: dizer que se criptografam arquivos "pelo Windows Defender Firewall" está **errado**. Firewall não criptografa.

## Contas de usuário e UAC

Contas de **administrador** e **padrão**. O **UAC (Controle de Conta de Usuário)** solicita confirmação antes de alterações que exijam privilégios elevados — reduz o impacto de malware executado por usuário comum.

## Lixeira e exclusão

Arquivos excluídos vão para a **Lixeira**. **Shift+Delete** exclui **sem** passar por ela. Arquivos em unidades de rede e removíveis, em regra, **não** vão para a Lixeira.

## Atalhos do Windows

| Atalho | Ação |
|---|---|
| Win+E | Explorador de Arquivos |
| Win+D | Mostrar área de trabalho |
| Win+L | Bloquear |
| Win+R | Executar |
| Win+I | Configurações (Win 10) |
| Win+Seta | Ancorar janela |
| F2 | Renomear |
| Alt+F4 | Fechar janela |
`,
          questoes: [
            {
              id: 'info-b1-04-q1',
              enunciado: 'No Windows 10, a Segurança do Windows verifica continuamente a existência de malwares e vírus e inclui o Microsoft Defender Antivírus.',
              certa: true,
              explicacao: 'A Segurança do Windows é a central nativa de proteção e traz o Defender Antivírus embutido, com proteção em tempo real. Item cobrado na prova de 2022.',
              variacoes: [
                { enunciado: 'O Windows 10 não possui antivírus nativo, sendo obrigatória a instalação de solução de terceiros.', certa: false, explicacao: 'O Windows 10 inclui o Microsoft Defender Antivírus, integrado à Segurança do Windows.' },
              ],
            },
            {
              id: 'info-b1-04-q2',
              enunciado: 'Com a finalidade de proteger seus arquivos no Windows 10, o usuário pode criptografá-los pelo aplicativo Windows Defender Firewall, no painel Segurança do Windows.',
              certa: false,
              explicacao: 'O firewall filtra tráfego de rede e não criptografa. A criptografia é feita pelo BitLocker (discos) ou pelo EFS (arquivos e pastas). Item cobrado na prova de 2022.',
              variacoes: [
                { enunciado: 'O BitLocker é o recurso do Windows destinado à criptografia de unidades de disco.', certa: true, explicacao: 'Correto. Para arquivos e pastas individuais em NTFS, usa-se o EFS.' },
              ],
            },
            {
              id: 'info-b1-04-q3',
              enunciado: 'O Desfragmentador de Disco reorganiza dados fragmentados no disco rígido, permitindo que ele funcione de maneira mais eficiente.',
              certa: true,
              explicacao: 'A desfragmentação vale para HDs mecânicos. Em SSD, o Windows executa o TRIM, e desfragmentar reduziria a vida útil. Item cobrado na prova de 2022.',
              variacoes: [
                { enunciado: 'A desfragmentação periódica é recomendada para unidades SSD, a fim de melhorar seu desempenho.', certa: false, explicacao: 'SSD não deve ser desfragmentado: o Windows usa TRIM, e a desfragmentação reduz a vida útil da unidade.' },
              ],
            },
          ],
          flashcards: [
            { p: 'O que reúne a Segurança do Windows?', r: 'Microsoft Defender Antivírus, firewall e proteção de rede, SmartScreen, proteção de conta e segurança do dispositivo.' },
            { p: 'BitLocker x EFS x Firewall?', r: 'BitLocker criptografa unidades; EFS criptografa arquivos/pastas; Firewall filtra tráfego de rede e NÃO criptografa.' },
            { p: 'Desfragmentar SSD é recomendado?', r: 'Não. SSD usa TRIM; desfragmentar reduz a vida útil. A desfragmentação serve para HD mecânico.' },
            { p: 'Como excluir sem passar pela Lixeira?', r: 'Shift+Delete.' },
            { p: 'Para que serve o UAC?', r: 'Controle de Conta de Usuário: pede confirmação antes de alterações que exigem privilégios elevados.' },
          ],
        },
        {
          id: 'info-b5-t3-s2',
          nome: 'Segurança — vírus, worms e derivados',
          // conteúdo herdado do tópico 'info-b1-06' da estrutura de 3 níveis
          teoria: `
## Princípios da segurança da informação — DICA

| Princípio | Significado |
|---|---|
| **Disponibilidade** | A informação está acessível quando necessária |
| **Integridade** | A informação não foi alterada indevidamente |
| **Confidencialidade** | Acesso restrito a quem é autorizado |
| **Autenticidade** | Confirma a identidade da origem |

Complementarmente: **não repúdio (irretratabilidade)** — o autor não pode negar a autoria.

## Tipos de malware

| Malware | Característica |
|---|---|
| **Vírus** | Precisa de **hospedeiro** e de **execução** pelo usuário para se propagar |
| **Worm** | **Autorreplicante**: propaga-se sozinho pela rede, **sem hospedeiro** |
| **Trojan (cavalo de Troia)** | Disfarça-se de programa legítimo; **não se autorreplica** |
| **Spyware** | Monitora e coleta informações |
| **Keylogger** | Captura o que é digitado |
| **Screenlogger** | Captura a tela ou a região do clique |
| **Ransomware** | **Criptografa** os dados e exige resgate |
| **Adware** | Exibe propaganda |
| **Rootkit** | Esconde a presença do invasor e mantém o acesso |
| **Backdoor** | Cria porta dos fundos para acesso futuro |
| **Bot / Botnet** | Máquina controlada remotamente; rede de zumbis |

> A distinção mais cobrada: **vírus precisa de hospedeiro e de ação do usuário; worm se autorreplica e se propaga sozinho pela rede.**

## Ataques e golpes

- **Phishing:** mensagem fraudulenta que se passa por instituição legítima para obter dados. **Spear phishing** é dirigido a alvo específico;
- **Pharming:** manipula o DNS para redirecionar a um site falso, ainda que o endereço digitado esteja correto;
- **Engenharia social:** manipulação psicológica para obter informações;
- **Força bruta:** tentativa exaustiva de senhas;
- **DoS / DDoS:** sobrecarrega o serviço para torná-lo indisponível — ataca a **disponibilidade**;
- **Man-in-the-middle:** intercepta a comunicação entre duas partes;
- **Sniffing:** captura pacotes que trafegam na rede;
- **Defacement:** desfiguração de páginas.

## Mecanismos de proteção

| Mecanismo | Protege contra |
|---|---|
| **Antivírus / antimalware** | Códigos maliciosos |
| **Firewall** | Tráfego de rede não autorizado |
| **Criptografia** | Interceptação e leitura indevida |
| **Backup** | Perda de dados (essencial contra ransomware) |
| **Autenticação em dois fatores (2FA)** | Uso de credenciais roubadas |
| **Certificado e assinatura digital** | Falsificação de identidade e adulteração |
| **Atualizações (patches)** | Exploração de vulnerabilidades conhecidas |

## Criptografia

- **Simétrica:** uma **única chave** para cifrar e decifrar. Rápida, mas exige compartilhamento seguro da chave (AES, DES);
- **Assimétrica:** par de chaves **pública e privada**. Cifra-se com a pública e decifra-se com a privada (RSA);
- **Assinatura digital:** cifra-se o *hash* com a **chave privada** do autor. Garante **autenticidade, integridade e não repúdio** — mas **não** confidencialidade;
- **Hash:** resumo de tamanho fixo, **unidirecional**. Serve para verificar **integridade** (SHA-256).

## Ransomware — a defesa que importa

Pagar o resgate **não garante** a recuperação. A proteção efetiva é o **backup** atualizado, testado e mantido **offline ou isolado** — se o backup estiver acessível pela mesma rede, também será criptografado.
`,
          questoes: [
            {
              id: 'info-b1-06-q1',
              enunciado: 'O worm distingue-se do vírus por ser autorreplicante e propagar-se automaticamente pela rede, sem necessidade de hospedeiro.',
              certa: true,
              explicacao: 'O vírus precisa de arquivo hospedeiro e de execução pelo usuário; o worm se propaga sozinho, explorando vulnerabilidades da rede.',
              variacoes: [
                { enunciado: 'O cavalo de Troia caracteriza-se por autorreplicar-se e propagar-se automaticamente entre computadores.', certa: false, explicacao: 'O trojan NÃO se autorreplica: disfarça-se de programa legítimo e depende da instalação pelo usuário.' },
              ],
            },
            {
              id: 'info-b1-06-q2',
              enunciado: 'O ransomware criptografa os dados da vítima e exige pagamento de resgate para restaurar o acesso, sendo o backup isolado a principal medida de proteção.',
              certa: true,
              explicacao: 'Pagar não garante recuperação. Backup acessível pela mesma rede também é criptografado — por isso deve ser offline ou isolado.',
              variacoes: [
                { enunciado: 'O pagamento do resgate exigido por ransomware garante a recuperação integral dos dados criptografados.', certa: false, explicacao: 'Não há garantia alguma. A defesa efetiva é backup atualizado e isolado.' },
              ],
            },
            {
              id: 'info-b1-06-q3',
              enunciado: 'A assinatura digital garante autenticidade, integridade e não repúdio, mas não assegura a confidencialidade do documento.',
              certa: true,
              explicacao: 'A assinatura cifra o hash com a chave privada do autor. Para confidencialidade é preciso cifrar o conteúdo com a chave pública do destinatário.',
              variacoes: [
                { enunciado: 'Na criptografia assimétrica, a mesma chave é utilizada para cifrar e decifrar a mensagem.', certa: false, explicacao: 'Isso é criptografia SIMÉTRICA. A assimétrica usa par de chaves pública e privada.' },
              ],
            },
            {
              id: 'info-b1-06-q4',
              enunciado: 'O ataque de negação de serviço (DoS) compromete principalmente o princípio da disponibilidade da informação.',
              certa: true,
              explicacao: 'O DoS/DDoS sobrecarrega o serviço para torná-lo inacessível aos usuários legítimos.',
              variacoes: [
                { enunciado: 'O pharming consiste no envio de mensagens fraudulentas por e-mail que se passam por instituições legítimas.', certa: false, explicacao: 'Isso é PHISHING. O pharming manipula o DNS para redirecionar a um site falso mesmo com o endereço correto.' },
              ],
            },
          ],
          flashcards: [
            { p: 'Quais os princípios da segurança da informação?', r: 'DICA: Disponibilidade, Integridade, Confidencialidade e Autenticidade (+ não repúdio).' },
            { p: 'Vírus x worm x trojan?', r: 'Vírus: precisa de hospedeiro e execução. Worm: autorreplicante, propaga-se sozinho pela rede. Trojan: disfarça-se e não se autorreplica.' },
            { p: 'Phishing x pharming?', r: 'Phishing: mensagem fraudulenta imitando instituição legítima. Pharming: manipula o DNS e redireciona a site falso mesmo com endereço correto.' },
            { p: 'O que a assinatura digital garante?', r: 'Autenticidade, integridade e não repúdio. NÃO garante confidencialidade.' },
            { p: 'Criptografia simétrica x assimétrica?', r: 'Simétrica: uma chave só (rápida). Assimétrica: par de chaves pública e privada.' },
            { p: 'Qual a defesa efetiva contra ransomware?', r: 'Backup atualizado, testado e mantido offline ou isolado da rede.' },
          ],
        },
      ],
    },
  ],
}
