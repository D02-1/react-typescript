import React, { VoidFunctionComponent, useState } from 'react';
import './App.css';

import { Header } from './Components/Header';

class TestClass
{
  public greeting: string;

  constructor(greeting : string)
  {
    this.greeting = greeting;
  }

  // Eine methode/funktion die kein return hat, ist vom typen "void".
  testMethod() : void
  {
    console.log("Hallo");
  }
}

// typen können auch klassen oder andere instanziierbare elemente sein
const testClassInstance : TestClass = new TestClass("hey!");

enum testEnum
{
  TEST1,
  TEST,
  HALLO
}

// In typescript definieren wir IMMER den typen einer variable
const testNummer : number = 6;

function testFunction() : string
{
  return "Hallo";
}

const testBool : boolean = true;

function App()
{
  // Bei funktionen wie useState(); übergeben wir den typen in <>.
  const [ inputData, setInputData ] = useState<string>("");

  // Ein onChange event ist vom type React.ChangeEvent auf dem HTMLInputElement.
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void
  {
    setInputData(e.target.value);
  }


  return (
    <div className="App">
      <header className="App-header">
        <Header testWert="Hallo"/>
        <p>
          { testFunction() }
        </p>
        <h4>Ein kleiner input als test</h4>
        <input
          type="text"
          onChange={ (e) => handleChange(e) }
        />
        <p>
          {
            inputData
          }
        </p>
      </header>
    </div>
  );
}

export default App;
