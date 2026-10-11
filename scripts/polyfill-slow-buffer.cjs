'use strict';

// Node 25+ removed Buffer.SlowBuffer. jsonwebtoken still loads
// buffer-equal-constant-time, which reads SlowBuffer at import time.
const buffer = require('buffer');

if (typeof buffer.SlowBuffer === 'undefined') {
  buffer.SlowBuffer = buffer.Buffer;
}
