const baseURL = process.env.NEXT_PUBLIC_API_URL;

const endPoints = Object.freeze({
  REGISTER: '/register',
});

/**
 * @author Rabie Dogho <rabie.dogho@gmail.com>
 * @description This function is used to replace the placeholder in a REST endpoint.
 * @example getRestApi( 'UPDATE_CLIENT_INFO', {rfpId : 5}) // where UPDATE_CLIENT_INFO: 'rfp/{rfpId}/client'.
 * @param endpoint: the endpoint.
 * @param args: The object which represents the placeholder names & values.
 */
export const getRestApi = (endpoint, { params = {}, query } = {}) => {
  let url = Object.keys(params).reduce(
    (prev, current) => prev.replace(new RegExp(`{${current}}`, 'g'), params[current]),
    endPoints[endpoint]
  );
  if (query) {
    const qs = new URLSearchParams(query).toString();
    url += `?${qs}`;
  }

  return baseURL + url;
};

export default getRestApi;
