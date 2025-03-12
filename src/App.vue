<template>
  <div id="app">
    <AppHeader />
    <div class="container mt-3">
      <InputSearch v-model="searchQuery" @submit="searchContact" />
      <div class="d-flex">
        <ContactList 
          v-model:activeIndex="selectedIndex" 
          :contacts="filteredContacts" 
        />
        <ContactCard 
          v-if="selectedIndex !== -1" 
          :contact="filteredContacts[selectedIndex]" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import ContactCard from "@/components/ContactCard.vue";
import ContactList from "@/components/ContactList.vue";
import InputSearch from "@/components/InputSearch.vue";

export default {
  components: { AppHeader, ContactCard, ContactList, InputSearch },
  data() {
    return {
      searchQuery: "",
      selectedIndex: -1,
      contacts: [
        { _id: 1, name: "Bùi Võ Quốc Bảo", email: "baobui@gmail.com", phone: "0962788899", address: "Cần Thơ", favorite: true },
        { _id: 2, name: "Võ Ngọc Giang", email: "giangvo@gmail.com", phone: "0971234567", address: "TPHCM", favorite: false },
        { _id: 3, name: "Đặng Quốc Thảo", email: "thao@gmail.com", phone: "0987654321", address: "Hà Nội", favorite: true },
      ],
    };
  },
  computed: {
    filteredContacts() {
      if (!this.searchQuery) return this.contacts;
      return this.contacts.filter(contact => 
        contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    searchContact() {
      this.selectedIndex = -1; // Reset lựa chọn khi tìm kiếm
    }
  }
};
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin-left:250px!important;
  margin-top: -160px!important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Căn giữa theo chiều dọc */
}

.d-flex {
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>
