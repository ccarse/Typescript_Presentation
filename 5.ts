(() => { 


interface iAdventurer {
    height: string; 
    race?: string; // Optional, an object doesn't have to have a property named race to 'be' an iAdventurer
    readonly ssn: string; // Readonly props can only be set at object creation, there is a ReadOnlyArray<T> type for immutable arrays. 
    
    // (): void // Function type. This declares that an iAdventurer can be called as a function like aDwarf();
}

function displayHeight( adventurer: iAdventurer ): void {

    console.log(`Wow, you're ${adventurer.height}`);
    // console.log(adventurer.race.length);
}

const aDwarf = {height: 'quite compact', race: 'Dwarf', ssn: '123-45-1337'};
// const aDwarf = {name: 'Gimli', height: 'quite compact', ssn: '123-45-1337'}; // Doesn't have race defined, still valid to pass to displayHeight.
aDwarf.ssn = '42'; // Why no error since ssn is read only?

displayHeight(aDwarf);


})();