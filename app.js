const D = {
    "meta": {
        "titulo": "Guia de Faculdades de Tecnologia - Região de Piracicaba/SP",
        "versao": "etapa2-flyer",
        "atualizado_em": "2026-11-15",
        "avisos": [
            "Mensalidades de instituições privadas são promocionais e variam por semestre e polo.",
            "Campos 'a_confirmar' e 'null' são exibidos como 'Consulte o site oficial'.",
            "Imagens: placeholders temáticos ou fallback institucional até a inserção das fotos reais."
        ]
    },
    "presenciais_e_hibridas": [
        {
            "id": "fatec-americana",
            "nome": "Faculdade de Tecnologia de Americana",
            "sigla": "Fatec Americana",
            "rede": "Estadual",
            "mensalidade": "Gratuita",
            "modalidade": "Presencial",
            "cidade": "Americana",
            "bairro_endereco": "Rua Emílio de Menezes, s/n - Gleba B, Vila Amorim, Americana - SP, CEP 13469-111",
            "imagem_url": "https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Fatec-Unidade-Americana.jpg",
            "imagem_alt": "Fachada do campus da Fatec Americana",
            "imagem_fonte": "https://www.cps.sp.gov.br/fatecs/fatec-americana-ministro-ralph-biasi/",
            "cursos": [
                { "nome": "Segurança da Informação", "grau": "Tecnólogo", "turnos": ["Matutino", "Noturno"], "vagas": "25 + 25 (semestral)", "duracao": "3 anos" },
                { "nome": "Análise e Desenvolvimento de Sistemas", "grau": "Tecnólogo", "turnos": ["Matutino", "Vespertino"], "vagas": "40 + 40 (semestral)", "duracao": "3 anos" },
                { "nome": "Jogos Digitais", "grau": "Tecnólogo", "turnos": ["Noturno"], "vagas": "40 (semestral)", "duracao": "3 anos" }
            ],
            "ingresso": ["Vestibular Fatec", "Nota do ENEM (opcional)", "Prova Paulista (3º ano)"],
            "ingresso_calendario": {
                "status": "Inscrições prorrogadas até 16/11/2026 (20h)",
                "inscricoes_ate": "2026-11-16",
                "prova": "2026-12-13",
                "resultado_1a_chamada": "2027-01-18",
                "taxa": "R$ 90",
                "bonus": "10% escola pública; 3% autodeclarados afrodescendentes",
                "concorrencia": "a_coletar"
            },
            "custo": { "mensalidade_faixa": null, "bolsas": "Gratuita; isenção/redução da taxa de inscrição" },
            "qualidade": { "conceito_mec": "a_coletar", "formato": "Presencial" },
            "site": "https://vestibular.fatec.sp.gov.br",
            "confianca": "alta"
        },
        {
            "id": "fam-americana",
            "nome": "FAM - Faculdade de Americana",
            "sigla": "FAM",
            "rede": "Privada",
            "mensalidade": "Paga",
            "modalidade": "Presencial",
            "cidade": "Americana",
            "bairro_endereco": "Rua Joaquim Bôer, 733 - Jardim Luciene, Americana - SP, CEP 13477-360",
            "imagem_url": "https://cdn.liberal.com.br/media/de/10/a9/23694/fam-abre-processo-seletivo-para-a-contratacao-de-docentes-20250915181914000.jpg",
            "imagem_alt": "Fachada do campus da FAM - Faculdade de Americana",
            "imagem_fonte": "https://cdn.liberal.com.br/media/de/10/a9/23694/fam-abre-processo-seletivo-para-a-contratacao-de-docentes-20250915181914000.jpg",
            "cursos": [
                { "nome": "Ciência da Computação", "grau": "Bacharelado", "turnos": ["a_confirmar"], "duracao": "4 anos" },
                { "nome": "Análise e Desenvolvimento de Sistemas", "grau": "Tecnólogo", "turnos": ["a_confirmar"], "duracao": "2,5 anos" },
                { "nome": "Sistemas de Informação", "grau": "Bacharelado", "turnos": ["a_confirmar"], "duracao": "4 anos" }
            ],
            "ingresso": ["Vestibular FAM", "Nota do ENEM", "Transferência", "2ª Graduação"],
            "ingresso_calendario": { "status": "Fluxo contínuo (confirmar)" },
            "custo": { "mensalidade_faixa": "R$ 850,00 a R$ 1.150,00 (Ciência da Computação: ~R$ 850/mês com descontos)", "bolsas": ["Prouni", "FIES", "Bolsas institucionais"], "confirmado": true },
            "qualidade": { "conceito_mec": "CI 4 (nota 4,21) / CC 4 (Eng. Computação)", "formato": "Presencial" },
            "site": "https://www.fam.br",
            "confianca": "alta"
        },
        {
            "id": "unimetrocamp-americana",
            "nome": "UniMetrocamp (Wyden)",
            "sigla": "UniMetrocamp",
            "rede": "Privada",
            "mensalidade": "Paga",
            "modalidade": "Híbrido (aulas ao vivo online em Americana; presencial em Campinas)",
            "cidade": "Americana",
            "bairro_endereco": "Centro (polo)",
            "imagem_url": "https://cdn.portal.estacio.br/Unimetrocamp_ce5be96f69.png",
            "imagem_alt": "Fachada da unidade UniMetrocamp Wyden",
            "imagem_fonte": "https://cdn.portal.estacio.br/Unimetrocamp_ce5be96f69.png",
            "cursos": [
                { "nome": "Ciência da Computação", "grau": "Bacharelado", "turnos": ["Noturno (ao vivo)"], "duracao": "4 anos" },
                { "nome": "Redes de Computadores", "grau": "Tecnólogo", "turnos": ["Noturno (ao vivo)"], "duracao": "2 a 2,5 anos" },
                { "nome": "Análise e Desenvolvimento de Sistemas", "grau": "Tecnólogo", "turnos": ["Noturno (ao vivo)"], "duracao": "2,5 anos" }
            ],
            "ingresso": ["Vestibular gratuito (online ou presencial)", "Nota do ENEM (últimos 10 anos)", "Ingresso simplificado (carta de apresentação)", "Transferência externa e 2ª graduação", "Diploma Encceja"],
            "ingresso_calendario": { "status": "Fluxo contínuo (confirmar)" },
            "custo": { "mensalidade_faixa": "~R$ 240 (promocional em Ciência da Computação, agregador)", "bolsas": ["Prouni", "FIES (confirmar)"], "confirmado": false },
            "qualidade": { "conceito_mec": "a_confirmar no e-MEC", "formato": "Híbrido" },
            "site": "https://www.wyden.com.br/unidades/unimetrocamp",
            "confianca": "media",
            "obs": "Unidade presencial mais próxima: Campinas (Rua Dr. Sales de Oliveira, 1661 - Vila Industrial), fora da região-base."
        },
        {
            "id": "unicamp-ft-fca-limeira",
            "nome": "Unicamp - Faculdade de Tecnologia (FT) e Faculdade de Ciências Aplicadas (FCA)",
            "sigla": "Unicamp Limeira",
            "rede": "Estadual",
            "mensalidade": "Gratuita",
            "modalidade": "Presencial",
            "cidade": "Limeira",
            "bairro_endereco": "FT: Jd. Nova Itália (R. Paschoal Marmo, 1888)",
            "imagem_url": "https://prefeituralimeira.unicamp.br/wp-content/uploads/sites/35/2023/09/DJI_0053-scaled.jpg",
            "imagem_alt": "Fachada do campus da Unicamp em Limeira",
            "imagem_fonte": "https://prefeituralimeira.unicamp.br/historia/",
            "cursos": [
                { "nome": "Sistemas de Informação", "grau": "Bacharelado", "turnos": ["Integral"], "vagas": "50 (anual)", "duracao": "4 anos", "unidade": "FT" },
                { "nome": "Tecnologia em Análise e Desenvolvimento de Sistemas", "grau": "Tecnólogo", "turnos": ["Noturno"], "vagas": "50 (anual)", "duracao": "3,5 anos", "unidade": "FT" },
                { "nome": "Engenharia de Telecomunicações", "grau": "Bacharelado", "turnos": ["Integral"], "vagas": "50 (anual)", "duracao": "5 anos", "unidade": "FT" },
                { "nome": "Inteligência Artificial e Ciência de Dados (novo 2027)", "grau": "Bacharelado", "turnos": ["Integral"], "vagas": "40 (anual)", "duracao": "4 anos", "unidade": "FT e FCA (oferta compartilhada)" }
            ],
            "ingresso": ["Vestibular Unicamp", "Enem-Unicamp", "Provão Paulista"],
            "ingresso_calendario": {
                "status": "Encerrado para 2027",
                "obs": "Vestibular realizado em ago-set/2026; Enem-Unicamp encerrou em 20/10/2026",
                "proxima_janela": "2º semestre de 2027 (Vestibular 2028)",
                "concorrencia": "a_coletar"
            },
            "custo": { "mensalidade_faixa": null, "bolsas": "Gratuita; programas de permanência estudantil (SAE)" },
            "qualidade": { "conceito_mec": "a_coletar", "formato": "Presencial" },
            "site": "https://www.ft.unicamp.br",
            "confianca": "alta"
        },
        {
            "id": "fatec-limeira",
            "nome": "Faculdade de Tecnologia de Limeira (nova unidade)",
            "sigla": "Fatec Limeira",
            "rede": "Estadual",
            "mensalidade": "Gratuita",
            "modalidade": "Presencial",
            "cidade": "Limeira",
            "bairro_endereco": "Av. Luiz Guerra Filho, 65 - Parque Tecnológico de Limeira (Pq. Res. Abílio Pedro), CEP 13483-576",
            "imagem_url": "https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2026/02/fatec_limeira.jpg",
            "imagem_alt": "Fachada da unidade Fatec Limeira no Parque Tecnológico",
            "imagem_fonte": "https://www.cps.sp.gov.br/fatecs/fatec-de-limeira/",
            "cursos": [
                { "nome": "Gestão da Tecnologia da Informação", "grau": "Tecnólogo", "turnos": ["Noturno"], "vagas": 40, "duracao": "3 anos" }
            ],
            "ingresso": ["Vestibular Fatec", "Nota do ENEM (opcional)", "Prova Paulista (confirmar)"],
            "ingresso_calendario": {
                "status": "Inscrições prorrogadas até 16/11/2026 (20h)",
                "inscricoes_ate": "2026-11-16",
                "prova": "2026-12-13",
                "primeira_turma": "2027"
            },
            "custo": { "mensalidade_faixa": null, "bolsas": "Gratuita" },
            "qualidade": { "conceito_mec": "Curso novo (sem avaliação)", "formato": "Presencial" },
            "site": "https://vestibular.fatec.sp.gov.br",
            "confianca": "alta",
            "obs": "Vagas: fontes locais (Prefeitura e Gazeta de Limeira) indicam 40; uma fonte regional anterior citava 25. Usado 40."
        },
        {
            "id": "unesp-rio-claro",
            "nome": "UNESP - Instituto de Geociências e Ciências Exatas",
            "sigla": "Unesp Rio Claro",
            "rede": "Estadual",
            "mensalidade": "Gratuita",
            "modalidade": "Presencial",
            "cidade": "Rio Claro",
            "bairro_endereco": "Av. 24-A, 1515 - Bela Vista, Rio Claro - SP, CEP 13506-900",
            "imagem_url": "https://alumni.unesp.br/images/939526117/rccc_1626749490121.jpg",
            "imagem_alt": "Fachada do campus da Unesp Rio Claro",
            "imagem_fonte": "https://alumni.unesp.br/noticia/7-coisas-que-todo-unespiano-de-rio-claro-ja-fez-ou-presenciou",
            "cursos": [
                { "nome": "Ciências da Computação", "grau": "Bacharelado", "turnos": ["Integral", "Noturno"], "vagas": "24 + 24", "duracao": "4 anos" }
            ],
            "ingresso": ["Vestibular Unesp (Vunesp)"],
            "ingresso_calendario": {
                "status": "Prova em andamento",
                "fase1": "2026-11-22",
                "fase2": "2026-12-13/14",
                "concorrencia": { "integral": 16.7, "noturno": 15.8, "ano_ref": "2027 (1ª fase, ampla concorrência)" }
            },
            "custo": { "mensalidade_faixa": null, "bolsas": "Gratuita" },
            "qualidade": { "conceito_mec": "a_coletar", "formato": "Presencial" },
            "site": "https://vestibular.unesp.br",
            "confianca": "alta"
        },
        {
            "id": "fatec-rio-claro",
            "nome": "Faculdade de Tecnologia de Rio Claro",
            "sigla": "Fatec Rio Claro",
            "rede": "Estadual",
            "mensalidade": "Gratuita",
            "modalidade": "Presencial",
            "cidade": "Rio Claro",
            "bairro_endereco": "Av. 80-A, 1185 - Jardim Village, Rio Claro - SP, CEP 13506-530",
            "imagem_url": "https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2024/11/fatec-rio-claro.jpg",
            "imagem_alt": "Fachada da Fatec Rio Claro",
            "imagem_fonte": "https://www.cps.sp.gov.br/fatecs/fatec-rio-claro/",
            "cursos": [
                { "nome": "Inteligência Artificial", "grau": "Tecnólogo", "turnos": ["Matutino"], "vagas": 20, "duracao": "3 anos" }
            ],
            "ingresso": ["Vestibular Fatec", "Nota do ENEM (opcional)", "Prova Paulista"],
            "ingresso_calendario": {
                "status": "Inscrições prorrogadas até 16/11/2026 (20h)",
                "inscricoes_ate": "2026-11-16",
                "prova": "2026-12-13",
                "resultado_1a_chamada": "2027-01-18"
            },
            "custo": { "mensalidade_faixa": null, "bolsas": "Gratuita" },
            "qualidade": { "conceito_mec": "a_coletar", "formato": "Presencial" },
            "site": "https://vestibular.fatec.sp.gov.br",
            "confianca": "alta"
        },
        {
            "id": "ifsp-capivari",
            "nome": "Instituto Federal de São Paulo - Câmpus Capivari",
            "sigla": "IFSP Capivari",
            "rede": "Federal",
            "mensalidade": "Gratuita",
            "modalidade": "Presencial",
            "cidade": "Capivari",
            "bairro_endereco": "Av. Dr. Ênio Pires de Camargo, 2971 - São João Batista, Capivari - SP, CEP 13365-010",
            "imagem_url": "https://capivari.sp.gov.br/portal/wp-content/uploads/2026/02/IFSP_CPV.png",
            "imagem_alt": "Fachada do IFSP Câmpus Capivari",
            "imagem_fonte": "https://capivari.sp.gov.br/portal/ifsp-capivari-abre-inscricoes-para-cursos-de-extensao/",
            "cursos": [
                { "nome": "Análise e Desenvolvimento de Sistemas", "grau": "Tecnólogo", "turnos": ["Noturno"], "vagas": "40 (anual - 1º sem.)", "duracao": "3 anos" }
            ],
            "ingresso": ["SISU (nota do ENEM)"],
            "ingresso_calendario": { "status": "Depende do SISU (1º semestre)", "concorrencia": "a_coletar" },
            "custo": { "mensalidade_faixa": null, "bolsas": "Gratuita; auxílios estudantis (PNAES)" },
            "qualidade": { "conceito_mec": "a_coletar", "formato": "Presencial" },
            "site": "https://cpv.ifsp.edu.br/",
            "confianca": "alta"
        },
        {
            "id": "ifsp-piracicaba",
            "nome": "Instituto Federal de São Paulo - Câmpus Piracicaba",
            "sigla": "IFSP Piracicaba",
            "rede": "Federal",
            "mensalidade": "Gratuita",
            "modalidade": "Presencial",
            "cidade": "Piracicaba",
            "bairro_endereco": "Rua Diácono Jair de Oliveira, 1005 - Santa Rosa, Piracicaba - SP, CEP 13414-155",
            "imagem_url": "https://prc.ifsp.edu.br/images/campus.png",
            "imagem_alt": "Fachada do IFSP Câmpus Piracicaba",
            "imagem_fonte": "https://prc.ifsp.edu.br/index.php/portaria1/58-campus/89-o-campus",
            "cursos": [
                { "nome": "Análise e Desenvolvimento de Sistemas", "grau": "Tecnólogo", "turnos": ["Integral"], "vagas": "40 (anual - 1º sem.)", "duracao": "3 anos" },
                { "nome": "Engenharia de Computação", "grau": "Bacharelado", "turnos": ["Integral"], "vagas": "40 (anual - 1º sem.)", "duracao": "5 anos" }
            ],
            "ingresso": ["SISU (nota do ENEM)"],
            "ingresso_calendario": { "status": "Depende do SISU (1º semestre)", "concorrencia": "a_coletar" },
            "custo": { "mensalidade_faixa": null, "bolsas": "Gratuita; auxílios estudantis (PNAES)" },
            "qualidade": { "conceito_mec": "a_coletar", "formato": "Presencial" },
            "site": "https://www.ifsp.edu.br",
            "confianca": "alta",
            "obs": "Oferta de ADS confirmada pelo responsável do projeto."
        },
        {
            "id": "eep-piracicaba",
            "nome": "Escola de Engenharia de Piracicaba (FUMEP)",
            "sigla": "EEP",
            "rede": "Municipal",
            "mensalidade": "Paga",
            "modalidade": "Presencial",
            "cidade": "Piracicaba",
            "bairro_endereco": "Av. Monsenhor Martinho Salgot, 560 - Areão, CEP 13414-040",
            "imagem_url": "https://static.wixstatic.com/media/0b95ba_e47757dfa5e0484db509cbfbf5305bba~mv2.jpeg/v1/fill/w_925,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0b95ba_e47757dfa5e0484db509cbfbf5305bba~mv2.jpeg",
            "imagem_alt": "Fachada da Escola de Engenharia de Piracicaba (FUMEP)",
            "imagem_fonte": "https://static.wixstatic.com/media/0b95ba_e47757dfa5e0484db509cbfbf5305bba~mv2.jpeg/v1/fill/w_925,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0b95ba_e47757dfa5e0484db509cbfbf5305bba~mv2.jpeg",
            "cursos": [
                { "nome": "Ciência da Computação", "grau": "Bacharelado", "turnos": ["Noturno"], "duracao": "4 anos" },
                { "nome": "Engenharia de Computação", "grau": "Bacharelado", "turnos": ["Noturno"], "duracao": "5 anos" }
            ],
            "ingresso": ["Análise do histórico escolar do Ensino Médio (online)", "Exame de Bolsas", "Transferência externa", "Portador de diploma (2ª graduação)"],
            "ingresso_calendario": { "status": "Inscrições abertas", "inscricoes_ate": "2026-12-16" },
            "custo": { "mensalidade_faixa": "R$ 950,00 a R$ 1.450,00 (varia entre Ciência da Computação e Eng. Computação)", "bolsas": ["Exame de Bolsas"], "confirmado": true },
            "qualidade": { "conceito_mec": "IGC 3 / Reconhecimento máximo (5 anos) pelo CEE-SP", "formato": "Presencial" },
            "site": "https://www.eep.br/",
            "confianca": "alta"
        },
        {
            "id": "anhanguera-piracicaba",
            "nome": "Anhanguera Piracicaba",
            "sigla": "Anhanguera",
            "rede": "Privada",
            "mensalidade": "Paga",
            "modalidade": "Presencial",
            "cidade": "Piracicaba",
            "bairro_endereco": "Av. Dr. João Conceição, 353 - Paulista",
            "imagem_url": "https://www.atribunapiracicabana.com.br/wp-content/uploads/2026/02/02-02-Faculdade-Anhaguera-1-768x509.jpg",
            "imagem_alt": "Fachada da Faculdade Anhanguera Piracicaba",
            "imagem_fonte":"https://www.atribunapiracicabana.com.br/wp-content/uploads/2026/02/02-02-Faculdade-Anhaguera-1-768x509.jpg",
            "cursos": [
                { "nome": "Ciência da Computação", "grau": "Bacharelado", "turnos": ["Matutino", "Noturno"], "duracao": "4 anos" }
            ],
            "ingresso": ["Vestibular online ou presencial gratuito", "Nota do ENEM (dispensa vestibular)", "Transferência externa", "Segunda graduação"],
            "ingresso_calendario": { "status": "Fluxo contínuo (confirmar)" },
            "custo": { "mensalidade_faixa": "Presencial: R$ 370 a R$ 650 (com descontos)", "bolsas": ["Prouni", "FIES"], "confirmado": true },
            "qualidade": { "conceito_mec": "CI 3 a 4 (conforme a unidade/polo)", "formato": "Presencial" },
            "site": "https://www.anhanguera.com",
            "confianca": "alta",
            "obs": "Agregadores citam também unidade em Piracicamirim; verificar se há duas unidades."
        },
        {
            "id": "anhanguera-sbo",
            "nome": "Anhanguera Santa Bárbara d’Oeste",
            "sigla": "Anhanguera",
            "rede": "Privada",
            "mensalidade": "Paga",
            "modalidade": "Semipresencial",
            "cidade": "Santa Bárbara d’Oeste",
            "bairro_endereco": "Distrito Industrial",
            "imagem_url":"https://portalatualidade.com.br/images/noticias/10252/21082020120638_Faculdade_.jpeg",
            "imagem_alt": "Fachada da unidade Anhanguera Santa Bárbara d’Oeste",
            "imagem_fonte":"https://portalatualidade.com.br/images/noticias/10252/21082020120638_Faculdade_.jpeg",
            "cursos": [
                { "nome": "Análise e Desenvolvimento de Sistemas", "grau": "Tecnólogo", "turnos": ["Noturno (semipresencial)"], "duracao": "2,5 anos" },
                { "nome": "Engenharia da Computação", "grau": "Bacharelado", "turnos": ["Noturno (semipresencial)"], "duracao": "5 anos" }
            ],
            "ingresso": ["Vestibular online ou presencial gratuito", "Nota do ENEM (dispensa vestibular)", "Transferência externa", "Segunda graduação"],
            "ingresso_calendario": { "status": "Fluxo contínuo (confirmar)" },
            "custo": { "mensalidade_faixa": "Semipresencial / EaD: a partir de R$ 149 (Presencial na rede: R$ 370 a R$ 650)", "bolsas": ["Prouni", "FIES"], "confirmado": true },
            "qualidade": { "conceito_mec": "CI 3 a 4 (conforme a unidade/polo)", "formato": "Semipresencial" },
            "site": "https://www.anhanguera.com",
            "confianca": "alta"
        },
        {
            "id": "estacio-sbo",
            "nome": "Estácio Santa Bárbara d’Oeste",
            "sigla": "Estácio",
            "rede": "Privada",
            "mensalidade": "Paga",
            "modalidade": "Semipresencial / aulas ao vivo",
            "cidade": "Santa Bárbara d’Oeste",
            "bairro_endereco": "Parque Olaria (R. Dom Pedro II)",
            "imagem_url": null,
            "imagem_alt": "Fachada da Estácio Santa Bárbara d’Oeste",
            "imagem_fonte": "null",
            "cursos": [
                { "nome": "Análise e Desenvolvimento de Sistemas", "grau": "Tecnólogo", "turnos": ["Noturno (ao vivo)", "Noturno (semipresencial)"], "duracao": "2,5 anos" },
                { "nome": "Ciência da Computação", "grau": "Bacharelado", "turnos": ["Noturno (ao vivo)"], "duracao": "4 anos" }
            ],
            "ingresso": ["Vestibular online (redação) ou agendado", "Nota do ENEM", "Ingresso simplificado (histórico)", "Transferência e 2ª graduação"],
            "ingresso_calendario": { "status": "Fluxo contínuo (confirmar)" },
            "custo": { "mensalidade_faixa": "EaD / Semipresencial: R$ 150 a R$ 380 (com descontos)", "bolsas": ["Prouni", "FIES"], "confirmado": true },
            "qualidade": { "conceito_mec": "CI 4 a 5 (conceito institucional da rede)", "formato": "Híbrido" },
            "site": "https://estacio.br",
            "confianca": "alta",
            "obs": "Oferta presencial da Estácio mais próxima fica em Campinas (Av. Francisco Glicério, 1522 - Centro); em Piracicaba a operação é de polos EaD/semipresencial."
        }
    ],
    "ead_top5_ads": {
        "criterio_ordem": "CI-EaD, Conceito do Curso (CC) de ADS e menor mensalidade promocional",
        "instituicoes": [
            {
                "ordem": 1,
                "id": "ead-unicesumar",
                "nome": "UniCesumar",
                "modalidade": "EaD",
                "ci_ead": 5,
                "conceito_curso_ads": { "CC": 5, "CPC": 4 },
                "mensalidade_faixa": "R$ 149,00 a R$ 219,00",
                "polos_por_cidade": {
                    "Piracicaba": ["Centro"],
                    "Americana": ["Centro", "Vila Rehder"],
                    "Santa Bárbara d’Oeste": ["Centro"],
                    "Capivari": ["Centro"]
                },
                "prouni": "Sim (50% e 100%)",
                "site": "https://www.unicesumar.edu.br"
            },
            {
                "ordem": 2,
                "id": "ead-anhanguera",
                "nome": "Anhanguera (EaD)",
                "modalidade": "EaD 100% online",
                "ci_ead": 5,
                "conceito_curso_ads": { "CC": 4 },
                "mensalidade_faixa": "R$ 107,20 a R$ 149,00",
                "polos_por_cidade": {
                    "Piracicaba": ["Centro", "Vila Rezende"],
                    "Americana": ["Centro", "Jardim Girassol"],
                    "Santa Bárbara d’Oeste": ["Distrito Industrial", "Centro"],
                    "Capivari": ["Centro"]
                },
                "prouni": "Sim (50% e 100%)",
                "site": "https://www.anhanguera.com"
            },
            {
                "ordem": 3,
                "id": "ead-estacio",
                "nome": "Estácio (Digital)",
                "modalidade": "EaD (Digital)",
                "ci_ead": 5,
                "conceito_curso_ads": { "CC": 4 },
                "mensalidade_faixa": "R$ 129,00 a R$ 133,00",
                "polos_por_cidade": {
                    "Piracicaba": ["Centro"],
                    "Americana": ["Centro"],
                    "Santa Bárbara d’Oeste": ["Parque Olaria (R. Dom Pedro II)"],
                    "Capivari": ["Centro (confirmar disponibilidade)"]
                },
                "prouni": "Sim (50% e 100%)",
                "site": "https://estacio.br"
            },
            {
                "ordem": 4,
                "id": "ead-cruzeiro-do-sul-virtual",
                "nome": "Cruzeiro do Sul Virtual",
                "modalidade": "EaD",
                "ci_ead": 5,
                "conceito_curso_ads": { "CC": 4, "Enade": 3 },
                "mensalidade_faixa": "a partir de R$ 154,96",
                "polos_por_cidade": {
                    "Piracicaba": ["Alto", "Vila Monteiro", "Santa Terezinha"],
                    "Americana": ["Centro", "São Vito"],
                    "Santa Bárbara d’Oeste": ["Vila Grego"],
                    "Capivari": ["Centro"]
                },
                "prouni": "Sim (somente 100%)",
                "site": "https://www.cruzeirodosulvirtual.com.br/"
            },
            {
                "ordem": 5,
                "id": "ead-unip",
                "nome": "UNIP (EaD)",
                "modalidade": "EaD",
                "ci_ead": 4,
                "conceito_curso_ads": { "CC": 4 },
                "mensalidade_faixa": "R$ 149,00 a R$ 189,00",
                "polos_por_cidade": {
                    "Piracicaba": ["Centro (R. Alferes José Caetano)"],
                    "Americana": ["Centro"],
                    "Santa Bárbara d’Oeste": ["Jardim Pérola / Centro"],
                    "Capivari": ["Centro"]
                },
                "prouni": "Sim (50% e 100%)",
                "site": "https://www.unip.br"
            }
        ]
    }
};

