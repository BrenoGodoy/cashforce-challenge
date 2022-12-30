<script setup>
</script>

<template>
  <header class="header">
    <div class="top">
      <div class="logo">
        <img src="./assets/sider-fornecedor.png" class="cashforce-logo">
      </div>
      <div class="notas-fiscais">
        <img src="./assets/menu-item.png">
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #E5E5E5;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 288px;
  height: 900px;
  left: 0px;
  top: 0px;
}

.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 288px;
  height: 144px;
  left: 0px;
  top: 0px;
}
.logo {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 288px;
  height: 80px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.cashforce-logo {
  width: 160px;
  margin: 20px;
}

.notas-fiscais {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 288px;
  height: 64px;

  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>
