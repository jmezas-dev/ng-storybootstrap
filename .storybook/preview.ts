import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";

import '!style-loader!css-loader!sass-loader!../src/styles.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    docs:{
      codePanel:true
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },
    },
  },
};

export default preview;
