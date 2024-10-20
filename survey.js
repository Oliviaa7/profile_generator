const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing your favourite activity? ", (music) => {
      rl.question("Which meal in the day is your favourite? ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you're amazing at! ", (superpower) => {
              console.log(`${name} loves listening to ${music} while ${activity}. ${name} devours ${food} for ${meal} and prefers ${sport} over any other sport. ${name} is amazing at ${superpower}.`)
              rl.close();
            })
          })
        })
      })
    })
  })

});