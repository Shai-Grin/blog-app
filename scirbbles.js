var string = "foo-bar-baz-qux";

var wordsArr = string.split('-'); // ['foo','bar','baz'...]

var fileName = wordsArr.[1] + " - " + wordsArr.slice(1).join(', ') + '.html';