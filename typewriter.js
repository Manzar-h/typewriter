//take a sentence and display it as an animation
const typewriter = (input) => {
  let delay = 0;

  //add a new line character (\n) to the end of the input string.
  input = input + "\n";
  
  //each letter to appear with a delay of 50ms
  for (const char of input) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
};

const sentence = "hello there from lighthouse labs";
typewriter(sentence);