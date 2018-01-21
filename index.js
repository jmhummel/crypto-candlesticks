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

monies.forEach(function(coin) {
    Vue.http.get('https://cors-anywhere.herokuapp.com/https://graphs2.coinmarketcap.com/currencies/' + coin.name + '/1516481651000/1516568051000/')
        .then(function (res) {
            console.log(res.body);

        }, function(err) {
            console.error(err);
        });
});

