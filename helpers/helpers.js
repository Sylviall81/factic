
import { JSDOM } from "jsdom";

export async function load(file) {
    let dom = await JSDOM.fromFile(file, {
      runScripts: "dangerously",
      resources: "usable",
    });
    return new Promise((resolve) => {
      dom.window.addEventListener("load", () => {
        resolve({
          window: dom.window,
          document: dom.window.document,
        });
      });
    });
  };