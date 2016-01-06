import Ember from 'ember';

export default Ember.Component.extend({
    validationErrors: Ember.Object.create(),
    
    actions: {
        submit() {
            if(!this.validate()) {
                return;    
            }
            
            this.get('onSave')({
                name: this.$('#name').val(),
                effect: this.$('#effect').val(),
                ingredients: this.$('#ingredients').val()
            });
        },
    },
    
    validate() {
        var name = this.$('#name').val();
        var effect = this.$('#effect').val();
        var ingredients = this.$('#ingredients').val();
        
        this.set('validationErrors.name', name === '' ? 'Required' : '');
        this.set('validationErrors.effect', effect === '' ? 'Required' : '');
        this.set('validationErrors.ingredients', ingredients === '' ? 'Required, e.g.: Boomslang Skin, Bezoar, Unicorn Horn' : '');
        
        return this.get('validationErrors.name') === '' && this.get('validationErrors.effect') === '' && this.get('validationErrors.ingredients') === '';
    }
});
