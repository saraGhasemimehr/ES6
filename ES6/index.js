    const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
    }

    const { name, age, projects: {diceGame} } = student;

    console.log(`My name is ${name} I am ${age} and my project is ${ diceGame} `);
