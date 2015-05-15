Meteor.methods({
    getWeather: function (steve) {
        return Meteor.http.call( 'GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + steve);
    },
    getMyName: function(){
        return "you are steven frool"
    }
})