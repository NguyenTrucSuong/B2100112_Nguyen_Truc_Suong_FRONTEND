<template>
  <div class="container mt-3">
    <h4>Thêm Liên hệ</h4>
    <ContactForm @submit="saveContact" />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },
  methods: {
    async saveContact(contact) {
      try {
        await ContactService.create(contact);
        alert("Thêm liên hệ thành công!");
        this.$router.push({ name: "contact.list" });
      } catch (error) {
        console.error("Lỗi khi thêm liên hệ:", error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
