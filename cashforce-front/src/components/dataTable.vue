<script>
  import listOrders from '../services/listOrders';

  export default {
    data(){
      return {
        orders: []
      }
    },
    mounted() {
      listOrders.list().then(res => {
        this.orders = res.data;
      })
    }
  }
</script>

<template>
  <div>
    <table>
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
        <tr v-for="order of orders" :key="order.id">
          <td>
            1234
          </td>
          <td>
            buyers.id
          </td>
          <td>
            providers.id
          </td>
          <td>
            {{ new Date(order.emissionDate).toLocaleDateString('pt-BR') }}
          </td>
          <td class="value">
            {{ order.value }}
          </td>
          <td v-if="order.orderStatusBuyer === '0'">
             PENDENTE
          </td>
          <td v-else>
            RECEBIDO
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
  border-collapse: collapse;
  position: absolute;
  width: 800px;
  height: 214px;
  left: 310px;
  top: 176px;
}

th {
  width: 820px;
  height: 22px;
  left: 5px;
  text-align: left;

  flex: none;
  order: 0;
  flex-grow: 0;
}

td {
  box-sizing: border-box;

  width: 800px;
  height: 48px;
  left: 0px;
  text-align: center;
  /* P. White / 1

  Primary palette
  */
  background: #FFFFFF;
  /* N. Mid / 4 */

  /* border: 1px solid #DFE2EB;
  border-radius: 6px; */

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
}
.value {
  color: #00AD8C;
}

tbody tr {
  box-shadow: 0 0 4px #ccc;
  border: 1px solid #DFE2EB;
  border-radius: 6px;
}

</style>
