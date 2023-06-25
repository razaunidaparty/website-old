import Script, { handleClientScriptLoad } from "next/script";

import { PageModulesProps } from "./page.types";

export const handleModules = (modules: PageModulesProps[]) => {
  const modulesArray = [];
  if (modules.includes("tally")) {
    modulesArray.push(
      <Script
        key="tally"
        defer
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={handleClientScriptLoad}
      />
    );
  }
  return modulesArray;
};
