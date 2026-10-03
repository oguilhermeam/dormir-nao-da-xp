// ==========================================================================
// DORMIR NÃO DÁ XP — Compêndio de Talentos do Jogador (PokeAlliance)
// Dados estruturados de categorias, talentos, itens de craft, drops e hunts
// ==========================================================================

const TALENTS_DATA = {
  categories: [
    { id: 'personagem', name: 'Personagem', icon: 'assets/img/talents/cat_personagem.png', count: '5 / 18' },
    { id: 'pokemon', name: 'Pokémon', icon: 'assets/img/talents/cat_pokemon.png', count: 'Em breve' },
    { id: 'inseto', name: 'Inseto', icon: 'assets/img/talents/cat_inseto.png', count: 'Em breve' },
    { id: 'sombrio', name: 'Sombrio', icon: 'assets/img/talents/cat_sombrio.png', count: 'Em breve' },
    { id: 'dragao', name: 'Dragão', icon: 'assets/img/talents/cat_dragao.png', count: 'Em breve' },
    { id: 'eletrico', name: 'Elétrico', icon: 'assets/img/talents/cat_eletrico.png', count: 'Em breve' },
    { id: 'fada', name: 'Fada', icon: 'assets/img/talents/cat_fada.png', count: 'Em breve' },
    { id: 'lutador', name: 'Lutador', icon: 'assets/img/talents/cat_lutador.png', count: 'Em breve' },
    { id: 'fogo', name: 'Fogo', icon: 'assets/img/talents/cat_fogo.png', count: 'Em breve' },
    { id: 'voador', name: 'Voador', icon: 'assets/img/talents/cat_voador.png', count: 'Em breve' },
    { id: 'fantasma', name: 'Fantasma', icon: 'assets/img/talents/cat_fantasma.png', count: 'Em breve' },
    { id: 'planta', name: 'Planta', icon: 'assets/img/talents/cat_inseto.png', count: 'Em breve' },
    { id: 'terra', name: 'Terra', icon: 'assets/img/talents/cat_lutador.png', count: 'Em breve' },
    { id: 'gelo', name: 'Gelo', icon: 'assets/img/talents/cat_dragao.png', count: 'Em breve' },
    { id: 'normal', name: 'Normal', icon: 'assets/img/talents/cat_personagem.png', count: 'Em breve' },
    { id: 'veneno', name: 'Veneno', icon: 'assets/img/talents/cat_fantasma.png', count: 'Em breve' },
    { id: 'psiquico', name: 'Psíquico', icon: 'assets/img/talents/cat_fada.png', count: 'Em breve' },
    { id: 'pedra', name: 'Pedra', icon: 'assets/img/talents/cat_lutador.png', count: 'Em breve' },
    { id: 'aco', name: 'Aço', icon: 'assets/img/talents/cat_personagem.png', count: 'Em breve' },
    { id: 'agua', name: 'Água', icon: 'assets/img/talents/cat_dragao.png', count: 'Em breve' }
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
          id: 'item_feather_blue',
          name: 'Blue Feather',
          name_pt: 'Pena Azul',
          qty: 1,
          icon: 'assets/img/talents/items/item_feather_blue.png',
          dropper: {
            name: 'Pidgeot',
            sprite: 'assets/img/pokemon/pidgeot.png',
            chance: '1.2%',
            rarity: 'Incomum',
            locations: ['Rota 16 (Noroeste de Celadon)', 'Viridian Forest (Área Alta)']
          }
        },
        {
          id: 'item_horn_pink',
          name: 'Pink Horn',
          name_pt: 'Chifre Rosa',
          qty: 1,
          icon: 'assets/img/talents/items/item_horn_pink.png',
          dropper: {
            name: 'Nidorina',
            sprite: 'assets/img/pokemon/nidoran_f.png',
            chance: '0.9%',
            rarity: 'Médio',
            locations: ['Rota 9 (Leste de Cerulean)', 'Safari Zone']
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
            name: 'Golbat',
            sprite: 'assets/img/pokemon/golbat.png',
            chance: '2.5%',
            rarity: 'Comum',
            locations: ['Mt. Moon (Subsolo B2)', 'Rock Tunnel']
          }
        },
        {
          id: 'item_spike_pink',
          name: 'Pink Spike',
          name_pt: 'Espinho Rosa',
          qty: 250,
          icon: 'assets/img/talents/items/item_spike_pink.png',
          dropper: {
            name: 'Ariados',
            sprite: 'assets/img/pokemon/ariados.png',
            chance: '2.0%',
            rarity: 'Comum',
            locations: ['Viridian Forest (Noite)', 'Safari Zone']
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
            name: 'Marowak',
            sprite: 'assets/img/pokemon/marowak.png',
            chance: '1.8%',
            rarity: 'Comum',
            locations: ['Pokémon Tower (Lavender)', 'Rock Tunnel']
          }
        },
        {
          id: 'item_claw_gold',
          name: 'Golden Claw',
          name_pt: 'Garra Dourada',
          qty: 400,
          icon: 'assets/img/talents/items/item_claw_gold.png',
          dropper: {
            name: 'Sandslash',
            sprite: 'assets/img/pokemon/sandslash.png',
            chance: '1.5%',
            rarity: 'Incomum',
            locations: ['Rota 4 (Deserto)', 'Viridian Caves']
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
            name: 'Weezing',
            sprite: 'assets/img/pokemon/weezing.png',
            chance: '0.5%',
            rarity: 'Raro',
            locations: ['Pokémon Mansion (Cinnabar B1)', 'Power Plant']
          }
        },
        {
          id: 'item_bone',
          name: 'Bone Fragment',
          name_pt: 'Fragmento de Osso',
          qty: 1500,
          icon: 'assets/img/talents/items/item_bone.png',
          dropper: {
            name: 'Cubone',
            sprite: 'assets/img/pokemon/marowak.png',
            chance: '5.0%',
            rarity: 'Muito Comum',
            locations: ['Pokémon Tower (Lavender)']
          }
        },
        {
          id: 'item_shell_gold',
          name: 'Golden Shell',
          name_pt: 'Concha Dourada',
          qty: 1500,
          icon: 'assets/img/talents/items/item_shell_gold.png',
          dropper: {
            name: 'Omastar',
            sprite: 'assets/img/pokemon/blastoise.png',
            chance: '4.2%',
            rarity: 'Comum',
            locations: ['Seafoam Islands', 'Cinnabar Coast']
          }
        },
        {
          id: 'item_mace_dark',
          name: 'Dark Mace',
          name_pt: 'Maça Sombria',
          qty: 1100,
          icon: 'assets/img/talents/items/item_mace_dark.png',
          dropper: {
            name: 'Steelix',
            sprite: 'assets/img/pokemon/steelix.png',
            chance: '3.0%',
            rarity: 'Comum',
            locations: ['Rock Tunnel', 'Victory Road']
          }
        },
        {
          id: 'item_fang_dark',
          name: 'Dark Fang',
          name_pt: 'Presa Sombria',
          qty: 450,
          icon: 'assets/img/talents/items/item_fang_dark.png',
          dropper: {
            name: 'Arbok',
            sprite: 'assets/img/pokemon/arbok.png',
            chance: '2.4%',
            rarity: 'Incomum',
            locations: ['Rota 8 (Leste de Celadon)', 'Safari Zone']
          }
        },
        {
          id: 'item_wing_pink',
          name: 'Pink Wing',
          name_pt: 'Asa Rosa',
          qty: 450,
          icon: 'assets/img/talents/items/item_wing_pink.png',
          dropper: {
            name: 'Venomoth',
            sprite: 'assets/img/pokemon/scyther.png',
            chance: '2.0%',
            rarity: 'Incomum',
            locations: ['Rota 15', 'Viridian Forest']
          }
        },
        {
          id: 'item_crystal_pink',
          name: 'Pink Crystal',
          name_pt: 'Cristal Rosa',
          qty: 1000,
          icon: 'assets/img/talents/items/item_crystal_pink.png',
          dropper: {
            name: 'Starmie',
            sprite: 'assets/img/pokemon/starmie.png',
            chance: '3.5%',
            rarity: 'Comum',
            locations: ['Cerulean Cape', 'Vermilion Coast']
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
          id: 'item_fire_flower',
          name: 'Fire Flower',
          name_pt: 'Flor de Fogo',
          qty: 1,
          icon: 'assets/img/talents/items/item_fire_flower.png',
          dropper: {
            name: 'Charizard',
            sprite: 'assets/img/pokemon/charizard.png',
            chance: '0.6%',
            rarity: 'Raro',
            locations: ['Cinnabar Volcano', 'Mt. Ember']
          }
        },
        {
          id: 'item_bat_wing',
          name: 'Bat Wing',
          name_pt: 'Asa de Morcego',
          qty: 1500,
          icon: 'assets/img/talents/items/item_bat_wing.png',
          dropper: {
            name: 'Golbat',
            sprite: 'assets/img/pokemon/golbat.png',
            chance: '6.0%',
            rarity: 'Muito Comum',
            locations: ['Mt. Moon (B1/B2)', 'Rock Tunnel']
          }
        },
        {
          id: 'item_golden_orb',
          name: 'Golden Orb',
          name_pt: 'Orbe Dourado',
          qty: 1500,
          icon: 'assets/img/talents/items/item_golden_orb.png',
          dropper: {
            name: 'Alakazam',
            sprite: 'assets/img/pokemon/alakazam.png',
            chance: '4.5%',
            rarity: 'Comum',
            locations: ['Saffron Psychic House', 'Rota 11']
          }
        },
        {
          id: 'item_yellow_seed',
          name: 'Yellow Seed',
          name_pt: 'Semente Amarela',
          qty: 1100,
          icon: 'assets/img/talents/items/item_yellow_seed.png',
          dropper: {
            name: 'Venusaur',
            sprite: 'assets/img/pokemon/venusaur.png',
            chance: '3.8%',
            rarity: 'Comum',
            locations: ['Celadon Suburbs', 'Rota 21']
          }
        },
        {
          id: 'item_dark_armor',
          name: 'Dark Armor',
          name_pt: 'Armadura Sombria',
          qty: 900,
          icon: 'assets/img/talents/items/item_dark_armor.png',
          dropper: {
            name: 'Tyranitar',
            sprite: 'assets/img/pokemon/tyranitar.png',
            chance: '1.8%',
            rarity: 'Incomum',
            locations: ['Cerulean Cave', 'Victory Road']
          }
        },
        {
          id: 'item_ruby',
          name: 'Ruby Gem',
          name_pt: 'Gema de Rubi',
          qty: 1000,
          icon: 'assets/img/talents/items/item_ruby.png',
          dropper: {
            name: 'Arcanine',
            sprite: 'assets/img/pokemon/arcanine.png',
            chance: '2.8%',
            rarity: 'Comum',
            locations: ['Cinnabar Island', 'Rota 7']
          }
        }
      ]
    }
  ]
};
