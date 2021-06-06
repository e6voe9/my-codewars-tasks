function anagrams(word, words) {
  let res = [];
  let sortedWords = words.map(e=> e.toLowerCase().split('').sort().join(''));
  word = word.toLowerCase().split('').sort().join('');
  for (let i = 0; i < words.length; ++i){
    if (sortedWords[i] === word){
      res.push(words[i]);
    }
  }
  return res
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));