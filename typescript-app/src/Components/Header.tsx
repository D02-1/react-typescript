import { useState } from 'react';

// Für die datenübergabe an unseren komponenten, erstellen wir ein interface
interface HeaderProps
{
    testWert: string;
}

interface ISignUpData
{
    firstName: string,
    lastName: string,
    isAdmin: boolean
}

interface ITestData
{
    testBool: boolean
}

// Array in typescript:
// Ein gemischtes array ist in typescript nicht möglich, um dies zu tun, müssen wir die typendeklaration wegnehmen, und somit typescript umgehen.
const fruits: string[] = ['Apfel', 'Erdbeere', 'Orange' ];

// Ein komponent ist vom typ JSX.Element. // Früher: React.FunctionComponent
const Header = ({ testWert } : HeaderProps) : JSX.Element => 
// const Header = ({ testWert } : { testWert: string }) : JSX.Element => 
{
    const [signUpData, setSignUpData] = useState<ISignUpData>({
        firstName: "Max",
        lastName: "Mustermann",
        isAdmin: true
    });

    // Bei einem state hook der undefined beinhaltet soll, müssen wir trotzdem den späteren typen angeben.
    const [ testData, setTestData ] = useState<ITestData | undefined>(undefined);

    return(
        <div>Header mit wert:</div>
    );
}

export { Header };
