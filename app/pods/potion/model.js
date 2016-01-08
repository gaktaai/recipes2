import DS from 'ember-data';

const potionModel = DS.Model.extend({
  name: DS.attr('string'),
  effect: DS.attr('string'),
  ingredients: DS.attr('string')//DS.hasMany('ingredient')
});

export default potionModel;