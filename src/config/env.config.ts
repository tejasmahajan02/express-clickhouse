// Add source map support for development
if (process.env.NODE_ENV !== "production") {
  require("source-map-support").install();
}

import * as dotenv from "dotenv";
dotenv.config({ path: process.cwd() + ".env" });
