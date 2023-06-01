const DEFAULT_PAGE_LIMIT = 0;

export function getPagination(query: { page: string; limit: string }) {
  const page = Math.abs(Number(query.page)) || 1;
  const limit = Math.abs(Number(query.limit)) || DEFAULT_PAGE_LIMIT;

  const skip = (page - 1) * limit;

  return {
    skip,
    limit,
  };
}