const $ = s => document.querySelector(s);
const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const P = D.presenciais_e_hibridas;
const E = D.ead_top5_ads.instituicoes;
const EAD_CITIES = [
    "Piracicaba",
    "Americana",
    "Santa Bárbara d’Oeste",
    "Capivari"
];
let selectedEadCity = "Piracicaba";

function renderEad() {
    $("#ead-tabs").innerHTML = EAD_CITIES.map(cityName => `
        <button class="ead-tab" data-ead-city="${esc(cityName)}" aria-pressed="${selectedEadCity === cityName}">
            <span class="pin-dot" aria-hidden="true"></span>
            ${esc(cityName)}
        </button>
    `).join("");

    $("#rail").innerHTML = E.map(e => {
        const c = e.conceito_curso_ads || {};
        const polos = (e.polos_por_cidade && e.polos_por_cidade[selectedEadCity]) || [];
        const hasPolo = polos.length > 0;

        return `
        <article class="ecard">
            <div class="ecard-top">
                <span class="ord">#${e.ordem}</span>
                <span class="b out">${esc(e.modalidade)}</span>
            </div>
            <h3>${esc(e.nome)}</h3>
            <div class="polo-badge ${hasPolo ? "" : "no-polo"}">
                📍 ${esc(selectedEadCity)}
            </div>
            <dl>
                <div class="kv">
                    <dt>Polos locais</dt>
                    <dd>${hasPolo ? esc(polos.join(", ")) : '<span class="unk">Consulte polo mais próximo</span>'}</dd>
                </div>
                <div class="kv">
                    <dt>Nota CI-EaD</dt>
                    <dd>${e.ci_ead} de 5</dd>
                </div>
                <div class="kv">
                    <dt>Nota ADS</dt>
                    <dd>${esc(Object.entries(c).map(([k, v]) => k + " " + v).join(" · "))}</dd>
                </div>
                <div class="kv">
                    <dt>Mensalidade</dt>
                    <dd>${esc(e.mensalidade_faixa)}</dd>
                </div>
                <div class="kv">
                    <dt>Prouni</dt>
                    <dd>${esc(e.prouni)}</dd>
                </div>
            </dl>
            ${e.site ? `<a class="btn cta" href="${esc(e.site)}" target="_blank" rel="noopener">Conhecer curso ↗</a>` : ""}
        </article>`;
    }).join("");
}

