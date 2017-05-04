(() => { 
    

// This is an informal way to define a type.
function displayHeight( adventurer: { height: string } ): void {

    console.log(`Wow, you're ${adventurer.height}`);

}

// Note that we have an extra property here,   
// the compiler does not care though.
const aDwarf = {name: 'Gimli', height: 'quite compact'};

displayHeight(aDwarf);


})();