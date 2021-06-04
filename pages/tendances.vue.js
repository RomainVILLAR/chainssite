var Tendances = Vue.component('Tendances',{
    template:
    `
    <div>
    <div v-for="tendance in TendanceListe" :key="tendance.id" class="publication">
    <div class="entete-div">
        <img class="pp-user" v-bind:src="tendance.photo_profil" alt="">
        <span class="pseudo-user">{{tendance.pseudo}}</span>
        <span class="id-user">{{tendance.identifiant}}</span>
    </div>
    <div class="description-div">
        <p class="description">
            {{tendance.description}}
        </p>
    </div>
    <div class="image-div">
        <img class="image-publication" v-bind:src="tendance.contenu" alt="">
    </div>
    <div class="infos-div">
        <span class="mylink-from"> de @{{tendance.chains_de}}</span>
        <span class="date-publication">{{tendance.date}}</span>
    </div>
    <div class="action-div">
        <div class="action-contener">
            <a class="like-publication" href="">Like</a>
            <span class="nb-like">{{tendance.nombre_like}}</span>
        </div>

        <div class="action-contener">
            <a class="commentaire-publication" href="">Commentaire</a>
            <span class="nb-commentaire">{{tendance.nombre_commentaires}}</span>
        </div>

        <div class="action-contener">
            <a class="mylink-publication" href="">Mylink</a>
            <span class="nb-link">{{tendance.nombre_chains}}</span>
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
            TendanceListe: []

        }
    },
    mounted() {
        axios.get('json/tendances.json')
            .then(response => {
                this.TendanceListe = response.data;
                console.log("TendanceListe", this.TendanceListe);
            })
            .catch(function (error){
                console.log(error)
            })
    },
    methods: {}
});