// Variables
//var hero
//console.clear();
//console.log ('testsadfad')

var hero = {
  name:"The Amazin Bycyle man",
  heroic:true,
    inventory:['spoon', 'fork'],
  health:80,
  weapon:{
      type:'soft',
      damage:40,
    },
};

function rest(creature){
//creature=hero // you dont need this.
creature.health=10
return creature
}

function pickUpItem(creature, item) {
   creature.inventory.push(item);
   return creature
} // bam!

function dealDamage(attacker, defender ) {
   defender.health= defender.health-attacker.weapon.damage;
   return defender
} //bam!

//------------stuff to test the equipweapon----
//var creature = equipWeapon({ inventory: [{ type: 'gun', damage: '100'}], weapon: null }, 0)
//return creature.weapon.type === 'gun' && creature.inventory.length === 0 // expectation
//console.log(equipWeapon,'dus');
//-----------end stuff to test the equipweapon

function equipWeapon(creature, index) {
  creature.weapon=creature.inventory[index]
  creature.inventory.splice(index, index+1)
  //return console.log (creature.inventory);
  return creature
}

  //console.log(doBattle(creatureStub,heroStub))


// //-----------------stuff to test the dobattle functions
  //var heroStub = { heroic: true, health: 10, weapon: { damage: 2 } }
  //var creatureStub = { heroic: false, health: 5, weapon: { damage: 1 } }
 //console.log(doBattle(heroStub,creatureStub))
// //----------------end stuff to test the dobattle functions


 function doBattle (heroicCreature,Creature){

   if (heroicCreature.heroic){ // check guards
      while (checkHealth()){
        dealDamage(heroicCreature,Creature)
        //console.log(heroicCreature.health+' '+Creature.health)
          if (checkHealth()){//console.log(checkHealth())
            dealDamage(Creature,heroicCreature)
          }
    }

  }else {//console.log('no heroes') // end if check heroic
     return null;
   }
   function checkHealth(){
     if(heroicCreature.health && Creature.health > 0){
       return true
       //console.log(heroicCreature.health+'-'+Creature.health)
     }
      }

    return heroicCreature
}
//var a = doBattle(creatureStub,heroStub)
//console.log(a.heroic,a.health)
//console.log(heroStub.health,'   ',heroStub.heroic) //last check 8 and true



// Game logic

// UI
