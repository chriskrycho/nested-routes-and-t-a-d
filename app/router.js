import EmberRouter from '@ember/routing/router';
import config from 'nested-routes-and-t-a-d/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
