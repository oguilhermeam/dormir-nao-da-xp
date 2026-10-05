// ==========================================================================
// DORMIR NÃO DÁ XP — Compêndio de Talentos do Jogador (PokeAlliance)
// Dados estruturados de categorias, talentos, itens de craft, drops e hunts
// ==========================================================================

var TALENTS_DATA = {
  categories: [
    { id: 'personagem', name: 'Personagem', icon: 'assets/img/talents/cat_personagem.png', total: 18 },
    { id: 'pokemon', name: 'Pokémon', icon: 'assets/img/talents/cat_pokemon.png', total: 0 },
    { id: 'inseto', name: 'Inseto', icon: 'assets/img/types/bug.png', total: 0 },
    { id: 'sombrio', name: 'Sombrio', icon: 'assets/img/types/dark.png', total: 0 },
    { id: 'dragao', name: 'Dragão', icon: 'assets/img/types/dragon.png', total: 0 },
    { id: 'eletrico', name: 'Elétrico', icon: 'assets/img/types/electric.png', total: 0 },
    { id: 'fada', name: 'Fada', icon: 'assets/img/types/fairy.png', total: 0 },
    { id: 'lutador', name: 'Lutador', icon: 'assets/img/types/fighting.png', total: 0 },
    { id: 'fogo', name: 'Fogo', icon: 'assets/img/types/fire.png', total: 0 },
    { id: 'voador', name: 'Voador', icon: 'assets/img/types/flying.png', total: 0 },
    { id: 'fantasma', name: 'Fantasma', icon: 'assets/img/types/ghost.png', total: 0 },
    { id: 'planta', name: 'Planta', icon: 'assets/img/types/grass.png', total: 0 },
    { id: 'terra', name: 'Terra', icon: 'assets/img/types/ground.png', total: 0 },
    { id: 'gelo', name: 'Gelo', icon: 'assets/img/types/ice.png', total: 0 },
    { id: 'normal', name: 'Normal', icon: 'assets/img/types/normal.png', total: 0 },
    { id: 'veneno', name: 'Veneno', icon: 'assets/img/types/poison.png', total: 0 },
    { id: 'psiquico', name: 'Psíquico', icon: 'assets/img/types/psychic.png', total: 0 },
    { id: 'pedra', name: 'Pedra', icon: 'assets/img/types/rock.png', total: 0 },
    { id: 'aco', name: 'Aço', icon: 'assets/img/types/steel.png', total: 0 },
    { id: 'agua', name: 'Água', icon: 'assets/img/types/water.png', total: 0 }
  ],

  talents: [
    {
      id: 'talent-hp-500',
      category: 'personagem',
      icon: 'assets/img/talents/talent_hp.png',
      name_en: 'Health Boost (+500 HP)',
      name_pt: 'Aumento de Vida (+500 HP)',
      desc_en: 'Your character will have an increase of 500 hitpoints in their maximum health.',
      desc_pt: 'Seu personagem terá um aumento de 500 pontos de vida na sua vida máxima.',
      items: [
        {
          id: 'item_blue_wings',
          name: 'Blue Wings',
          qty: 1,
          icon: 'assets/img/talents/items/item_blue_wings.png',
          dropper: {
            name: 'Shiny Clefable',
            sprite: 'assets/img/pokemon/sh_clefable.png',
            chance: '4.0%',
            locations: [
              'Ilha ao norte de Tangelo Island (subindo de Tangelo)'
            ],
            map_image: 'assets/img/talents/maps/map_shiny_clefable.png'
          }
        },
        {
          id: 'item_big_cute_ear',
          name: 'Big Cute Ear',
          qty: 1,
          icon: 'assets/img/talents/items/item_big_cute_ear.png',
          dropper: {
            name: 'Shiny Wigglytuff',
            sprite: 'assets/img/pokemon/sh_wigglytuff.png',
            chance: '1.0%',
            locations: [
              'Ilha ao norte de Tangelo Island (seguindo reto ao norte pelo mar)'
            ],
            map_image: 'assets/img/talents/maps/map_shiny_wigglytuff.png'
          }
        }
      ]
    },
    {
      id: 'talent-hp-300-1',
      category: 'personagem',
      icon: 'assets/img/talents/talent_hp.png',
      name_en: 'Health Boost (+300 HP)',
      name_pt: 'Aumento de Vida (+300 HP)',
      desc_en: 'Your character will have an increase of 300 hitpoints in their maximum health.',
      desc_pt: 'Seu personagem terá um aumento de 300 pontos de vida na sua vida máxima.',
      items: [
        {
          id: 'item_pink_wings',
          name: 'Pink Wings',
          qty: 250,
          icon: 'assets/img/talents/items/item_pink_wings.png',
          dropper: {
            name: 'Clefable',
            sprite: 'assets/img/pokemon/clefable.png',
            chance: '54.0%',
            locations: [
              'Ilha ao norte de Tangelo Island (subindo de Tangelo)'
            ],
            map_image: 'assets/img/talents/maps/map_clefable.png'
          }
        },
        {
          id: 'item_wigglytuff_ear',
          name: 'Wigglytuff Ear',
          qty: 250,
          icon: 'assets/img/talents/items/item_wigglytuff_ear.png',
          dropper: {
            name: 'Wigglytuff',
            sprite: 'assets/img/pokemon/wigglytuff.png',
            chance: '54.0%',
            locations: [
              'Ilha ao norte de Tangelo Island (seguindo reto ao norte pelo mar)'
            ],
            map_image: 'assets/img/talents/maps/map_wigglytuff.png'
          }
        }
      ]
    },
    {
      id: 'talent-hp-300-2',
      category: 'personagem',
      icon: 'assets/img/talents/talent_hp.png',
      name_en: 'Health Boost (+300 HP)',
      name_pt: 'Aumento de Vida (+300 HP)',
      desc_en: 'Your character will have an increase of 300 hitpoints in their maximum health.',
      desc_pt: 'Seu personagem terá um aumento de 300 pontos de vida na sua vida máxima.',
      items: [
        {
          id: 'item_snorlax_paw',
          name: 'Snorlax Paw',
          qty: 400,
          icon: 'assets/img/talents/items/item_snorlax_paw.png',
          dropper: {
            name: 'Snorlax',
            sprite: 'assets/img/pokemon/snorlax.png',
            chance: '45.0%',
            locations: [
              'Fuchsia (caverna a oeste da cidade, andar inferior na área sudeste)'
            ],
            map_image: 'assets/img/talents/maps/map_snorlax.png'
          }
        },
        {
          id: 'item_bear_claw',
          name: 'Bear Claw',
          qty: 400,
          icon: 'assets/img/talents/items/item_bear_claw.png',
          dropper: {
            name: 'Ursaring',
            sprite: 'assets/img/pokemon/ursaring.png',
            chance: '45.0%',
            locations: [
              'Viridian (caverna a oeste, 6 andares abaixo da superfície / Viridian subsolo)'
            ],
            map_image: 'assets/img/talents/maps/map_ursaring.png'
          }
        }
      ]
    },
    {
      id: 'talent-hp-300-3',
      category: 'personagem',
      icon: 'assets/img/talents/talent_hp.png',
      name_en: 'Health Boost (+300 HP)',
      name_pt: 'Aumento de Vida (+300 HP)',
      desc_en: 'Your character will have an increase of 300 hitpoints in their maximum health.',
      desc_pt: 'Seu personagem terá um aumento de 300 pontos de vida na sua vida máxima.',
      items: [
        {
          id: 'item_magikarp_fin',
          name: 'Magikarp Fin',
          qty: 10,
          icon: 'assets/img/talents/items/item_magikarp_fin.png',
          dropper: {
            name: 'Magikarp',
            sprite: 'assets/img/pokemon/magikarp.png',
            chance: '70%',
            locations: [
              'Entre Saffron e Celadon (pequena ilha no lago entre as duas cidades)'
            ],
            map_image: 'assets/img/talents/maps/map_magikarp.png'
          }
        },
        {
          id: 'item_mouse_tail',
          name: 'Mouse Tail',
          qty: 30,
          icon: 'assets/img/talents/items/item_mouse_tail.png',
          dropper: {
            name: 'Rattata',
            sprite: 'assets/img/pokemon/rattata.png',
            chance: '70%',
            locations: [
              'Saffron (bueiro na rua em frente ao Centro Pokémon)'
            ],
            map_image: 'assets/img/talents/maps/map_rattata.png'
          }
        }
      ]
    },
{
      id: 'talent-cd-1',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration I',
      name_pt: 'Aceleração de Cooldown na Bag I',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_earth_badge',
          name: 'Earth Badge',
          qty: 1,
          icon: 'assets/img/talents/items/item_earth_badge.png',
          dropper: {
            name: 'Ginásio de Viridian (Giovanni)',
            sprite: 'assets/img/talents/items/item_earth_badge.png',
            chance: '100%',
            locations: [
              'Viridian (recompensa por derrotar o líder Giovanni no Ginásio de Viridian)'
            ]
          }
        },
        {
          id: 'item_snorlax_paw',
          name: 'Snorlax Paw',
          qty: 1500,
          icon: 'assets/img/talents/items/item_snorlax_paw.png',
          dropper: {
            name: 'Snorlax',
            sprite: 'assets/img/pokemon/snorlax.png',
            chance: '45.0%',
            locations: [
              'Fuchsia (caverna a oeste da cidade, andar inferior na área sudeste)'
            ],
            map_image: 'assets/img/talents/maps/map_snorlax.png'
          }
        },
        {
          id: 'item_bear_claw',
          name: 'Bear Claw',
          qty: 1500,
          icon: 'assets/img/talents/items/item_bear_claw.png',
          dropper: {
            name: 'Ursaring',
            sprite: 'assets/img/pokemon/ursaring.png',
            chance: '45.0%',
            locations: [
              'Viridian (caverna a oeste, 6 andares abaixo da superfície / Viridian subsolo)'
            ],
            map_image: 'assets/img/talents/maps/map_ursaring.png'
          }
        },
        {
          id: 'item_cow_tail',
          name: 'Cow Tail',
          qty: 1100,
          icon: 'assets/img/talents/items/item_cow_tail.png',
          dropper: {
            name: 'Miltank',
            sprite: 'assets/img/pokemon/miltank.png',
            chance: '45.0%',
            locations: [
              'Shamouti Island (ilha ao noroeste de Shamouti, no topo da montanha/Wildscape)'
            ],
            map_image: 'assets/img/talents/maps/map_miltank.png'
          }
        },
        {
          id: 'item_wigglytuff_ear',
          name: 'Wigglytuff Ear',
          qty: 450,
          icon: 'assets/img/talents/items/item_wigglytuff_ear.png',
          dropper: {
            name: 'Wigglytuff',
            sprite: 'assets/img/pokemon/wigglytuff.png',
            chance: '54.0%',
            locations: [
              'Ilha ao norte de Tangelo Island (seguindo reto ao norte pelo mar)'
            ],
            map_image: 'assets/img/talents/maps/map_wigglytuff.png'
          }
        },
        {
          id: 'item_pink_wings',
          name: 'Pink Wings',
          qty: 450,
          icon: 'assets/img/talents/items/item_pink_wings.png',
          dropper: {
            name: 'Clefable',
            sprite: 'assets/img/pokemon/clefable.png',
            chance: '54.0%',
            locations: [
              'Ilha ao norte de Tangelo Island (subindo de Tangelo)'
            ],
            map_image: 'assets/img/talents/maps/map_clefable.png'
          }
        },
        {
          id: 'item_heart_stone',
          name: 'Heart Stone',
          qty: 1000,
          icon: 'assets/img/talents/items/item_heart_stone.png',
          dropper: {
            name: 'Vários Pokémon (Tipo Normal)',
            sprite: 'assets/img/types/normal.png',
            chance: 'Muito Raro',
            locations: [
              'Dropa de Pokémon tipo Normal: Aipom, Audino, Azumarill, Chansey, Dodrio, Miltank, Noctowl, Pidgeot, Eevee, Smeargles, Snorlax, Tauros, etc.',
              'Hunts em Kanto, Johto e Ilhas Laranja'
            ]
          }
        }
      ]
    },
    {
      id: 'talent-cd-2',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration II',
      name_pt: 'Aceleração de Cooldown na Bag II',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_volcano_badge',
          name: 'Volcano Badge',
          qty: 1,
          icon: 'assets/img/talents/items/item_volcano_badge.png',
          dropper: {
            name: 'Ginásio de Cinnabar (Blaine)',
            sprite: 'assets/img/talents/items/item_volcano_badge.png',
            chance: '100%',
            locations: [
              'Cinnabar Island (recompensa por derrotar o líder Blaine no Ginásio de Cinnabar)'
            ]
          }
        },
        {
          id: 'item_fire_wing',
          name: 'Fire Wing',
          qty: 1500,
          icon: 'assets/img/talents/items/item_fire_wing.png',
          dropper: {
            name: 'Charizard',
            sprite: 'assets/img/pokemon/charizard.png',
            chance: '45.0%',
            locations: [
              'Cinnabar (ilha vulcânica ao sudoeste de Cinnabar Island)'
            ],
            map_image: 'assets/img/talents/maps/map_charizard.png'
          }
        },
        {
          id: 'item_magma_foot',
          name: 'Magma Foot',
          qty: 1500,
          icon: 'assets/img/talents/items/item_magma_foot.png',
          dropper: {
            name: 'Magmar',
            sprite: 'assets/img/pokemon/magmar.png',
            chance: '45.0%',
            locations: [
              'Navel Island (ilha ao sudoeste de Navel Island)'
            ],
            map_image: 'assets/img/talents/maps/map_magmar.png'
          }
        },
        {
          id: 'item_giant_piece_of_fur',
          name: 'Giant Piece of Fur',
          qty: 1100,
          icon: 'assets/img/talents/items/item_giant_piece_of_fur.png',
          dropper: {
            name: 'Arcanine',
            sprite: 'assets/img/pokemon/arcanine.png',
            chance: '45.0%',
            locations: [
              'Cinnabar (vulcão no subsolo, 5 andares abaixo da superfície)'
            ],
            map_image: 'assets/img/talents/maps/map_arcanine.png'
          }
        },
        {
          id: 'item_magma_shell',
          name: 'Magma Shell',
          qty: 900,
          icon: 'assets/img/talents/items/item_magma_shell.png',
          dropper: {
            name: 'Magcargo',
            sprite: 'assets/img/pokemon/magcargo.png',
            chance: '45.0%',
            locations: [
              'Ecruteak City (bueiro no noroeste da cidade - empurrar caixa para descer aos andares de magma)'
            ],
            map_image: 'assets/img/talents/maps/map_magcargo.png'
          }
        },
        {
          id: 'item_fire_stone',
          name: 'Fire Stone',
          qty: 1000,
          icon: 'assets/img/talents/items/item_fire_stone.png',
          dropper: {
            name: 'Vários Pokémon (Tipo Fogo)',
            sprite: 'assets/img/types/fire.png',
            chance: 'Muito Raro',
            locations: [
              'Dropa de Pokémon tipo Fogo: Arcanine, Blaziken, Charizard, Flareon, Infernape, Magcargo, Ninetales, Magmar, Typhlosion, Rapidash, etc.',
              'Hunts vulcânicas em Cinnabar, Navel Island, Ecruteak e Ilhas Laranja'
            ]
          }
        }
      ]
    },
    {
      id: 'talent-cd-3',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration III',
      name_pt: 'Aceleração de Cooldown na Bag III',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_boulder_badge',
          name: 'Boulder Badge',
          qty: 1,
          icon: 'assets/img/talents/items/item_boulder_badge.png',
          dropper: {
            name: 'Ginásio de Pewter (Brock)',
            sprite: 'assets/img/talents/items/item_boulder_badge.png',
            chance: '100%',
            locations: [
              'Pewter City (recompensa por derrotar o líder Brock no Ginásio de Pewter)'
            ]
          }
        },
        {
          id: 'item_stone_rocks',
          name: 'Stone Rocks',
          qty: 1500,
          icon: 'assets/img/talents/items/item_stone_rocks.png',
          dropper: {
            name: 'Golem',
            sprite: 'assets/img/pokemon/golem.png',
            chance: '45.0%',
            locations: [
              'Hunts de caverna e pedreiras com spawn de Golem e Graveler (Mt. Moon, Rock Tunnel)'
            ],
            map_image: 'assets/img/talents/maps/map_golem.png'
          }
        },
        {
          id: 'item_horn_drill',
          name: 'Horn Drill',
          qty: 1500,
          icon: 'assets/img/talents/items/item_horn_drill.png',
          dropper: {
            name: 'Rhydon',
            sprite: 'assets/img/pokemon/rhydon.png',
            chance: '45.0%',
            locations: [
              'Hunts montanhosas e Safari Zone com spawn de Rhydon e Rhyhorn'
            ],
            map_image: 'assets/img/talents/maps/map_rhydon.png'
          }
        },
        {
          id: 'item_bone',
          name: 'Bone',
          qty: 1100,
          icon: 'assets/img/talents/items/item_bone.png',
          dropper: {
            name: 'Marowak',
            sprite: 'assets/img/pokemon/marowak.png',
            chance: '45.0%',
            locations: [
              'Pokémon Tower em Lavender Town e hunts com spawn de Marowak e Cubone'
            ],
            map_image: 'assets/img/talents/maps/map_marowak.png'
          }
        },
        {
          id: 'item_steelix_tail',
          name: 'Steelix Tail',
          qty: 900,
          icon: 'assets/img/talents/items/item_steelix_tail.png',
          dropper: {
            name: 'Steelix',
            sprite: 'assets/img/pokemon/steelix.png',
            chance: '45.0%',
            locations: [
              'Cavernas profundas no subsolo e hunts montanhosas de Steelix'
            ],
            map_image: 'assets/img/talents/maps/map_steelix.png'
          }
        },
        {
          id: 'item_rock_stone',
          name: 'Rock Stone',
          qty: 500,
          icon: 'assets/img/talents/items/item_rock_stone.png',
          dropper: {
            name: 'Vários Pokémon (Tipo Pedra)',
            sprite: 'assets/img/types/rock.png',
            chance: 'Muito Raro',
            locations: [
              'Dropa de Pokémon tipo Pedra: Aron, Armaldo, Cranidos, Golem, Kabutops, Magcargo, Tyranitar, Solrock, Rhydon, Pupitar, Graveler, Onix, etc.',
              'Hunts de caverna e montanhas em Kanto e Johto'
            ]
          }
        },
        {
          id: 'item_earth_stone',
          name: 'Earth Stone',
          qty: 500,
          icon: 'assets/img/talents/items/item_earth_stone.png',
          dropper: {
            name: 'Vários Pokémon (Tipo Terra)',
            sprite: 'assets/img/types/ground.png',
            chance: 'Muito Raro',
            locations: [
              'Dropa de Pokémon tipo Terra: Dugtrio, Garchomp, Donphan, Golem, Graveler, Marowak, Nidoqueen, Nidoking, Rhydon, Sandslash, Torterra, Steelix, etc.',
              'Hunts terrestres e desérticas em Kanto, Johto e Hoenn'
            ]
          }
        }
      ]
    },
    {
      id: 'talent-cd-4',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration IV',
      name_pt: 'Aceleração de Cooldown na Bag IV',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_cascade_badge',
          name: 'Cascade Badge',
          qty: 1,
          icon: 'assets/img/talents/items/item_cascade_badge.png',
          dropper: {
            name: 'Ginásio de Cerulean (Misty)',
            sprite: 'assets/img/talents/items/item_cascade_badge.png',
            chance: '100%',
            locations: [
              'Cerulean City (recompensa por derrotar a líder Misty no Ginásio de Cerulean)'
            ]
          }
        },
        {
          id: 'item_lapras_fin',
          name: 'Lapras Fin',
          qty: 1500,
          icon: 'assets/img/talents/items/item_lapras_fin.png',
          dropper: {
            name: 'Lapras',
            sprite: 'assets/img/pokemon/lapras.png',
            chance: '45.0%',
            locations: [
              'Hunts aquáticas no mar aberto e ilhas com spawn de Lapras'
            ],
            map_image: 'assets/img/talents/maps/map_lapras.png'
          }
        },
        {
          id: 'item_gyarados_tail',
          name: 'Gyarados Tail',
          qty: 1500,
          icon: 'assets/img/talents/items/item_gyarados_tail.png',
          dropper: {
            name: 'Gyarados',
            sprite: 'assets/img/pokemon/gyarados.png',
            chance: '45.0%',
            locations: [
              'Lagos profundos e alto mar com spawn de Gyarados'
            ],
            map_image: 'assets/img/talents/maps/map_gyarados.png'
          }
        },
        {
          id: 'item_aquatic_tail',
          name: 'Aquatic Tail',
          qty: 1100,
          icon: 'assets/img/talents/items/item_aquatic_tail.png',
          dropper: {
            name: 'Vaporeon',
            sprite: 'assets/img/pokemon/vaporeon.png',
            chance: '45.0%',
            locations: [
              'Hunts aquáticas, ilhas e lagos com spawn de Vaporeon e Eevee'
            ],
            map_image: 'assets/img/talents/maps/map_vaporeon.png'
          }
        },
        {
          id: 'item_water_cannon',
          name: 'Water Cannon',
          qty: 900,
          icon: 'assets/img/talents/items/item_water_cannon.png',
          dropper: {
            name: 'Blastoise',
            sprite: 'assets/img/pokemon/blastoise.png',
            chance: '45.0%',
            locations: [
              'Ilhas aquáticas e hunts com spawn de Blastoise e Wartortle'
            ],
            map_image: 'assets/img/talents/maps/map_blastoise.png'
          }
        },
        {
          id: 'item_water_stone',
          name: 'Water Stone',
          qty: 500,
          icon: 'assets/img/talents/items/item_water_stone.png',
          dropper: {
            name: 'Vários Pokémon (Tipo Água)',
            sprite: 'assets/img/types/water.png',
            chance: 'Muito Raro',
            locations: [
              'Dropa de Pokémon tipo Água: Blastoise, Feraligatr, Gyarados, Lapras, Poliwrath, Golduck, Tentacruel, Vaporeon, etc.',
              'Hunts de água doce e alto mar em Kanto, Johto e Ilhas Laranja'
            ]
          }
        },
        {
          id: 'item_ice_stone',
          name: 'Ice Stone',
          qty: 500,
          icon: 'assets/img/talents/items/item_ice_stone.png',
          dropper: {
            name: 'Vários Pokémon (Tipo Gelo)',
            sprite: 'assets/img/types/ice.png',
            chance: 'Muito Raro',
            locations: [
              'Dropa de Pokémon tipo Gelo: Articuno, Cloyster, Dewgong, Glaceon, Jynx, Lapras, Mamoswine, Walrein, Weavile, etc.',
              'Seafoam Islands e cavernas de gelo'
            ]
          }
        }
      ]
    },
    {
      id: 'talent-cd-5',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration V',
      name_pt: 'Aceleração de Cooldown na Bag V',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_thunder_badge',
          name: 'Thunder Badge',
          qty: 1,
          icon: 'assets/img/talents/items/item_thunder_badge.png',
          dropper: {
            name: 'Ginásio de Vermilion (Lt. Surge)',
            sprite: 'assets/img/talents/items/item_thunder_badge.png',
            chance: '100%',
            locations: [
              'Vermilion City (recompensa por derrotar o líder Lt. Surge no Ginásio de Vermilion)'
            ]
          }
        },
        {
          id: 'item_electric_sheep_tail',
          name: 'Electric Sheep Tail',
          qty: 1500,
          icon: 'assets/img/talents/items/item_electric_sheep_tail.png',
          dropper: {
            name: 'Ampharos',
            sprite: 'assets/img/pokemon/ampharos.png',
            chance: '45.0%',
            locations: [
              'Hunts elétricas com spawn de Ampharos, Flaaffy e Mareep'
            ],
            map_image: 'assets/img/talents/maps/map_ampharos.png'
          }
        },
        {
          id: 'item_electric_tail',
          name: 'Electric Tail',
          qty: 1500,
          icon: 'assets/img/talents/items/item_electric_tail.png',
          dropper: {
            name: 'Electabuzz',
            sprite: 'assets/img/pokemon/electabuzz.png',
            chance: '45.0%',
            locations: [
              'Power Plant e hunts elétricas com spawn de Electabuzz'
            ],
            map_image: 'assets/img/talents/maps/map_electabuzz.png'
          }
        },
        {
          id: 'item_electric_ear',
          name: 'Electric Ear',
          qty: 1100,
          icon: 'assets/img/talents/items/item_electric_ear.png',
          dropper: {
            name: 'Raichu',
            sprite: 'assets/img/pokemon/raichu.png',
            chance: '45.0%',
            locations: [
              'Power Plant e hunts com spawn de Raichu e Pikachu'
            ],
            map_image: 'assets/img/talents/maps/map_raichu.png'
          }
        },
        {
          id: 'item_electric_collar',
          name: 'Electric Collar',
          qty: 900,
          icon: 'assets/img/talents/items/item_electric_collar.png',
          dropper: {
            name: 'Jolteon',
            sprite: 'assets/img/pokemon/jolteon.png',
            chance: '45.0%',
            locations: [
              'Hunts elétricas com spawn de Jolteon e Eevee'
            ],
            map_image: 'assets/img/talents/maps/map_jolteon.png'
          }
        },
        {
          id: 'item_thunder_stone',
          name: 'Thunder Stone',
          qty: 1000,
          icon: 'assets/img/talents/items/item_thunder_stone.png',
          dropper: {
            name: 'Vários Pokémon (Tipo Elétrico)',
            sprite: 'assets/img/types/electric.png',
            chance: 'Muito Raro',
            locations: [
              'Dropa de Pokémon tipo Elétrico: Ampharos, Electabuzz, Electrode, Jolteon, Magneton, Magnezone, Raichu, Zapdos, etc.',
              'Power Plant e usinas de energia elétrica'
            ]
          }
        }
      ]
    },
    {
      id: 'talent-cd-6',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration VI',
      name_pt: 'Aceleração de Cooldown na Bag VI',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_rainbow_badge',
          name: 'Rainbow Badge',
          qty: 1,
          icon: 'assets/img/talents/items/item_rainbow_badge.png',
          dropper: {
            name: 'Ginásio de Celadon (Erika)',
            sprite: 'assets/img/talents/items/item_rainbow_badge.png',
            chance: '100%',
            locations: [
              'Celadon City (recompensa por derrotar a líder Erika no Ginásio de Celadon)'
            ]
          }
        },
        {
          id: 'item_red_petal',
          name: 'Red Petal',
          qty: 1500,
          icon: 'assets/img/talents/items/item_red_petal.png',
          dropper: {
            name: 'Venusaur',
            sprite: 'assets/img/pokemon/venusaur.png',
            chance: '45.0%',
            locations: [
              'Mandarin South Island (Wildscape Lvl 150+)'
            ],
            map_image: 'assets/img/talents/maps/map_venusaur.png'
          }
        },
        {
          id: 'item_big_petal',
          name: 'Big Petal',
          qty: 1500,
          icon: 'assets/img/talents/items/item_big_petal.png',
          dropper: {
            name: 'Meganium',
            sprite: 'assets/img/pokemon/meganium.png',
            chance: '45.0%',
            locations: [
              'Florestas e campos abertos com spawn de Meganium e Bayleef'
            ],
            map_image: 'assets/img/talents/maps/map_meganium.png'
          }
        },
        {
          id: 'item_coconut_leaves',
          name: 'Coconut Leaves',
          qty: 1100,
          icon: 'assets/img/talents/items/item_coconut_leaves.png',
          dropper: {
            name: 'Exeggutor',
            sprite: 'assets/img/pokemon/exeggutor.png',
            chance: '45.0%',
            locations: [
              'Ilhas tropicais, praias e selvas com spawn de Exeggutor'
            ],
            map_image: 'assets/img/talents/maps/map_exeggutor.png'
          }
        },
        {
          id: 'item_vine_hair',
          name: 'Vine Hair',
          qty: 900,
          icon: 'assets/img/talents/items/item_vine_hair.png',
          dropper: {
            name: 'Tangela',
            sprite: 'assets/img/pokemon/tangela.png',
            chance: '45.0%',
            locations: [
              'Hunts ao sul de Pallet Town e pântanos com spawn de Tangela'
            ],
            map_image: 'assets/img/talents/maps/map_tangela.png'
          }
        },
        {
          id: 'item_leaf_stone',
          name: 'Leaf Stone',
          qty: 500,
          icon: 'assets/img/talents/items/item_leaf_stone.png',
          dropper: {
            name: 'Vários Pokémon (Tipo Planta)',
            sprite: 'assets/img/types/grass.png',
            chance: 'Muito Raro',
            locations: [
              'Dropa de Pokémon tipo Planta: Bellsprout, Exeggutor, Jumpluff, Meganium, Sceptile, Shiftry, Tangela, Torterra, Venusaur, Vileplume, Victreebel, etc.',
              'Florestas e selvas em Kanto, Johto e Hoenn'
            ]
          }
        },
        {
          id: 'item_cocoon_stone',
          name: 'Cocoon Stone',
          qty: 500,
          icon: 'assets/img/talents/items/item_cocoon_stone.png',
          dropper: {
            name: 'Vários Pokémon (Tipo Inseto)',
            sprite: 'assets/img/types/bug.png',
            chance: 'Muito Raro',
            locations: [
              'Dropa de Pokémon tipo Inseto: Ariados, Beedrill, Butterfree, Heracross, Pinsir, Scizor, Scyther, Shuckle, Yanmega, etc.',
              'Florestas e bosques em Kanto e Johto'
            ]
          }
        }
      ]
    },
    {
      id: 'talent-cd-7',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration VII',
      name_pt: 'Aceleração de Cooldown na Bag VII',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_soul_badge',
          name: 'Soul Badge',
          qty: 1,
          icon: 'assets/img/talents/items/item_soul_badge.png',
          dropper: {
            name: 'Ginásio de Fuchsia (Koga)',
            sprite: 'assets/img/talents/items/item_soul_badge.png',
            chance: '100%',
            locations: [
              'Fuchsia City (recompensa por derrotar o líder Koga no Ginásio de Fuchsia)'
            ]
          }
        },
        {
          id: 'item_queen_ear',
          name: 'Queen Ear',
          qty: 1500,
          icon: 'assets/img/talents/items/item_queen_ear.png',
          dropper: {
            name: 'Nidoqueen',
            sprite: 'assets/img/pokemon/nidoqueen.png',
            chance: '45.0%',
            locations: [
              'Hunts venenosas com spawn de Nidoqueen e Nidorina'
            ],
            map_image: 'assets/img/talents/maps/map_nidoqueen.png'
          }
        },
        {
          id: 'item_king_ear',
          name: 'King Ear',
          qty: 1500,
          icon: 'assets/img/talents/items/item_king_ear.png',
          dropper: {
            name: 'Nidoking',
            sprite: 'assets/img/pokemon/nidoking.png',
            chance: '45.0%',
            locations: [
              'Hunts venenosas com spawn de Nidoking e Nidorino'
            ],
            map_image: 'assets/img/talents/maps/map_nidoking.png'
          }
        },
        {
          id: 'item_giant_bat_wing',
          name: 'Giant Bat Wing',
          qty: 1100,
          icon: 'assets/img/talents/items/item_giant_bat_wing.png',
          dropper: {
            name: 'Crobat',
            sprite: 'assets/img/pokemon/crobat.png',
            chance: '45.0%',
            locations: [
              'Cavernas escuras, Mt. Moon, Rock Tunnel com spawn de Crobat e Golbat'
            ],
            map_image: 'assets/img/talents/maps/map_crobat.png'
          }
        },
        {
          id: 'item_stinky_hand',
          name: 'Stinky Hand',
          qty: 900,
          icon: 'assets/img/talents/items/item_stinky_hand.png',
          dropper: {
            name: 'Muk',
            sprite: 'assets/img/pokemon/muk.png',
            chance: '45.0%',
            locations: [
              'Esgotos de Celadon e Saffron e pântanos tóxicos com spawn de Muk e Grimer'
            ],
            map_image: 'assets/img/talents/maps/map_muk.png'
          }
        },
        {
          id: 'item_venom_stone',
          name: 'Venom Stone',
          qty: 1000,
          icon: 'assets/img/talents/items/item_venom_stone.png',
          dropper: {
            name: 'Vários Pokémon (Tipo Veneno)',
            sprite: 'assets/img/types/poison.png',
            chance: 'Muito Raro',
            locations: [
              'Dropa de Pokémon tipo Veneno: Arbok, Crobat, Drapion, Garbodor, Gengar, Muk, Nidoking, Nidoqueen, Roserade, Seviper, Toxicroak, Weezing, etc.',
              'Esgotos e pântanos em Kanto e Johto'
            ]
          }
        }
      ]
    },
    {
      id: 'talent-cd-8',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration VIII',
      name_pt: 'Aceleração de Cooldown na Bag VIII',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_marsh_badge',
          name: 'Marsh Badge',
          qty: 1,
          icon: 'assets/img/talents/items/item_marsh_badge.png',
          dropper: {
            name: 'Ginásio de Saffron (Sabrina)',
            sprite: 'assets/img/talents/items/item_marsh_badge.png',
            chance: '100%',
            locations: [
              'Saffron City (recompensa por derrotar a líder Sabrina no Ginásio de Saffron)'
            ]
          }
        },
        {
          id: 'item_psychic_moustache',
          name: 'Psychic Moustache',
          qty: 1500,
          icon: 'assets/img/talents/items/item_psychic_moustache.png',
          dropper: {
            name: 'Alakazam',
            sprite: 'assets/img/pokemon/alakazam.png',
            chance: '45.0%',
            locations: [
              'Hunts psíquicas com spawn de Alakazam e Kadabra'
            ],
            map_image: 'assets/img/talents/maps/map_alakazam.png'
          }
        },
        {
          id: 'item_two_eyed_black_tail',
          name: 'Two-Eyed Black Tail',
          qty: 1500,
          icon: 'assets/img/talents/items/item_two_eyed_black_tail.png',
          dropper: {
            name: 'Wobbuffet',
            sprite: 'assets/img/pokemon/wobbuffet.png',
            chance: '45.0%',
            locations: [
              'Dark Cave e hunts com spawn de Wobbuffet e Wynaut'
            ],
            map_image: 'assets/img/talents/maps/map_wobbuffet.png'
          }
        },
        {
          id: 'item_xatu_wing',
          name: 'Xatu Wing',
          qty: 1100,
          icon: 'assets/img/talents/items/item_xatu_wing.png',
          dropper: {
            name: 'Xatu',
            sprite: 'assets/img/pokemon/xatu.png',
            chance: '45.0%',
            locations: [
              'Ruínas de Alph e hunts com spawn de Xatu e Natu'
            ],
            map_image: 'assets/img/talents/maps/map_xatu.png'
          }
        },
        {
          id: 'item_giraffe_antenna',
          name: 'Giraffe Antenna',
          qty: 900,
          icon: 'assets/img/talents/items/item_giraffe_antenna.png',
          dropper: {
            name: 'Girafarig',
            sprite: 'assets/img/pokemon/girafarig.png',
            chance: '45.0%',
            locations: [
              'Safari Zone e hunts de planície com spawn de Girafarig'
            ],
            map_image: 'assets/img/talents/maps/map_girafarig.png'
          }
        },
        {
          id: 'item_enigma_stone',
          name: 'Enigma Stone',
          qty: 1000,
          icon: 'assets/img/talents/items/item_enigma_stone.png',
          dropper: {
            name: 'Vários Pokémon (Tipo Psíquico)',
            sprite: 'assets/img/types/psychic.png',
            chance: 'Muito Raro',
            locations: [
              'Dropa de Pokémon tipo Psíquico: Alakazam, Bronzong, Chimecho, Espeon, Exeggutor, Gallade, Gardevoir, Grumpig, Hypno, Jynx, Medicham, Metagross, Mr. Mime, Slowbro, Xatu, etc.',
              'Hunts místicas e ruínas em Kanto e Johto'
            ]
          }
        }
      ]
    },
    {
      id: 'talent-speed-1',
      category: 'personagem',
      icon: 'assets/img/talents/talent_speed.png',
      name_en: 'Movement Speed Boost (+20 Speed)',
      name_pt: 'Aumento de Velocidade (+20 Speed)',
      desc_en: 'Give to player more 20 speed.',
      desc_pt: 'Concede ao jogador mais 20 pontos de velocidade de movimento.',
      items: [
        {
          id: 'item_cape_orange',
          name: 'Flame Cape',
          name_pt: 'Manto de Chamas',
          qty: 80,
          icon: 'assets/img/talents/items/item_cape_orange.png',
          dropper: {
            name: 'Em catalogação',
            sprite: 'assets/img/logo.webp',
            chance: '—',
            rarity: 'Aguardando dados',
            locations: ['Localização sendo mapeada pela guilda'],
            is_placeholder: true
          }
        },
        {
          id: 'item_cape_blue',
          name: 'Aqua Cape',
          name_pt: 'Manto das Águas',
          qty: 1,
          icon: 'assets/img/talents/items/item_cape_blue.png',
          dropper: {
            name: 'Em catalogação',
            sprite: 'assets/img/logo.webp',
            chance: '—',
            rarity: 'Aguardando dados',
            locations: ['Localização sendo mapeada pela guilda'],
            is_placeholder: true
          }
        }
      ]
    },
    {
      id: 'talent-speed-2',
      category: 'personagem',
      icon: 'assets/img/talents/talent_speed.png',
      name_en: 'Movement Speed Boost (+20 Speed)',
      name_pt: 'Aumento de Velocidade (+20 Speed)',
      desc_en: 'Give to player more 20 speed.',
      desc_pt: 'Concede ao jogador mais 20 pontos de velocidade de movimento.',
      items: [
        {
          id: 'item_fire_feather',
          name: 'Fire Feather',
          name_pt: 'Pluma de Chamas',
          qty: 100,
          icon: 'assets/img/talents/items/item_fire_feather.png',
          dropper: {
            name: 'Em catalogação',
            sprite: 'assets/img/logo.webp',
            chance: '—',
            rarity: 'Aguardando dados',
            locations: ['Localização sendo mapeada pela guilda'],
            is_placeholder: true
          }
        },
        {
          id: 'item_comet_spark',
          name: 'Swift Spark',
          name_pt: 'Centelha Veloz',
          qty: 100,
          icon: 'assets/img/talents/items/item_comet_spark.png',
          dropper: {
            name: 'Em catalogação',
            sprite: 'assets/img/logo.webp',
            chance: '—',
            rarity: 'Aguardando dados',
            locations: ['Localização sendo mapeada pela guilda'],
            is_placeholder: true
          }
        }
      ]
    },
    {
      id: 'talent-speed-3',
      category: 'personagem',
      icon: 'assets/img/talents/talent_speed.png',
      name_en: 'Movement Speed Boost (+20 Speed)',
      name_pt: 'Aumento de Velocidade (+20 Speed)',
      desc_en: 'Give to player more 20 speed.',
      desc_pt: 'Concede ao jogador mais 20 pontos de velocidade de movimento.',
      items: [
        {
          id: 'item_claws_yellow',
          name: 'Quick Claws',
          name_pt: 'Garras Rápidas',
          qty: 1,
          icon: 'assets/img/talents/items/item_claws_yellow.png',
          dropper: {
            name: 'Em catalogação',
            sprite: 'assets/img/logo.webp',
            chance: '—',
            rarity: 'Aguardando dados',
            locations: ['Localização sendo mapeada pela guilda'],
            is_placeholder: true
          }
        },
        {
          id: 'item_capsule_red',
          name: 'Energy Capsule',
          name_pt: 'Cápsula de Energia',
          qty: 1,
          icon: 'assets/img/talents/items/item_capsule_red.png',
          dropper: {
            name: 'Em catalogação',
            sprite: 'assets/img/logo.webp',
            chance: '—',
            rarity: 'Aguardando dados',
            locations: ['Localização sendo mapeada pela guilda'],
            is_placeholder: true
          }
        }
      ]
    },
    {
      id: 'talent-speed-4',
      category: 'personagem',
      icon: 'assets/img/talents/talent_speed.png',
      name_en: 'Movement Speed Boost (+20 Speed)',
      name_pt: 'Aumento de Velocidade (+20 Speed)',
      desc_en: 'Give to player more 20 speed.',
      desc_pt: 'Concede ao jogador mais 20 pontos de velocidade de movimento.',
      items: [
        {
          id: 'item_capsule_red_5',
          name: 'Vigor Capsule',
          name_pt: 'Cápsula de Vigor',
          qty: 5,
          icon: 'assets/img/talents/items/item_capsule_red_5.png',
          dropper: {
            name: 'Em catalogação',
            sprite: 'assets/img/logo.webp',
            chance: '—',
            rarity: 'Aguardando dados',
            locations: ['Localização sendo mapeada pela guilda'],
            is_placeholder: true
          }
        },
        {
          id: 'item_claws_yellow_5',
          name: 'Sharp Claws',
          name_pt: 'Garras Afiadas',
          qty: 5,
          icon: 'assets/img/talents/items/item_claws_yellow_5.png',
          dropper: {
            name: 'Em catalogação',
            sprite: 'assets/img/logo.webp',
            chance: '—',
            rarity: 'Aguardando dados',
            locations: ['Localização sendo mapeada pela guilda'],
            is_placeholder: true
          }
        }
      ]
    },
    {
      id: 'talent-crit-chance',
      category: 'personagem',
      icon: 'assets/img/talents/talent_crit.png',
      name_en: 'Team Critical Chance (+1%)',
      name_pt: 'Chance Crítica da Equipe (+1%)',
      desc_en: 'Gives all your Pokemon 1% critical chance.',
      desc_pt: 'Concede a todos os seus Pokémon 1% de chance de acerto crítico.',
      items: [
        {
          id: 'item_shell_gold_crit',
          name: 'Ancient Shell',
          name_pt: 'Concha Ancestral',
          qty: 25,
          icon: 'assets/img/talents/items/item_shell_gold_crit.png',
          dropper: {
            name: 'Em catalogação',
            sprite: 'assets/img/logo.webp',
            chance: '—',
            rarity: 'Aguardando dados',
            locations: ['Localização sendo mapeada pela guilda'],
            is_placeholder: true
          }
        },
        {
          id: 'item_fossil_paw',
          name: 'Claw Fossil',
          name_pt: 'Fóssil de Garra',
          qty: 25,
          icon: 'assets/img/talents/items/item_fossil_paw.png',
          dropper: {
            name: 'Em catalogação',
            sprite: 'assets/img/logo.webp',
            chance: '—',
            rarity: 'Aguardando dados',
            locations: ['Localização sendo mapeada pela guilda'],
            is_placeholder: true
          }
        }
      ]
    },
    {
      id: 'talent-crit-dmg',
      category: 'personagem',
      icon: 'assets/img/talents/talent_crit.png',
      name_en: 'Team Critical Damage (+10%)',
      name_pt: 'Dano Crítico da Equipe (+10%)',
      desc_en: 'Gives all your Pokemon 10% critical damage.',
      desc_pt: 'Concede a todos os seus Pokémon 10% de dano crítico adicional.',
      items: [
        {
          id: 'item_lens_green',
          name: 'Scope Lens',
          name_pt: 'Lente de Precisão',
          qty: 25,
          icon: 'assets/img/talents/items/item_lens_green.png',
          dropper: {
            name: 'Em catalogação',
            sprite: 'assets/img/logo.webp',
            chance: '—',
            rarity: 'Aguardando dados',
            locations: ['Localização sendo mapeada pela guilda'],
            is_placeholder: true
          }
        },
        {
          id: 'item_ribbon_redwhite',
          name: 'Focus Band',
          name_pt: 'Faixa do Foco',
          qty: 25,
          icon: 'assets/img/talents/items/item_ribbon_redwhite.png',
          dropper: {
            name: 'Em catalogação',
            sprite: 'assets/img/logo.webp',
            chance: '—',
            rarity: 'Aguardando dados',
            locations: ['Localização sendo mapeada pela guilda'],
            is_placeholder: true
          }
        }
      ]
    }
]
};

if (typeof window !== 'undefined') {
  window.TALENTS_DATA = TALENTS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TALENTS_DATA;
}
