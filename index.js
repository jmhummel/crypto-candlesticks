var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var monies = [
    {
        name: 'ethereum',
        amount: 0.1
    },
    {
        name: 'stellar',
        amount: 200
    }
];

app.message = monies;

// GET /someUrl
Vue.http.get('https://graphs2.coinmarketcap.com/currencies/ethereum/1516481651000/1516568051000/').then(function (res) {
    console.log(res);
}, function(err) {
    console.error(err);
});

console.log("stuff");

