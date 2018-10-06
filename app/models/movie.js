import DS from 'ember-data';

// const { attr } = DS;

import attr from 'ember-data/attr'

export default DS.Model.extend({
  title: DS.attr('string'),
  poster_path: DS.attr('string'),
  overview: DS.attr('string'),
  release_date: DS.attr('string'),
  popularity: DS.attr('string')
});
