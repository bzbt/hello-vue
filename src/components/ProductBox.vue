<template>

  <div class="products-wrapper" v-if="products">
    <div class="product" v-for="row in products">
      <div class="box">

        <!--<div class="thumb" :style="{ backgroundImage: 'url(' + row.image + ')' }"></div>-->
        <div class="thumb" style="background-image: url('http://via.placeholder.com/600x300')"></div>
        <h4>
          {{ row.title }}
          <small>{{ price(row.unitPrice, row.weight) }}</small>
        </h4>

        <div class="btn-group">
          <a href="#">Do koszyka</a>
          <a :href="productHref(row.pid)">Zobacz</a>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Brak zawartości do wyświetlenia
  </div>
</template>
<script>
  import Products from '../data/items.json'
//  import flatMap from 'lodash/flatMap'
  import uniqBy from 'lodash/uniqBy'

  export default {
    data: function () {
      return {
        products: [],
        categoryId: ''
      }
    },

    created: function () {
      this.getProducts()
    },

    methods: {
      getCategories: function () {
        let cats = []
        for (let row of this.products) {
          for (let item of row.categories) {
            cats.push(item)
          }
        }

        return uniqBy(cats, 'categoryId')
      },

      getProducts: function () {
        let selected = []
        if (this.$route.params.cid) {
          // before last )
          // .filter({ categoryId: this.$route.params.cid }).map(v => ({pid: product.pid, title: v.name})).value()
          // let catId = parseInt(this.$route.params.cid)
//          selected = this.products = flatMap(Products, cat => (cat.categories).filter({
//            categoryId: this.$route.params.cid
//          }).map(v => ({
//            pid: product.pid, title: v.name
//          })).value())
          selected = this.products = Products
          return selected
        } else {
          selected = this.products = Products
        }
        return selected
      },

      productHref: function (productId) {
        return ['#/products/' + productId]
      },

      price: function (unitPrice, weight) {
        let absolutePrice = parseFloat(unitPrice) * parseFloat(weight)
        let out = (absolutePrice !== 0) ? Number((absolutePrice).toFixed(0)) + ' zł' : 'Produkt niedostępny'
        return out
      }
    }
  }
</script>
<style>
  .products-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .product {
    width: 25%;
    box-sizing: border-box;
    padding: 10px;
  }

  .box .thumb {
    max-width: 100%;
    height: 165px;
    display: block;
    background-size: cover;
    background-position: center center;
  }

  .box h4 {
    text-align: center;
  }

  .box h4 small {
    display: block;
  }

  p.small {
    font-size: 0.75em;
  }

  .btn-group {
    display: flex;
    justify-content: space-around;
  }

  .btn-group a {
    border: 1px solid #42b983;
    padding: 6px 4px;
    text-decoration: none;
  }
</style>
