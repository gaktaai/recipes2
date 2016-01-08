import DS from 'ember-data';

const ingredientModel = DS.Model.extend({
  name: DS.attr('string'),
  potion: DS.belongsTo('potion')
});

export default ingredientModel;