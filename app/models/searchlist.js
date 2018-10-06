import DS from 'ember-data';

// const {attr} = DS;

import attr from 'ember-data/attr'

export default DS.Model.extend({
  poster_path: DS.attr('string'),
  title: DS.attr('string')
});
