<template>
  <div class="container mt-3">
    <!-- Tìm kiếm -->
    <div class="row justify-content-center mb-3">
      <div class="col-md-6">
        <InputSearch v-model="searchText" />
      </div>
    </div>

    <div class="row">
      <!-- Danh bạ -->
      <div class="col-md-5">
        <h4>Danh bạ <i class="fas fa-address-book"></i></h4>
        <ContactList
          v-if="filteredContacts.length > 0"
          :contacts="filteredContacts"
          v-model:activeIndex="activeIndex"
        />
        <p v-else>Không có liên hệ nào.</p>

        <!-- 🔥 Các nút chức năng -->
        <div class="mt-3 d-flex justify-content-around">
          <button class="btn btn-primary" @click="refreshList">
            <i class="fas fa-redo"></i> Làm mới
          </button>
          <button class="btn btn-success" @click="goToAddContact">
            <i class="fas fa-plus"></i> Thêm mới
          </button>
          <button class="btn btn-danger" @click="removeAllContacts">
            <i class="fas fa-trash"></i> Xóa tất cả
          </button>
        </div>
      </div>

      <!-- Chi tiết liên hệ -->
      <div class="col-md-5">
        <div v-if="activeContact">
          <h4>Chi tiết Liên hệ <i class="fas fa-address-card"></i></h4>
          <ContactCard :contact="activeContact" />
          
          <!-- 🔗 Nút chuyển đến trang chỉnh sửa -->
          <router-link
            :to="{
              name: 'contact.edit',
              params: { id: activeContact._id },
            }"
          >
            <span class="mt-2 badge badge-warning">
              <i class="fas fa-edit"></i> Hiệu chỉnh
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import ContactList from "@/components/ContactList.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactCard,
    InputSearch,
    ContactList,
  },
  data() {
    return {
      contacts: [],
      activeIndex: -1,
      searchText: "",
      loading: false,
    };
  },
  watch: {
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    filteredContacts() {
      if (!this.searchText) return this.contacts;
      return this.contacts.filter((contact) => {
        const contactStr = `${contact.name} ${contact.email} ${contact.address} ${contact.phone}`;
        return contactStr.toLowerCase().includes(this.searchText.toLowerCase());
      });
    },
    activeContact() {
      if (this.activeIndex < 0) return null;
      return this.filteredContacts[this.activeIndex];
    },
  },
  methods: {
    async retrieveContacts() {
      this.loading = true;
      try {
        this.contacts = await ContactService.getAll();
      } catch (error) {
        console.error("Lỗi khi lấy danh bạ:", error);
      } finally {
        this.loading = false;
      }
    },
    refreshList() {
      this.retrieveContacts();
      this.activeIndex = -1;
    },
    async removeAllContacts() {
      if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
        try {
          await ContactService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.error("Lỗi khi xóa tất cả danh bạ:", error);
        }
      }
    },
    goToAddContact() {
      this.$router.push({ name: "contact.add" });
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>

<style>
.mt-3.d-flex {
  gap: 10px;  /* Khoảng cách giữa các nút */
  justify-content: center; /* Căn giữa các nút */
}

button {
  min-width: 120px; /* Đảm bảo nút không quá nhỏ */
  font-size: 16px;
  padding: 10px 15px;
}

.btn i {
  margin-right: 5px; /* Khoảng cách giữa icon và chữ */
}

</style>
