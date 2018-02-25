
function showResult(fighter) {
    console.log('Fighter', fighter.getName());
    console.log('- Combat stats:', fighter.getCombatHistory());
    console.log('- Properties:', fighter.getStats());
}



function fighter({ name, attack, hp }) {
    var stat = {
        name: name,
        attack: attack,
        hp: hp
    };
    var combHist = {
        wins: 0,
        loses: 0
    };
    return {
        getName: () => stat.name,
        block: () => Math.random() >= 0.5,
        getStats: () => stat,
        getCombatHistory: () => combHist,
        fight: (defender) => {
            if (defender.block()) {
                return false;
            } else {
                var totalHp = defender.getStats().hp - stat.attack;
                if (totalHp > 0) {
                    defender.getStats().hp = totalHp;
                } else {
                    combHist.wins += 1;
                    defender.getCombatHistory().loses += 1;
                    defender.getStats().hp = 0;
                }
                return true;
            }
        }
    };
}







var fighter1 = fighter({ name: 'John', attack: 100, hp: 100 });
var fighter2 = fighter({ name: 'Kayn', attack: 50, hp: 300 });
var fighter3 = fighter({ name: 'Bill', attack: 40, hp: 100 });

fighter1.fight(fighter2); // true, fighter 1 make damage to fighter 2
fighter1.fight(fighter3); // true, fighter 1 make damage to fighter 3




showResult(fighter1);
  
  
showResult(fighter2);


showResult(fighter3);