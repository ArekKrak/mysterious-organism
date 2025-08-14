# 🧬 Mysterious Organism
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black&style=flat)
![Node.js](https://img.shields.io/badge/Node.js-Environment-339933?logo=node.js&logoColor=white&style=flat)
![VS Code](https://img.shields.io/badge/VS_Code-Editor-007ACC?logo=visualstudiocode&logoColor=white&style=flat)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white&style=flat)](https://github.com/ArekKrak/mysterious-organism)

A JavaScript simulation for studying the fictional deep-sea organism **Pila aequor (P. aequor)**, developed as part of the Codecademy *Challenge Project: Mysterious Organism*.  
This program generates, mutates, and compares DNA strands to model survival probabilities under specific conditions.

---

## Project Overview

**Context:**  
P. aequor is a newly discovered species found near hydrothermal vents, with DNA comprised of **15 bases**. Due to its rarity and inability to survive above sea level, researchers require a simulation to study its properties without repeated deep-sea expeditions.

**Your role:**  
Create JavaScript objects to simulate P. aequor’s DNA, mutations, DNA comparisons, and survival chances.

**Main Features Implemented:**
- Generate random DNA strands.
- Mutate a DNA base ensuring the new base differs from the original.
- Compare DNA between specimens and return similarity percentage.
- Determine survival likelihood based on DNA composition (≥ 60% C/G bases).
- Create a collection of **30 specimens guaranteed to survive**.

---

## Tech Stack

- **JavaScript (ES6+)**
- **Node.js** (for running the script locally)
- **Tools**: Visual Studio Code, Git, GitHub

---

## Project Structure

```
mysterious-organism/
├── main.js       # JavaScript implementation of the simulation
└── README.md     # Project documentation
```

---

## How It Works

1. **Random DNA Base Generation**  
   - `returnRandBase()` → returns `'A'`, `'T'`, `'C'`, or `'G'` at random.

2. **Random DNA Strand Creation**  
   - `mockUpStrand()` → creates an array of 15 random DNA bases.

3. **Specimen Factory**  
   - `pAequorFactory(specimenNum, dna)` → returns an object with:
     - `.mutate()` → changes one random base to a different base.
     - `.compareDNA(otherSpecimen)` → compares DNA and logs similarity.
     - `.willLikelySurvive()` → returns `true` if at least 60% bases are `C` or `G`.

4. **Survival Simulation**  
   - Generates **30 unique specimens** that pass the survival test.

---

## Example Output

specimen #2 and specimen #3 have 46% DNA in common

[
  { specimenNum: 1, dna: [ 'C', 'G', 'T', ... ] },
  { specimenNum: 3, dna: [ 'G', 'C', 'C', ... ] },
  ...
]

---

## Key Concepts Demonstrated

- Factory functions in JavaScript
- Loops and array manipulation
- Conditional logic and probability
- Ensuring randomness with constraints
- Simulating biological processes through code

---

## Future Improvements

- Add a method to generate a population with configurable size and survival threshold.
- Implement a visual DNA strand representation in a browser.
- Track mutation history for each specimen.

---

## Acknowledgements

- Project brief provided by Codecademy.
- Inspired by real-world genetic studies, adapted for educational purposes.

---

## Contact
If you're a recruiter, mentor, or fellow developer interested in collaboration or feedback:

**Arek Krakowiak**  
[369arek12@protonmail.com](mailto:369arek12@protonmail.com)

---

Thank you for viewing this project!

