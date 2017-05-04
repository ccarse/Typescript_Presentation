(() => { 


interface iAdventurer {
    height: string; 
}

function displayHeight( adventurer: iAdventurer ): void {

    console.log(`Wow, you're ${adventurer.height}`);

}

const aDwarf = {name: 'Gimli', height: 'quite compact'};

displayHeight(aDwarf);
// displayHeight({name: 'Gimli', height: 'quite compact'}); // Can use type assertion to make this work.

})();