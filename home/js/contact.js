// contact.js
new Vue({
    el: '#vue-contact',
    data: {
        name: '',
        feedback: '',
        submitted: false
    },
    methods: {
        submitForm() {
            if (this.name && this.feedback) {
                this.submitted = true;
            }
        }
    }
});
