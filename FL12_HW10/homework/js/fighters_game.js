class Fighter {
    constructor(obj) {
        this.fighterProp = obj;
        this.wins = 0;
        this.loss = 0;
    }
    getName() {
        return this.fighterProp.name;
    }
    getDamage() {
        return this.fighterProp.damage;
    }
    getStrength() {
        return this.fighterProp.strength;
    }
    getAgility() {
        return this.fighterProp.agility;
    }
    getHealth() {
        return this.fighterProp.health;
    }
    attack(fighterDef) {
        let sumStats = fighterDef.getStrength() + fighterDef.getAgility();
        let chance = Math.random() * 100;
        if (chance >= sumStats) {
            this.dealDamage(fighterDef);
        } else {
            console.log(this.getName() + ' attack missed')
        }
    }
    logCombatHistory() {
        console.log('Name: ' + this.getName() + ' -  Wins: ' + this.wins + '| Losses: ' + this.loss);
    }
    heal(healHp) {
        this.fighterProp.health += healHp;
        if (this.fighterProp.health > 100) {
            this.fighterProp.health = 100;
        }
    }
    dealDamage(fighterDef) {
        let dmg = this.getDamage();
        let hp = fighterDef.getHealth();
        fighterDef.fighterProp.health = hp - dmg;
        if (fighterDef.fighterProp.health < 0) {
            fighterDef.fighterProp.health = 0;
        }
        console.log(this.getName() + ' makes ' + this.fighterProp.damage + ' dmg to ' + fighterDef.fighterProp.name)
    }
    addWin() {
        this.wins += 1;
    }
    addLoss() {
        this.loss += 1;
    }
}

function battle(hero1, hero2) {
    if (hero1.getHealth() === 0) {
        console.log(hero1.getName() + '- HP equal to 0');
        return;
    } else if (hero2.getHealth() === 0) {
        console.log(hero2.getName() + '- HP equal to 0');
        return;
    } else {
        hero1.attack(hero2);
        if (hero2.getHealth() === 0) {
            hero1.addWin();
            hero2.addLoss();
            console.log(hero1.getName() + ' has won');
            return;
        }
        hero2.attack(hero1);
        if (hero1.getHealth() === 0) {
            hero2.addWin();
            hero1.addLoss();
            console.log(hero2.getName() + ' has won');
            return;
        }
        battle(hero1, hero2);
    }
}
let fighter1 = new Fighter({
    name: 'Gadnuk',
    damage: 20,
    strength: 30,
    agility: 20,
    health: 100
});
let fighter2 = new Fighter({
    name: 'DirtyApple',
    damage: 25,
    strength: 20,
    agility: 25,
    health: 100
});

battle(fighter1, fighter2);