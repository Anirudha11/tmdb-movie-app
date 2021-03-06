import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { hash } from 'rsvp';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movie');
  this.route('details', {path: '/details/:id'});
  this.route('favourite');
  this.route('myfavourite');
  this.route('search');
});

 Router.reopen({
   location:'hash'
 });

export default Router;
