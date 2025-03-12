<template>
  <div class="contact-list" style="margin-top: 10px">
    Danh bạ <i class="fas fa-address-book" style=" font-size: 20px"></i>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(contact, index) in contacts"
        :key="contact._id"
        :class="{ active: index === activeIndex }"
        @click="updateActiveIndex(index)"
      >
        {{ contact.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    contacts: { type: Array, default: () => [] },
    activeIndex: { type: Number, default: -1 },
  },
  emits: ["update:activeIndex"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
  },
};
</script>

<style scoped>
.contact-list {
  width: 250px;
}
.list-group-item {
  cursor: pointer;
  transition: background-color 0.2s;
}
.list-group-item:hover {
  background-color: #f8f9fa;
}
.active {
  background-color: #007bff !important;
  color: white;
}
</style>