const UNK = x => x == null || x === "" || /^a_(confirmar|coletar)/.test(String(x));
const clean = s => s.replace(/a_confirmar/g, "a confirmar").replace(/a_coletar/g, "em levantamento");

const city = c => {
    const s = c.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return s.includes("barbara") ? "santa-barbara" : ["piracicaba", "capivari", "americana"].find(k => s.includes(k)) || "outras";
};

const TABS = [
    ["todas", "Todas"],
    ["piracicaba", "Piracicaba"],
    ["capivari", "Capivari"],
    ["santa-barbara", "Santa Bárbara d’Oeste"],
    ["americana", "Americana"],
    ["outras", "Outras (Limeira, Rio Claro)"]
];

const CATS = [
    ["ADS", /an[aá]lise e desenvolvimento|\bADS\b/i],
    ["Sistemas de Informação", /sistemas de informa/i],
    ["Ciência da Computação", /ci[eê]ncias? da computa/i],
    ["Engenharia de Computação e Telecom", /engenharia d[ae] (computa|telecom)/i],
    ["Segurança da Informação", /seguran/i],
    ["IA e Ciência de Dados", /intelig[eê]ncia artificial|ci[eê]ncia de dados/i],
    ["Jogos Digitais", /jogos/i],
    ["Redes", /redes/i],
    ["Gestão de TI", /gest[aã]o da tecnologia/i]
];

