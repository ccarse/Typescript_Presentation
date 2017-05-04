(() => { 


interface iAdventurer {
    height: string; 
    race?: string; // Optional
    readonly ssn: string;
    
    saySomething: () => string; // Function that takes no args and returns a string

}

interface iWarriorAdventurer extends iAdventurer { // We can extend interfaces any number of times.
    weaponOfChoice: string;
}

interface iWoodElf {
    earLength: number;
    eternal?: boolean;
}

interface iWoodElfWarrior extends iWarriorAdventurer, iWoodElf {
    canSurfShields: boolean;
}

function display( adventurer: iWoodElfWarrior ): void {

    console.log(`Wow, you're ${JSON.stringify(adventurer)}`);
    console.log(adventurer.saySomething());
}

const aDwarf = {name: 'Legolas', height: 'quite lenghty', ssn: '123-45-1337', weaponOfChoice: 'bow', earLength: 42, canSurfShields: true, saySomething: () => "The lady elves love me."};

display(aDwarf);

// Back to slides

})();
