import alfy from "alfy"
import fs from "fs"

let { input } = alfy

// Search file in ~/.password-store
let files = fs.readdirSync(process.env.HOME + "/.password-store")

// filter file with input keyword
let inputLowercase = input.toLowerCase()
let filteredFiles = files.filter(file => file.toLowerCase().includes(inputLowercase))
for (let i in filteredFiles) {
	filteredFiles[i] = filteredFiles[i].replace(".gpg", "")
}

// output to alfred
alfy.output(filteredFiles.map(file => {
	return {
		title: file,
		subtitle: "Autofill username and password.",
		arg: file,
	}
}))