const cats = n => CATS.filter(c => c[1].test(n)).map(c => c[0]);

const tur = i => {
    const s = new Set();
    i.cursos.forEach(c => c.turnos.forEach(t => {
        t = t.toLowerCase();
        if (t.includes("matut")) s.add("Matutino");
        if (t.includes("vespert")) s.add("Vespertino");
        if (t.includes("notur")) s.add("Noturno");
        if (t.includes("integral")) s.add("Integral");
    }));
    return s;
};

const modOf = i => /^presencial/i.test(i.modalidade) ? "Presencial" : "Híbrido";

const st = i => {
    const s = ((i.ingresso_calendario || {}).status || "").toLowerCase();
    if (s.includes("aberta")) return ["st-open", "Inscrições abertas", 0];
    if (s.includes("prorrog")) return ["st-ext", "Prazo prorrogado", 0];
    if (s.includes("andamento")) return ["st-active", "Vestibular em andamento", 1];
    if (s.includes("encerrado")) return ["st-closed", "Encerrado 2027", 3];
    if (s.includes("sisu")) return ["st-active", "Ingresso via SISU", 2];
    if (s.includes("cont")) return ["st-active", "Matrícula contínua", 2];
    return ["st-closed", "Consulte prazos", 4];
};

const SH = [
    [/vestibular/i, "VESTIBULAR"],
    [/sisu/i, "SISU"],
    [/enem/i, "ENEM"],
    [/prova paulista|provão/i, "PROVA PAULISTA"],
    [/hist[óo]rico/i, "HISTÓRICO"],
    [/bolsas/i, "EXAME DE BOLSAS"],
    [/transfer/i, "TRANSFERÊNCIA"],
    [/diploma|segunda|2ª/i, "2ª GRADUAÇÃO"]
];

