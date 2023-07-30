import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
	* {
		margin: 0;
		font-family: 'Nunito', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	p {
		font-family: 'Nunito', sans-serif !important;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}
	.search-product-input {
		border-radius: 100px;
		z-index: 2;
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
	}

	.search-product-input-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		background-color: white;
		z-index: 2;
		margin-left: 1.5em;
		border-radius: 30px 30px 0 0;
	}

	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: none;
		z-index: 1;
	}

	.backdrop.active {
		display: block;
	}

	.navigation {
		height: 60px
	}

	.navigation-categories {
		background-color: #525050;
		position: absolute;
		top: 60px;
	}

	@media (max-width: 768px) {
		.backdrop {
			background-color: #eee;
		}
		.search-product-input-container {
			position: fixed;
			top: 30px;
			width: 90%;
		}
		.search-product-input {
			position: fixed;
			top: 30px;
			width: 90%;
		}
		.navigation {
			height: 45px
		}

		.navigation-categories {
			top: 45px;
		}
	}
    `;

export default GlobalCSS;
