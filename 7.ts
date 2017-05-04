(() => { 
    
// Intersection type

interface IWizard {
    castSpell: () => void;
}

interface IEvilDoer {
    evilLevel: number;
}

type IEvilWizard = IWizard & IEvilDoer;

interface ISauron {
    corruptAWizard(wizard: IWizard) : IEvilWizard;
}



})();
