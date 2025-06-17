/**
 * @file Postman API object model
 */
const BaseApi = require('../base_api');

/**
 * Postman API object model
 */
class PostmanApi extends BaseApi {
  constructor() {
    super({
      baseUrl: 'https://postman-echo.com'
    });
  }

  /**
   * Sends a GET request to the /get endpoint which echoes it back.
   * @param {object} parameters - Query parameters for the request.
   * @returns {Promise<object>} The response from the API.
   */
  async getGet (parameters = {}) {
    return this.get('/get', parameters);
  }

  /**
   * Sends a POST request to the /post endpoint which echoes it back.
   * @param {object} parameters - Query parameters for the request.
   * @param {object} data - Body data for the request.
   * @returns {Promise<object>} The response from the API.
   */
  async postPost (parameters = {}, data = {}) {
    return this.post(`/post`, data, parameters);
  }
}

module.exports = PostmanApi;
