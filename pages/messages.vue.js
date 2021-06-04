    var Messages = Vue.component('Messages',{
        template:
        `
    
        
    <div class="message-vue">
        
    <div class="message-recherche-bar">
        <input class="message-recherche-input" type="search" id="search">
        <div class="message-recherche-button">
        </div>
        </div>

        <div v-for="message in MessageListe" :key="message.id" class="message-div">
            <img class="message-pp" v-bind:src="message.photo_profil" alt="">
            <div>
                <div class="message-info-compte">
                    <span class="pseudo-user">{{message.profil_envoyeur}}</span>
                    <span class="id-user">{{message.identifiant_envoyeur}}</span>
                </div>
                <p class="message-extrait">{{message.message}}</p>
            </div>
        </div>
    </div>
</div>



    
`,
data() {
    return {
        MessageListe: []

    }
},
mounted() {
    axios.get('json/message.json')
        .then(response => {
            this.MessageListe = response.data;
            console.log("MessageListe", this.MessageListe);
        })
        .catch(function (error){
            console.log(error)
        })
},
methods: {}
});