import Team from './team';
import Character from './character';

export const team = new Team();
export const character = new Character('Artur', 'Filonov');
export const teamFilonovs = [{
  name: 'Artur',
  type: 'Filonov',
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
}];

export const character2 = new Character('Johnny', 'Cash');
export const covboysTeam = [
  {
    name: 'Artur',
    type: 'Filonov',
    health: 100,
    level: 1,
    attack: 50,
    defence: 50,
  },
  {
    name: 'Johnny',
    type: 'Cash',
    health: 100,
    level: 1,
    attack: 50,
    defence: 50,
  },
];