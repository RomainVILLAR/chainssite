var Profil = Vue.component('Profil',{
    template:
    `
    <div class="profil-app">
                    <div class="profil-div">
                        <div class="profil-entete">
                            <img class="profil-pp" src="img/exemple/exemple pp.jpg" alt="">
                            <div class="profil-info-compte">
                                <span class="pseudo-user">lejos79865</span>
                                <span class="id-user">@lejos79865</span>
                            </div>
                        </div>
                        <div class="profil-donnees">
                            <span class="profil-nb-abonnements">56</span>
                            <span class="profil-nb-abonnes">76</span>
                            <span class="profil-date">mars 2020</span>
                        </div>
                    </div>
                    <div class="profil-media">
                        <span class="profil-like">J'aime</span>
                        <span class="profil-favoris">Favoris</span>
                        <span class="profil-mentions">Mentions</span>

                    </div>

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
                    <div class="message-div">
                        <img class="message-pp" src="img/exemple/exemple pp.jpg" alt="">
                        <div>
                            <div class="message-info-compte">
                                <span class="pseudo-user">lejos79865</span>
                                <span class="id-user">@lejos79865</span>
                            </div>
                            <p class="message-mention">t'as mentionné sur</p>
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