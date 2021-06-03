var Home = Vue.component('Home',{
    template:
    `
                    <div class="publication">
                    <div class="entete-div">
                        <img class="pp-user" src="img/exemple/exemple pp.jpg" alt="">
                        <span class="pseudo-user">lejos79865</span>
                        <span class="id-user">@lejos79865</span>
                    </div>
                    <div class="description-div">
                        <p class="description">
                            Suivez-moi pour d'autres memes marrants ! --------- > lejos79865
                        </p>
                    </div>
                    <div class="image-div">
                        <img class="image-publication" src="img/exemple/illustration_article_meme.jpg" alt="">
                    </div>
                    <div class="infos-div">
                        <span class="mylink-from"> de @jmelanchon</span>
                        <span class="date-publication">10 min</span>
                    </div>
                    <div class="action-div">
                        <div class="action-contener">
                            <a class="like-publication" href="">Like</a>
                            <span class="nb-like">192</span>
                        </div>

                        <div class="action-contener">
                            <a class="commentaire-publication" href="">Commentaire</a>
                            <span class="nb-commentaire">493</span>
                        </div>

                        <div class="action-contener">
                            <a class="mylink-publication" href="">Mylink</a>
                            <span class="nb-link">54</span>
                        </div>

                        <div class="action-contener">
                        <a class="favoris-publication" href="">Favoris</a>
                        </div>
                        
                    </div>
                </div>

    
    
    `,

    
    data(){
        return{

        }
    },

    mounted(){

    },

    methods:{

    }

})