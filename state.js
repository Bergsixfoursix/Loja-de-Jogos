(function() {
  const jogos = [
    {
      id: 1,
      nome: "GTA VI",
      preco: 449.90,
      imagem: "https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/5a5fc7f4881024760a00008b/sharing_images/h9xq1d6betwiprblwmvt.jpg",
      descricao: "Em Leonida, Lucia e Jason tentam construir uma vida juntos enquanto se envolvem em uma trama criminal. Explore cidades, estradas e paisagens variadas, participe de missões e descubra como suas escolhas e alianças podem mudar o rumo dessa jornada em mundo aberto."
    },
    {
      id: 2,
      nome: "The Legend of Zelda: Ocarina of Time",
      preco: 329.90,
      imagem: "https://assets.nintendo.com/image/upload/v1788887970/ncom/en_US/merchandising/feature-banner/2026/Zelda%2040th%20Anniversary/Ocarina_of_Time.jpg",
      descricao: "Acompanhe Link em uma jornada por Hyrule para impedir que Ganondorf tome o poder. Explore masmorras, resolva enigmas, encontre equipamentos e use a Ocarina do Tempo para atravessar diferentes períodos enquanto revela os segredos do reino."
    },
    {
      id: 3,
      nome: "Call of Duty: Modern Warfare 4",
      preco: 349.90,
      imagem: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw4/play-now/MW4LP_BuyNow_MW4VE.webp",
      descricao: "Participe de operações militares em uma campanha de ação ambientada em meio a um conflito internacional. Avance por missões com objetivos variados, use diferentes equipamentos e enfrente outros jogadores em modos competitivos, solo ou em equipe."
    },
    {
      id: 4,
      nome: "EA Sports UFC 6",
      preco: 349.90,
      imagem: "https://media.contentapi.ea.com/content/dam/ufc/ufc-6/common/ufc-6-standard-keyart-16x9.jpg.adapt.crop191x100.1200w.jpg",
      descricao: "Entre no octógono e dispute combates de MMA usando golpes, quedas e técnicas de luta agarrada. Administre distância, resistência e defesa para encontrar oportunidades, enquanto desenvolve um atleta e encara desafios inspirados no universo do UFC."
    },
    {
      id: 5,
      nome: "EA SPORTS FC 27",
      preco: 349.90,
      imagem: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000110117/9c0bf199f3618ac6c79c6cdff06d3662a7d89d46621e5ef05c100891e95a4a97",
      descricao: "Monte equipes, ajuste formações e entre em partidas de futebol com clubes e seleções. Experimente diferentes estilos de jogo, desenvolva seu elenco e dispute campeonatos ou partidas online, buscando equilibrar ataque, posse de bola e organização defensiva."
    },
    {
      id: 6,
      nome: "Phantom Blade Zero",
      preco: 199.90,
      imagem: "https://assets.nuuvem.com/image/upload/v1/products/6ad8c6ae4fd6b1ac1fdccf39/sharing_images/iewxsnlazfo4tu8fiyyi.jpg",
      descricao: "Em um universo de fantasia marcial, acompanhe uma jornada de vingança marcada por conspirações e combates em tempo real. Combine ataques, esquivas e habilidades, enfrente adversários desafiadores e explore cenários que misturam estética tradicional e elementos fantásticos."
    },
    {
      id: 7,
      nome: "Red Dead Redemption 2",
      preco: 249.90,
      imagem: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
      descricao: "Acompanhe Arthur Morgan e a gangue Van der Linde durante as mudanças do fim do Velho Oeste. Explore cidades, florestas e planícies, aceite missões, cace e cuide dos recursos do grupo enquanto decisões e relações pessoais moldam a jornada."
    },
    {
      id: 8,
      nome: "Elden Ring",
      preco: 280.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
      descricao: "Como um Maculado, atravesse as Terras Intermédias em busca do Anel Prístino. Descubra regiões abertas, ruínas e masmorras, enfrente chefes exigentes e crie um estilo próprio com armas, atributos e habilidades em uma aventura de fantasia sombria."
    },
    {
      id: 9,
      nome: "Hogwarts Legacy",
      preco: 229.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
      descricao: "Crie um estudante que chega a Hogwarts no século XIX e descobre possuir uma ligação especial com uma antiga magia. Frequente aulas, aprenda feitiços, explore o castelo e seus arredores e investigue uma ameaça que pode afetar o mundo bruxo."
    },
    {
      id: 10,
      nome: "Cyberpunk 2077",
      preco: 199.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
      descricao: "Em Night City, interprete V, uma pessoa mercenária em busca de poder e sobrevivência. Explore uma metrópole futurista, aceite trabalhos, personalize habilidades e implantes cibernéticos e tome decisões que influenciam relações e desfechos da história."
    },
    {
      id: 11,
      nome: "God of War Ragnarök",
      preco: 249.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg",
      descricao: "Kratos e Atreus percorrem os Nove Reinos em meio à aproximação do Ragnarök e às consequências de suas escolhas. Enfrente deuses e criaturas da mitologia nórdica, alterne armas e habilidades e acompanhe a relação entre pai e filho durante a jornada."
    },
    {
      id: 12,
      nome: "Marvel's Spider-Man Remastered",
      preco: 199.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
      descricao: "Vista-se como Peter Parker e atravesse Manhattan usando teias para chegar rapidamente aos diferentes bairros. Investigue crimes, enfrente ameaças conhecidas, combine golpes e dispositivos durante os combates e acompanhe uma história sobre as responsabilidades de ser o Homem-Aranha."
    },
    {
      id: 13,
      nome: "Ghost of Tsushima Director's Cut",
      preco: 249.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg",
      descricao: "Durante a invasão mongol de Tsushima, Jin Sakai precisa proteger sua terra e reconsiderar o código samurai que sempre seguiu. Percorra campos, vilarejos e santuários, enfrente inimigos em duelos ou use furtividade e descubra histórias da ilha."
    },
    {
      id: 14,
      nome: "Resident Evil 4",
      preco: 159.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
      descricao: "Leon S. Kennedy viaja a uma região rural da Espanha para resgatar a filha do presidente, mas encontra uma comunidade tomada por uma ameaça desconhecida. Explore vilarejos e instalações, conserve munição, resolva enigmas e enfrente situações de horror e ação."
    },
    {
      id: 15,
      nome: "Baldur's Gate 3",
      preco: 199.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
      descricao: "Reúna um grupo de aventureiros marcados por um parasita e explore os Reinos Esquecidos em busca de uma forma de sobreviver. Decisões em diálogos e missões alteram alianças e acontecimentos, enquanto o combate tático por turnos recompensa planejamento e cooperação entre personagens."
    },
    {
      id: 16,
      nome: "Forza Horizon 5",
      preco: 249.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg",
      descricao: "Participe de um festival automobilístico em um mundo aberto inspirado nas paisagens do México. Explore estradas, desertos e cidades, escolha entre diferentes tipos de provas e personalize carros para encarar corridas, desafios e eventos em vários estilos."
    },
    {
      id: 17,
      nome: "The Witcher 3: Wild Hunt",
      preco: 99.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
      descricao: "Como Geralt de Rívia, rastreie monstros e procure por Ciri em um continente marcado por guerras e intrigas. Aceite contratos, explore cidades e regiões selvagens e tome decisões que afetam personagens e histórias em um RPG de mundo aberto."
    },
    {
      id: 18,
      nome: "Terraria",
      preco: 32.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
      descricao: "Comece com ferramentas simples e transforme um mundo 2D gerado em uma aventura feita do seu jeito. Cave em busca de recursos, construa abrigos, crie equipamentos e enfrente criaturas e chefes enquanto descobre novas áreas e possibilidades de criação."
    },
    {
      id: 19,
      nome: "Stardew Valley",
      preco: 24.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
      descricao: "Deixe a cidade para cuidar de uma fazenda herdada e construir uma nova rotina em Pelican Town. Plante conforme as estações, crie animais, pesque, explore cavernas e conheça os moradores enquanto recupera espaços importantes para a comunidade."
    },
    {
      id: 20,
      nome: "Hollow Knight",
      preco: 46.99,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
      descricao: "Desça às ruínas de Hallownest, um reino subterrâneo repleto de passagens escondidas e criaturas misteriosas. Mapeie áreas interligadas, aprenda novas habilidades e enfrente chefes em combates precisos enquanto desvenda, aos poucos, o passado daquele lugar."
    },
    {
      id: 21,
      nome: "Palworld",
      preco: 88.99,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg",
      descricao: "Explore um arquipélago onde criaturas chamadas Pals podem ajudar em viagens, tarefas e combates. Reúna recursos, construa uma base, fabrique equipamentos e enfrente os perigos das ilhas enquanto decide como organizar sua equipe e seu espaço."
    },
    {
      id: 22,
      nome: "Sea of Thieves",
      preco: 89.99,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg",
      descricao: "Junte-se a uma tripulação pirata para navegar por um mundo compartilhado de ilhas, naufrágios e mistérios. Divida tarefas a bordo, procure tesouros, enfrente tempestades e outras embarcações e transforme cada viagem em uma história criada em grupo."
    },
    {
      id: 23,
      nome: "Assassin's Creed Valhalla",
      preco: 139.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg",
      descricao: "Acompanhe Eivor em uma jornada da Noruega à Inglaterra durante a expansão viking. Explore territórios, invada fortalezas, fortaleça seu assentamento e alterne entre combate direto e furtividade enquanto decisões pessoais influenciam a trajetória do clã."
    },
    {
      id: 24,
      nome: "Mortal Kombat 1",
      preco: 189.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/header.jpg",
      descricao: "Entre em uma nova linha do tempo de Mortal Kombat e conheça versões renovadas de seus lutadores. Domine golpes, combinações e defesas em confrontos individuais, explore o modo história e escolha personagens de apoio para complementar sua estratégia."
    },
    {
      id: 25,
      nome: "TEKKEN 8",
      preco: 199.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg",
      descricao: "Escolha entre lutadores com estilos distintos e participe do confronto entre as famílias Mishima e Kazama. Aprenda movimentos, defesas e combinações em arenas tridimensionais e teste suas habilidades em partidas locais ou contra outros jogadores."
    },
    {
      id: 26,
      nome: "Borderlands 3",
      preco: 79.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/header.jpg",
      descricao: "Escolha um Caça-Arcas e viaje por diferentes planetas em busca de cofres lendários. Complete missões, enfrente facções rivais e reúna armas com características variadas em um jogo de tiro e RPG que pode ser aproveitado em cooperação."
    },
    {
      id: 27,
      nome: "DOOM Eternal",
      preco: 79.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
      descricao: "Assuma o papel do Slayer em uma campanha de tiro em primeira pessoa contra forças demoníacas. Combine armas, movimentação e recursos para responder a diferentes tipos de inimigos e avance por fases cheias de confrontos e segredos."
    },
    {
      id: 28,
      nome: "Hades II",
      preco: 89.99,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/header.jpg",
      descricao: "Acompanhe Melinoë em incursões pelo submundo e enfrente uma ameaça que se espalha pelo mundo dos deuses. Cada tentativa apresenta combinações diferentes de armas, bênçãos e melhorias, permitindo experimentar estratégias enquanto a história avança."
    },
    {
      id: 29,
      nome: "Monster Hunter Wilds",
      preco: 299.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg",
      descricao: "Atue como caçador em regiões onde clima, ecossistemas e criaturas mudam a forma de explorar. Rastreie monstros, escolha entre diferentes armas e prepare equipamentos antes das caçadas; os materiais obtidos permitem criar melhorias para desafios maiores."
    },
    {
      id: 30,
      nome: "It Takes Two",
      preco: 79.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
      descricao: "Cody e May são transformados em bonecos e precisam trabalhar juntos para voltar ao normal. Cada fase apresenta habilidades diferentes para cada pessoa, combinando plataformas, enigmas e desafios de coordenação em uma aventura feita para duas pessoas."
    },
    {
      id: 31,
      nome: "The Last of Us Part I",
      preco: 199.90,
      precoOriginal: 229.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
      descricao: "Joel recebe a missão de acompanhar Ellie por uma América devastada por uma infecção. Explore ambientes abandonados, procure recursos, escolha entre furtividade e confronto e acompanhe uma história centrada na confiança e na relação construída entre os dois."
    },
    {
      id: 32,
      nome: "God of War",
      preco: 149.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
      descricao: "Após a morte de Faye, Kratos e Atreus partem para cumprir seu último desejo em uma terra inspirada na mitologia nórdica. Explore regiões variadas, resolva obstáculos e combine armas e habilidades em combates enquanto pai e filho tentam compreender um ao outro."
    },
    {
      id: 33,
      nome: "Uncharted: Legacy of Thieves Collection",
      preco: 149.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/header.jpg",
      descricao: "A coleção reúne as aventuras de Nathan Drake em Uncharted 4 e de Chloe Frazer em The Lost Legacy. Explore ruínas e paisagens, resolva enigmas ambientais e alterne entre exploração, escalada e ação em duas histórias cinematográficas de caça ao tesouro."
    },
    {
      id: 34,
      nome: "FINAL FANTASY VII REMAKE INTERGRADE",
      preco: 169.92,
      precoOriginal: 199.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg",
      descricao: "Acompanhe Cloud Strife e a organização Avalanche em uma versão expandida da jornada por Midgar. Explore setores da cidade, conheça seus moradores e combine comandos e ação em tempo real durante os combates; a edição inclui conteúdo adicional dedicado a Yuffie."
    },
    {
      id: 35,
      nome: "FINAL FANTASY VII REBIRTH",
      preco: 249.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2909400/header.jpg",
      descricao: "Continue a jornada de Cloud, Tifa, Aerith e seus aliados depois de deixarem Midgar. Viaje por regiões abertas, participe de atividades opcionais e combine habilidades de personagens em batalhas enquanto o grupo segue os rastros de Sephiroth."
    },
    {
      id: 36,
      nome: "Street Fighter 6",
      preco: 149.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/header.jpg",
      descricao: "Domine o sistema de combate Drive e escolha entre personagens clássicos e novos lutadores. Além das disputas individuais, explore o modo World Tour para treinar um avatar e o Battle Hub para encontrar outros jogadores e participar de atividades."
    },
    {
      id: 37,
      nome: "TEKKEN 7",
      preco: 99.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/389730/header.jpg",
      descricao: "Acompanhe o capítulo que conclui a longa rivalidade entre as famílias Mishima e Kazama. Escolha um elenco variado, aprenda golpes e combinações em lutas tridimensionais e use recursos como Rage Arts para buscar a virada nos confrontos."
    },
    {
      id: 38,
      nome: "Resident Evil 2",
      preco: 79.90,
      precoOriginal: 89.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/883710/header.jpg",
      descricao: "Leon Kennedy e Claire Redfield chegam a Raccoon City durante um surto que transforma a cidade em um lugar perigoso. Explore cenários conectados, resolva enigmas e administre munição e itens de cura em duas campanhas que mostram perspectivas diferentes dos acontecimentos."
    },
    {
      id: 39,
      nome: "Resident Evil 3",
      preco: 99.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/952060/header.jpg",
      descricao: "Jill Valentine tenta escapar de Raccoon City enquanto a cidade entra em colapso e Nemesis segue seus passos. Atravesse ruas e instalações, tome decisões rápidas durante os confrontos e use recursos limitados para sobreviver à perseguição."
    },
    {
      id: 40,
      nome: "Resident Evil Village",
      preco: 139.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg",
      descricao: "Ethan Winters chega a uma vila isolada em busca de sua filha e encontra uma comunidade cercada por ameaças. Investigue casas e caminhos, resolva enigmas e escolha como usar munição e suprimentos em uma aventura de horror e sobrevivência."
    },
    {
      id: 41,
      nome: "Assassin's Creed Odyssey",
      preco: 99.90,
      precoOriginal: 109.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg",
      descricao: "Na Grécia Antiga, escolha acompanhar Alexios ou Kassandra como mercenário ligado à guerra entre Atenas e Esparta. Navegue pelo mar Egeu, explore cidades e ilhas, enfrente inimigos e tome decisões que afetam relações e acontecimentos da campanha."
    },
    {
      id: 42,
      nome: "Assassin's Creed Origins",
      preco: 89.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582160/header.jpg",
      descricao: "No Egito Antigo, Bayek investiga uma conspiração que ameaça seu povo e dá início à história da Irmandade dos Assassinos. Explore desertos, cidades e tumbas, siga pistas e use combate, furtividade e ferramentas para superar diferentes missões."
    },
    {
      id: 43,
      nome: "Far Cry 5",
      preco: 99.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552520/header.jpg",
      descricao: "No condado de Hope, em Montana, você enfrenta um culto que assumiu o controle da região. Explore áreas abertas, recrute aliados, escolha a ordem das missões e combine armas e abordagens para apoiar a resistência local."
    },
    {
      id: 44,
      nome: "Far Cry 6",
      preco: 139.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/header.jpg",
      descricao: "Em Yara, Dani Rojas se junta à resistência contra o governo de Antón Castillo. Explore uma ilha de paisagens variadas, reúna equipamentos improvisados, recrute companheiros e escolha como atacar postos e instalações em uma campanha que também permite cooperação."
    },
    {
      id: 45,
      nome: "The Elder Scrolls V: Skyrim Special Edition",
      preco: 79.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg",
      descricao: "Crie um personagem e explore a província de Skyrim, onde dragões voltaram a ameaçar o mundo. Siga a missão principal ou escolha seu próprio caminho por cidades, guildas e ruínas, desenvolvendo habilidades conforme o estilo de jogo que preferir."
    },
    {
      id: 46,
      nome: "Diablo IV",
      preco: 179.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg",
      descricao: "Explore Sanctuary em meio ao retorno de Lilith e ao avanço de forças demoníacas. Escolha uma classe, desenvolva habilidades e reúna equipamentos em masmorras e eventos, sozinho ou com outras pessoas, em uma aventura de RPG de ação."
    },
    {
      id: 47,
      nome: "Persona 5 Royal",
      preco: 149.90,
      precoOriginal: 169.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg",
      descricao: "Divida os dias entre a rotina escolar em Tóquio e as missões dos Phantom Thieves em palácios sobrenaturais. Construa vínculos com outros personagens, planeje turnos em combates por fraquezas dos inimigos e descubra conteúdo adicional desta edição."
    },
    {
      id: 48,
      nome: "NieR:Automata",
      preco: 99.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/header.jpg",
      descricao: "Acompanhe as androides 2B e 9S em uma guerra contra máquinas que ocupam a Terra. Alterne entre combates corpo a corpo e ataques à distância, descubra histórias por diferentes perspectivas e avance por caminhos que revelam novos finais."
    },
    {
      id: 49,
      nome: "Sekiro: Shadows Die Twice",
      preco: 139.90,
      precoOriginal: 159.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
      descricao: "Como o shinobi conhecido como Lobo, tente resgatar seu jovem senhor durante uma guerra no Japão do período Sengoku. Domine defesas e contra-ataques com a espada, use ferramentas protéticas e explore rotas alternativas em confrontos que exigem precisão."
    },
    {
      id: 50,
      nome: "DARK SOULS III",
      preco: 119.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg",
      descricao: "Viaje por um reino em ruínas onde a chama está prestes a se apagar. Explore áreas interligadas, descubra atalhos e enfrente chefes em combates que exigem atenção ao tempo dos ataques, enquanto desenvolve atributos e equipamentos para seu personagem."
    },
    {
      id: 51,
      nome: "Lies of P",
      preco: 149.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1627720/header.jpg",
      descricao: "Em Krat, uma cidade tomada por marionetes hostis, controle P em uma reimaginação sombria da história de Pinóquio. Combine armas e ferramentas, aprenda padrões de ataque e faça escolhas que influenciam a jornada em um RPG de ação desafiador."
    },
    {
      id: 52,
      nome: "Tomb Raider",
      preco: 49.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/203160/header.jpg",
      descricao: "Após um naufrágio, a jovem Lara Croft precisa sobreviver em uma ilha desconhecida chamada Yamatai. Explore ambientes hostis, procure recursos, aprenda a usar novas ferramentas e acompanhe sua transformação enquanto tenta encontrar uma saída."
    },
    {
      id: 53,
      nome: "Rise of the Tomb Raider",
      preco: 79.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391220/header.jpg",
      descricao: "Lara Croft parte para a Sibéria atrás de uma cidade lendária e de respostas sobre um artefato antigo. Explore regiões geladas, atravesse tumbas, resolva enigmas e use recursos coletados para fabricar equipamentos e sobreviver à expedição."
    },
    {
      id: 54,
      nome: "Need for Speed Heat",
      preco: 59.90,
      precoOriginal: 69.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg",
      descricao: "Corra pelas ruas de Palm City e construa sua reputação em dois ambientes diferentes: provas autorizadas durante o dia e corridas ilegais à noite. Personalize carros, ganhe dinheiro e enfrente a polícia enquanto decide até onde arriscar."
    },
    {
      id: 55,
      nome: "F1 24",
      preco: 149.90,
      precoOriginal: 169.90,
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2488620/header.jpg",
      descricao: "Assuma o controle de carros e equipes da Fórmula 1 em corridas disputadas em circuitos oficiais. Ajuste a estratégia para cada prova, enfrente desafios de pilotagem e avance por temporadas ou por uma carreira, buscando consistência ao longo do campeonato."
    }
  ];

  const chaveCarrinho = "gamezoneCarrinho";

  function carregarCarrinho() {
    const salvo = localStorage.getItem(chaveCarrinho);

    if (!salvo) {
      return [];
    }

    try {
      const itensSalvos = JSON.parse(salvo);

      if (!Array.isArray(itensSalvos)) {
        throw new Error("O conteúdo salvo não é uma lista.");
      }

      return itensSalvos
        .map(item => jogos.find(jogo => jogo.id === item.id))
        .filter(Boolean);
    } catch (erro) {
      console.error("Não foi possível carregar o carrinho salvo.", erro);
      return [];
    }
  }

  window.Gamezone = {
    jogos: jogos,
    categorias: [
      { nome: "Ação e aventura", jogoIds: [1, 2, 6, 7, 9, 11, 12, 13, 14, 23, 31, 32, 33, 38, 39, 40, 41, 42, 49, 52, 53] },
      { nome: "RPG e fantasia", jogoIds: [8, 10, 15, 17, 20, 28, 29, 34, 35, 45, 46, 47, 48, 50, 51] },
      { nome: "Tiro", jogoIds: [3, 26, 27, 43, 44] },
      { nome: "Esportes e luta", jogoIds: [4, 5, 24, 25, 36, 37] },
      { nome: "Corrida", jogoIds: [16, 54, 55] },
      { nome: "Simulação e cooperativo", jogoIds: [18, 19, 21, 22, 30] }
    ],
    carrinho: carregarCarrinho(),
    salvarCarrinho: function() {
      localStorage.setItem(chaveCarrinho, JSON.stringify(this.carrinho));
    }
  };
})();
