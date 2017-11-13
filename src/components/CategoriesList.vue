<template>
  <div class="category-wrapper" v-if="products">
    <ul>
      <li v-for="cat in productCategories">
        <a :href="categorytHref(cat.categoryId)">{{ cat.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import Products from '../data/items.json'
  import uniqBy from 'lodash/uniqBy'
  import orderBy from 'lodash/orderBy'

  export default {
    data: function () {
      return {
        products: Products
      }
    },

    methods: {
      categorytHref: function (categoryName) {
        return ['#/category/' + categoryName]
      }
    },

    computed: {
      productCategories: function () {
        let cats = []
        for (let row of this.products) {
          for (let item of row.categories) {
            cats.push(item)
          }
        }

        let uniquCats = uniqBy(cats, 'categoryId')

        return orderBy(uniquCats, 'name', 'asc')
      }
    }
  }
</script>
