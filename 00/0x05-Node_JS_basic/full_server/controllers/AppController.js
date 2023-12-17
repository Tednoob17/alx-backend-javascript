/*
 * Controller for all routes in the application
 */

class AppController {
  static getHomePage(_, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
