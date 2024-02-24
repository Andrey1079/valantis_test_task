import apiRequest from './apiRequest';

const getIds = (offset = 0, limit) => {
  const body = {
    action: 'get_ids',
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

const getFilteredProducts = (field, value) => {
  const body = {
    action: 'filter',
    params: {},
  };
  body.params[field] = value;
  const items = apiRequest(body);
  return items;
};

export { getIds, getItems, getFilteredProducts };
