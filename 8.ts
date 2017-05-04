(() => { 

// Union types

interface IWizard {
    name: string;
    color: 'blue' | 'brown' | 'grey' | 'white';
}

interface IEvilWizard {
    name: string;
    color: 'black' | 'red';
}

function greetCharacter(wizard: IWizard | IEvilWizard ) {
    console.log(`Hello, ${wizard.name} the ${wizard.color}.`);
}

greetCharacter({name: 'Gandalf', color: 'grey'});

})();
