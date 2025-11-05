import tokens from "../tokens/tokens.json";

export const colors = tokens.colors;
export const spacing = tokens.spacing;
export const typography = tokens.typography;

export const getToken = (path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], tokens);
};
