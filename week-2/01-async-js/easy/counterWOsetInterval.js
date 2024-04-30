let count = 0;

function counterWOsetInterval() {
  console.log(count);
  count++;
  setTimeout(counterWOsetInterval, 1000); // Call updateCounter again after 1 second
}

counterWOsetInterval(); // Start the counter
