import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newPotion(formData) {
            var potion = this.store.createRecord(
                'potion', 
                {
                    name: formData.name,
                    effect: formData.effect,
                    ingredients: formData.ingredients
                }
            );
            potion.save();
            
            
            
            /* ingredient;
            for(i = 0; i < formData.ingredients.length; i++) {
                ingredient = this.store.createRecord(
                    'ingredient', {name: formData.ingredients[i]}
                );
                ingredient.save();
            
                var poti = this.store.find('potion', {name: thisPotion.name});
                poti.set('ingredients', ingTrim);
                poti.save();
            }*/
                
            this.transitionToRoute('potions.list');
        }
    }
});
