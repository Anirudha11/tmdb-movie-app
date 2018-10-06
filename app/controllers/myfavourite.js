import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteFavourites(movie){
        this.store.findRecord('myfavourite', parseInt(movie.get('id')),{ backgroundReload: true }).then(function(movie){
        movie.destroyRecord();
        // movie.deleteRecord();
        // movie.save();
        // movie.save();
      });
      // this.transitionTo('myfavourite');
    }
  }
});
