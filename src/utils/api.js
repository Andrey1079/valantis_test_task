import { PAGINATION_LIMIT } from '../variables/variables';
import apiRequest from './apiRequest';

const getIds = (offset = 0) => {
  const body = {
    action: 'get_ids',
    params: { offset: offset, limit: PAGINATION_LIMIT },
  };
  const ids = apiRequest(body);
  return ids;
};

const getItems = (ids) => {
  const body = {
    action: 'get_items',
    params: { ids },
  };
  const items = apiRequest(body);
  return items;
};

export { getIds, getItems };
