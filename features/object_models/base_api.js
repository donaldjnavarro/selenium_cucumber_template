/**
 * @file Core API handling. Note that handling of specific APIs is handled elsewhere, but uses this in its approach
 */
const axios = require('axios');

/**
 * Core API client for making HTTP requests using Axios.
 * @class
 * @param {object} options - Configuration options.
 * @param {string} options.baseUrl - The base URL for API requests.
 * @param {object} [options.defaultHeaders={}] - Default headers for all requests.
 * @param {number} [options.timeout=10000] - Request timeout in milliseconds.
 */
class BaseApi {
  constructor({ baseUrl, defaultHeaders = {}, timeout = 10000 }) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = defaultHeaders;
    this.timeout = timeout;
  }

  /**
   * Makes an HTTP request using Axios.
   * @param {object} options - Request options.
   * @param {string} options.method - HTTP method (get, post, put, delete).
   * @param {string} options.endpoint - API endpoint to call.
   * @param {object} [options.data] - Data to send in the request body.
   * @param {object} [options.params] - URL query parameters.
   * @param {object} [options.headers] - Headers for this request.
   * @returns {Promise<object>} Axios response object.
   */
  async request({ method, endpoint, data, params, headers = {} }) {
    const url = `${this.baseUrl}${endpoint}`;
    const mergedHeaders = { ...this.defaultHeaders, ...headers };

    try {
      logger.debug(`Sending ${method.toUpperCase()} request to ${url} with params (${JSON.stringify(params)}) and data (${JSON.stringify(data)})`);
      const response = await axios({
        method,
        url,
        data,
        params,
        headers: mergedHeaders,
        timeout: this.timeout,
      });
      logger.debug(`Response ${response.status} from ${url}`);
      return response;
    } catch (error) {
      logger.error(`Error during ${method.toUpperCase()} ${url}: ${error.message}`);
      if (error.response) {
        logger.error(JSON.stringify(error.response.data, null, 2));
      }
      throw error;
    }
  }

  /**
   * Makes a GET request to the specified endpoint.
   * @param {string} endpoint - API endpoint to call.
   * @param {object} [params] - URL query parameters.
   * @param {object} [headers] - Headers for this request.
   * @returns {Promise<object>} Axios response object.
   */
  get(endpoint, params = {}, headers = {}) {
    return this.request({ method: 'get', endpoint, params, headers });
  }

  /**
   * Makes a POST request to the specified endpoint.
   * @param {string} endpoint - API endpoint to call.
   * @param {object} [data] - Data to send in the request body.
   * @param {object} [params] - URL query parameters.
   * @param {object} [headers] - Headers for this request.
   * @returns {Promise<object>} Axios response object.
   */
  post(endpoint, data = {}, params = {}, headers = {}) {
    return this.request({ method: 'post', endpoint, data, params, headers });
  }

  /**
   * Makes a PUT request to the specified endpoint.
   * @param {string} endpoint - API endpoint to call.
   * @param {object} [data] - Data to send in the request body.
   * @param {object} [headers] - Headers for this request.
   * @returns {Promise<object>} Axios response object.
   */
  put(endpoint, data = {}, headers = {}) {
    return this.request({ method: 'put', endpoint, data, headers });
  }

  /**
   * Makes a DELETE request to the specified endpoint.
   * @param {string} endpoint - API endpoint to call.
   * @param {object} [headers] - Headers for this request.
   * @returns {Promise<object>} Axios response object.
   */
  delete(endpoint, headers = {}) {
    return this.request({ method: 'delete', endpoint, headers });
  }
}

module.exports = BaseApi;
