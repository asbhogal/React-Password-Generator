import { useState } from "react";
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from "../constants/characters";
import "../scss/index.scss";

const App = () => {

    const   [password, setPassword] = useState('');
    const   [passwordLength, setPasswordLength] = useState(8);
    const   [includeUppercase, setIncludeUppercase] = useState(false);
    const   [includeLowercase, setIncludeLowercase] = useState(false);
    const   [includeNumbers, setIncludeNumbers] = useState(false);
    const   [includeSymbols, setIncludeSymbols] = useState(false);

    const   handleGeneratePassword = (e) => {

        let characterList = '';

        void(includeUppercase && (characterList = characterList + upperCaseLetters));

        void(includeLowercase && (characterList = characterList + lowerCaseLetters));

        void(includeNumbers && (characterList = characterList + numbers));

        void(includeSymbols && (characterList = characterList + specialCharacters));

        setPassword(characterList);
    }

    return (
        <div className="Container">
        <h1 className="PasswordGeneratorHeader">Password Generator</h1>
            <div className="PasswordGenerator">
                <h2>{ password }</h2>
                <button className="CopyPasswordBtn">
                    <i className="fa-solid fa-clipboard"></i>
                </button>
            </div>
            <div className="Forms">
                <div className="FormGroup">
                    <label htmlFor="PasswordStrength">Password Length</label>
                    <label  htmlFor="PasswordStrengthSlider" 
                            id="SliderStrengthText" 
                            className={ passwordLength <= 55 ? 'WeakPassword' : 'StrongPassword' }>
                                { passwordLength }
                            </label>
                    <input  type="range" 
                            id="PasswordStrengthSlider" 
                            name="PasswordStrengthSlider" 
                            max="120" 
                            min="8" 
                            step="1" 
                            defaultValue={ passwordLength }
                            onChange={ (e)=>setPasswordLength(e.target.value) }
                            />
                </div>
                <div className="FormGroup">
                    <label htmlFor="UpperCaseLetters">Uppercase Letters (A-Z)</label>
                    <input  type="checkbox" 
                            id="UpperCaseLettersCheck" 
                            name="UpperCaseLettersCheck" 
                            checked={ includeUppercase }
                            onChange={ (e) => setIncludeUppercase(e.target.checked) }
                            />
                </div>
                <div className="FormGroup">
                    <label htmlFor="LowerCaseLetters">Lowercase Letters (a-z)</label>
                    <input  type="checkbox" 
                            id="LowerCaseLettersCheck" 
                            name="LowerCaseLettersCheck" 
                            checked={ includeLowercase }
                            onChange={ (e) => setIncludeLowercase(e.target.checked) }
                            />
                </div>
                <div className="FormGroup">
                    <label htmlFor="Numbers">Numbers (0-9)</label>
                    <input  type="checkbox" 
                            id="NumbersCheck" 
                            name="NumbersCheck" 
                            checked={ includeNumbers }
                            onChange={ (e) => setIncludeNumbers(e.target.checked) }
                            />
                </div>
                <div className="FormGroup">
                    <label htmlFor="Symbols">Symbols</label>
                    <input  type="checkbox" 
                            id="SymbolsCheck" 
                            name="SymbolsCheck"
                            checked={ includeSymbols }
                            onChange={ (e) => setIncludeSymbols(e.target.checked) }
                            />
                </div>
            </div>
            <button className="PasswordGeneratorBtn" 
                    onClick={ handleGeneratePassword }>Generate Password</button>
        </div>
    )
}

export default App;