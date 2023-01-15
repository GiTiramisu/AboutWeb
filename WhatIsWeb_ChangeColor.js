var Link = {

    setColor: function (color) {

        // var i = 0;
        // var linklist = document.querySelectorAll('a');

        // while (i < linklist.length) {

        //     linklist[i].style.color = color;
        //     i = i + 1;
        // }

        $('a').css('color', color);
    }
}

var Body = {

    setColor: function (color) {

        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },

    setBackgroundColor: function (color) {

        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}

function nightDayHandler(self) {

    var target = document.querySelector('body');

    if (self.value === 'Night') {

        self.value = 'Day'
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Link.setColor('powderblue');

    } else {

        self.value = 'Night'
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Link.setColor('blue');
    }
}