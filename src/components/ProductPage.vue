<template>
  <section>
    <h1>{{ product.title }}</h1>

    <div class="product-card">
      <img :src="product.image"/>

      <div class="description">
        <div class="badge" v-for="category in product.categories">
          {{ category.name }}
        </div>
        <div class="additional" v-if="product.additional">
          <ul>
            <li v-for="row in product.additional">
              {{ additionalInfo(row[0], row[1]) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import Products from '../data/items.json'

  export default {
    data: function () {
      return {
        products: Products
      }
    },

    computed: {
      product: function () {
        return this.products.filter(item => item.pid === parseInt(this.$route.params.pid))[0]
      }
    },

    methods: {
      additionalInfo: function (i, s) {
        return i + ': ' + s
      }
    }
  }
</script>

<style>
  img {
    max-width: 100%;
    height: 250px;
  }

  .product-card {
    display: flex;
    flex-wrap: wrap;
  }

  .badge {
    display: inline-block;
    padding: 3px 6px;
    margin: 5px;
    background-color: #b5c4b0;
    color: #fff;
    font-weight: 700;
    border-radius: 2px;
  }
</style>
