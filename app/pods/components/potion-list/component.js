import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deletePotion(potion) {
            potion.deleteRecord();
            potion.save();
        }
    }
    
});