const chips = i => {
    const o = [];
    (i.ingresso || []).forEach(t => {
        const m = SH.find(x => x[0].test(t));
        if (m && !o.includes(m[1])) o.push(m[1]);
    });
    return o.slice(0, 4);
};

const S = { city: "todas", rede: "", men: "", curso: "", turno: "", mod: "", sort: "men" };

const pass = (i, skip) =>
    (skip || S.city === "todas" || city(i.cidade) === S.city) &&
    (!S.rede || i.rede === S.rede) &&
    (!S.men || i.mensalidade === S.men) &&
    (!S.curso || i.cursos.some(c => cats(c.nome).includes(S.curso))) &&
    (!S.turno || tur(i).has(S.turno)) &&
    (!S.mod || modOf(i) === S.mod);

function renderMediaFallback(sigla, rede) {
    return `<div class="card-fallback"><span>${esc(sigla)}</span><small>Ensino Superior · ${esc(rede)}</small></div>`;
}

window.handleImgError = function(imgEl, sigla, rede) {
    const wrapper = imgEl.parentElement;
    if (wrapper) {
        const caption = wrapper.querySelector("figcaption");
        if (caption) caption.remove();
        imgEl.remove();
        wrapper.insertAdjacentHTML("afterbegin", renderMediaFallback(sigla, rede));
    }
};

