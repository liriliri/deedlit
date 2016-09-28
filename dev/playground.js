deedlit.register('playVideo', {
    source: {
        shortcut: 'src',
        defVal: ''
    },
    duration: {
        shortcut: 'd',
        defVal: 300
    }
}, function (options, cb)
{
    var source = options.source,
        duration = options.duration;

    cb();
});