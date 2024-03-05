import { themes } from "@storybook/theming";

import "../dist/assets/js/bootstrap.min.js";
import "../dist/assets/css/qld.bootstrap.css";


const preview = {

	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		hideNoControlsWarning: true,
		expanded: true,
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		html: {
			highlighter: {
				wrapLines: false,
			},
		},
		docs: {
			source: {
				excludeDecorators: true,
			},

		},
		backgrounds: {
			default: 'Light',
			values: [
				{
					name: 'Light',
					value: 'var(--qld-white)'
				},
				{
					name: 'Alternative',
					value: 'var(--qld-light-grey-alt)'
				},
				{
					name: 'Dark',
					value: 'var(--qld-sapphire-blue)'
				},
				{
					name: 'Dark alternative',
					value: 'var(--qld-dark-blue)'
				},
			]
		}
	},

	decorators: [
		(Story) => {
			return `
			<div class="container-fluid">
				<div class="row">
					<div class="col-12">
					${Story()}
					</div>
				</div>
			</div>
      		`;
		},
	],
};

export default preview;
