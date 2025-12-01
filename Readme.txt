Link git hub : https://github.com/Davinson13/ChakraUI.git


*Download Node.js:*
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Open CMD inside the folder once Node.js is installed and working.

Create the project with Chakra UI and Vite:

	npm create vite@latest my-chakra-app -- --template react


	* Ok to proceed? (y) → type y
	* Use rolldown-vite (Experimental)? → Yes
	* Install with npm and start now? → Yes

Enter the folder created by the installation:

	cd my-chakra-app


Install updates:

	npm install

Install Chakra UI(Inside the project):

	npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

Install Lucide components:

	npm install lucide-react

Install Chakra icon packages:

	npm install @chakra-ui/icons

Run the project:

	npm run dev


Install compatible versions (if needed):

npm uninstall @chakra-ui/react @chakra-ui/icons
npm install @chakra-ui/react@2 @chakra-ui/icons@2 framer-motion
