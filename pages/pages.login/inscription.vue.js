var Inscription = Vue.component('Inscription',{
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
                <h2>S'inscrire</h2>
            </div>
    
            <div class="choixlogin">
                
                <div class="email">
    
                    <div class="input">
                        <input type="text" name="emailuser" id="emailuser" placeholder="E-Mail">
                    </div>
    
                </div>
                <div class="password">

    
                    <div class="input">
                        <input type="password" name="passworduser" id="passworduser" placeholder="Mot de passe">

                    </div>
                </div>
                <div class="verify_password">

    
                    <div class="input">
                        <input type="password" name="passworduser2" id="passworduser2" placeholder="Vallidez le mot de passe">

                    </div>
                </div>
    
    
            </div>
    
    
            <div class="autrechoix">
                <div class="confirmer">
    
                    <div class="input">
    
                    <input type="button" name="sendaccount" value="Confirmer" onclick="window.location.href='chains.html'">
                    </div>
    
    
    
                </div>                    
                <div class="connexion">
    
                    <div class="input">
    
                    <router-link id="connexion-button" :to="{name:'ConnexionChoix'}">
                        Connexion
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