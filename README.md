<h1>Coin Flip</h1>
You are provided this flip function:

function flip() {
  return Math.random() >= 0.5;
}

You must implement a randomNumber(n) function that generates a random number greater than or equal to 0, and less than input n.

<ul>
  <li>n must be greater than 0</li>
  <li>Your only source of randomness must be the provided flip() function</li>
  <li>You cannot use Math.random in your implementation</li>
  <li>You can use Google to figure out how to do this</li>   
</ul>

function randomNumber(n) {
  /*
    Your implementation, using the flip() function
  */
  
  // Returns a number between [0, n)
}

An example execution of your function:
<ul>
  <li>randomNumber(500) // returns 123</li>
  <li>randomNumber(1) // returns 0</li>
  <li>randomNumber(500) // returns 466</li>
  <li>randomNumber(1000001) // throw error</li>   
</ul>
