<template>
  <nav class="app-header">
    <div class="header-content">
      <a href="/" class="brand">Ứng dụng Quản lý danh bạ</a>
      <router-link :to="{ name: 'contactbook' }" class="nav-link">
        Danh bạ <i class="fas fa-address-book"></i>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.app-header {
  background-color: #343a40;
color: #d1d5db;
  width: 100%;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-content {
  display: flex;
  width: 100%;
  align-items: center;
}

.brand {
  font-size: 18px;
  font-weight: bold;
    color: #f8f9fa; 
}

.nav-link {
color: #d1d5db; 
  text-decoration: none;
}

.nav-link i {
  margin-left: 5px;
}
</style>
