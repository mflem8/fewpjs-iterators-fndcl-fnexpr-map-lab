const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // let capitalized = tutorials.map(x => x.charAt(0).toUpperCase() + x.slice(1))
  let capitalized = tutorials.map(function(x) {
    return x.charAt.toUpperCase() + x.slice(1);
  })
  };