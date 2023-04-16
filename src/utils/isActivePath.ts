/**
 * Analyze current location path and returns a boolean
 * @param pathname - Current location path
 * @param path - Redirection path
 */
export const isActivePath = (
  pathname: string,
  path: string
) => pathname === path || (pathname.includes(path) && path !== '/')