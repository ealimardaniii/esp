import {Urls} from './Urls';
import {get} from './Http';

const receive = async () => {
  const result = await get(Urls.FIRST_URL);
  return result;
};

module.exports = {
  receive: receive,
};
