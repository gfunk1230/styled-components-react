import { css } from "styled-components";

export const radiusMaker = (radius: string) => {
  let outPut = "";

  switch (radius) {
    case "optOne":
      outPut = "100px";
      break;
    case "optTwo":
      outPut = "300px";
      break;
    case "optThree":
      outPut = "500px";
      break;
    default:
      outPut = "50px";
  }

  return css`
    border-radius: ${outPut};
  `;
};