function card(i) {
    const [k, lab] = st(i);
    const cs = i.cursos;
    const dur = cs.map(c => c.duracao).find(d => !UNK(d));
    const tt = [...tur(i)];
    const ch = chips(i);
    const imgUrl = i.imagem_url && i.imagem_url.trim();
    const imgAlt = (i.imagem_alt && i.imagem_alt.trim()) || `Fachada da ${i.nome}`;
    const imgFonte = (i.imagem_fonte && i.imagem_fonte.trim()) || "#";

    const mediaContent = imgUrl
        ? `<img src="${esc(imgUrl)}" alt="${esc(imgAlt)}" loading="lazy" onerror="handleImgError(this, '${esc(i.sigla).replace(/'/g, "\\'")}', '${esc(i.rede)}')">
           <figcaption class="photo-credit">
               Foto: Divulgação / <a href="${esc(imgFonte)}" target="_blank" rel="noopener noreferrer">${esc(i.sigla)}</a>
           </figcaption>`
        : renderMediaFallback(i.sigla, i.rede);

    return `
    <article class="card">
        <figure class="card-media">
            ${mediaContent}
            <div class="media-badges">
                <span class="city-tag">${esc(i.cidade)}</span>
                <span class="status-sticker ${k}">${lab}</span>
            </div>
        </figure>
        <div class="cb">
            <h3>${esc(i.sigla)}${i.confianca !== "alta" ? '<span class="inf" title="Alguns dados estão em confirmação" aria-label="Dado a confirmar">!</span>' : ""}</h3>
            <p class="sub">${esc(i.nome)}</p>
            <div class="row">
                <span class="b r-${i.rede}">${i.rede}</span>
                <span class="b ${i.mensalidade === "Gratuita" ? "free" : "paid"}">${i.mensalidade === "Gratuita" ? "✓ Gratuita" : "Mensalidade Paga"}</span>
                <span class="b out">${modOf(i)}</span>
            </div>
            <div class="cs">
                ${cs.slice(0, 2).map(c => `<span>${esc(c.nome.replace("Tecnologia em ", ""))}</span>`).join("")}
                ${cs.length > 2 ? `<span>+${cs.length - 2} cursos</span>` : ""}
            </div>
            <p class="meta">${tt.length ? tt.join(" · ") : "Turnos: consulte o site"}${dur ? " · " + esc(clean(dur).replace(/\s*\(.*\)/, "")) : ""}</p>
            ${ch.length ? `<div class="ing">${ch.map(c => `<span>${c}</span>`).join("")}</div>` : ""}
            <div class="act">
                <button class="btn cta det" data-id="${i.id}">Ver detalhes</button>
                ${i.site ? `<a class="btn" href="${esc(i.site)}" target="_blank" rel="noopener" aria-label="Site oficial de ${esc(i.sigla)}">Site ↗</a>` : ""}
            </div>
        </div>
    </article>`;
}

