Rheinturm = function () {

    "use strict";

    var that = this;

    this.setup = function () {
        // TODO: Blink with separators on powerup
        return this;
    };

    this.start = function () {
        setTimeout(function () {
            that.render();
            that.start();
        }, 50);

        return this;
    };

    this.tearDown = function () {
        // TODO: Blink on powerdown
        return this;
    };

    this.render = function () {
        var date = new Date(),
            tenHours = (date.getHours() > 9) ? parseInt(date.getHours().toString().charAt(0), 10) : 0,
            hours = (date.getHours() > 9) ? parseInt(date.getHours().toString().charAt(1), 10) : date.getHours(),
            tenMinutes = (date.getMinutes() > 9) ? parseInt(date.getMinutes().toString().charAt(0), 10) : 0,
            minutes = (date.getMinutes() > 9) ? parseInt(date.getMinutes().toString().charAt(1), 10) : date.getMinutes(),
            tenSeconds = (date.getSeconds() > 9) ? parseInt(date.getSeconds().toString().charAt(0), 10) : 0,
            seconds = (date.getSeconds() > 9) ? parseInt(date.getSeconds().toString().charAt(1), 10) : date.getSeconds();

        that.reset();

        switch (tenHours) {
            case 2: that.on($('#hours-20'));
            case 1: that.on($('#hours-10'));
        }

        switch (hours) {
            case 9: that.on($('#hours-9'));
            case 8: that.on($('#hours-8'));
            case 7: that.on($('#hours-7'));
            case 6: that.on($('#hours-6'));
            case 5: that.on($('#hours-5'));
            case 4: that.on($('#hours-4'));
            case 3: that.on($('#hours-3'));
            case 2: that.on($('#hours-2'));
            case 1: that.on($('#hours-1'));
        }

        switch (tenMinutes) {
            case 5: that.on($('#minutes-50'));
            case 4: that.on($('#minutes-40'));
            case 3: that.on($('#minutes-30'));
            case 2: that.on($('#minutes-20'));
            case 1: that.on($('#minutes-10'));
        }

        switch (minutes) {
            case 9: that.on($('#minutes-9'));
            case 8: that.on($('#minutes-8'));
            case 7: that.on($('#minutes-7'));
            case 6: that.on($('#minutes-6'));
            case 5: that.on($('#minutes-5'));
            case 4: that.on($('#minutes-4'));
            case 3: that.on($('#minutes-3'));
            case 2: that.on($('#minutes-2'));
            case 1: that.on($('#minutes-1'));
        }

        switch (tenSeconds) {
            case 5: that.on($('#seconds-50'));
            case 4: that.on($('#seconds-40'));
            case 3: that.on($('#seconds-30'));
            case 2: that.on($('#seconds-20'));
            case 1: that.on($('#seconds-10'));
        }

        switch (seconds) {
            case 9: that.on($('#seconds-9'));
            case 8: that.on($('#seconds-8'));
            case 7: that.on($('#seconds-7'));
            case 6: that.on($('#seconds-6'));
            case 5: that.on($('#seconds-5'));
            case 4: that.on($('#seconds-4'));
            case 3: that.on($('#seconds-3'));
            case 2: that.on($('#seconds-2'));
            case 1: that.on($('#seconds-1'));
        }

        if ((date.getMinutes() % 15) === 0 && seconds === 0) {
            // TODO: Quarterly event
        }

        if (date.getMinutes() === 0 && seconds === 0) {
            // TODO: Full hour
        }

        if (date.getHours() === 0 && date.getMinutes() === 0 && seconds === 0) {
            // TODO: Midnight
        }

        if (date.getMonth() === 1 && date.getMinutes() === 0 && seconds === 0) {
            // TODO: Happy new year!
            // Idea: Count from 10 to 1 and then blink widely with different colours
        }
    };

    this.on = function (bulb) {
        bulb.attr('opacity', '1.0');
    };

    this.off = function(bulb) {
        bulb.attr('opacity', '0.0');
    };

    this.reset = function () {
        $('.led').attr('opacity', '0.0');
    };

};
