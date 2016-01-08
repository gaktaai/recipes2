import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyPotion(formData) {
            let potion = this.get('model');
            potion.setProperties(formData);
            return potion.save().then(() => {
                this.transitionToRoute('potions.list');
            });
        }
    }
});
