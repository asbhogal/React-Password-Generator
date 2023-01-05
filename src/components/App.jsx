import "../scss/index.scss";

const App = () => {
    return (
        <div className="Container">
        <h1 className="PasswordGeneratorHeader">Password Generator</h1>
            <div className="PasswordGenerator">
                <h2>Password</h2>
                <button className="CopyPasswordBtn">
                    <i className="fa-solid fa-clipboard"></i>
                </button>
            </div>
            <div className="Forms">
                <div className="FormGroup">
                    <label htmlFor="PasswordStrength">Password Strength</label>
                    <label for="PasswordStrengthSlider" id="SliderStrengthText">8</label>
                    <input type="range" id="PasswordStrengthSlider" name="PasswordStrengthSlider" max="65" min="8"/>
                </div>
                <div className="FormGroup">
                    <label htmlFor="UpperCaseLetters">Uppercase Letters (A-Z)</label>
                    <input type="checkbox" id="UpperCaseLettersCheck" name="UpperCaseLettersCheck"/>
                </div>
                <div className="FormGroup">
                    <label htmlFor="LowerCaseLetters">Lowercase Letters (a-z)</label>
                    <input type="checkbox" id="LowerCaseLettersCheck" name="LowerCaseLettersCheck"/>
                </div>
                <div className="FormGroup">
                    <label htmlFor="LowerCaseLetters">Numbers (0-9)</label>
                    <input type="checkbox" id="NumbersCheck" name="NumbersCheck"/>
                </div>
                <div className="FormGroup">
                    <label htmlFor="LowerCaseLetters">Symbols</label>
                    <input type="checkbox" id="SymbolsCheck" name="SymbolsCheck"/>
                </div>
            </div>
            <button className="PasswordGeneratorBtn">Generate Password</button>
        </div>
    )
}

export default App;