const cnt = k => P.filter(i => pass(i, true) && (k === "todas" || city(i.cidade) === k)).length;

function render() {
    $("#tabs").innerHTML = TABS.map(([k, l]) =>
        `<button class="tab" data-k="${k}" aria-pressed="${S.city === k}">${l}<span>${cnt(k)}</span></button>`
    ).join("");

    const rk = i => st(i)[2];
    const az = (a, b) => a.sigla.localeCompare(b.sigla, "pt-BR");
    const L = P.filter(i => pass(i));

    L.sort(
        S.sort === "az" ? az :
        S.sort === "open" ? (a, b) => rk(a) - rk(b) || az(a, b) :
        (a, b) => (b.mensalidade === "Gratuita") - (a.mensalidade === "Gratuita") || az(a, b)
    );

    $("#count").textContent = L.length + (L.length === 1 ? " instituição encontrada" : " instituições encontradas");
    $("#grid").innerHTML = L.length
        ? L.map(card).join("")
        : '<div class="empty"><h3>Nenhuma instituição encontrada com esses filtros</h3><p class="note">Tente remover algum filtro ou selecionar outra cidade.</p><button class="btn cta" data-clr>Limpar filtros</button></div>';

    const n = ["rede", "men", "curso", "turno", "mod"].filter(k => S[k]).length;
    $("#ft span").textContent = n ? ` (${n})` : "";
}

const F = [
    ["rede", "Rede", ["Federal", "Estadual", "Municipal", "Privada"]],
    ["men", "Mensalidade", ["Gratuita", "Paga"]],
    ["curso", "Área / Curso", CATS.map(c => c[0])],
    ["turno", "Turno", ["Matutino", "Vespertino", "Noturno", "Integral"]],
    ["mod", "Modalidade", ["Presencial", "Híbrido"]]
];

$("#filters").innerHTML = F.map(([k, l, o]) =>
    `<label class="f">${l}<select data-f="${k}"><option value="">Todos</option>${o.map(x => `<option>${x}</option>`).join("")}</select></label>`
).join("") +
`<label class="f">Ordenar por<select data-f="sort"><option value="men">Gratuitas primeiro</option><option value="open">Inscrições abertas</option><option value="az">Ordem alfabética (A-Z)</option></select></label>
<label class="f">&nbsp;<button class="btn" data-clr>Limpar filtros</button></label>`;

const clear = () => {
    ["rede", "men", "curso", "turno", "mod"].forEach(k => S[k] = "");
    S.sort = "men";
    document.querySelectorAll("[data-f]").forEach(s => s.value = s.dataset.f === "sort" ? "men" : "");
    render();
};

document.addEventListener("change", e => {
    const f = e.target.dataset && e.target.dataset.f;
    if (f) {
        S[f] = e.target.value;
        render();
    }
});

function setCity(k) {
    S.city = k;
    try { history.replaceState(null, "", "#" + k); } catch (x) {}
    render();
}

function fromHash() {
    const h = location.hash.slice(1);
    if (TABS.some(t => t[0] === h) && h !== S.city) {
        S.city = h;
        render();
    }
}

window.addEventListener("hashchange", fromHash);

$("#ft").onclick = e => {
    const o = $("#filters").classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", o);
};

