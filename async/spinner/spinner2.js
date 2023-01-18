process.stdout.write("hello from spinner1.js... \rheyyy\n");
 
const spinnerAnimation = () => {

  

  let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r/   "];
  let delay = 300

  for (let i = 0; i < spinner.length; i++) {

    setTimeout(() => {
  
      process.stdout.write(spinner[i]);
    
    }, delay += 100);


  }
}

spinnerAnimation();






// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
//   process.stdout.write("\r\\   ");
// }, 700);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
//   process.stdout.write("\r\\   ");
// }, 700);



