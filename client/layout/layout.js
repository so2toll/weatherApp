Template.layout.helpers({

    curweather: function() {
        var city = Session.get('city');
        Meteor.call('getWeather',city,function(err, results){
            console.log(results.content);
            Session.set('weather',JSON.parse(results.content).weather[0].description);
            Session.set('wind',JSON.parse(results.content).wind.speed);
            Session.set('results', results)
        });
        return (Session.get('weather') + ' in ' + city + ' And wind is blowing at ' + Session.get('wind')).toUpperCase();
    },


    anotherClick: function () {
          var anotherClick = Session.get('anotherClick');
          return (anotherClick);
      },

    meinName: function() {

             myName = Session.get('myName');
            return (myName);

    }
});

Meteor.call('getMyName', function (err, results) {

    console.log(results);
    Session.set('myName',results);
    return (results);
});

Template.layout.events({
    'change .cities':function(evt,tmpl){
        Session.set('city',tmpl.find('.cities').value);
        //console.log(Session.get('city'));
    },
    'click .another':function(evt,tmpl){
        Session.set('anotherClick', 'number');
        console.log(Session.get('anotherClick'));
    }
});