const LBL = {
    status: "Situação", prova: "Data da Prova", resultado_1a_chamada: "Resultado 1ª chamada",
    taxa: "Taxa de Inscrição", bonus: "Bonificação", concorrencia: "Concorrência",
    obs: "Observação", fase1: "1ª fase", fase2: "2ª fase", inscricoes_ate: "Inscrições até",
    proxima_janela: "Próxima janela", primeira_turma: "Primeira turma",
    mensalidade_faixa: "Mensalidade", bolsas: "Bolsas e Auxílios",
    conceito_mec: "Conceito MEC", formato: "Formato"
};

const fmt = v => {
    if (v == null) return "";
    if (Array.isArray(v)) return v.map(fmt).join(", ");
    if (typeof v === "object") return Object.entries(v).map(([k, x]) => k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, " ") + " " + fmt(x)).join(" · ");
    if (typeof v === "number") return v.toLocaleString("pt-BR");
    return clean(String(v)).replace(/(\d{4})-(\d{2})-(\d{2})\/(\d{2})/, "$3–$4/$2/$1").replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
};

const val = v => UNK(v) ? '<span class="unk">Consulte o site oficial</span>' : esc(fmt(v));
const kvs = o => Object.entries(o || {}).filter(([k]) => !["pagina", "confirmado"].includes(k)).map(([k, v]) => `<div class="kv"><dt>${LBL[k] || k}</dt><dd>${val(v)}</dd></div>`).join("");

function modal(i) {
    const [k, lab] = st(i);
    const c = i.ingresso_calendario || {};
    const q = i.qualidade || {};
    const u = i.custo || {};
    const addr = i.bairro_endereco;

    const rows = i.cursos.map(c => {
        const t = c.turnos.filter(x => !UNK(x)).join(", ");
        return `<tr><td><strong>${esc(c.nome)}</strong>${c.unidade ? `<small>${esc(c.unidade)}</small>` : ""}</td><td>${val(c.grau)}</td><td>${t ? esc(t) : '<span class="unk">Consulte</span>'}</td><td>${val(c.duracao)}</td><td>${val(c.vagas)}</td></tr>`;
    }).join("");

    const d = $("#dlg");
    d.innerHTML = `
    <div class="mh">
        <button class="x" aria-label="Fechar" data-x>×</button>
        <div class="row">
            <span class="city-tag" style="background:rgba(255,255,255,0.15)">${esc(i.cidade)}</span>
            <span class="status-sticker ${k}">${lab}</span>
        </div>
        <h2 id="mt">${esc(i.sigla)}</h2>
        <p>${esc(i.nome)}</p>
        <div class="row" style="margin-top:12px">
            <span class="b r-${i.rede}">${i.rede}</span>
            <span class="b ${i.mensalidade === "Gratuita" ? "free" : "paid"}">${i.mensalidade}</span>
            <span class="b out">${esc(i.modalidade)}</span>
        </div>
    </div>
    <div class="mb">
        <h4>Cursos de TI</h4>
        <div class="tw">
            <table>
                <thead><tr><th>Curso</th><th>Grau</th><th>Turnos</th><th>Duração</th><th>Vagas</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
        <h4>Como ingressar</h4>
        <dl><div class="kv"><dt>Formas</dt><dd>${val((i.ingresso || []).filter(x => !UNK(x)).join("; ") || null)}</dd></div>${kvs(c)}</dl>
        <h4>Investimento e bolsas</h4>
        <dl>${kvs({ mensalidade_faixa: u.mensalidade_faixa, bolsas: u.bolsas })}</dl>
        <h4>Avaliação e formato</h4>
        <dl>${kvs({ conceito_mec: q.conceito_mec, formato: q.formato })}</dl>
        <h4>Endereço</h4>
        <dl><div class="kv"><dt>Localização</dt><dd>${val(addr)}</dd></div></dl>
        ${i.obs ? `<p class="note"><strong>Nota:</strong> ${esc(i.obs)}</p>` : ""}
        ${i.confianca !== "alta" ? '<p class="note">Alguns dados desta instituição estão em fase de confirmação. Verifique o edital no site oficial.</p>' : ""}
        <div class="macts">
            ${i.site ? `<a class="btn cta" href="${esc(i.site)}" target="_blank" rel="noopener">Acessar site oficial ↗</a>` : ""}
            <a class="btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(i.nome + ", " + i.cidade)}" target="_blank" rel="noopener">Ver no mapa ↗</a>
            <button class="btn" data-cp>Copiar link</button>
        </div>
    </div>`;
    d.showModal();
}

document.addEventListener("click", e => {
    const t = e.target;
    const b = t.closest && t.closest("button,dialog");
    if (!b && t.id !== "dlg") return;
    if (t.id === "dlg" || (b && b.hasAttribute("data-x"))) return $("#dlg").close();
    if (b.classList.contains("tab")) return setCity(b.dataset.k);
    if (b.hasAttribute("data-ead-city")) {
        selectedEadCity = b.dataset.eadCity;
        renderEad();
        return;
    }
    if (b.hasAttribute("data-clr")) return clear();
    if (b.classList.contains("det")) return modal(P.find(i => i.id === b.dataset.id));
    if (b.hasAttribute("data-cp")) {
        const u = location.href.split("#")[0] + "#" + S.city;
        (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject())
            .then(() => b.textContent = "Link copiado!", () => b.textContent = "Copie a URL do navegador");
    }
});

$("#stats").innerHTML = [
    [P.length + E.length, "Instituições"],
    [new Set(P.map(i => i.cidade)).size, "Cidades"],
    [P.filter(i => i.mensalidade === "Gratuita").length, "Gratuitas"]
].map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("");

const dt = D.meta.atualizado_em.split("-").reverse().join("/");
$("#upd").textContent = "Dados atualizados em " + dt + ". Reunidos de fontes oficiais e portais de vestibular; confirme sempre no edital da instituição.";
// $("#avisos").innerHTML = D.meta.avisos.map(a => `<li>${esc(a)}</li>`).join("");

fromHash();
render();
renderEad();