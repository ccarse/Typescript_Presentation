(() => { 

type HairLength = 'lame' | 'long' | 'epic';
type SwordLength = 'lame' | 'long' | 'awesome';

interface IHobbit {
    name: string;
    footHairLength: HairLength;
}

interface IHuman {
    name: string;
    swordLength: SwordLength;
}

function greetCharacter(character: IHobbit | IHuman ) {
    if ( (character as IHobbit).footHairLength ) {
        console.log(`Hello ${character.name}, my what ${(character as IHobbit).footHairLength} foot hair you have.`);    
    } else {
        console.log(`Hello ${character.name}, my what a ${(character as IHuman).swordLength} sword you have.`);    
    }
}

greetCharacter({name: 'Bilbo', footHairLength: 'epic'});
greetCharacter({name: 'Boromir', swordLength: 'lame'});


// Back to slides
})();
