<template>
  <article class="search-result">
    <h2 class="search-result__heading">{{ result.ad_id.raw }}</h2>
    <div class="search-result__body">
      <img
        class="search-result__image"
        :src="imageSrc(result.id.raw)"
        :alt="result.ad_id.raw"
      />
      <div class="search-result__data">
        <div v-if="result.type">Make: {{ result.make_name.raw }}</div>
        <div v-if="result.race">model: {{ result.model_name.raw }}</div>
        <div v-else-if="result.card_class">
          Class: {{ result.class_name.raw }}
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  methods: {
    imageSrc(id) {
      return `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${id}.png`;
    }
  }
};
</script>

<style scoped>
.search-result {
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  align-items: center;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.search-result__heading {
  text-align: center;
  margin: 0;
}

.search-result__body {
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
}

.search-result__data {
  padding-top: 50px;
}

.search-result__flavor {
  margin: 0;
}

.search-result__image {
  flex: none;
  width: 256px;
  height: 387px;
}
</style>
