const red = "\x1b[31m";
const green = "\x1b[32m";
const reset = "\x1b[0m";

export function logError(message: string, ...rest: string[]) {
  console.error(red + "[ERROR]:" + message + reset + "\n", ...rest);
}

export function logInfo(message: string, ...rest: string[]) {
  console.info(green + "[INFO]: " + message + reset + "\n", ...rest);
}
