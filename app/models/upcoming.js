import DS from 'ember-data';

import attr from 'ember-data/attr'

export default DS.Model.extend({

  poster_path: DS.attr('string'),
  title: DS.attr('string'),
  release_date: DS.attr('string'),
  popularity: DS.attr('string'),
  overview: DS.attr('string')
});
