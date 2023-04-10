import { Graphviz } from "@hpcc-js/wasm";

onmessage = async (e) => {
  const graphviz = await Graphviz.load();
  const {dotSource, outputFormat, layoutEngine, options} = e.data
  const res = graphviz.layout(dotSource, outputFormat, layoutEngine, options);
  postMessage(res);
};
