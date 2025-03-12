<template>
  <div class="contact-card" style="margin-top: 10px">
    <h5>Chi tiết Liên hệ <i class="fas fa-address-card"></i> </h5>
    <div class="p-1">
      <strong>Tên:</strong> {{ contact.name }}
    </div>
    <div class="p-1">
      <strong>E-mail:</strong> {{ contact.email }}
    </div>
    <div class="p-1">
      <strong>Địa chỉ:</strong> {{ contact.address }}
    </div>
    <div class="p-1">
      <strong>Điện thoại:</strong> {{ contact.phone }}
    </div>
 <div class="p-1">
 <strong>Liên hệ yêu thích:&nbsp;</strong>
      <font-awesome-icon v-if="contact.favorite" :icon="['fas', 'check']" class="text-success" />
      <font-awesome-icon v-else :icon="['fas', 'times']" class="text-danger" />


</div>

  </div>
</template>

<script>
export default {
  props: {
    contact: { type: Object, required: true },
  },
};
</script>

<style scoped>
.contact-card {
  width: 300px;
  border: 1px solid #007bff;
  padding: 10px;
  border-radius: 8px;
}
</style>
