export default function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  console.log('make magics in here!');

  // const header = document.querySelector('h2');
  // if (header) {
  //   header.textContent = 'SCRAMBLE IT!!';
  // }
};

//function to test for truthfulness of a character
function grep(array, filt) {
  var result = [];
  for (var i = 0, len = array.length; i++ < len;) {
    var member = array[i] || '';
    if (filt && (typeof filt === 'Function') ? filt(member) : member) {
      result.push(member);
    }
  }
  console.log(filt)
  return result;
}

export function scramble() {

  //get user inputs
  let username = document.getElementById("username").value;
  let text = document.getElementById("content").value;
  let redactedWords = document.getElementById("words").value;
  let sign = document.getElementById("sign").value;

  //create a custom POSIX character class [:punctuation:], as it's not supported by javascript
  let punctuation = '\\[' + '\\!' + '\\"' + '\\#' + '\\$' + '\\%' + '\\&' + '\\\'' + '\\(' + '\\)' + '\\*' + '\\+' + '\\,' + '\\\\' + '\\-' + '\\.' + '\\/' + '\\:' + '\\;' + '\\<' + '\\=' + '\\>' + '\\?' + '\\@' + '\\[' + '\\]' + '\\^' + '\\_' + '\\`' + '\\{' + '\\|' + '\\}' + '\\~' + '\\]',
    //create tokenizer
    tokenizer = new RegExp('\\s*' + '(' + '\\.{3}' + '|' + '\\w+\\-\\w+' + '|' + '\\w+\'(?:\\w+)?' + '|' + '\\w+' + '|' + '[' + punctuation + ']' + ')');
  //call the truthfulness function for a given input; filter function omitted since all we need to test for is truthiness
  let contentArray = grep(text.split(tokenizer));
  let words2 = grep(redactedWords.split(tokenizer));
  // console.log(contentArray)
  // console.log(words2)

  //convert the main text and redacted words to arrays and eliminate case sensitivity
  let contentArray2 = contentArray.map(element => { return element.toLowerCase(); });
  let wordArray = words2.map(element => { return element.toLowerCase(); });
  //check for similar words in each array and return them in another array
  let wordInText = contentArray2.filter(element => wordArray.includes(element));
  //remove duplicates from the new array
  let noDuplicates = new Set(wordInText);
  wordInText = [...noDuplicates];


  // Looks through the text and redacts words
  let newContentArray = [];
  for (var word of wordInText) {
    let wordLength = word.length;
    for (var index in contentArray) {
      var textWord = contentArray2[index];
      if (textWord == word) {
        contentArray.splice(index, 1, sign.repeat(wordLength))
      }
    }
  }
  var textWithWordsRedacted = '';
  contentArray.map(word => textWithWordsRedacted += `${word} `)
  const result = document.querySelector(".result");
  result.textContent = textWithWordsRedacted;
}





// ======= DO NOT EDIT ============== //


  // ======= EEND DO NOT EDIT ========= //




