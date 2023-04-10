import GraphvizWorker from "web-worker:./worker.js"

export default class Graphviz {
  constructor() {
    this.worker = new GraphvizWorker();
  }
  layout(dotSource, outputFormat="json", layoutEngine = "dot", options = {}) {
    return new Promise((resolve, reject) => {
      this.worker.onmessage = (e) => {
        resolve(e.data);
      };
      this.worker.onerror = reject;
      this.worker.onmessageerror = reject;
      this.worker.postMessage({dotSource, outputFormat, options, layoutEngine});
    });
  }
  destroy() {
    this.worker.terminate();
  }
}
