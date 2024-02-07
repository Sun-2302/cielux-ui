// tailwind.material.config.js

import withMT from '@material-tailwind/react/utils/withMT';
import tailwindConfig from './tailwind.config'; // Importez directement le fichier Tailwind CSS

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}, tailwindConfig);
