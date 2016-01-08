import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newPotion(formData) {
            var thisPotion = this.store.createRecord(
                'potion', 
                {
                    name: formData.name,//'Cure for Boils',
                    effect: formData.effect,// 'Cures most of the boils from potions.',
                    ingredients: formData.ingredients
                }
            );
            thisPotion.save();
            /*var ingredient;
            for(var i = 0; i < formData.ingredients.length; i++) {
                ingredient = this.store.createRecord(
                    'ingredient',
                    {
                        name: formData.ingredients[i],
                        //potion: thisPotion
                    }
                );
                ingredient.save();
                
                this.store.find('potion', thisPotion.name).then(function(poti) {
                    poti.set('ingredients', [ingredient]);
                    poti.save();
                });
                
            }*/
                
            this.transitionToRoute('potions.list');
        }
    }
});
