import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newPotion(formData) {
            console.log(formData);
            var potion = this.store.createRecord(
                'potion', 
                Object.assign(
                    {
                        name: 'Cure for Boils',
                        effect: 'Cures most of the boils from potions.',
                        ingredients: '6 snake fangs, 4 horned slugs, 2 porcupine quills'
                    }, 
                    formData
                )
            );
            potion.save();
            this.transitionToRoute('potions.list');
        }
    }
});
