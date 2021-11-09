new Vue({
    el: '#example-3',
    data: {
      show: true
    }
  });

Vue.component("alerta", {
    props: ['tipo', 'posicion','frase','listado'],
    template: "#mensajeAlerta",
    methods: {
        ocultarMensaje(){
            this.$emit('ocultar');
        }
    },
    data() {
        return {
            alerta: this.frase
        };
    }
});
const app = new Vue({
    el: "#cont",
    data: {
        mostrarGto: false,
        mostrarIra: false,
        mostrarLeon: false,
        mostrarCel: false,
        mostrarSal: false,
        mostrarSMA: false,
        mostrarSil: false,
        mostrarYur: false,
    }
});