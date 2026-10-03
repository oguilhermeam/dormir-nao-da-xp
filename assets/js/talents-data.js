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
          name_pt: 'Asas Azuis',
          qty: 1,
          icon: 'assets/img/talents/items/item_blue_wings.png',
          dropper: {
            name: 'Shiny Clefable',
            sprite: 'assets/img/pokemon/sh_clefable.png',
            chance: '4.0%',
            rarity: 'Shiny',
            locations: [
              'Ilha ao norte de Tangelo Island (subindo de Tangelo)',
              'Orange Archipelago'
            ],
            map_image: 'assets/img/talents/maps/map_shiny_clefable.png'
          }
        },
        {
          id: 'item_horn_pink',
          name: 'Pink Horn',
          name_pt: 'Chifre Rosa',
          qty: 1,
          icon: 'assets/img/talents/items/item_horn_pink.png',
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
      id: 'talent-hp-300-1',
      category: 'personagem',
      icon: 'assets/img/talents/talent_hp.png',
      name_en: 'Health Boost (+300 HP)',
      name_pt: 'Aumento de Vida (+300 HP)',
      desc_en: 'Your character will have an increase of 300 hitpoints in their maximum health.',
      desc_pt: 'Seu personagem terá um aumento de 300 pontos de vida na sua vida máxima.',
      items: [
        {
          id: 'item_claws_pink',
          name: 'Pink Claws',
          name_pt: 'Garras Rosas',
          qty: 250,
          icon: 'assets/img/talents/items/item_claws_pink.png',
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
          id: 'item_spike_pink',
          name: 'Pink Spike',
          name_pt: 'Espinho Rosa',
          qty: 250,
          icon: 'assets/img/talents/items/item_spike_pink.png',
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
      id: 'talent-hp-300-2',
      category: 'personagem',
      icon: 'assets/img/talents/talent_hp.png',
      name_en: 'Health Boost (+300 HP)',
      name_pt: 'Aumento de Vida (+300 HP)',
      desc_en: 'Your character will have an increase of 300 hitpoints in their maximum health.',
      desc_pt: 'Seu personagem terá um aumento de 300 pontos de vida na sua vida máxima.',
      items: [
        {
          id: 'item_skull_brown',
          name: 'Brown Skull',
          name_pt: 'Crânio Marrom',
          qty: 400,
          icon: 'assets/img/talents/items/item_skull_brown.png',
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
          id: 'item_claw_gold',
          name: 'Golden Claw',
          name_pt: 'Garra Dourada',
          qty: 400,
          icon: 'assets/img/talents/items/item_claw_gold.png',
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
      id: 'talent-hp-300-3',
      category: 'personagem',
      icon: 'assets/img/talents/talent_hp.png',
      name_en: 'Health Boost (+300 HP)',
      name_pt: 'Aumento de Vida (+300 HP)',
      desc_en: 'Your character will have an increase of 300 hitpoints in their maximum health.',
      desc_pt: 'Seu personagem terá um aumento de 300 pontos de vida na sua vida máxima.',
      items: [
        {
          id: 'item_tail_rainbow',
          name: 'Prismatic Tail',
          name_pt: 'Cauda Prismática',
          qty: 10,
          icon: 'assets/img/talents/items/item_tail_rainbow.png',
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
          id: 'item_scepter_purple',
          name: 'Shadow Scepter',
          name_pt: 'Cetro Sombrio',
          qty: 30,
          icon: 'assets/img/talents/items/item_scepter_purple.png',
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
      id: 'talent-cd-1',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration I',
      name_pt: 'Aceleração de Cooldown na Bag I',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_syringe_green',
          name: 'Green Syringe',
          name_pt: 'Seringa Verde',
          qty: 1,
          icon: 'assets/img/talents/items/item_syringe_green.png',
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
          id: 'item_bone',
          name: 'Bone Fragment',
          name_pt: 'Fragmento de Osso',
          qty: 1500,
          icon: 'assets/img/talents/items/item_bone.png',
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
          id: 'item_shell_gold',
          name: 'Golden Shell',
          name_pt: 'Concha Dourada',
          qty: 1500,
          icon: 'assets/img/talents/items/item_shell_gold.png',
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
          id: 'item_mace_dark',
          name: 'Dark Mace',
          name_pt: 'Maça Sombria',
          qty: 1100,
          icon: 'assets/img/talents/items/item_mace_dark.png',
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
          id: 'item_fang_dark',
          name: 'Dark Fang',
          name_pt: 'Presa Sombria',
          qty: 450,
          icon: 'assets/img/talents/items/item_fang_dark.png',
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
          id: 'item_wing_pink',
          name: 'Pink Wing',
          name_pt: 'Asa Rosa',
          qty: 450,
          icon: 'assets/img/talents/items/item_wing_pink.png',
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
          id: 'item_crystal_pink',
          name: 'Pink Crystal',
          name_pt: 'Cristal Rosa',
          qty: 1000,
          icon: 'assets/img/talents/items/item_crystal_pink.png',
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
      id: 'talent-cd-2',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration II',
      name_pt: 'Aceleração de Cooldown na Bag II',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_ruby_fire',
          name: 'Flaming Ruby',
          name_pt: 'Rubi Flamejante',
          qty: 1,
          icon: 'assets/img/talents/items/item_ruby_fire.png',
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
          id: 'item_wing_dragon',
          name: 'Dragon Wing',
          name_pt: 'Asa de Dragão',
          qty: 1500,
          icon: 'assets/img/talents/items/item_wing_dragon.png',
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
          id: 'item_coin_gold',
          name: 'Golden Coin',
          name_pt: 'Moeda de Ouro',
          qty: 1500,
          icon: 'assets/img/talents/items/item_coin_gold.png',
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
          id: 'item_fur_yellow',
          name: 'Yellow Fur',
          name_pt: 'Pelo Amarelo',
          qty: 1100,
          icon: 'assets/img/talents/items/item_fur_yellow.png',
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
          id: 'item_armor_metal',
          name: 'Metal Carapace',
          name_pt: 'Carapaça de Metal',
          qty: 900,
          icon: 'assets/img/talents/items/item_armor_metal.png',
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
          id: 'item_ruby',
          name: 'Ruby Gem',
          name_pt: 'Gema de Rubi',
          qty: 1000,
          icon: 'assets/img/talents/items/item_ruby.png',
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
      id: 'talent-cd-3',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration III',
      name_pt: 'Aceleração de Cooldown na Bag III',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_stone_grey',
          name: 'Diamond Core',
          name_pt: 'Núcleo de Diamante',
          qty: 1,
          icon: 'assets/img/talents/items/item_stone_grey.png',
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
          id: 'item_rocks',
          name: 'Hard Stone',
          name_pt: 'Rocha Sólida',
          qty: 1500,
          icon: 'assets/img/talents/items/item_rocks.png',
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
          id: 'item_fossil_helix',
          name: 'Helix Fossil',
          name_pt: 'Fóssil Helix',
          qty: 1500,
          icon: 'assets/img/talents/items/item_fossil_helix.png',
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
          id: 'item_bone_long',
          name: 'Thick Club',
          name_pt: 'Osso Rígido',
          qty: 1100,
          icon: 'assets/img/talents/items/item_bone_long.png',
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
          id: 'item_drill_grey',
          name: 'Horn Drill',
          name_pt: 'Broca de Chifre',
          qty: 900,
          icon: 'assets/img/talents/items/item_drill_grey.png',
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
          id: 'item_scale_green',
          name: 'Dragon Scale',
          name_pt: 'Escama de Dragão',
          qty: 500,
          icon: 'assets/img/talents/items/item_scale_green.png',
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
          id: 'item_shell_brown',
          name: 'Dome Fossil',
          name_pt: 'Casca Fóssil',
          qty: 500,
          icon: 'assets/img/talents/items/item_shell_brown.png',
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
      id: 'talent-cd-4',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration IV',
      name_pt: 'Aceleração de Cooldown na Bag IV',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_water_drop',
          name: 'Mystic Water',
          name_pt: 'Gota Mística',
          qty: 1,
          icon: 'assets/img/talents/items/item_water_drop.png',
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
          id: 'item_claw_darkblue',
          name: 'Dark Blue Claw',
          name_pt: 'Garra Marinha',
          qty: 900,
          icon: 'assets/img/talents/items/item_claw_darkblue.png',
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
          id: 'item_feather_blue_crest',
          name: 'Ocean Crest',
          name_pt: 'Penacho Glacial',
          qty: 1100,
          icon: 'assets/img/talents/items/item_feather_blue_crest.png',
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
          id: 'item_fin_blue',
          name: 'Sea Fin',
          name_pt: 'Barbatana Azul',
          qty: 1500,
          icon: 'assets/img/talents/items/item_fin_blue.png',
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
          id: 'item_cannon_water',
          name: 'Hydro Cannon',
          name_pt: 'Canhão Hidráulico',
          qty: 1500,
          icon: 'assets/img/talents/items/item_cannon_water.png',
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
          id: 'item_crystal_ice',
          name: 'Ice Crystal',
          name_pt: 'Cristal de Gelo',
          qty: 500,
          icon: 'assets/img/talents/items/item_crystal_ice.png',
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
          id: 'item_gem_emerald',
          name: 'Emerald Gem',
          name_pt: 'Gema Esmeralda',
          qty: 500,
          icon: 'assets/img/talents/items/item_gem_emerald.png',
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
      id: 'talent-cd-5',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration V',
      name_pt: 'Aceleração de Cooldown na Bag V',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_core_electric',
          name: 'Thunder Core',
          name_pt: 'Núcleo Elétrico',
          qty: 1,
          icon: 'assets/img/talents/items/item_core_electric.png',
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
          id: 'item_connector_electric',
          name: 'Spark Connector',
          name_pt: 'Conector de Alta Voltagem',
          qty: 1100,
          icon: 'assets/img/talents/items/item_connector_electric.png',
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
          id: 'item_ring_electric',
          name: 'Thunder Ring',
          name_pt: 'Anel do Trovão',
          qty: 1500,
          icon: 'assets/img/talents/items/item_ring_electric.png',
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
          id: 'item_horn_gold',
          name: 'Lightning Horn',
          name_pt: 'Chifre de Relâmpago',
          qty: 1500,
          icon: 'assets/img/talents/items/item_horn_gold.png',
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
          id: 'item_fur_electric',
          name: 'Static Mane',
          name_pt: 'Juba Estática',
          qty: 900,
          icon: 'assets/img/talents/items/item_fur_electric.png',
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
          id: 'item_stone_thunder',
          name: 'Thunder Shard',
          name_pt: 'Fragmento de Pedra do Trovão',
          qty: 1000,
          icon: 'assets/img/talents/items/item_stone_thunder.png',
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
      id: 'talent-cd-6',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration VI',
      name_pt: 'Aceleração de Cooldown na Bag VI',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_flower_rainbow',
          name: 'Rainbow Bloom',
          name_pt: 'Flor Prismática',
          qty: 1,
          icon: 'assets/img/talents/items/item_flower_rainbow.png',
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
          id: 'item_bulb_pink',
          name: 'Flower Bulb',
          name_pt: 'Bulbo Floral',
          qty: 1500,
          icon: 'assets/img/talents/items/item_bulb_pink.png',
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
          id: 'item_flower_red',
          name: 'Red Petal',
          name_pt: 'Pétala Rubra',
          qty: 1500,
          icon: 'assets/img/talents/items/item_flower_red.png',
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
          id: 'item_leaves_grass',
          name: 'Razor Grass',
          name_pt: 'Lâminas de Relva',
          qty: 1100,
          icon: 'assets/img/talents/items/item_leaves_grass.png',
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
          id: 'item_vine_blue',
          name: 'Blue Vine',
          name_pt: 'Cipó Azul',
          qty: 900,
          icon: 'assets/img/talents/items/item_vine_blue.png',
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
          id: 'item_seed_green',
          name: 'Miracle Seed',
          name_pt: 'Semente Milagrosa',
          qty: 500,
          icon: 'assets/img/talents/items/item_seed_green.png',
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
          id: 'item_leaf_green',
          name: 'Jungle Leaf',
          name_pt: 'Folha da Selva',
          qty: 500,
          icon: 'assets/img/talents/items/item_leaf_green.png',
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
      id: 'talent-cd-7',
      category: 'personagem',
      icon: 'assets/img/talents/talent_cooldown.png',
      name_en: 'Bag Cooldown Acceleration VII',
      name_pt: 'Aceleração de Cooldown na Bag VII',
      desc_en: 'Accelerates the regeneration of 1 second cooldown of the spells of Pokémon stored in the bag (Pokémon that remain inside the Poké Balls).',
      desc_pt: 'Acelera em 1 segundo a regeneração do tempo de recarga (cooldown) das magias dos Pokémon guardados na bag (dentro das Pokébolas).',
      items: [
        {
          id: 'item_heart_pink',
          name: 'Mystic Heart',
          name_pt: 'Coração Místico',
          qty: 1,
          icon: 'assets/img/talents/items/item_heart_pink.png',
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
          id: 'item_wing_bat_cyan',
          name: 'Bat Wing',
          name_pt: 'Asa de Quiróptero',
          qty: 1500,
          icon: 'assets/img/talents/items/item_wing_bat_cyan.png',
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
          id: 'item_pincer_purple',
          name: 'Shadow Pincer',
          name_pt: 'Pinça Sombria',
          qty: 1500,
          icon: 'assets/img/talents/items/item_pincer_purple.png',
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
          id: 'item_scythe_purple',
          name: 'Night Scythe',
          name_pt: 'Foice da Meia-Noite',
          qty: 1100,
          icon: 'assets/img/talents/items/item_scythe_purple.png',
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
          id: 'item_tongue_pink',
          name: 'Ghost Tongue',
          name_pt: 'Língua Espectral',
          qty: 900,
          icon: 'assets/img/talents/items/item_tongue_pink.png',
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
          id: 'item_crystal_dusk',
          name: 'Dusk Stone Shard',
          name_pt: 'Fragmento da Noite',
          qty: 1000,
          icon: 'assets/img/talents/items/item_crystal_dusk.png',
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
    ,
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
          id: 'item_medal_gold',
          name: 'Golden Medal',
          name_pt: 'Medalha de Ouro',
          qty: 1,
          icon: 'assets/img/talents/items/item_medal_gold.png',
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
          id: 'item_horn_yellow',
          name: 'Golden Horn',
          name_pt: 'Chifre Dourado',
          qty: 1500,
          icon: 'assets/img/talents/items/item_horn_yellow.png',
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
          id: 'item_skull_white',
          name: 'White Skull',
          name_pt: 'Crânio Branco',
          qty: 1500,
          icon: 'assets/img/talents/items/item_skull_white.png',
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
          id: 'item_tail_redwhite',
          name: 'Crimson Crest',
          name_pt: 'Penacho Carmesim',
          qty: 1100,
          icon: 'assets/img/talents/items/item_tail_redwhite.png',
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
          id: 'item_pins_metal',
          name: 'Steel Pins',
          name_pt: 'Espigão de Metal',
          qty: 900,
          icon: 'assets/img/talents/items/item_pins_metal.png',
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
          id: 'item_crystal_lightpink',
          name: 'Radiant Gem',
          name_pt: 'Gema Radiante',
          qty: 1000,
          icon: 'assets/img/talents/items/item_crystal_lightpink.png',
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
