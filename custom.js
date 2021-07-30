const fourLetters = ["sate", "seat", "east"]; 
const threeLetters = ["tea", "set", "sea", "eat"];


//  P(3,2) * P(4,3) = 144 different lineup

let fourLettersLineups = [];
let threeLettersLineups = [];

fourLetters.map(word1 => {
    const lineup = [];
    lineup.push(word1); // first four letters word
    fourLetters.map(word2 =>{
        if(!lineup.includes(word2)) {
            lineup.push(word2); // second four letters word
            fourLettersLineups = [...fourLettersLineups, [...lineup]];
            lineup.pop();
        }
    })
})

threeLetters.map(word1 => {
    const lineup = [];
    lineup.push(word1); // first three letters word
    threeLetters.map(word2 => {
        if(!lineup.includes(word2)) {
            lineup.push(word2) // second three letters word
            threeLetters.map(word3 => {
                if(!lineup.includes(word3)) {
                    lineup.push(word3) // third three letters word
                    threeLettersLineups = [...threeLettersLineups, [...lineup]];
                    lineup.pop();
                }
            })
            if (lineup.length > 1) {
                lineup.pop();
            }
        }
    })
})


// Check combinations of Lineups

let trueLineups = [];
fourLettersLineups.map(lineupFour => {
    const word1 = lineupFour[0];
    const word2 = lineupFour[1];
    threeLettersLineups.map(lineupThree => {
        const word3 = lineupThree[0];
        const word4 = lineupThree[1];
        const word5 = lineupThree[2];
        if(word1[3] == word2[3]) {
            if(word1[1] == word3[2]) {
                if(word3[0] == word4[2]) {
                    if(word4[0] == word5[1]) {
                        trueLineups = [...trueLineups, [...lineupFour, ...lineupThree]]
                    }
                }
            }
        }
    }) 
})

// Select a combinations of true lineups
const selectedLineup = trueLineups[Math.floor(Math.random() * trueLineups.length)];
const word1 = selectedLineup[0];
const word2 = selectedLineup[1];
const word3 = selectedLineup[2];
const word4 = selectedLineup[3];
const word5 = selectedLineup[4];

// Assign letters to the cell
document.getElementById('word1letter0').innerHTML = word1[0];
document.getElementById('word1letter1').innerHTML = word1[1];
document.getElementById('word1letter2').innerHTML = word1[2];
document.getElementById('word1letter3').innerHTML = word1[3];
document.getElementById('word2letter0').innerHTML = word2[0];
document.getElementById('word2letter1').innerHTML = word2[1];
document.getElementById('word2letter2').innerHTML = word2[2];
document.getElementById('word3letter0').innerHTML = word3[0];
document.getElementById('word3letter1').innerHTML = word3[1];
document.getElementById('word4letter0').innerHTML = word4[0];
document.getElementById('word4letter1').innerHTML = word4[1];
document.getElementById('word5letter0').innerHTML = word5[0];
document.getElementById('word5letter2').innerHTML = word5[2];
