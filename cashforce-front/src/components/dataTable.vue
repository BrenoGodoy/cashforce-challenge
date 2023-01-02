<script setup>
  import { Suspense } from 'vue';
  
  const axiosGet = await axios.get("http://localhost:3001/orders");
  const apiData = await axiosGet.json();
    
</script>

<template>
  <div class="table">
    <table class="tr">
      <thead>
        <tr>
          <th>
            NOTA FISCAL
          </th>
          <th>
            SACADO
          </th>
          <th>
            CEDENTE
          </th>
          <th>
            EMISSÃO
          </th>
          <th>
            VALOR
          </th>
          <th>
            STATUS
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            
          </td>
        </tr>
      </tbody>
    </table>
    <Suspense>
      <div>{{ apiData }}</div>
    </Suspense>
  </div>
</template>

<style scoped>
.table {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 1177px;
  height: 214px;
  left: 336px;
  top: 176px;
}

.tr {
  width: 800px;
  height: 22px;
  left: -237px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>
