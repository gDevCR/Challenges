export const isProduction = (): boolean => {
  return window.location.host.toLowerCase().indexOf('locahost') === -1;
};
