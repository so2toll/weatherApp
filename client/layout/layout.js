Template.layout.helpers({

    curweather: function() {
        var city = Session.get('city');
        Meteor.call('getWeather',city,function(err,results){
            console.log(results.content);
            Session.set('weather',JSON.parse(results.content).weather[0].description);
            Session.set('wind',JSON.parse(results.content).wind.speed);
        });
        return (Session.get('weather') + ' in ' + city + ' And wind is blowing at ' + Session.get('wind')).toUpperCase();
    }
});
Template.layout.events({
    'change .cities':function(evt,tmpl){
        Session.set('city',tmpl.find('.cities').value);
    }
});