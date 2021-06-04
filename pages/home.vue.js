var Home = Vue.component('Home',{
    template:
    `               <div>
                    <div v-for="publication in PublicationListe" :key="publication.id" class="publication">
                    <div class="entete-div">
                        <img class="pp-user" v-bind:src="publication.photo_profil" alt="">
                        <span class="pseudo-user">{{publication.pseudo}}</span>
                        <span class="id-user">{{publication.identifiant}}</span>
                    </div>
                    <div class="description-div">
                        <p class="description">
                            {{publication.description}}
                        </p>
                    </div>
                    <div class="image-div">
                        <img class="image-publication" v-bind:src="publication.contenu" alt="">
                    </div>
                    <div class="infos-div">
                        <span class="mylink-from"> de @{{publication.chains_de}}</span>
                        <span class="date-publication">{{publication.date}}</span>
                    </div>
                    <div class="action-div">
                        <div class="action-contener">
                            <a class="like-publication" href="">Like</a>
                            <span class="nb-like">{{publication.nombre_like}}</span>
                        </div>

                        <div class="action-contener">
                            <a class="commentaire-publication" href="">Commentaire</a>
                            <span class="nb-commentaire">{{publication.nombre_commentaires}}</span>
                        </div>

                        <div class="action-contener">
                            <a class="mylink-publication" href="">Mylink</a>
                            <span class="nb-link">{{publication.nombre_chains}}</span>
                        </div>

                        <div class="action-contener">
                        <a class="favoris-publication" href="">Favoris</a>
                        </div>
                        
                    </div>
                </div>
                </div>

    
    
    `,

    data() {
        return {
            PublicationListe: []

        }
    },
    mounted() {
        axios.get('json/publication.json')
            .then(response => {
                this.PublicationListe = response.data;
                console.log("PublicationListe", this.PublicationListe);
            })
            .catch(function (error){
                console.log(error)
            })
    },
    methods: {}
});