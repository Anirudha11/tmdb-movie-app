import Route from '@ember/routing/route';

export default Route.extend({
  model(){

    let model = {
      trending: this.store.findAll('movie'),
      upcoming: this.store.findAll('upcoming')
    };
    return model;
  },
  actions : {
    transitionToDetails(movie) {
      this.transitionTo("details", movie.get('id'), {queryParams: {modelName: movie.constructor.modelName}});
    }
  },
  setupController (controller, model)  {
      this._super(controller, model);
  }
});
