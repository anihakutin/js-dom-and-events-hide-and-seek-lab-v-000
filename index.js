function getFirstSelector (selector) {
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
  let rankedLists = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < rankedLists.length; i++) {
    let currentValue = rankedLists[i].innerHTML;
    rankedLists[i].innerHTML = (parseInt(currentValue) + n).toString();
  }
}

function deepestChild () {
  const nodes = document.querySelectorAll('#grand-node div');
  const mostDeep = nodes[nodes.length - 1];

  return mostDeep;
}
