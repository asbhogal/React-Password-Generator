import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from "../constants/characters";
import { COPY_SUCCESS, ERROR_NO_SELECTION , NO_PASSWORD } from "../constants/message";
import 'react-toastify/dist/ReactToastify.css';
import "../scss/index.scss";

const App = () => {

    const   [password, setPassword] = useState('');
    const   [passwordLength, setPasswordLength] = useState(8);
    const   [includeUppercase, setIncludeUppercase] = useState(false);
    const   [includeLowercase, setIncludeLowercase] = useState(false);
    const   [includeNumbers, setIncludeNumbers] = useState(false);
    const   [includeSymbols, setIncludeSymbols] = useState(false);

    const   handleGeneratePassword = (e) => {

        if(!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {

            notifyError(ERROR_NO_SELECTION);

        }

        let characterList = '';

        void(includeUppercase && (characterList += upperCaseLetters));

        void(includeLowercase && (characterList += lowerCaseLetters));

        void(includeNumbers && (characterList += numbers));

        void(includeSymbols && (characterList += specialCharacters));

        setPassword(createPassword(characterList));

    }

    const   createPassword = (characterList) => {

        let password = '';

        const characterListLength = characterList.length;

        for (let i = 0; i < passwordLength; i++) {

            const characterIndex = Math.round(Math.random() * characterListLength);

            password += characterList.charAt(characterIndex);

        }

        return password;

    }

    const   copyToClipboard = () => {

        navigator.clipboard.writeText(password)
        .then(() => {
            console.log('password copied');
        })
        .catch(err => {
            console.log('password copy failed', err);
        })

    }

    const notifySuccess = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };

    const notifyError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };

    const notifyNoCopy = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    const   handleCopyPassword = (e) => {

        copyToClipboard();

        return !password ? notifyNoCopy(NO_PASSWORD) : notifySuccess(COPY_SUCCESS);

    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={ 5000 }
                hideProgressBar={ false }
                newestOnTop={ false }
                closeOnClick
                rtl={ false }
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="Container">
            <h1 className="PasswordGeneratorHeader">Password Generator</h1>
                <div className="PasswordGenerator">
                    <h2>{ password }</h2>
                    <button onClick={ handleCopyPassword }
                        className="CopyPasswordBtn">
                        <i className="fa-solid fa-clipboard"></i>
                    </button>
                </div>
                <div className="Forms">
                    <div className="FormGroup">
                        <label  htmlFor="PasswordStrength">Password Length</label>
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
        </>
        
    )
}

export default App;