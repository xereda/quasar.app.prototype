<template>
  <div>
    <div slot="header" class="toolbar primary">
      <q-search v-model="search" class="primary"></q-search>
    </div>
    <div class="layout-padding">
      <div class="list item-delimiter">
        <router-link tag="div" class="item item-link" v-for="esp in listaComFiltro" to="/porMedico">
          <div class="item-content">
            {{ esp.nome }}
          </div>
          <div class="item-secondary stamp">
              <span class="label bg-grey-4 text-grey-8 ">{{ esp.total }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.setHeaderTitle('Por especialidade...')
  },
  data () {
    return {
      search: '',
      especilidades: [
        { nome: 'Acupuntura', total: '07' },
        { nome: 'Alergia e Imunologia', total: '13' },
        { nome: 'Cardiologia', total: '11' },
        { nome: 'Endocronologia', total: '07' },
        { nome: 'Oftalmologia', total: '19' },
        { nome: 'Pediatria', total: '23' },
        { nome: 'Pneumologia', total: '15' }
      ]
    }
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ])
  },
  computed: {
    listaComFiltro () {
      return this.especilidades.filter((element) => {
        return element.nome.toUpperCase().indexOf(this.search.toUpperCase()) > -1
      })
    }
  }
}
</script>

<style scoped>

  .customLabel {
    width: 35px;
  }

</style>
