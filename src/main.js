// console.log(window.Vue)
// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// import Demo from './Demo.vue'

// console.log(Demo)

// new Vue({
//   el: '#frank',
//   render(h) {
//     return h(Demo)
//   }
// })

// const vm = new Vue({
//   render: h => h(Demo)
// })

// vm.$mount('#frank')

/*******  start1    **************   */
// import Demo from './Demo.vue'

// const Vue = window.Vue

// Vue.config.productionTip = false


// // Vue实例
// // Vue对象
// new Vue({
//   // render: h => h(Demo)
//   components: { Demo },
//   data: {
//     visible: true
//   },
//   template: `
//     <div>
//       <button @click='toggle'>toggle</button>
//       <hr>
//       <Demo v-if="visible === true"/>
//     </div>
//   `,
//   methods: {
//     toggle() {
//       this.visible = !this.visible
//     }
//   }
// }).$mount('#frank')

/*******************  end1 **************** */

import Demo from './demo2.vue'

const Vue = window.Vue

Vue.config.productionTip = false


// Vue实例
// Vue对象
new Vue({
  // render: h => h(Demo)
  components: { Demo },
  data: {
    visible: true,
    n: 0
  },
  template: `
    <div>
      // <Demo message="你好 props"/>
      {{n}}
      <Demo :message="n" :fn="add"/>
    </div>
  `,
  methods: {
    add() {
      this.n += 1
    },
    toggle() {
      this.visible = !this.visible
    }
  }
}).$mount('#frank')