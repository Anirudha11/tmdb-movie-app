import Controller from '@ember/controller';

export default Controller.extend({
	actions :{
		rollbackToFavourites(){
			return this.store.rollbackAttributes();
		}
	}
});
