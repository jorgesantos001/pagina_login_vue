const app = Vue.createApp({
    data() {
        return {
            loginRealizado: false,
            avisoLogin: '',
            cadastroRealizado: false,
            avisoCadastro: '',
            name: '',
            username: '',
            password: '',
        };
    },
    methods: {
        login() {
            console.log("Clicou em Login");
            if (this.username && this.password) {
                this.loginRealizado = true;
                this.avisoLogin = "Login realizado";
            } else {
                this.avisoLogin = "Por favor, insira o email e a senha.";
            }
        },
        cadastrar() {
            console.log("Clicou em Cadastrar");
            if (this.name && this.username && this.password) {
                this.cadastroRealizado = true;
                this.avisoCadastro = "Cadastro realizado";
            } else {
                this.avisoLogin = "Por favor, insira o nome, email e a senha.";
            }
        },
        limparAviso() {
            this.avisoLogin = ''; // Limpa o aviso quando os campos de entrada são preenchidos
        }
    }
});
app.mount("#app");



