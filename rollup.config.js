import webWorkerLoader from 'rollup-plugin-web-worker-loader';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default [{
  input: 'src/index.js',
  output: {
    name: "Graphviz",
    format: 'umd',
    dir: "lib"
  },
  plugins: [
    nodeResolve(),
    webWorkerLoader(),
    terser()
  ]
}];