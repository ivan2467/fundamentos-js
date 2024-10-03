import * as fs from "node:fs/promises";
import * as sync_fs from "node:fs";

for (let i = 1; i <= 21; i++) {
  let a = i;
  if (a < 10) {
    a = "0" + a;
  }

  let dir = `./ejer${a}`;
  let appFile = dir.concat("/app.js");

  if (!sync_fs.existsSync(dir)) {
    fs.mkdir(dir);
  }
  if (!sync_fs.existsSync(appFile)) {
    fs.appendFile(appFile, "");
  }
}
