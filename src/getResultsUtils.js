import { resultsURL } from "../../solution/src/constants";


const populateResults = results => {
    let resultsDisplay = document.createElement('section');
    let resultsPlaceholder = document.querySelector('div#resultsPlaceholder');
    let resultsArticle = document.querySelector('article#results');

    results.forEach(result => {
        let resultDisplay = document.createElement('p');
        resultDisplay.textContent = `${result.home} ${result.homeScore} - ${result.awayScore} ${result.away}`;
        resultsDisplay.appendChild(resultDisplay);
    });

    resultsArticle.replaceChild(resultsDisplay, resultsPlaceholder);
}

export const getResults = () => {
    return fetch(resultsURL)
        .then(results => {
            if (results.ok) {
                return results = results.json();
            }
            else {
                throw new Error(`Data isn't fetched!!`)

            }
        }
        )
        .then(results => {
            let reactRangersResults = results;
            populateResults(reactRangersResults);
        }
        )
        .catch(error => {
            console.log(error.message);
        })
    }

