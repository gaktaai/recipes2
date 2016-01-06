import DS from 'ember-data';

const potionModel = DS.Model.extend({
  name: DS.attr('string'),
  effect: DS.attr('string'),
  ingredients: DS.attr('string')
});


potionModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'Polyjuice Potion',
            effect: 'Changes your appearance to look like someone else.',
            ingredients: 'Fluxweed, Knotgrass, Lacewing Flies, Leeches, Horn of Bicorn, Boomslang Skin, Piece of person you are turning into',
        }  
    ]
});

export default potionModel;