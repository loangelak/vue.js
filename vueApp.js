const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";

vm = new Vue({
  el: '#app', 
  data: { 
    results: []
    // results: {
    //   "BTC": { "USD": 3759.91, "EUR": 3166.21 }, 
    //   "ETH": { "USD": 281.7, "EUR": 236.25 }, 
    //   "NEW Currency": { "USD": 5.60, "EUR": 4.70 }
    // }
  }, 
  // make request to URL
  mounted() {
    axios.get(url).then(response => {
      this.results = response.data
    })
  }
});