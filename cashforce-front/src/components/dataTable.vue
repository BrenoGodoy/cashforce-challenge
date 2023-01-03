<script>
  import apiCall from '../services/apiCalls';

  export default {
    data(){
      return {
        orders: [],
        buyer: '',
        provider: ''
      }
    },
    mounted() {
      apiCall.list().then(res => {
        this.orders = res.data;
      })
      apiCall.buyersById(1).then(res => {
        this.buyer = res;
      });
      apiCall.providersById(1).then(res => {
        this.provider = res;
      });
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
            {{ buyer }}
          </td>
          <td>
            {{ provider }}
          </td>
          <td>
            {{ new Date(order.emissionDate).toLocaleDateString('pt-BR') }}
          </td>
          <td v-if="order.value === ''" class="green">
            {{ `R$ 00000` }}
          </td>
          <td v-else class="green">
            {{ `R$ ${order.value}` }}
          </td>
          <td v-if="order.orderStatusBuyer === '0'" class="green">
             PENDENTE
          </td>
          <td v-else class="green">
            RECEBIDO
          </td>
          <td>
            <button>
              Dados do cedente
            </button>
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
  width: 120px;
  height: 22px;
  left: -15px;
  text-align: left;

  flex: none;
  order: 0;
  flex-grow: 0;
}

td {
  box-sizing: border-box;

  width: 150px;
  height: 48px;
  left: 10px;
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
.green {
  color: #00AD8C;
}

tbody tr {
  box-shadow: 0 0 4px #ccc;
  border: 1px solid #DFE2EB;
  border-radius: 6px;
}

button {
  /* botoes-principais */


  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 29px;

  position: absolute;
  width: 165px;
  height: 32px;
  left: 0px;
  top: 8px;

  /* P. Blue / 2 */
  border: 1px solid #CAD3FF;
  border-radius: 24px;
}

</style>
