define(function (require) {
    var TwosComplementBuffer = require('../../../../dist/twos-complement-buffer.js').TwosComplementBuffer;
    console.log(TwosComplementBuffer);
    var tcb = new TwosComplementBuffer(16);
    var buffer = [0, 0];
    tcb.pack(buffer, 1);
    document.write('OK');
});
