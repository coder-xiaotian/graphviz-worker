# GraphvizWorker

A web worker version of the [@hpcc-js/wasm](https://hpcc-systems.github.io/hpcc-js-wasm/classes/graphviz.Graphviz.html#class-graphviz) library.

## USAGE
npm install graphviz-worker

```javascript
import Graphviz from "graphviz-worker";

const graphviz = new Graphviz();
const dotSource = "digraph G { Hello -> World }";
const jsonStr = await graphviz.layout(dotSource)
```

## API
### layout
layout(dotSource, outputFormat?, layoutEngine?, options?): string

#### Parameters
| Name           | Type                                                                                      | Default value | Description                                                  |
| :------------- |:------------------------------------------------------------------------------------------|:--------------| :----------------------------------------------------------- |
| `dotSource`    | `string`                                                                                  | `undefined`   | Required - graph definition in [DOT](https://graphviz.gitlab.io/doc/info/lang.html) language |
| `outputFormat` | [`Format`](#Format)                                                                               | `"json"`      | The format of the result.                                    |
| `layoutEngine` | [`Engine`](#Engine)                                                                       | `"dot"`       | The type of layout to perform.                               |
| `options?`     | [`Options`](https://hpcc-systems.github.io/hpcc-js-wasm/interfaces/graphviz.Options.html) | `undefined`   | Advanced Options for images, files, yInvert and nop.         |

### destroy
destroy(): void

Destroy the web worker.

## Types
### Format 
Format: "svg" | "dot" | "json" | "dot_json" | "xdot_json" | "plain" | "plain-ext"

Various graphic and data formats for end user, web, documents and other applications. See [Output Formats](https://graphviz.gitlab.io/docs/outputs/) for more information.

### Engine
Engine: "circo" | "dot" | "fdp" | "sfdp" | "neato" | "osage" | "patchwork" | "twopi"

Various algorithms for projecting abstract graphs into a space for visualization. See [Layout Engines](https://graphviz.gitlab.io/docs/layouts/) for more details.
