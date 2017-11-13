<template>

  <div class="wrapper">

    <h1 v-if="currentCategoryName()">{{ currentCategoryName() }} </h1>
    <h1 v-else>{{ pageName }}</h1>

    <div class="left">
      <products-list></products-list>
    </div>
    <div class="right">
      <categories-list></categories-list>
    </div>
  </div>

</template>

<script>
  import ProductBox from './ProductBox.vue'
  import CategoriesList from './CategoriesList.vue'
  import Products from '../data/items.json'
  import uniqBy from 'lodash/uniqBy'

  export default {
    name: 'AllProducts',

    data: function () {
      return {
        pageName: 'Wszystkie produkty',
        products: Products
      }
    },

    methods: {
      productCategories: function () {
        let cats = []
        for (let row of this.products) {
          for (let item of row.categories) {
            cats.push(item)
          }
        }
        return uniqBy(cats, 'categoryId')
      },

      currentCategoryName: function () {
        if (this.$route.params.cid) {
          let categories = this.productCategories()
          let selected = categories.filter(item => item.categoryId === parseInt(this.$route.params.cid))
          return selected[0].name
        } else {
          return false
        }
      }
    },

    components: {
      'products-list': ProductBox,
      'categories-list': CategoriesList
    }
  }
</script>

<style>
  h1 {
    width: 100%;
    padding: 0 10px
  }

  .wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .left{
    width: 80%;
  }

  .right{
    width: 15%;
  }
</style>
