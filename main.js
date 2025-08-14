// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Returns an object that contains the properties 'specimenNum' and 'dna'
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      // Initializes the current base for operations to be used in later steps
      const currentIndex = Math.floor(Math.random() * this.dna.length);
      // Generates a new base
      let newBase = returnRandBase();
      // Loops until a new base is generated that differs from the current one
      while(this.dna[currentIndex] === newBase) {
        newBase = returnRandBase();
      }
      // Returns the object's dna
      this.dna[currentIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherSpecimen) {
      // A variable with a value of 0 initialized to store the future increments of the number of identical bases
      let identicalBases = 0;
      // Loops through DNA and counts the number of identical bases
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherSpecimen.dna[i]) {
          identicalBases++;
        }
      }
      // Calculates the percentage of DNA of the two objects
      identicalBases = Math.floor(identicalBases * 100 / this.dna.length);
      return `specimen #${this.specimenNum} and specimen #${otherSpecimen.specimenNum} have ${identicalBases}% DNA in common\n`;
    },
    willLikelySurvive() {
      let i = 0;
      // A variable with a value of 0 initialized to store the future increments of the number of identical 'C' and 'G' bases
      let basesMatch = 0;
      while(i < this.dna.length) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          basesMatch++;
        }
        i++; // Produces an infinite loop if not used
      }
      basesMatch = Math.floor(basesMatch * 100 / this.dna.length);
      // Returns true if the object's .dna array contains at least 60%, false otherwise
      return basesMatch >= 60 ? true : false;
    }
  }
};

const ex1 = pAequorFactory(2, mockUpStrand());
const ex2 = pAequorFactory(3, mockUpStrand());
console.log(ex1.compareDNA(ex2));
/* const pAequor = pAequorFactory(1, mockUpStrand());
pAequor.mutate();
console.log(pAequor.dna); */

const survivingSpecimens = [];
let i = 1;
while (survivingSpecimens.length < 30) {
  const instance = pAequorFactory(i, mockUpStrand());
  if (instance.willLikelySurvive()) {
    survivingSpecimens.push(instance);
  }
  i++;
}
console.log(survivingSpecimens);