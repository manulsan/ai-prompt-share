/**
 * Get responsive container class based on screen size
 * @param isMobile - boolean indicating if screen is mobile size
 * @returns CSS class name for container
 */
export const getContainerClass = (isMobile: boolean): string => {
  return isMobile ? "mobile_div" : "desktop_div";
};

/**
 * Get responsive grid class based on screen size
 * @param isMobile - boolean indicating if screen is mobile size
 * @returns CSS class name for grid layout
 */
export const getGridClass = (isMobile: boolean): string => {
  return isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
};
