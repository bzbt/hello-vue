<div class="product" v-for="(value, key) in products">
  <div :data-id="key" class="box">
    <div class="thumb"
         :style="{ backgroundImage: 'url(' + value.image + ')' }"></div>
    <h4>{{ value.title }}</h4>

    <p class="small">W kategorii:
      <span class="badge" v-for="cat in value.categories ">{{ cat.name }}</span>
    </p>
  </div>
</div>
