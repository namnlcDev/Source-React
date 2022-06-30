export const parseObjectsToString = (objects) =>
{
  if (objects instanceof Array && !objects.every((ob) => ob instanceof Object)) { // Apply for field sort
    return `${objects.map((item) => `${item}`)}`
  } else if (objects instanceof Array && objects.every((ob) => ob instanceof Object)) { // Apply for field filter
    return `${objects.map((item) => `${Object.keys(item)}:${Object.values(item)}`)}`
  } else {
    return `${Object.keys(objects)}:${Object.values(objects)}` // Apply for field queries
  }
}

export const parseParamsToQueryString = (params) =>
{
  const query = `${Object.keys(params).map(key => `${key}=${parseObjectsToString(params[key])}`).join('&')}`
  return query
}