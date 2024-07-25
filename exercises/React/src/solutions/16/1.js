import { createContext, useContext, useState } from 'react'

export const LanguageContext = createContext('it')

export function Hello() {
	const language = useContext(LanguageContext)

	return (
		<p>
			<span>{language === 'en' ? 'Hello, World!' : 'Ciao, Mondo!'}</span>
		</p>
	)
}

export function Container() {
	const [language, setLanguage] = useState('en')

	function handleLanguageChange(event) {
		setLanguage(event.target.value)
	}

	return (
		<div>
			<select data-testid="language-select" name="language" value={language} onChange={handleLanguageChange}>
				<option value="en">English</option>
				<option value="it">Italiano</option>
			</select>
			<LanguageContext.Provider value={language}>
				<Hello />
			</LanguageContext.Provider>
		</div>
	)
}
