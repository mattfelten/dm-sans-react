import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import '@fontsource/dm-sans/400.css';
// import '@fontsource/dm-sans/500.css';
// import '@fontsource/dm-sans/600.css';
// import '@fontsource/dm-sans/700.css';
// import '@fontsource-variable/dm-sans';
// import '@fontsource-variable/dm-sans/wght-italic.css';
import './dm-sans/index.css';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<h1>Budgeting & Planning</h1>
		<h2>Lorem ipsum dolor sit amet</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua. Ut enim ad minim veniam, quis nostrud exercitation
			ullamco laboris nisi ut aliquip ex ea commodo consequat.
			Duis aute irure dolor in reprehenderit in voluptate velit
			esse cillum dolore eu fugiat nulla pariatur. Excepteur
			sint occaecat cupidatat non proident, sunt in culpa qui
			officia deserunt mollit anim id est laborum.
		</p>
	</StrictMode>
);
