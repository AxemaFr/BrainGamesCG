import promptly from 'promptly';

async function askName() {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
}

export default askName;
