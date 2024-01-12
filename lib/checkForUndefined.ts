import type { EnvironmentVariable, EnvironmentVariables } from "../lib/types";

export default function CheckForUndefined(
  variables: EnvironmentVariables
): string[] {
  const checkedVariables: string[] = [];
  variables.forEach((variable) => {
    const checkedVariable = CheckVariable(variable);
    checkedVariables.push(checkedVariable);
  });
  return checkedVariables;
}

function CheckVariable(variable: EnvironmentVariable): string {
  if (variable === undefined) {
    throw new Error(`Variable is not defined`);
  } else {
    return variable;
  }
}
