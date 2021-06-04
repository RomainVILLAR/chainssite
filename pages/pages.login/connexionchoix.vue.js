var ConnexionChoix = Vue.component('ConnexionChoix',{
    template:
    `
    
    <main>



    <div class="Slider">

    </div>
    <div class="form">

        <div class="barinfo">
            <div class="returnicon" onclick="javascript:history.go(-1);">
                <img src="img/nav/Retour.svg" alt="Bouton Retour">
            </div>

            <div class="heplicon">
                <img src="img/nav/Help.svg" alt="Bouton Aide">
            </div>
        </div>

        <div class="titres">
            <h1>Chains</h1>
            <h2>Se connecter</h2>
        </div>

        <div class="choixlogin">
            <div class="emaillogin">
                <div class="emailecon">
                    <img src="img/nav/login/emailicon.svg" alt="">
                </div>

                <div class="input">
                    <router-link id="email-button" :to="{name:'Connexion'}">
                        Email
                    </router-link>
                </div>
            </div>
            <div class="googlelogin">
                <div class="googleicon">
                    <img src="img/nav/login/googleicon.svg" alt="">
                </div>


                <div class="input">

                <router-link id="google-button" :to="{name:''}">
                    Google
                </router-link>
            </div>





            </div>
            <div class="facebooklogin">
                <div class="facebookicon">
                    <img src="img/nav/login/facebookicon.svg" alt="">
                </div>


                <div class="input">

                <router-link id="facebook-button" :to="{name:''}">
                    Facebook
                </router-link>
                </div>
            </div>



        </div>




        <div class="autrechoix">
            <div class="decouvrir">

                <div class="input">
                <a href="http://chains.romainvillar.fr">
                    Découvrir
                </a>
            </div>



            </div>                    
            <div class="connection">

                <div class="input">

                <router-link id="connection-button" :to="{name:'InscriptionChoix'}">
                    Inscription
                </router-link>
            </div>

            </div>
        </div>

        </div>
            
            
            
            
            
        </main>


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