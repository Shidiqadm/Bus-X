"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/svix/dist/models/applicationIn.js
var require_applicationIn = __commonJS({
  "node_modules/svix/dist/models/applicationIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ApplicationInSerializer = void 0;
    exports2.ApplicationInSerializer = {
      _fromJsonObject(object) {
        return {
          metadata: object["metadata"],
          name: object["name"],
          rateLimit: object["rateLimit"],
          uid: object["uid"]
        };
      },
      _toJsonObject(self) {
        return {
          metadata: self.metadata,
          name: self.name,
          rateLimit: self.rateLimit,
          uid: self.uid
        };
      }
    };
  }
});

// node_modules/svix/dist/models/applicationOut.js
var require_applicationOut = __commonJS({
  "node_modules/svix/dist/models/applicationOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ApplicationOutSerializer = void 0;
    exports2.ApplicationOutSerializer = {
      _fromJsonObject(object) {
        return {
          createdAt: new Date(object["createdAt"]),
          id: object["id"],
          metadata: object["metadata"],
          name: object["name"],
          rateLimit: object["rateLimit"],
          uid: object["uid"],
          updatedAt: new Date(object["updatedAt"])
        };
      },
      _toJsonObject(self) {
        return {
          createdAt: self.createdAt,
          id: self.id,
          metadata: self.metadata,
          name: self.name,
          rateLimit: self.rateLimit,
          uid: self.uid,
          updatedAt: self.updatedAt
        };
      }
    };
  }
});

// node_modules/svix/dist/models/applicationPatch.js
var require_applicationPatch = __commonJS({
  "node_modules/svix/dist/models/applicationPatch.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ApplicationPatchSerializer = void 0;
    exports2.ApplicationPatchSerializer = {
      _fromJsonObject(object) {
        return {
          metadata: object["metadata"],
          name: object["name"],
          rateLimit: object["rateLimit"],
          uid: object["uid"]
        };
      },
      _toJsonObject(self) {
        return {
          metadata: self.metadata,
          name: self.name,
          rateLimit: self.rateLimit,
          uid: self.uid
        };
      }
    };
  }
});

// node_modules/svix/dist/models/listResponseApplicationOut.js
var require_listResponseApplicationOut = __commonJS({
  "node_modules/svix/dist/models/listResponseApplicationOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ListResponseApplicationOutSerializer = void 0;
    var applicationOut_1 = require_applicationOut();
    exports2.ListResponseApplicationOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => applicationOut_1.ApplicationOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"],
          prevIterator: object["prevIterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => applicationOut_1.ApplicationOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator,
          prevIterator: self.prevIterator
        };
      }
    };
  }
});

// node_modules/svix/dist/util.js
var require_util = __commonJS({
  "node_modules/svix/dist/util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ApiException = void 0;
    var ApiException = class extends Error {
      constructor(code, body, headers) {
        super(`HTTP-Code: ${code}
Headers: ${JSON.stringify(headers)}`);
        this.code = code;
        this.body = body;
        this.headers = {};
        headers.forEach((value, name) => {
          this.headers[name] = value;
        });
      }
    };
    exports2.ApiException = ApiException;
  }
});

// node_modules/uuid/dist/esm-node/max.js
var max_default;
var init_max = __esm({
  "node_modules/uuid/dist/esm-node/max.js"() {
    max_default = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  }
});

// node_modules/uuid/dist/esm-node/nil.js
var nil_default;
var init_nil = __esm({
  "node_modules/uuid/dist/esm-node/nil.js"() {
    nil_default = "00000000-0000-0000-0000-000000000000";
  }
});

// node_modules/uuid/dist/esm-node/regex.js
var regex_default;
var init_regex = __esm({
  "node_modules/uuid/dist/esm-node/regex.js"() {
    regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
  }
});

// node_modules/uuid/dist/esm-node/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default;
var init_validate = __esm({
  "node_modules/uuid/dist/esm-node/validate.js"() {
    init_regex();
    validate_default = validate;
  }
});

// node_modules/uuid/dist/esm-node/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  const arr = new Uint8Array(16);
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 255;
  arr[2] = v >>> 8 & 255;
  arr[3] = v & 255;
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 255;
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 255;
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 255;
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v / 4294967296 & 255;
  arr[12] = v >>> 24 & 255;
  arr[13] = v >>> 16 & 255;
  arr[14] = v >>> 8 & 255;
  arr[15] = v & 255;
  return arr;
}
var parse_default;
var init_parse = __esm({
  "node_modules/uuid/dist/esm-node/parse.js"() {
    init_validate();
    parse_default = parse;
  }
});

// node_modules/uuid/dist/esm-node/stringify.js
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset);
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var byteToHex, stringify_default;
var init_stringify = __esm({
  "node_modules/uuid/dist/esm-node/stringify.js"() {
    init_validate();
    byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).slice(1));
    }
    stringify_default = stringify;
  }
});

// node_modules/uuid/dist/esm-node/rng.js
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    import_node_crypto.default.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
var import_node_crypto, rnds8Pool, poolPtr;
var init_rng = __esm({
  "node_modules/uuid/dist/esm-node/rng.js"() {
    import_node_crypto = __toESM(require("crypto"));
    rnds8Pool = new Uint8Array(256);
    poolPtr = rnds8Pool.length;
  }
});

// node_modules/uuid/dist/esm-node/v1.js
function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node;
  let clockseq = options.clockseq;
  if (!options._v6) {
    if (!node) {
      node = _nodeId;
    }
    if (clockseq == null) {
      clockseq = _clockseq;
    }
  }
  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || rng)();
    if (node == null) {
      node = [seedBytes[0], seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
      if (!_nodeId && !options._v6) {
        node[0] |= 1;
        _nodeId = node;
      }
    }
    if (clockseq == null) {
      clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
      if (_clockseq === void 0 && !options._v6) {
        _clockseq = clockseq;
      }
    }
  }
  let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
  let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
  if (dt < 0 && options.clockseq === void 0) {
    clockseq = clockseq + 1 & 16383;
  }
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
    nsecs = 0;
  }
  if (nsecs >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;
  msecs += 122192928e5;
  const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
  b[i++] = tl >>> 24 & 255;
  b[i++] = tl >>> 16 & 255;
  b[i++] = tl >>> 8 & 255;
  b[i++] = tl & 255;
  const tmh = msecs / 4294967296 * 1e4 & 268435455;
  b[i++] = tmh >>> 8 & 255;
  b[i++] = tmh & 255;
  b[i++] = tmh >>> 24 & 15 | 16;
  b[i++] = tmh >>> 16 & 255;
  b[i++] = clockseq >>> 8 | 128;
  b[i++] = clockseq & 255;
  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf || unsafeStringify(b);
}
var _nodeId, _clockseq, _lastMSecs, _lastNSecs, v1_default;
var init_v1 = __esm({
  "node_modules/uuid/dist/esm-node/v1.js"() {
    init_rng();
    init_stringify();
    _lastMSecs = 0;
    _lastNSecs = 0;
    v1_default = v1;
  }
});

// node_modules/uuid/dist/esm-node/v1ToV6.js
function v1ToV6(uuid) {
  const v1Bytes = typeof uuid === "string" ? parse_default(uuid) : uuid;
  const v6Bytes = _v1ToV6(v1Bytes);
  return typeof uuid === "string" ? unsafeStringify(v6Bytes) : v6Bytes;
}
function _v1ToV6(v1Bytes, randomize = false) {
  return Uint8Array.of((v1Bytes[6] & 15) << 4 | v1Bytes[7] >> 4 & 15, (v1Bytes[7] & 15) << 4 | (v1Bytes[4] & 240) >> 4, (v1Bytes[4] & 15) << 4 | (v1Bytes[5] & 240) >> 4, (v1Bytes[5] & 15) << 4 | (v1Bytes[0] & 240) >> 4, (v1Bytes[0] & 15) << 4 | (v1Bytes[1] & 240) >> 4, (v1Bytes[1] & 15) << 4 | (v1Bytes[2] & 240) >> 4, 96 | v1Bytes[2] & 15, v1Bytes[3], v1Bytes[8], v1Bytes[9], v1Bytes[10], v1Bytes[11], v1Bytes[12], v1Bytes[13], v1Bytes[14], v1Bytes[15]);
}
var init_v1ToV6 = __esm({
  "node_modules/uuid/dist/esm-node/v1ToV6.js"() {
    init_parse();
    init_stringify();
  }
});

// node_modules/uuid/dist/esm-node/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
function v35(name, version3, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = parse_default(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version3;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return unsafeStringify(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL2;
  return generateUUID;
}
var DNS, URL2;
var init_v35 = __esm({
  "node_modules/uuid/dist/esm-node/v35.js"() {
    init_stringify();
    init_parse();
    DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  }
});

// node_modules/uuid/dist/esm-node/md5.js
function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return import_node_crypto2.default.createHash("md5").update(bytes).digest();
}
var import_node_crypto2, md5_default;
var init_md5 = __esm({
  "node_modules/uuid/dist/esm-node/md5.js"() {
    import_node_crypto2 = __toESM(require("crypto"));
    md5_default = md5;
  }
});

// node_modules/uuid/dist/esm-node/v3.js
var v3, v3_default;
var init_v3 = __esm({
  "node_modules/uuid/dist/esm-node/v3.js"() {
    init_v35();
    init_md5();
    v3 = v35("v3", 48, md5_default);
    v3_default = v3;
  }
});

// node_modules/uuid/dist/esm-node/native.js
var import_node_crypto3, native_default;
var init_native = __esm({
  "node_modules/uuid/dist/esm-node/native.js"() {
    import_node_crypto3 = __toESM(require("crypto"));
    native_default = {
      randomUUID: import_node_crypto3.default.randomUUID
    };
  }
});

// node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default;
var init_v4 = __esm({
  "node_modules/uuid/dist/esm-node/v4.js"() {
    init_native();
    init_rng();
    init_stringify();
    v4_default = v4;
  }
});

// node_modules/uuid/dist/esm-node/sha1.js
function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return import_node_crypto4.default.createHash("sha1").update(bytes).digest();
}
var import_node_crypto4, sha1_default;
var init_sha1 = __esm({
  "node_modules/uuid/dist/esm-node/sha1.js"() {
    import_node_crypto4 = __toESM(require("crypto"));
    sha1_default = sha1;
  }
});

// node_modules/uuid/dist/esm-node/v5.js
var v5, v5_default;
var init_v5 = __esm({
  "node_modules/uuid/dist/esm-node/v5.js"() {
    init_v35();
    init_sha1();
    v5 = v35("v5", 80, sha1_default);
    v5_default = v5;
  }
});

// node_modules/uuid/dist/esm-node/v6.js
function v6(options = {}, buf, offset = 0) {
  let bytes = v1_default({
    ...options,
    _v6: true
  }, new Uint8Array(16));
  bytes = v1ToV6(bytes);
  if (buf) {
    for (let i = 0; i < 16; i++) {
      buf[offset + i] = bytes[i];
    }
    return buf;
  }
  return unsafeStringify(bytes);
}
var init_v6 = __esm({
  "node_modules/uuid/dist/esm-node/v6.js"() {
    init_stringify();
    init_v1();
    init_v1ToV6();
  }
});

// node_modules/uuid/dist/esm-node/v6ToV1.js
function v6ToV1(uuid) {
  const v6Bytes = typeof uuid === "string" ? parse_default(uuid) : uuid;
  const v1Bytes = _v6ToV1(v6Bytes);
  return typeof uuid === "string" ? unsafeStringify(v1Bytes) : v1Bytes;
}
function _v6ToV1(v6Bytes) {
  return Uint8Array.of((v6Bytes[3] & 15) << 4 | v6Bytes[4] >> 4 & 15, (v6Bytes[4] & 15) << 4 | (v6Bytes[5] & 240) >> 4, (v6Bytes[5] & 15) << 4 | v6Bytes[6] & 15, v6Bytes[7], (v6Bytes[1] & 15) << 4 | (v6Bytes[2] & 240) >> 4, (v6Bytes[2] & 15) << 4 | (v6Bytes[3] & 240) >> 4, 16 | (v6Bytes[0] & 240) >> 4, (v6Bytes[0] & 15) << 4 | (v6Bytes[1] & 240) >> 4, v6Bytes[8], v6Bytes[9], v6Bytes[10], v6Bytes[11], v6Bytes[12], v6Bytes[13], v6Bytes[14], v6Bytes[15]);
}
var init_v6ToV1 = __esm({
  "node_modules/uuid/dist/esm-node/v6ToV1.js"() {
    init_parse();
    init_stringify();
  }
});

// node_modules/uuid/dist/esm-node/v7.js
function v7(options, buf, offset) {
  options = options || {};
  let i = buf && offset || 0;
  const b = buf || new Uint8Array(16);
  const rnds = options.random || (options.rng || rng)();
  const msecs = options.msecs !== void 0 ? options.msecs : Date.now();
  let seq = options.seq !== void 0 ? options.seq : null;
  let seqHigh = _seqHigh;
  let seqLow = _seqLow;
  if (msecs > _msecs && options.msecs === void 0) {
    _msecs = msecs;
    if (seq !== null) {
      seqHigh = null;
      seqLow = null;
    }
  }
  if (seq !== null) {
    if (seq > 2147483647) {
      seq = 2147483647;
    }
    seqHigh = seq >>> 19 & 4095;
    seqLow = seq & 524287;
  }
  if (seqHigh === null || seqLow === null) {
    seqHigh = rnds[6] & 127;
    seqHigh = seqHigh << 8 | rnds[7];
    seqLow = rnds[8] & 63;
    seqLow = seqLow << 8 | rnds[9];
    seqLow = seqLow << 5 | rnds[10] >>> 3;
  }
  if (msecs + 1e4 > _msecs && seq === null) {
    if (++seqLow > 524287) {
      seqLow = 0;
      if (++seqHigh > 4095) {
        seqHigh = 0;
        _msecs++;
      }
    }
  } else {
    _msecs = msecs;
  }
  _seqHigh = seqHigh;
  _seqLow = seqLow;
  b[i++] = _msecs / 1099511627776 & 255;
  b[i++] = _msecs / 4294967296 & 255;
  b[i++] = _msecs / 16777216 & 255;
  b[i++] = _msecs / 65536 & 255;
  b[i++] = _msecs / 256 & 255;
  b[i++] = _msecs & 255;
  b[i++] = seqHigh >>> 4 & 15 | 112;
  b[i++] = seqHigh & 255;
  b[i++] = seqLow >>> 13 & 63 | 128;
  b[i++] = seqLow >>> 5 & 255;
  b[i++] = seqLow << 3 & 255 | rnds[10] & 7;
  b[i++] = rnds[11];
  b[i++] = rnds[12];
  b[i++] = rnds[13];
  b[i++] = rnds[14];
  b[i++] = rnds[15];
  return buf || unsafeStringify(b);
}
var _seqLow, _seqHigh, _msecs, v7_default;
var init_v7 = __esm({
  "node_modules/uuid/dist/esm-node/v7.js"() {
    init_rng();
    init_stringify();
    _seqLow = null;
    _seqHigh = null;
    _msecs = 0;
    v7_default = v7;
  }
});

// node_modules/uuid/dist/esm-node/version.js
function version(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  return parseInt(uuid.slice(14, 15), 16);
}
var version_default;
var init_version = __esm({
  "node_modules/uuid/dist/esm-node/version.js"() {
    init_validate();
    version_default = version;
  }
});

// node_modules/uuid/dist/esm-node/index.js
var esm_node_exports = {};
__export(esm_node_exports, {
  MAX: () => max_default,
  NIL: () => nil_default,
  parse: () => parse_default,
  stringify: () => stringify_default,
  v1: () => v1_default,
  v1ToV6: () => v1ToV6,
  v3: () => v3_default,
  v4: () => v4_default,
  v5: () => v5_default,
  v6: () => v6,
  v6ToV1: () => v6ToV1,
  v7: () => v7_default,
  validate: () => validate_default,
  version: () => version_default
});
var init_esm_node = __esm({
  "node_modules/uuid/dist/esm-node/index.js"() {
    init_max();
    init_nil();
    init_parse();
    init_stringify();
    init_v1();
    init_v1ToV6();
    init_v3();
    init_v4();
    init_v5();
    init_v6();
    init_v6ToV1();
    init_v7();
    init_validate();
    init_version();
  }
});

// node_modules/svix/dist/request.js
var require_request = __commonJS({
  "node_modules/svix/dist/request.js"(exports2) {
    "use strict";
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SvixRequest = exports2.HttpMethod = exports2.LIB_VERSION = void 0;
    var util_1 = require_util();
    var uuid_1 = (init_esm_node(), __toCommonJS(esm_node_exports));
    exports2.LIB_VERSION = "1.76.1";
    var USER_AGENT = `svix-libs/${exports2.LIB_VERSION}/javascript`;
    var HttpMethod;
    (function(HttpMethod2) {
      HttpMethod2["GET"] = "GET";
      HttpMethod2["HEAD"] = "HEAD";
      HttpMethod2["POST"] = "POST";
      HttpMethod2["PUT"] = "PUT";
      HttpMethod2["DELETE"] = "DELETE";
      HttpMethod2["CONNECT"] = "CONNECT";
      HttpMethod2["OPTIONS"] = "OPTIONS";
      HttpMethod2["TRACE"] = "TRACE";
      HttpMethod2["PATCH"] = "PATCH";
    })(HttpMethod = exports2.HttpMethod || (exports2.HttpMethod = {}));
    var SvixRequest = class {
      constructor(method, path) {
        this.method = method;
        this.path = path;
        this.queryParams = {};
        this.headerParams = {};
      }
      setPathParam(name, value) {
        const newPath = this.path.replace(`{${name}}`, encodeURIComponent(value));
        if (this.path === newPath) {
          throw new Error(`path parameter ${name} not found`);
        }
        this.path = newPath;
      }
      setQueryParam(name, value) {
        if (value === void 0 || value === null) {
          return;
        }
        if (typeof value === "string") {
          this.queryParams[name] = value;
        } else if (typeof value === "boolean" || typeof value === "number") {
          this.queryParams[name] = value.toString();
        } else if (value instanceof Date) {
          this.queryParams[name] = value.toISOString();
        } else if (value instanceof Array) {
          if (value.length > 0) {
            this.queryParams[name] = value.join(",");
          }
        } else {
          const _assert_unreachable = value;
          throw new Error(`query parameter ${name} has unsupported type`);
        }
      }
      setHeaderParam(name, value) {
        if (value === void 0) {
          return;
        }
        this.headerParams[name] = value;
      }
      setBody(value) {
        this.body = JSON.stringify(value);
      }
      send(ctx, parseResponseBody) {
        return __awaiter(this, void 0, void 0, function* () {
          const response = yield this.sendInner(ctx);
          if (response.status == 204) {
            return null;
          }
          const responseBody = yield response.text();
          return parseResponseBody(JSON.parse(responseBody));
        });
      }
      sendNoResponseBody(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
          yield this.sendInner(ctx);
        });
      }
      sendInner(ctx) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
          const url = new URL(ctx.baseUrl + this.path);
          for (const [name, value] of Object.entries(this.queryParams)) {
            url.searchParams.set(name, value);
          }
          if (this.headerParams["idempotency-key"] === void 0 && this.method.toUpperCase() === "POST") {
            this.headerParams["idempotency-key"] = "auto_" + (0, uuid_1.v4)();
          }
          const randomId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
          if (this.body != null) {
            this.headerParams["content-type"] = "application/json";
          }
          const isCredentialsSupported = "credentials" in Request.prototype;
          const response = yield sendWithRetry(url, {
            method: this.method.toString(),
            body: this.body,
            headers: Object.assign({ accept: "application/json, */*;q=0.8", authorization: `Bearer ${ctx.token}`, "user-agent": USER_AGENT, "svix-req-id": randomId.toString() }, this.headerParams),
            credentials: isCredentialsSupported ? "same-origin" : void 0,
            signal: ctx.timeout !== void 0 ? AbortSignal.timeout(ctx.timeout) : void 0
          }, ctx.retryScheduleInMs, (_a = ctx.retryScheduleInMs) === null || _a === void 0 ? void 0 : _a[0], ((_b = ctx.retryScheduleInMs) === null || _b === void 0 ? void 0 : _b.length) || ctx.numRetries);
          return filterResponseForErrors(response);
        });
      }
    };
    exports2.SvixRequest = SvixRequest;
    function filterResponseForErrors(response) {
      return __awaiter(this, void 0, void 0, function* () {
        if (response.status < 300) {
          return response;
        }
        const responseBody = yield response.text();
        if (response.status === 422) {
          throw new util_1.ApiException(response.status, JSON.parse(responseBody), response.headers);
        }
        if (response.status >= 400 && response.status <= 499) {
          throw new util_1.ApiException(response.status, JSON.parse(responseBody), response.headers);
        }
        throw new util_1.ApiException(response.status, responseBody, response.headers);
      });
    }
    function sendWithRetry(url, init, retryScheduleInMs, nextInterval = 50, triesLeft = 2, retryCount = 1) {
      return __awaiter(this, void 0, void 0, function* () {
        const sleep = (interval) => new Promise((resolve) => setTimeout(resolve, interval));
        try {
          const response = yield fetch(url, init);
          if (triesLeft <= 0 || response.status < 500) {
            return response;
          }
        } catch (e) {
          if (triesLeft <= 0) {
            throw e;
          }
        }
        yield sleep(nextInterval);
        init.headers["svix-retry-count"] = retryCount.toString();
        nextInterval = (retryScheduleInMs === null || retryScheduleInMs === void 0 ? void 0 : retryScheduleInMs[retryCount]) || nextInterval * 2;
        return yield sendWithRetry(url, init, retryScheduleInMs, nextInterval, --triesLeft, ++retryCount);
      });
    }
  }
});

// node_modules/svix/dist/api/application.js
var require_application = __commonJS({
  "node_modules/svix/dist/api/application.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Application = void 0;
    var applicationIn_1 = require_applicationIn();
    var applicationOut_1 = require_applicationOut();
    var applicationPatch_1 = require_applicationPatch();
    var listResponseApplicationOut_1 = require_listResponseApplicationOut();
    var request_1 = require_request();
    var Application = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      list(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app");
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseApplicationOut_1.ListResponseApplicationOutSerializer._fromJsonObject);
      }
      create(applicationIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(applicationIn_1.ApplicationInSerializer._toJsonObject(applicationIn));
        return request.send(this.requestCtx, applicationOut_1.ApplicationOutSerializer._fromJsonObject);
      }
      getOrCreate(applicationIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app");
        request.setQueryParam("get_if_exists", true);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(applicationIn_1.ApplicationInSerializer._toJsonObject(applicationIn));
        return request.send(this.requestCtx, applicationOut_1.ApplicationOutSerializer._fromJsonObject);
      }
      get(appId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}");
        request.setPathParam("app_id", appId);
        return request.send(this.requestCtx, applicationOut_1.ApplicationOutSerializer._fromJsonObject);
      }
      update(appId, applicationIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/app/{app_id}");
        request.setPathParam("app_id", appId);
        request.setBody(applicationIn_1.ApplicationInSerializer._toJsonObject(applicationIn));
        return request.send(this.requestCtx, applicationOut_1.ApplicationOutSerializer._fromJsonObject);
      }
      delete(appId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/app/{app_id}");
        request.setPathParam("app_id", appId);
        return request.sendNoResponseBody(this.requestCtx);
      }
      patch(appId, applicationPatch) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/api/v1/app/{app_id}");
        request.setPathParam("app_id", appId);
        request.setBody(applicationPatch_1.ApplicationPatchSerializer._toJsonObject(applicationPatch));
        return request.send(this.requestCtx, applicationOut_1.ApplicationOutSerializer._fromJsonObject);
      }
    };
    exports2.Application = Application;
  }
});

// node_modules/svix/dist/models/appPortalCapability.js
var require_appPortalCapability = __commonJS({
  "node_modules/svix/dist/models/appPortalCapability.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AppPortalCapabilitySerializer = exports2.AppPortalCapability = void 0;
    var AppPortalCapability;
    (function(AppPortalCapability2) {
      AppPortalCapability2["ViewBase"] = "ViewBase";
      AppPortalCapability2["ViewEndpointSecret"] = "ViewEndpointSecret";
      AppPortalCapability2["ManageEndpointSecret"] = "ManageEndpointSecret";
      AppPortalCapability2["ManageTransformations"] = "ManageTransformations";
      AppPortalCapability2["CreateAttempts"] = "CreateAttempts";
      AppPortalCapability2["ManageEndpoint"] = "ManageEndpoint";
    })(AppPortalCapability = exports2.AppPortalCapability || (exports2.AppPortalCapability = {}));
    exports2.AppPortalCapabilitySerializer = {
      _fromJsonObject(object) {
        return object;
      },
      _toJsonObject(self) {
        return self;
      }
    };
  }
});

// node_modules/svix/dist/models/appPortalAccessIn.js
var require_appPortalAccessIn = __commonJS({
  "node_modules/svix/dist/models/appPortalAccessIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AppPortalAccessInSerializer = void 0;
    var appPortalCapability_1 = require_appPortalCapability();
    var applicationIn_1 = require_applicationIn();
    exports2.AppPortalAccessInSerializer = {
      _fromJsonObject(object) {
        var _a;
        return {
          application: object["application"] ? applicationIn_1.ApplicationInSerializer._fromJsonObject(object["application"]) : void 0,
          capabilities: (_a = object["capabilities"]) === null || _a === void 0 ? void 0 : _a.map((item) => appPortalCapability_1.AppPortalCapabilitySerializer._fromJsonObject(item)),
          expiry: object["expiry"],
          featureFlags: object["featureFlags"],
          readOnly: object["readOnly"],
          sessionId: object["sessionId"]
        };
      },
      _toJsonObject(self) {
        var _a;
        return {
          application: self.application ? applicationIn_1.ApplicationInSerializer._toJsonObject(self.application) : void 0,
          capabilities: (_a = self.capabilities) === null || _a === void 0 ? void 0 : _a.map((item) => appPortalCapability_1.AppPortalCapabilitySerializer._toJsonObject(item)),
          expiry: self.expiry,
          featureFlags: self.featureFlags,
          readOnly: self.readOnly,
          sessionId: self.sessionId
        };
      }
    };
  }
});

// node_modules/svix/dist/models/appPortalAccessOut.js
var require_appPortalAccessOut = __commonJS({
  "node_modules/svix/dist/models/appPortalAccessOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AppPortalAccessOutSerializer = void 0;
    exports2.AppPortalAccessOutSerializer = {
      _fromJsonObject(object) {
        return {
          token: object["token"],
          url: object["url"]
        };
      },
      _toJsonObject(self) {
        return {
          token: self.token,
          url: self.url
        };
      }
    };
  }
});

// node_modules/svix/dist/models/applicationTokenExpireIn.js
var require_applicationTokenExpireIn = __commonJS({
  "node_modules/svix/dist/models/applicationTokenExpireIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ApplicationTokenExpireInSerializer = void 0;
    exports2.ApplicationTokenExpireInSerializer = {
      _fromJsonObject(object) {
        return {
          expiry: object["expiry"],
          sessionIds: object["sessionIds"]
        };
      },
      _toJsonObject(self) {
        return {
          expiry: self.expiry,
          sessionIds: self.sessionIds
        };
      }
    };
  }
});

// node_modules/svix/dist/models/dashboardAccessOut.js
var require_dashboardAccessOut = __commonJS({
  "node_modules/svix/dist/models/dashboardAccessOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DashboardAccessOutSerializer = void 0;
    exports2.DashboardAccessOutSerializer = {
      _fromJsonObject(object) {
        return {
          token: object["token"],
          url: object["url"]
        };
      },
      _toJsonObject(self) {
        return {
          token: self.token,
          url: self.url
        };
      }
    };
  }
});

// node_modules/svix/dist/api/authentication.js
var require_authentication = __commonJS({
  "node_modules/svix/dist/api/authentication.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Authentication = void 0;
    var appPortalAccessIn_1 = require_appPortalAccessIn();
    var appPortalAccessOut_1 = require_appPortalAccessOut();
    var applicationTokenExpireIn_1 = require_applicationTokenExpireIn();
    var dashboardAccessOut_1 = require_dashboardAccessOut();
    var request_1 = require_request();
    var Authentication = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      appPortalAccess(appId, appPortalAccessIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/auth/app-portal-access/{app_id}");
        request.setPathParam("app_id", appId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(appPortalAccessIn_1.AppPortalAccessInSerializer._toJsonObject(appPortalAccessIn));
        return request.send(this.requestCtx, appPortalAccessOut_1.AppPortalAccessOutSerializer._fromJsonObject);
      }
      expireAll(appId, applicationTokenExpireIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/auth/app/{app_id}/expire-all");
        request.setPathParam("app_id", appId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(applicationTokenExpireIn_1.ApplicationTokenExpireInSerializer._toJsonObject(applicationTokenExpireIn));
        return request.sendNoResponseBody(this.requestCtx);
      }
      dashboardAccess(appId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/auth/dashboard-access/{app_id}");
        request.setPathParam("app_id", appId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.send(this.requestCtx, dashboardAccessOut_1.DashboardAccessOutSerializer._fromJsonObject);
      }
      logout(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/auth/logout");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.sendNoResponseBody(this.requestCtx);
      }
    };
    exports2.Authentication = Authentication;
  }
});

// node_modules/svix/dist/models/backgroundTaskStatus.js
var require_backgroundTaskStatus = __commonJS({
  "node_modules/svix/dist/models/backgroundTaskStatus.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BackgroundTaskStatusSerializer = exports2.BackgroundTaskStatus = void 0;
    var BackgroundTaskStatus;
    (function(BackgroundTaskStatus2) {
      BackgroundTaskStatus2["Running"] = "running";
      BackgroundTaskStatus2["Finished"] = "finished";
      BackgroundTaskStatus2["Failed"] = "failed";
    })(BackgroundTaskStatus = exports2.BackgroundTaskStatus || (exports2.BackgroundTaskStatus = {}));
    exports2.BackgroundTaskStatusSerializer = {
      _fromJsonObject(object) {
        return object;
      },
      _toJsonObject(self) {
        return self;
      }
    };
  }
});

// node_modules/svix/dist/models/backgroundTaskType.js
var require_backgroundTaskType = __commonJS({
  "node_modules/svix/dist/models/backgroundTaskType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BackgroundTaskTypeSerializer = exports2.BackgroundTaskType = void 0;
    var BackgroundTaskType;
    (function(BackgroundTaskType2) {
      BackgroundTaskType2["EndpointReplay"] = "endpoint.replay";
      BackgroundTaskType2["EndpointRecover"] = "endpoint.recover";
      BackgroundTaskType2["ApplicationStats"] = "application.stats";
      BackgroundTaskType2["MessageBroadcast"] = "message.broadcast";
      BackgroundTaskType2["SdkGenerate"] = "sdk.generate";
      BackgroundTaskType2["EventTypeAggregate"] = "event-type.aggregate";
      BackgroundTaskType2["ApplicationPurgeContent"] = "application.purge_content";
    })(BackgroundTaskType = exports2.BackgroundTaskType || (exports2.BackgroundTaskType = {}));
    exports2.BackgroundTaskTypeSerializer = {
      _fromJsonObject(object) {
        return object;
      },
      _toJsonObject(self) {
        return self;
      }
    };
  }
});

// node_modules/svix/dist/models/backgroundTaskOut.js
var require_backgroundTaskOut = __commonJS({
  "node_modules/svix/dist/models/backgroundTaskOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BackgroundTaskOutSerializer = void 0;
    var backgroundTaskStatus_1 = require_backgroundTaskStatus();
    var backgroundTaskType_1 = require_backgroundTaskType();
    exports2.BackgroundTaskOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"],
          id: object["id"],
          status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._fromJsonObject(object["status"]),
          task: backgroundTaskType_1.BackgroundTaskTypeSerializer._fromJsonObject(object["task"])
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data,
          id: self.id,
          status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._toJsonObject(self.status),
          task: backgroundTaskType_1.BackgroundTaskTypeSerializer._toJsonObject(self.task)
        };
      }
    };
  }
});

// node_modules/svix/dist/models/listResponseBackgroundTaskOut.js
var require_listResponseBackgroundTaskOut = __commonJS({
  "node_modules/svix/dist/models/listResponseBackgroundTaskOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ListResponseBackgroundTaskOutSerializer = void 0;
    var backgroundTaskOut_1 = require_backgroundTaskOut();
    exports2.ListResponseBackgroundTaskOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => backgroundTaskOut_1.BackgroundTaskOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"],
          prevIterator: object["prevIterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => backgroundTaskOut_1.BackgroundTaskOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator,
          prevIterator: self.prevIterator
        };
      }
    };
  }
});

// node_modules/svix/dist/api/backgroundTask.js
var require_backgroundTask = __commonJS({
  "node_modules/svix/dist/api/backgroundTask.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BackgroundTask = void 0;
    var backgroundTaskOut_1 = require_backgroundTaskOut();
    var listResponseBackgroundTaskOut_1 = require_listResponseBackgroundTaskOut();
    var request_1 = require_request();
    var BackgroundTask = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      list(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/background-task");
        request.setQueryParam("status", options === null || options === void 0 ? void 0 : options.status);
        request.setQueryParam("task", options === null || options === void 0 ? void 0 : options.task);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseBackgroundTaskOut_1.ListResponseBackgroundTaskOutSerializer._fromJsonObject);
      }
      listByEndpoint(options) {
        return this.list(options);
      }
      get(taskId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/background-task/{task_id}");
        request.setPathParam("task_id", taskId);
        return request.send(this.requestCtx, backgroundTaskOut_1.BackgroundTaskOutSerializer._fromJsonObject);
      }
    };
    exports2.BackgroundTask = BackgroundTask;
  }
});

// node_modules/svix/dist/models/endpointHeadersIn.js
var require_endpointHeadersIn = __commonJS({
  "node_modules/svix/dist/models/endpointHeadersIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointHeadersInSerializer = void 0;
    exports2.EndpointHeadersInSerializer = {
      _fromJsonObject(object) {
        return {
          headers: object["headers"]
        };
      },
      _toJsonObject(self) {
        return {
          headers: self.headers
        };
      }
    };
  }
});

// node_modules/svix/dist/models/endpointHeadersOut.js
var require_endpointHeadersOut = __commonJS({
  "node_modules/svix/dist/models/endpointHeadersOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointHeadersOutSerializer = void 0;
    exports2.EndpointHeadersOutSerializer = {
      _fromJsonObject(object) {
        return {
          headers: object["headers"],
          sensitive: object["sensitive"]
        };
      },
      _toJsonObject(self) {
        return {
          headers: self.headers,
          sensitive: self.sensitive
        };
      }
    };
  }
});

// node_modules/svix/dist/models/endpointHeadersPatchIn.js
var require_endpointHeadersPatchIn = __commonJS({
  "node_modules/svix/dist/models/endpointHeadersPatchIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointHeadersPatchInSerializer = void 0;
    exports2.EndpointHeadersPatchInSerializer = {
      _fromJsonObject(object) {
        return {
          deleteHeaders: object["deleteHeaders"],
          headers: object["headers"]
        };
      },
      _toJsonObject(self) {
        return {
          deleteHeaders: self.deleteHeaders,
          headers: self.headers
        };
      }
    };
  }
});

// node_modules/svix/dist/models/endpointIn.js
var require_endpointIn = __commonJS({
  "node_modules/svix/dist/models/endpointIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointInSerializer = void 0;
    exports2.EndpointInSerializer = {
      _fromJsonObject(object) {
        return {
          channels: object["channels"],
          description: object["description"],
          disabled: object["disabled"],
          filterTypes: object["filterTypes"],
          headers: object["headers"],
          metadata: object["metadata"],
          rateLimit: object["rateLimit"],
          secret: object["secret"],
          uid: object["uid"],
          url: object["url"],
          version: object["version"]
        };
      },
      _toJsonObject(self) {
        return {
          channels: self.channels,
          description: self.description,
          disabled: self.disabled,
          filterTypes: self.filterTypes,
          headers: self.headers,
          metadata: self.metadata,
          rateLimit: self.rateLimit,
          secret: self.secret,
          uid: self.uid,
          url: self.url,
          version: self.version
        };
      }
    };
  }
});

// node_modules/svix/dist/models/endpointOut.js
var require_endpointOut = __commonJS({
  "node_modules/svix/dist/models/endpointOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointOutSerializer = void 0;
    exports2.EndpointOutSerializer = {
      _fromJsonObject(object) {
        return {
          channels: object["channels"],
          createdAt: new Date(object["createdAt"]),
          description: object["description"],
          disabled: object["disabled"],
          filterTypes: object["filterTypes"],
          id: object["id"],
          metadata: object["metadata"],
          rateLimit: object["rateLimit"],
          uid: object["uid"],
          updatedAt: new Date(object["updatedAt"]),
          url: object["url"],
          version: object["version"]
        };
      },
      _toJsonObject(self) {
        return {
          channels: self.channels,
          createdAt: self.createdAt,
          description: self.description,
          disabled: self.disabled,
          filterTypes: self.filterTypes,
          id: self.id,
          metadata: self.metadata,
          rateLimit: self.rateLimit,
          uid: self.uid,
          updatedAt: self.updatedAt,
          url: self.url,
          version: self.version
        };
      }
    };
  }
});

// node_modules/svix/dist/models/endpointPatch.js
var require_endpointPatch = __commonJS({
  "node_modules/svix/dist/models/endpointPatch.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointPatchSerializer = void 0;
    exports2.EndpointPatchSerializer = {
      _fromJsonObject(object) {
        return {
          channels: object["channels"],
          description: object["description"],
          disabled: object["disabled"],
          filterTypes: object["filterTypes"],
          metadata: object["metadata"],
          rateLimit: object["rateLimit"],
          secret: object["secret"],
          uid: object["uid"],
          url: object["url"],
          version: object["version"]
        };
      },
      _toJsonObject(self) {
        return {
          channels: self.channels,
          description: self.description,
          disabled: self.disabled,
          filterTypes: self.filterTypes,
          metadata: self.metadata,
          rateLimit: self.rateLimit,
          secret: self.secret,
          uid: self.uid,
          url: self.url,
          version: self.version
        };
      }
    };
  }
});

// node_modules/svix/dist/models/endpointSecretOut.js
var require_endpointSecretOut = __commonJS({
  "node_modules/svix/dist/models/endpointSecretOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointSecretOutSerializer = void 0;
    exports2.EndpointSecretOutSerializer = {
      _fromJsonObject(object) {
        return {
          key: object["key"]
        };
      },
      _toJsonObject(self) {
        return {
          key: self.key
        };
      }
    };
  }
});

// node_modules/svix/dist/models/endpointSecretRotateIn.js
var require_endpointSecretRotateIn = __commonJS({
  "node_modules/svix/dist/models/endpointSecretRotateIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointSecretRotateInSerializer = void 0;
    exports2.EndpointSecretRotateInSerializer = {
      _fromJsonObject(object) {
        return {
          key: object["key"]
        };
      },
      _toJsonObject(self) {
        return {
          key: self.key
        };
      }
    };
  }
});

// node_modules/svix/dist/models/endpointStats.js
var require_endpointStats = __commonJS({
  "node_modules/svix/dist/models/endpointStats.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointStatsSerializer = void 0;
    exports2.EndpointStatsSerializer = {
      _fromJsonObject(object) {
        return {
          fail: object["fail"],
          pending: object["pending"],
          sending: object["sending"],
          success: object["success"]
        };
      },
      _toJsonObject(self) {
        return {
          fail: self.fail,
          pending: self.pending,
          sending: self.sending,
          success: self.success
        };
      }
    };
  }
});

// node_modules/svix/dist/models/endpointTransformationIn.js
var require_endpointTransformationIn = __commonJS({
  "node_modules/svix/dist/models/endpointTransformationIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointTransformationInSerializer = void 0;
    exports2.EndpointTransformationInSerializer = {
      _fromJsonObject(object) {
        return {
          code: object["code"],
          enabled: object["enabled"]
        };
      },
      _toJsonObject(self) {
        return {
          code: self.code,
          enabled: self.enabled
        };
      }
    };
  }
});

// node_modules/svix/dist/models/endpointTransformationOut.js
var require_endpointTransformationOut = __commonJS({
  "node_modules/svix/dist/models/endpointTransformationOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointTransformationOutSerializer = void 0;
    exports2.EndpointTransformationOutSerializer = {
      _fromJsonObject(object) {
        return {
          code: object["code"],
          enabled: object["enabled"]
        };
      },
      _toJsonObject(self) {
        return {
          code: self.code,
          enabled: self.enabled
        };
      }
    };
  }
});

// node_modules/svix/dist/models/endpointTransformationPatch.js
var require_endpointTransformationPatch = __commonJS({
  "node_modules/svix/dist/models/endpointTransformationPatch.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointTransformationPatchSerializer = void 0;
    exports2.EndpointTransformationPatchSerializer = {
      _fromJsonObject(object) {
        return {
          code: object["code"],
          enabled: object["enabled"]
        };
      },
      _toJsonObject(self) {
        return {
          code: self.code,
          enabled: self.enabled
        };
      }
    };
  }
});

// node_modules/svix/dist/models/endpointUpdate.js
var require_endpointUpdate = __commonJS({
  "node_modules/svix/dist/models/endpointUpdate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointUpdateSerializer = void 0;
    exports2.EndpointUpdateSerializer = {
      _fromJsonObject(object) {
        return {
          channels: object["channels"],
          description: object["description"],
          disabled: object["disabled"],
          filterTypes: object["filterTypes"],
          metadata: object["metadata"],
          rateLimit: object["rateLimit"],
          uid: object["uid"],
          url: object["url"],
          version: object["version"]
        };
      },
      _toJsonObject(self) {
        return {
          channels: self.channels,
          description: self.description,
          disabled: self.disabled,
          filterTypes: self.filterTypes,
          metadata: self.metadata,
          rateLimit: self.rateLimit,
          uid: self.uid,
          url: self.url,
          version: self.version
        };
      }
    };
  }
});

// node_modules/svix/dist/models/eventExampleIn.js
var require_eventExampleIn = __commonJS({
  "node_modules/svix/dist/models/eventExampleIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventExampleInSerializer = void 0;
    exports2.EventExampleInSerializer = {
      _fromJsonObject(object) {
        return {
          eventType: object["eventType"],
          exampleIndex: object["exampleIndex"]
        };
      },
      _toJsonObject(self) {
        return {
          eventType: self.eventType,
          exampleIndex: self.exampleIndex
        };
      }
    };
  }
});

// node_modules/svix/dist/models/listResponseEndpointOut.js
var require_listResponseEndpointOut = __commonJS({
  "node_modules/svix/dist/models/listResponseEndpointOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ListResponseEndpointOutSerializer = void 0;
    var endpointOut_1 = require_endpointOut();
    exports2.ListResponseEndpointOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => endpointOut_1.EndpointOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"],
          prevIterator: object["prevIterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => endpointOut_1.EndpointOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator,
          prevIterator: self.prevIterator
        };
      }
    };
  }
});

// node_modules/svix/dist/models/messageOut.js
var require_messageOut = __commonJS({
  "node_modules/svix/dist/models/messageOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MessageOutSerializer = void 0;
    exports2.MessageOutSerializer = {
      _fromJsonObject(object) {
        return {
          channels: object["channels"],
          eventId: object["eventId"],
          eventType: object["eventType"],
          id: object["id"],
          payload: object["payload"],
          tags: object["tags"],
          timestamp: new Date(object["timestamp"])
        };
      },
      _toJsonObject(self) {
        return {
          channels: self.channels,
          eventId: self.eventId,
          eventType: self.eventType,
          id: self.id,
          payload: self.payload,
          tags: self.tags,
          timestamp: self.timestamp
        };
      }
    };
  }
});

// node_modules/svix/dist/models/recoverIn.js
var require_recoverIn = __commonJS({
  "node_modules/svix/dist/models/recoverIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RecoverInSerializer = void 0;
    exports2.RecoverInSerializer = {
      _fromJsonObject(object) {
        return {
          since: new Date(object["since"]),
          until: object["until"] ? new Date(object["until"]) : null
        };
      },
      _toJsonObject(self) {
        return {
          since: self.since,
          until: self.until
        };
      }
    };
  }
});

// node_modules/svix/dist/models/recoverOut.js
var require_recoverOut = __commonJS({
  "node_modules/svix/dist/models/recoverOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RecoverOutSerializer = void 0;
    var backgroundTaskStatus_1 = require_backgroundTaskStatus();
    var backgroundTaskType_1 = require_backgroundTaskType();
    exports2.RecoverOutSerializer = {
      _fromJsonObject(object) {
        return {
          id: object["id"],
          status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._fromJsonObject(object["status"]),
          task: backgroundTaskType_1.BackgroundTaskTypeSerializer._fromJsonObject(object["task"])
        };
      },
      _toJsonObject(self) {
        return {
          id: self.id,
          status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._toJsonObject(self.status),
          task: backgroundTaskType_1.BackgroundTaskTypeSerializer._toJsonObject(self.task)
        };
      }
    };
  }
});

// node_modules/svix/dist/models/replayIn.js
var require_replayIn = __commonJS({
  "node_modules/svix/dist/models/replayIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReplayInSerializer = void 0;
    exports2.ReplayInSerializer = {
      _fromJsonObject(object) {
        return {
          since: new Date(object["since"]),
          until: object["until"] ? new Date(object["until"]) : null
        };
      },
      _toJsonObject(self) {
        return {
          since: self.since,
          until: self.until
        };
      }
    };
  }
});

// node_modules/svix/dist/models/replayOut.js
var require_replayOut = __commonJS({
  "node_modules/svix/dist/models/replayOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReplayOutSerializer = void 0;
    var backgroundTaskStatus_1 = require_backgroundTaskStatus();
    var backgroundTaskType_1 = require_backgroundTaskType();
    exports2.ReplayOutSerializer = {
      _fromJsonObject(object) {
        return {
          id: object["id"],
          status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._fromJsonObject(object["status"]),
          task: backgroundTaskType_1.BackgroundTaskTypeSerializer._fromJsonObject(object["task"])
        };
      },
      _toJsonObject(self) {
        return {
          id: self.id,
          status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._toJsonObject(self.status),
          task: backgroundTaskType_1.BackgroundTaskTypeSerializer._toJsonObject(self.task)
        };
      }
    };
  }
});

// node_modules/svix/dist/api/endpoint.js
var require_endpoint = __commonJS({
  "node_modules/svix/dist/api/endpoint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Endpoint = void 0;
    var endpointHeadersIn_1 = require_endpointHeadersIn();
    var endpointHeadersOut_1 = require_endpointHeadersOut();
    var endpointHeadersPatchIn_1 = require_endpointHeadersPatchIn();
    var endpointIn_1 = require_endpointIn();
    var endpointOut_1 = require_endpointOut();
    var endpointPatch_1 = require_endpointPatch();
    var endpointSecretOut_1 = require_endpointSecretOut();
    var endpointSecretRotateIn_1 = require_endpointSecretRotateIn();
    var endpointStats_1 = require_endpointStats();
    var endpointTransformationIn_1 = require_endpointTransformationIn();
    var endpointTransformationOut_1 = require_endpointTransformationOut();
    var endpointTransformationPatch_1 = require_endpointTransformationPatch();
    var endpointUpdate_1 = require_endpointUpdate();
    var eventExampleIn_1 = require_eventExampleIn();
    var listResponseEndpointOut_1 = require_listResponseEndpointOut();
    var messageOut_1 = require_messageOut();
    var recoverIn_1 = require_recoverIn();
    var recoverOut_1 = require_recoverOut();
    var replayIn_1 = require_replayIn();
    var replayOut_1 = require_replayOut();
    var request_1 = require_request();
    var Endpoint = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      list(appId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint");
        request.setPathParam("app_id", appId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseEndpointOut_1.ListResponseEndpointOutSerializer._fromJsonObject);
      }
      create(appId, endpointIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/endpoint");
        request.setPathParam("app_id", appId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(endpointIn_1.EndpointInSerializer._toJsonObject(endpointIn));
        return request.send(this.requestCtx, endpointOut_1.EndpointOutSerializer._fromJsonObject);
      }
      get(appId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint/{endpoint_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, endpointOut_1.EndpointOutSerializer._fromJsonObject);
      }
      update(appId, endpointId, endpointUpdate) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/app/{app_id}/endpoint/{endpoint_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(endpointUpdate_1.EndpointUpdateSerializer._toJsonObject(endpointUpdate));
        return request.send(this.requestCtx, endpointOut_1.EndpointOutSerializer._fromJsonObject);
      }
      delete(appId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/app/{app_id}/endpoint/{endpoint_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        return request.sendNoResponseBody(this.requestCtx);
      }
      patch(appId, endpointId, endpointPatch) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/api/v1/app/{app_id}/endpoint/{endpoint_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(endpointPatch_1.EndpointPatchSerializer._toJsonObject(endpointPatch));
        return request.send(this.requestCtx, endpointOut_1.EndpointOutSerializer._fromJsonObject);
      }
      getHeaders(appId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, endpointHeadersOut_1.EndpointHeadersOutSerializer._fromJsonObject);
      }
      updateHeaders(appId, endpointId, endpointHeadersIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(endpointHeadersIn_1.EndpointHeadersInSerializer._toJsonObject(endpointHeadersIn));
        return request.sendNoResponseBody(this.requestCtx);
      }
      headersUpdate(appId, endpointId, endpointHeadersIn) {
        return this.updateHeaders(appId, endpointId, endpointHeadersIn);
      }
      patchHeaders(appId, endpointId, endpointHeadersPatchIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(endpointHeadersPatchIn_1.EndpointHeadersPatchInSerializer._toJsonObject(endpointHeadersPatchIn));
        return request.sendNoResponseBody(this.requestCtx);
      }
      headersPatch(appId, endpointId, endpointHeadersPatchIn) {
        return this.patchHeaders(appId, endpointId, endpointHeadersPatchIn);
      }
      recover(appId, endpointId, recoverIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/recover");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(recoverIn_1.RecoverInSerializer._toJsonObject(recoverIn));
        return request.send(this.requestCtx, recoverOut_1.RecoverOutSerializer._fromJsonObject);
      }
      replayMissing(appId, endpointId, replayIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/replay-missing");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(replayIn_1.ReplayInSerializer._toJsonObject(replayIn));
        return request.send(this.requestCtx, replayOut_1.ReplayOutSerializer._fromJsonObject);
      }
      getSecret(appId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, endpointSecretOut_1.EndpointSecretOutSerializer._fromJsonObject);
      }
      rotateSecret(appId, endpointId, endpointSecretRotateIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/rotate");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(endpointSecretRotateIn_1.EndpointSecretRotateInSerializer._toJsonObject(endpointSecretRotateIn));
        return request.sendNoResponseBody(this.requestCtx);
      }
      sendExample(appId, endpointId, eventExampleIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/send-example");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(eventExampleIn_1.EventExampleInSerializer._toJsonObject(eventExampleIn));
        return request.send(this.requestCtx, messageOut_1.MessageOutSerializer._fromJsonObject);
      }
      getStats(appId, endpointId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/stats");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setQueryParam("since", options === null || options === void 0 ? void 0 : options.since);
        request.setQueryParam("until", options === null || options === void 0 ? void 0 : options.until);
        return request.send(this.requestCtx, endpointStats_1.EndpointStatsSerializer._fromJsonObject);
      }
      transformationGet(appId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, endpointTransformationOut_1.EndpointTransformationOutSerializer._fromJsonObject);
      }
      patchTransformation(appId, endpointId, endpointTransformationPatch) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(endpointTransformationPatch_1.EndpointTransformationPatchSerializer._toJsonObject(endpointTransformationPatch));
        return request.sendNoResponseBody(this.requestCtx);
      }
      transformationPartialUpdate(appId, endpointId, endpointTransformationIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(endpointTransformationIn_1.EndpointTransformationInSerializer._toJsonObject(endpointTransformationIn));
        return request.sendNoResponseBody(this.requestCtx);
      }
    };
    exports2.Endpoint = Endpoint;
  }
});

// node_modules/svix/dist/models/connectorKind.js
var require_connectorKind = __commonJS({
  "node_modules/svix/dist/models/connectorKind.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConnectorKindSerializer = exports2.ConnectorKind = void 0;
    var ConnectorKind;
    (function(ConnectorKind2) {
      ConnectorKind2["Custom"] = "Custom";
      ConnectorKind2["CloseCrm"] = "CloseCRM";
      ConnectorKind2["CustomerIo"] = "CustomerIO";
      ConnectorKind2["Discord"] = "Discord";
      ConnectorKind2["Hubspot"] = "Hubspot";
      ConnectorKind2["Inngest"] = "Inngest";
      ConnectorKind2["Loops"] = "Loops";
      ConnectorKind2["Resend"] = "Resend";
      ConnectorKind2["Salesforce"] = "Salesforce";
      ConnectorKind2["Segment"] = "Segment";
      ConnectorKind2["Sendgrid"] = "Sendgrid";
      ConnectorKind2["Slack"] = "Slack";
      ConnectorKind2["Teams"] = "Teams";
      ConnectorKind2["TriggerDev"] = "TriggerDev";
      ConnectorKind2["Windmill"] = "Windmill";
      ConnectorKind2["Zapier"] = "Zapier";
    })(ConnectorKind = exports2.ConnectorKind || (exports2.ConnectorKind = {}));
    exports2.ConnectorKindSerializer = {
      _fromJsonObject(object) {
        return object;
      },
      _toJsonObject(self) {
        return self;
      }
    };
  }
});

// node_modules/svix/dist/models/connectorIn.js
var require_connectorIn = __commonJS({
  "node_modules/svix/dist/models/connectorIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConnectorInSerializer = void 0;
    var connectorKind_1 = require_connectorKind();
    exports2.ConnectorInSerializer = {
      _fromJsonObject(object) {
        return {
          description: object["description"],
          featureFlag: object["featureFlag"],
          featureFlags: object["featureFlags"],
          filterTypes: object["filterTypes"],
          instructions: object["instructions"],
          instructionsLink: object["instructionsLink"],
          kind: object["kind"] ? connectorKind_1.ConnectorKindSerializer._fromJsonObject(object["kind"]) : void 0,
          logo: object["logo"],
          name: object["name"],
          transformation: object["transformation"]
        };
      },
      _toJsonObject(self) {
        return {
          description: self.description,
          featureFlag: self.featureFlag,
          featureFlags: self.featureFlags,
          filterTypes: self.filterTypes,
          instructions: self.instructions,
          instructionsLink: self.instructionsLink,
          kind: self.kind ? connectorKind_1.ConnectorKindSerializer._toJsonObject(self.kind) : void 0,
          logo: self.logo,
          name: self.name,
          transformation: self.transformation
        };
      }
    };
  }
});

// node_modules/svix/dist/models/eventTypeIn.js
var require_eventTypeIn = __commonJS({
  "node_modules/svix/dist/models/eventTypeIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventTypeInSerializer = void 0;
    exports2.EventTypeInSerializer = {
      _fromJsonObject(object) {
        return {
          archived: object["archived"],
          deprecated: object["deprecated"],
          description: object["description"],
          featureFlag: object["featureFlag"],
          featureFlags: object["featureFlags"],
          groupName: object["groupName"],
          name: object["name"],
          schemas: object["schemas"]
        };
      },
      _toJsonObject(self) {
        return {
          archived: self.archived,
          deprecated: self.deprecated,
          description: self.description,
          featureFlag: self.featureFlag,
          featureFlags: self.featureFlags,
          groupName: self.groupName,
          name: self.name,
          schemas: self.schemas
        };
      }
    };
  }
});

// node_modules/svix/dist/models/environmentIn.js
var require_environmentIn = __commonJS({
  "node_modules/svix/dist/models/environmentIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EnvironmentInSerializer = void 0;
    var connectorIn_1 = require_connectorIn();
    var eventTypeIn_1 = require_eventTypeIn();
    exports2.EnvironmentInSerializer = {
      _fromJsonObject(object) {
        var _a, _b;
        return {
          connectors: (_a = object["connectors"]) === null || _a === void 0 ? void 0 : _a.map((item) => connectorIn_1.ConnectorInSerializer._fromJsonObject(item)),
          eventTypes: (_b = object["eventTypes"]) === null || _b === void 0 ? void 0 : _b.map((item) => eventTypeIn_1.EventTypeInSerializer._fromJsonObject(item)),
          settings: object["settings"]
        };
      },
      _toJsonObject(self) {
        var _a, _b;
        return {
          connectors: (_a = self.connectors) === null || _a === void 0 ? void 0 : _a.map((item) => connectorIn_1.ConnectorInSerializer._toJsonObject(item)),
          eventTypes: (_b = self.eventTypes) === null || _b === void 0 ? void 0 : _b.map((item) => eventTypeIn_1.EventTypeInSerializer._toJsonObject(item)),
          settings: self.settings
        };
      }
    };
  }
});

// node_modules/svix/dist/models/connectorOut.js
var require_connectorOut = __commonJS({
  "node_modules/svix/dist/models/connectorOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConnectorOutSerializer = void 0;
    var connectorKind_1 = require_connectorKind();
    exports2.ConnectorOutSerializer = {
      _fromJsonObject(object) {
        return {
          createdAt: new Date(object["createdAt"]),
          description: object["description"],
          featureFlag: object["featureFlag"],
          featureFlags: object["featureFlags"],
          filterTypes: object["filterTypes"],
          id: object["id"],
          instructions: object["instructions"],
          instructionsLink: object["instructionsLink"],
          kind: connectorKind_1.ConnectorKindSerializer._fromJsonObject(object["kind"]),
          logo: object["logo"],
          name: object["name"],
          orgId: object["orgId"],
          transformation: object["transformation"],
          updatedAt: new Date(object["updatedAt"])
        };
      },
      _toJsonObject(self) {
        return {
          createdAt: self.createdAt,
          description: self.description,
          featureFlag: self.featureFlag,
          featureFlags: self.featureFlags,
          filterTypes: self.filterTypes,
          id: self.id,
          instructions: self.instructions,
          instructionsLink: self.instructionsLink,
          kind: connectorKind_1.ConnectorKindSerializer._toJsonObject(self.kind),
          logo: self.logo,
          name: self.name,
          orgId: self.orgId,
          transformation: self.transformation,
          updatedAt: self.updatedAt
        };
      }
    };
  }
});

// node_modules/svix/dist/models/eventTypeOut.js
var require_eventTypeOut = __commonJS({
  "node_modules/svix/dist/models/eventTypeOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventTypeOutSerializer = void 0;
    exports2.EventTypeOutSerializer = {
      _fromJsonObject(object) {
        return {
          archived: object["archived"],
          createdAt: new Date(object["createdAt"]),
          deprecated: object["deprecated"],
          description: object["description"],
          featureFlag: object["featureFlag"],
          featureFlags: object["featureFlags"],
          groupName: object["groupName"],
          name: object["name"],
          schemas: object["schemas"],
          updatedAt: new Date(object["updatedAt"])
        };
      },
      _toJsonObject(self) {
        return {
          archived: self.archived,
          createdAt: self.createdAt,
          deprecated: self.deprecated,
          description: self.description,
          featureFlag: self.featureFlag,
          featureFlags: self.featureFlags,
          groupName: self.groupName,
          name: self.name,
          schemas: self.schemas,
          updatedAt: self.updatedAt
        };
      }
    };
  }
});

// node_modules/svix/dist/models/environmentOut.js
var require_environmentOut = __commonJS({
  "node_modules/svix/dist/models/environmentOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EnvironmentOutSerializer = void 0;
    var connectorOut_1 = require_connectorOut();
    var eventTypeOut_1 = require_eventTypeOut();
    exports2.EnvironmentOutSerializer = {
      _fromJsonObject(object) {
        return {
          createdAt: new Date(object["createdAt"]),
          eventTypes: object["eventTypes"].map((item) => eventTypeOut_1.EventTypeOutSerializer._fromJsonObject(item)),
          settings: object["settings"],
          transformationTemplates: object["transformationTemplates"].map((item) => connectorOut_1.ConnectorOutSerializer._fromJsonObject(item)),
          version: object["version"]
        };
      },
      _toJsonObject(self) {
        return {
          createdAt: self.createdAt,
          eventTypes: self.eventTypes.map((item) => eventTypeOut_1.EventTypeOutSerializer._toJsonObject(item)),
          settings: self.settings,
          transformationTemplates: self.transformationTemplates.map((item) => connectorOut_1.ConnectorOutSerializer._toJsonObject(item)),
          version: self.version
        };
      }
    };
  }
});

// node_modules/svix/dist/api/environment.js
var require_environment = __commonJS({
  "node_modules/svix/dist/api/environment.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Environment = void 0;
    var environmentIn_1 = require_environmentIn();
    var environmentOut_1 = require_environmentOut();
    var request_1 = require_request();
    var Environment = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      export(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/environment/export");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.send(this.requestCtx, environmentOut_1.EnvironmentOutSerializer._fromJsonObject);
      }
      import(environmentIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/environment/import");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(environmentIn_1.EnvironmentInSerializer._toJsonObject(environmentIn));
        return request.sendNoResponseBody(this.requestCtx);
      }
    };
    exports2.Environment = Environment;
  }
});

// node_modules/svix/dist/models/eventTypeImportOpenApiIn.js
var require_eventTypeImportOpenApiIn = __commonJS({
  "node_modules/svix/dist/models/eventTypeImportOpenApiIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventTypeImportOpenApiInSerializer = void 0;
    exports2.EventTypeImportOpenApiInSerializer = {
      _fromJsonObject(object) {
        return {
          dryRun: object["dryRun"],
          replaceAll: object["replaceAll"],
          spec: object["spec"],
          specRaw: object["specRaw"]
        };
      },
      _toJsonObject(self) {
        return {
          dryRun: self.dryRun,
          replaceAll: self.replaceAll,
          spec: self.spec,
          specRaw: self.specRaw
        };
      }
    };
  }
});

// node_modules/svix/dist/models/eventTypeFromOpenApi.js
var require_eventTypeFromOpenApi = __commonJS({
  "node_modules/svix/dist/models/eventTypeFromOpenApi.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventTypeFromOpenApiSerializer = void 0;
    exports2.EventTypeFromOpenApiSerializer = {
      _fromJsonObject(object) {
        return {
          deprecated: object["deprecated"],
          description: object["description"],
          featureFlag: object["featureFlag"],
          featureFlags: object["featureFlags"],
          groupName: object["groupName"],
          name: object["name"],
          schemas: object["schemas"]
        };
      },
      _toJsonObject(self) {
        return {
          deprecated: self.deprecated,
          description: self.description,
          featureFlag: self.featureFlag,
          featureFlags: self.featureFlags,
          groupName: self.groupName,
          name: self.name,
          schemas: self.schemas
        };
      }
    };
  }
});

// node_modules/svix/dist/models/eventTypeImportOpenApiOutData.js
var require_eventTypeImportOpenApiOutData = __commonJS({
  "node_modules/svix/dist/models/eventTypeImportOpenApiOutData.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventTypeImportOpenApiOutDataSerializer = void 0;
    var eventTypeFromOpenApi_1 = require_eventTypeFromOpenApi();
    exports2.EventTypeImportOpenApiOutDataSerializer = {
      _fromJsonObject(object) {
        var _a;
        return {
          modified: object["modified"],
          toModify: (_a = object["to_modify"]) === null || _a === void 0 ? void 0 : _a.map((item) => eventTypeFromOpenApi_1.EventTypeFromOpenApiSerializer._fromJsonObject(item))
        };
      },
      _toJsonObject(self) {
        var _a;
        return {
          modified: self.modified,
          to_modify: (_a = self.toModify) === null || _a === void 0 ? void 0 : _a.map((item) => eventTypeFromOpenApi_1.EventTypeFromOpenApiSerializer._toJsonObject(item))
        };
      }
    };
  }
});

// node_modules/svix/dist/models/eventTypeImportOpenApiOut.js
var require_eventTypeImportOpenApiOut = __commonJS({
  "node_modules/svix/dist/models/eventTypeImportOpenApiOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventTypeImportOpenApiOutSerializer = void 0;
    var eventTypeImportOpenApiOutData_1 = require_eventTypeImportOpenApiOutData();
    exports2.EventTypeImportOpenApiOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: eventTypeImportOpenApiOutData_1.EventTypeImportOpenApiOutDataSerializer._fromJsonObject(object["data"])
        };
      },
      _toJsonObject(self) {
        return {
          data: eventTypeImportOpenApiOutData_1.EventTypeImportOpenApiOutDataSerializer._toJsonObject(self.data)
        };
      }
    };
  }
});

// node_modules/svix/dist/models/eventTypePatch.js
var require_eventTypePatch = __commonJS({
  "node_modules/svix/dist/models/eventTypePatch.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventTypePatchSerializer = void 0;
    exports2.EventTypePatchSerializer = {
      _fromJsonObject(object) {
        return {
          archived: object["archived"],
          deprecated: object["deprecated"],
          description: object["description"],
          featureFlag: object["featureFlag"],
          featureFlags: object["featureFlags"],
          groupName: object["groupName"],
          schemas: object["schemas"]
        };
      },
      _toJsonObject(self) {
        return {
          archived: self.archived,
          deprecated: self.deprecated,
          description: self.description,
          featureFlag: self.featureFlag,
          featureFlags: self.featureFlags,
          groupName: self.groupName,
          schemas: self.schemas
        };
      }
    };
  }
});

// node_modules/svix/dist/models/eventTypeUpdate.js
var require_eventTypeUpdate = __commonJS({
  "node_modules/svix/dist/models/eventTypeUpdate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventTypeUpdateSerializer = void 0;
    exports2.EventTypeUpdateSerializer = {
      _fromJsonObject(object) {
        return {
          archived: object["archived"],
          deprecated: object["deprecated"],
          description: object["description"],
          featureFlag: object["featureFlag"],
          featureFlags: object["featureFlags"],
          groupName: object["groupName"],
          schemas: object["schemas"]
        };
      },
      _toJsonObject(self) {
        return {
          archived: self.archived,
          deprecated: self.deprecated,
          description: self.description,
          featureFlag: self.featureFlag,
          featureFlags: self.featureFlags,
          groupName: self.groupName,
          schemas: self.schemas
        };
      }
    };
  }
});

// node_modules/svix/dist/models/listResponseEventTypeOut.js
var require_listResponseEventTypeOut = __commonJS({
  "node_modules/svix/dist/models/listResponseEventTypeOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ListResponseEventTypeOutSerializer = void 0;
    var eventTypeOut_1 = require_eventTypeOut();
    exports2.ListResponseEventTypeOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => eventTypeOut_1.EventTypeOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"],
          prevIterator: object["prevIterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => eventTypeOut_1.EventTypeOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator,
          prevIterator: self.prevIterator
        };
      }
    };
  }
});

// node_modules/svix/dist/api/eventType.js
var require_eventType = __commonJS({
  "node_modules/svix/dist/api/eventType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventType = void 0;
    var eventTypeImportOpenApiIn_1 = require_eventTypeImportOpenApiIn();
    var eventTypeImportOpenApiOut_1 = require_eventTypeImportOpenApiOut();
    var eventTypeIn_1 = require_eventTypeIn();
    var eventTypeOut_1 = require_eventTypeOut();
    var eventTypePatch_1 = require_eventTypePatch();
    var eventTypeUpdate_1 = require_eventTypeUpdate();
    var listResponseEventTypeOut_1 = require_listResponseEventTypeOut();
    var request_1 = require_request();
    var EventType = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      list(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/event-type");
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        request.setQueryParam("include_archived", options === null || options === void 0 ? void 0 : options.includeArchived);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        return request.send(this.requestCtx, listResponseEventTypeOut_1.ListResponseEventTypeOutSerializer._fromJsonObject);
      }
      create(eventTypeIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/event-type");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(eventTypeIn_1.EventTypeInSerializer._toJsonObject(eventTypeIn));
        return request.send(this.requestCtx, eventTypeOut_1.EventTypeOutSerializer._fromJsonObject);
      }
      importOpenapi(eventTypeImportOpenApiIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/event-type/import/openapi");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(eventTypeImportOpenApiIn_1.EventTypeImportOpenApiInSerializer._toJsonObject(eventTypeImportOpenApiIn));
        return request.send(this.requestCtx, eventTypeImportOpenApiOut_1.EventTypeImportOpenApiOutSerializer._fromJsonObject);
      }
      get(eventTypeName) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/event-type/{event_type_name}");
        request.setPathParam("event_type_name", eventTypeName);
        return request.send(this.requestCtx, eventTypeOut_1.EventTypeOutSerializer._fromJsonObject);
      }
      update(eventTypeName, eventTypeUpdate) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/event-type/{event_type_name}");
        request.setPathParam("event_type_name", eventTypeName);
        request.setBody(eventTypeUpdate_1.EventTypeUpdateSerializer._toJsonObject(eventTypeUpdate));
        return request.send(this.requestCtx, eventTypeOut_1.EventTypeOutSerializer._fromJsonObject);
      }
      delete(eventTypeName, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/event-type/{event_type_name}");
        request.setPathParam("event_type_name", eventTypeName);
        request.setQueryParam("expunge", options === null || options === void 0 ? void 0 : options.expunge);
        return request.sendNoResponseBody(this.requestCtx);
      }
      patch(eventTypeName, eventTypePatch) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/api/v1/event-type/{event_type_name}");
        request.setPathParam("event_type_name", eventTypeName);
        request.setBody(eventTypePatch_1.EventTypePatchSerializer._toJsonObject(eventTypePatch));
        return request.send(this.requestCtx, eventTypeOut_1.EventTypeOutSerializer._fromJsonObject);
      }
    };
    exports2.EventType = EventType;
  }
});

// node_modules/svix/dist/api/health.js
var require_health = __commonJS({
  "node_modules/svix/dist/api/health.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Health = void 0;
    var request_1 = require_request();
    var Health = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      get() {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/health");
        return request.sendNoResponseBody(this.requestCtx);
      }
    };
    exports2.Health = Health;
  }
});

// node_modules/svix/dist/models/ingestSourceConsumerPortalAccessIn.js
var require_ingestSourceConsumerPortalAccessIn = __commonJS({
  "node_modules/svix/dist/models/ingestSourceConsumerPortalAccessIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestSourceConsumerPortalAccessInSerializer = void 0;
    exports2.IngestSourceConsumerPortalAccessInSerializer = {
      _fromJsonObject(object) {
        return {
          expiry: object["expiry"],
          readOnly: object["readOnly"]
        };
      },
      _toJsonObject(self) {
        return {
          expiry: self.expiry,
          readOnly: self.readOnly
        };
      }
    };
  }
});

// node_modules/svix/dist/models/ingestEndpointHeadersIn.js
var require_ingestEndpointHeadersIn = __commonJS({
  "node_modules/svix/dist/models/ingestEndpointHeadersIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestEndpointHeadersInSerializer = void 0;
    exports2.IngestEndpointHeadersInSerializer = {
      _fromJsonObject(object) {
        return {
          headers: object["headers"]
        };
      },
      _toJsonObject(self) {
        return {
          headers: self.headers
        };
      }
    };
  }
});

// node_modules/svix/dist/models/ingestEndpointHeadersOut.js
var require_ingestEndpointHeadersOut = __commonJS({
  "node_modules/svix/dist/models/ingestEndpointHeadersOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestEndpointHeadersOutSerializer = void 0;
    exports2.IngestEndpointHeadersOutSerializer = {
      _fromJsonObject(object) {
        return {
          headers: object["headers"],
          sensitive: object["sensitive"]
        };
      },
      _toJsonObject(self) {
        return {
          headers: self.headers,
          sensitive: self.sensitive
        };
      }
    };
  }
});

// node_modules/svix/dist/models/ingestEndpointIn.js
var require_ingestEndpointIn = __commonJS({
  "node_modules/svix/dist/models/ingestEndpointIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestEndpointInSerializer = void 0;
    exports2.IngestEndpointInSerializer = {
      _fromJsonObject(object) {
        return {
          description: object["description"],
          disabled: object["disabled"],
          metadata: object["metadata"],
          rateLimit: object["rateLimit"],
          secret: object["secret"],
          uid: object["uid"],
          url: object["url"]
        };
      },
      _toJsonObject(self) {
        return {
          description: self.description,
          disabled: self.disabled,
          metadata: self.metadata,
          rateLimit: self.rateLimit,
          secret: self.secret,
          uid: self.uid,
          url: self.url
        };
      }
    };
  }
});

// node_modules/svix/dist/models/ingestEndpointOut.js
var require_ingestEndpointOut = __commonJS({
  "node_modules/svix/dist/models/ingestEndpointOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestEndpointOutSerializer = void 0;
    exports2.IngestEndpointOutSerializer = {
      _fromJsonObject(object) {
        return {
          createdAt: new Date(object["createdAt"]),
          description: object["description"],
          disabled: object["disabled"],
          id: object["id"],
          metadata: object["metadata"],
          rateLimit: object["rateLimit"],
          uid: object["uid"],
          updatedAt: new Date(object["updatedAt"]),
          url: object["url"]
        };
      },
      _toJsonObject(self) {
        return {
          createdAt: self.createdAt,
          description: self.description,
          disabled: self.disabled,
          id: self.id,
          metadata: self.metadata,
          rateLimit: self.rateLimit,
          uid: self.uid,
          updatedAt: self.updatedAt,
          url: self.url
        };
      }
    };
  }
});

// node_modules/svix/dist/models/ingestEndpointSecretIn.js
var require_ingestEndpointSecretIn = __commonJS({
  "node_modules/svix/dist/models/ingestEndpointSecretIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestEndpointSecretInSerializer = void 0;
    exports2.IngestEndpointSecretInSerializer = {
      _fromJsonObject(object) {
        return {
          key: object["key"]
        };
      },
      _toJsonObject(self) {
        return {
          key: self.key
        };
      }
    };
  }
});

// node_modules/svix/dist/models/ingestEndpointSecretOut.js
var require_ingestEndpointSecretOut = __commonJS({
  "node_modules/svix/dist/models/ingestEndpointSecretOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestEndpointSecretOutSerializer = void 0;
    exports2.IngestEndpointSecretOutSerializer = {
      _fromJsonObject(object) {
        return {
          key: object["key"]
        };
      },
      _toJsonObject(self) {
        return {
          key: self.key
        };
      }
    };
  }
});

// node_modules/svix/dist/models/ingestEndpointTransformationOut.js
var require_ingestEndpointTransformationOut = __commonJS({
  "node_modules/svix/dist/models/ingestEndpointTransformationOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestEndpointTransformationOutSerializer = void 0;
    exports2.IngestEndpointTransformationOutSerializer = {
      _fromJsonObject(object) {
        return {
          code: object["code"],
          enabled: object["enabled"]
        };
      },
      _toJsonObject(self) {
        return {
          code: self.code,
          enabled: self.enabled
        };
      }
    };
  }
});

// node_modules/svix/dist/models/ingestEndpointTransformationPatch.js
var require_ingestEndpointTransformationPatch = __commonJS({
  "node_modules/svix/dist/models/ingestEndpointTransformationPatch.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestEndpointTransformationPatchSerializer = void 0;
    exports2.IngestEndpointTransformationPatchSerializer = {
      _fromJsonObject(object) {
        return {
          code: object["code"],
          enabled: object["enabled"]
        };
      },
      _toJsonObject(self) {
        return {
          code: self.code,
          enabled: self.enabled
        };
      }
    };
  }
});

// node_modules/svix/dist/models/ingestEndpointUpdate.js
var require_ingestEndpointUpdate = __commonJS({
  "node_modules/svix/dist/models/ingestEndpointUpdate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestEndpointUpdateSerializer = void 0;
    exports2.IngestEndpointUpdateSerializer = {
      _fromJsonObject(object) {
        return {
          description: object["description"],
          disabled: object["disabled"],
          metadata: object["metadata"],
          rateLimit: object["rateLimit"],
          uid: object["uid"],
          url: object["url"]
        };
      },
      _toJsonObject(self) {
        return {
          description: self.description,
          disabled: self.disabled,
          metadata: self.metadata,
          rateLimit: self.rateLimit,
          uid: self.uid,
          url: self.url
        };
      }
    };
  }
});

// node_modules/svix/dist/models/listResponseIngestEndpointOut.js
var require_listResponseIngestEndpointOut = __commonJS({
  "node_modules/svix/dist/models/listResponseIngestEndpointOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ListResponseIngestEndpointOutSerializer = void 0;
    var ingestEndpointOut_1 = require_ingestEndpointOut();
    exports2.ListResponseIngestEndpointOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => ingestEndpointOut_1.IngestEndpointOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"],
          prevIterator: object["prevIterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => ingestEndpointOut_1.IngestEndpointOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator,
          prevIterator: self.prevIterator
        };
      }
    };
  }
});

// node_modules/svix/dist/api/ingestEndpoint.js
var require_ingestEndpoint = __commonJS({
  "node_modules/svix/dist/api/ingestEndpoint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestEndpoint = void 0;
    var ingestEndpointHeadersIn_1 = require_ingestEndpointHeadersIn();
    var ingestEndpointHeadersOut_1 = require_ingestEndpointHeadersOut();
    var ingestEndpointIn_1 = require_ingestEndpointIn();
    var ingestEndpointOut_1 = require_ingestEndpointOut();
    var ingestEndpointSecretIn_1 = require_ingestEndpointSecretIn();
    var ingestEndpointSecretOut_1 = require_ingestEndpointSecretOut();
    var ingestEndpointTransformationOut_1 = require_ingestEndpointTransformationOut();
    var ingestEndpointTransformationPatch_1 = require_ingestEndpointTransformationPatch();
    var ingestEndpointUpdate_1 = require_ingestEndpointUpdate();
    var listResponseIngestEndpointOut_1 = require_listResponseIngestEndpointOut();
    var request_1 = require_request();
    var IngestEndpoint = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      list(sourceId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source/{source_id}/endpoint");
        request.setPathParam("source_id", sourceId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseIngestEndpointOut_1.ListResponseIngestEndpointOutSerializer._fromJsonObject);
      }
      create(sourceId, ingestEndpointIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/ingest/api/v1/source/{source_id}/endpoint");
        request.setPathParam("source_id", sourceId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(ingestEndpointIn_1.IngestEndpointInSerializer._toJsonObject(ingestEndpointIn));
        return request.send(this.requestCtx, ingestEndpointOut_1.IngestEndpointOutSerializer._fromJsonObject);
      }
      get(sourceId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, ingestEndpointOut_1.IngestEndpointOutSerializer._fromJsonObject);
      }
      update(sourceId, endpointId, ingestEndpointUpdate) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(ingestEndpointUpdate_1.IngestEndpointUpdateSerializer._toJsonObject(ingestEndpointUpdate));
        return request.send(this.requestCtx, ingestEndpointOut_1.IngestEndpointOutSerializer._fromJsonObject);
      }
      delete(sourceId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        return request.sendNoResponseBody(this.requestCtx);
      }
      getHeaders(sourceId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}/headers");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, ingestEndpointHeadersOut_1.IngestEndpointHeadersOutSerializer._fromJsonObject);
      }
      updateHeaders(sourceId, endpointId, ingestEndpointHeadersIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}/headers");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(ingestEndpointHeadersIn_1.IngestEndpointHeadersInSerializer._toJsonObject(ingestEndpointHeadersIn));
        return request.sendNoResponseBody(this.requestCtx);
      }
      getSecret(sourceId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}/secret");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, ingestEndpointSecretOut_1.IngestEndpointSecretOutSerializer._fromJsonObject);
      }
      rotateSecret(sourceId, endpointId, ingestEndpointSecretIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}/secret/rotate");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(ingestEndpointSecretIn_1.IngestEndpointSecretInSerializer._toJsonObject(ingestEndpointSecretIn));
        return request.sendNoResponseBody(this.requestCtx);
      }
      getTransformation(sourceId, endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}/transformation");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, ingestEndpointTransformationOut_1.IngestEndpointTransformationOutSerializer._fromJsonObject);
      }
      setTransformation(sourceId, endpointId, ingestEndpointTransformationPatch) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PATCH, "/ingest/api/v1/source/{source_id}/endpoint/{endpoint_id}/transformation");
        request.setPathParam("source_id", sourceId);
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(ingestEndpointTransformationPatch_1.IngestEndpointTransformationPatchSerializer._toJsonObject(ingestEndpointTransformationPatch));
        return request.sendNoResponseBody(this.requestCtx);
      }
    };
    exports2.IngestEndpoint = IngestEndpoint;
  }
});

// node_modules/svix/dist/models/adobeSignConfig.js
var require_adobeSignConfig = __commonJS({
  "node_modules/svix/dist/models/adobeSignConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AdobeSignConfigSerializer = void 0;
    exports2.AdobeSignConfigSerializer = {
      _fromJsonObject(object) {
        return {
          clientId: object["clientId"]
        };
      },
      _toJsonObject(self) {
        return {
          clientId: self.clientId
        };
      }
    };
  }
});

// node_modules/svix/dist/models/airwallexConfig.js
var require_airwallexConfig = __commonJS({
  "node_modules/svix/dist/models/airwallexConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AirwallexConfigSerializer = void 0;
    exports2.AirwallexConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/checkbookConfig.js
var require_checkbookConfig = __commonJS({
  "node_modules/svix/dist/models/checkbookConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CheckbookConfigSerializer = void 0;
    exports2.CheckbookConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/cronConfig.js
var require_cronConfig = __commonJS({
  "node_modules/svix/dist/models/cronConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CronConfigSerializer = void 0;
    exports2.CronConfigSerializer = {
      _fromJsonObject(object) {
        return {
          contentType: object["contentType"],
          payload: object["payload"],
          schedule: object["schedule"]
        };
      },
      _toJsonObject(self) {
        return {
          contentType: self.contentType,
          payload: self.payload,
          schedule: self.schedule
        };
      }
    };
  }
});

// node_modules/svix/dist/models/docusignConfig.js
var require_docusignConfig = __commonJS({
  "node_modules/svix/dist/models/docusignConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DocusignConfigSerializer = void 0;
    exports2.DocusignConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/easypostConfig.js
var require_easypostConfig = __commonJS({
  "node_modules/svix/dist/models/easypostConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EasypostConfigSerializer = void 0;
    exports2.EasypostConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/githubConfig.js
var require_githubConfig = __commonJS({
  "node_modules/svix/dist/models/githubConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.GithubConfigSerializer = void 0;
    exports2.GithubConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/hubspotConfig.js
var require_hubspotConfig = __commonJS({
  "node_modules/svix/dist/models/hubspotConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HubspotConfigSerializer = void 0;
    exports2.HubspotConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/orumIoConfig.js
var require_orumIoConfig = __commonJS({
  "node_modules/svix/dist/models/orumIoConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OrumIoConfigSerializer = void 0;
    exports2.OrumIoConfigSerializer = {
      _fromJsonObject(object) {
        return {
          publicKey: object["publicKey"]
        };
      },
      _toJsonObject(self) {
        return {
          publicKey: self.publicKey
        };
      }
    };
  }
});

// node_modules/svix/dist/models/pandaDocConfig.js
var require_pandaDocConfig = __commonJS({
  "node_modules/svix/dist/models/pandaDocConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PandaDocConfigSerializer = void 0;
    exports2.PandaDocConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/portIoConfig.js
var require_portIoConfig = __commonJS({
  "node_modules/svix/dist/models/portIoConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PortIoConfigSerializer = void 0;
    exports2.PortIoConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/rutterConfig.js
var require_rutterConfig = __commonJS({
  "node_modules/svix/dist/models/rutterConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RutterConfigSerializer = void 0;
    exports2.RutterConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/segmentConfig.js
var require_segmentConfig = __commonJS({
  "node_modules/svix/dist/models/segmentConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SegmentConfigSerializer = void 0;
    exports2.SegmentConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/shopifyConfig.js
var require_shopifyConfig = __commonJS({
  "node_modules/svix/dist/models/shopifyConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShopifyConfigSerializer = void 0;
    exports2.ShopifyConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/slackConfig.js
var require_slackConfig = __commonJS({
  "node_modules/svix/dist/models/slackConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SlackConfigSerializer = void 0;
    exports2.SlackConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/stripeConfig.js
var require_stripeConfig = __commonJS({
  "node_modules/svix/dist/models/stripeConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StripeConfigSerializer = void 0;
    exports2.StripeConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/svixConfig.js
var require_svixConfig = __commonJS({
  "node_modules/svix/dist/models/svixConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SvixConfigSerializer = void 0;
    exports2.SvixConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/telnyxConfig.js
var require_telnyxConfig = __commonJS({
  "node_modules/svix/dist/models/telnyxConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TelnyxConfigSerializer = void 0;
    exports2.TelnyxConfigSerializer = {
      _fromJsonObject(object) {
        return {
          publicKey: object["publicKey"]
        };
      },
      _toJsonObject(self) {
        return {
          publicKey: self.publicKey
        };
      }
    };
  }
});

// node_modules/svix/dist/models/vapiConfig.js
var require_vapiConfig = __commonJS({
  "node_modules/svix/dist/models/vapiConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VapiConfigSerializer = void 0;
    exports2.VapiConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/veriffConfig.js
var require_veriffConfig = __commonJS({
  "node_modules/svix/dist/models/veriffConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VeriffConfigSerializer = void 0;
    exports2.VeriffConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/zoomConfig.js
var require_zoomConfig = __commonJS({
  "node_modules/svix/dist/models/zoomConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ZoomConfigSerializer = void 0;
    exports2.ZoomConfigSerializer = {
      _fromJsonObject(object) {
        return {
          secret: object["secret"]
        };
      },
      _toJsonObject(self) {
        return {
          secret: self.secret
        };
      }
    };
  }
});

// node_modules/svix/dist/models/ingestSourceIn.js
var require_ingestSourceIn = __commonJS({
  "node_modules/svix/dist/models/ingestSourceIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestSourceInSerializer = void 0;
    var adobeSignConfig_1 = require_adobeSignConfig();
    var airwallexConfig_1 = require_airwallexConfig();
    var checkbookConfig_1 = require_checkbookConfig();
    var cronConfig_1 = require_cronConfig();
    var docusignConfig_1 = require_docusignConfig();
    var easypostConfig_1 = require_easypostConfig();
    var githubConfig_1 = require_githubConfig();
    var hubspotConfig_1 = require_hubspotConfig();
    var orumIoConfig_1 = require_orumIoConfig();
    var pandaDocConfig_1 = require_pandaDocConfig();
    var portIoConfig_1 = require_portIoConfig();
    var rutterConfig_1 = require_rutterConfig();
    var segmentConfig_1 = require_segmentConfig();
    var shopifyConfig_1 = require_shopifyConfig();
    var slackConfig_1 = require_slackConfig();
    var stripeConfig_1 = require_stripeConfig();
    var svixConfig_1 = require_svixConfig();
    var telnyxConfig_1 = require_telnyxConfig();
    var vapiConfig_1 = require_vapiConfig();
    var veriffConfig_1 = require_veriffConfig();
    var zoomConfig_1 = require_zoomConfig();
    exports2.IngestSourceInSerializer = {
      _fromJsonObject(object) {
        const type = object["type"];
        function getConfig(type2) {
          switch (type2) {
            case "generic-webhook":
              return {};
            case "cron":
              return cronConfig_1.CronConfigSerializer._fromJsonObject(object["config"]);
            case "adobe-sign":
              return adobeSignConfig_1.AdobeSignConfigSerializer._fromJsonObject(object["config"]);
            case "beehiiv":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "brex":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "checkbook":
              return checkbookConfig_1.CheckbookConfigSerializer._fromJsonObject(object["config"]);
            case "clerk":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "docusign":
              return docusignConfig_1.DocusignConfigSerializer._fromJsonObject(object["config"]);
            case "easypost":
              return easypostConfig_1.EasypostConfigSerializer._fromJsonObject(object["config"]);
            case "github":
              return githubConfig_1.GithubConfigSerializer._fromJsonObject(object["config"]);
            case "guesty":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "hubspot":
              return hubspotConfig_1.HubspotConfigSerializer._fromJsonObject(object["config"]);
            case "incident-io":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "lithic":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "nash":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "orum-io":
              return orumIoConfig_1.OrumIoConfigSerializer._fromJsonObject(object["config"]);
            case "panda-doc":
              return pandaDocConfig_1.PandaDocConfigSerializer._fromJsonObject(object["config"]);
            case "port-io":
              return portIoConfig_1.PortIoConfigSerializer._fromJsonObject(object["config"]);
            case "pleo":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "replicate":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "resend":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "rutter":
              return rutterConfig_1.RutterConfigSerializer._fromJsonObject(object["config"]);
            case "safebase":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "sardine":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "segment":
              return segmentConfig_1.SegmentConfigSerializer._fromJsonObject(object["config"]);
            case "shopify":
              return shopifyConfig_1.ShopifyConfigSerializer._fromJsonObject(object["config"]);
            case "slack":
              return slackConfig_1.SlackConfigSerializer._fromJsonObject(object["config"]);
            case "stripe":
              return stripeConfig_1.StripeConfigSerializer._fromJsonObject(object["config"]);
            case "stych":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "svix":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "zoom":
              return zoomConfig_1.ZoomConfigSerializer._fromJsonObject(object["config"]);
            case "telnyx":
              return telnyxConfig_1.TelnyxConfigSerializer._fromJsonObject(object["config"]);
            case "vapi":
              return vapiConfig_1.VapiConfigSerializer._fromJsonObject(object["config"]);
            case "open-ai":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "render":
              return svixConfig_1.SvixConfigSerializer._fromJsonObject(object["config"]);
            case "veriff":
              return veriffConfig_1.VeriffConfigSerializer._fromJsonObject(object["config"]);
            case "airwallex":
              return airwallexConfig_1.AirwallexConfigSerializer._fromJsonObject(object["config"]);
            default:
              throw new Error(`Unexpected type: ${type2}`);
          }
        }
        return {
          type,
          config: getConfig(type),
          metadata: object["metadata"],
          name: object["name"],
          uid: object["uid"]
        };
      },
      _toJsonObject(self) {
        let config;
        switch (self.type) {
          case "generic-webhook":
            config = {};
            break;
          case "cron":
            config = cronConfig_1.CronConfigSerializer._toJsonObject(self.config);
            break;
          case "adobe-sign":
            config = adobeSignConfig_1.AdobeSignConfigSerializer._toJsonObject(self.config);
            break;
          case "beehiiv":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "brex":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "checkbook":
            config = checkbookConfig_1.CheckbookConfigSerializer._toJsonObject(self.config);
            break;
          case "clerk":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "docusign":
            config = docusignConfig_1.DocusignConfigSerializer._toJsonObject(self.config);
            break;
          case "easypost":
            config = easypostConfig_1.EasypostConfigSerializer._toJsonObject(self.config);
            break;
          case "github":
            config = githubConfig_1.GithubConfigSerializer._toJsonObject(self.config);
            break;
          case "guesty":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "hubspot":
            config = hubspotConfig_1.HubspotConfigSerializer._toJsonObject(self.config);
            break;
          case "incident-io":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "lithic":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "nash":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "orum-io":
            config = orumIoConfig_1.OrumIoConfigSerializer._toJsonObject(self.config);
            break;
          case "panda-doc":
            config = pandaDocConfig_1.PandaDocConfigSerializer._toJsonObject(self.config);
            break;
          case "port-io":
            config = portIoConfig_1.PortIoConfigSerializer._toJsonObject(self.config);
            break;
          case "pleo":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "replicate":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "resend":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "rutter":
            config = rutterConfig_1.RutterConfigSerializer._toJsonObject(self.config);
            break;
          case "safebase":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "sardine":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "segment":
            config = segmentConfig_1.SegmentConfigSerializer._toJsonObject(self.config);
            break;
          case "shopify":
            config = shopifyConfig_1.ShopifyConfigSerializer._toJsonObject(self.config);
            break;
          case "slack":
            config = slackConfig_1.SlackConfigSerializer._toJsonObject(self.config);
            break;
          case "stripe":
            config = stripeConfig_1.StripeConfigSerializer._toJsonObject(self.config);
            break;
          case "stych":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "svix":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "zoom":
            config = zoomConfig_1.ZoomConfigSerializer._toJsonObject(self.config);
            break;
          case "telnyx":
            config = telnyxConfig_1.TelnyxConfigSerializer._toJsonObject(self.config);
            break;
          case "vapi":
            config = vapiConfig_1.VapiConfigSerializer._toJsonObject(self.config);
            break;
          case "open-ai":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "render":
            config = svixConfig_1.SvixConfigSerializer._toJsonObject(self.config);
            break;
          case "veriff":
            config = veriffConfig_1.VeriffConfigSerializer._toJsonObject(self.config);
            break;
          case "airwallex":
            config = airwallexConfig_1.AirwallexConfigSerializer._toJsonObject(self.config);
            break;
        }
        return {
          type: self.type,
          config,
          metadata: self.metadata,
          name: self.name,
          uid: self.uid
        };
      }
    };
  }
});

// node_modules/svix/dist/models/adobeSignConfigOut.js
var require_adobeSignConfigOut = __commonJS({
  "node_modules/svix/dist/models/adobeSignConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AdobeSignConfigOutSerializer = void 0;
    exports2.AdobeSignConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/airwallexConfigOut.js
var require_airwallexConfigOut = __commonJS({
  "node_modules/svix/dist/models/airwallexConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AirwallexConfigOutSerializer = void 0;
    exports2.AirwallexConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/checkbookConfigOut.js
var require_checkbookConfigOut = __commonJS({
  "node_modules/svix/dist/models/checkbookConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CheckbookConfigOutSerializer = void 0;
    exports2.CheckbookConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/docusignConfigOut.js
var require_docusignConfigOut = __commonJS({
  "node_modules/svix/dist/models/docusignConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DocusignConfigOutSerializer = void 0;
    exports2.DocusignConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/easypostConfigOut.js
var require_easypostConfigOut = __commonJS({
  "node_modules/svix/dist/models/easypostConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EasypostConfigOutSerializer = void 0;
    exports2.EasypostConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/githubConfigOut.js
var require_githubConfigOut = __commonJS({
  "node_modules/svix/dist/models/githubConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.GithubConfigOutSerializer = void 0;
    exports2.GithubConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/hubspotConfigOut.js
var require_hubspotConfigOut = __commonJS({
  "node_modules/svix/dist/models/hubspotConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HubspotConfigOutSerializer = void 0;
    exports2.HubspotConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/orumIoConfigOut.js
var require_orumIoConfigOut = __commonJS({
  "node_modules/svix/dist/models/orumIoConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OrumIoConfigOutSerializer = void 0;
    exports2.OrumIoConfigOutSerializer = {
      _fromJsonObject(object) {
        return {
          publicKey: object["publicKey"]
        };
      },
      _toJsonObject(self) {
        return {
          publicKey: self.publicKey
        };
      }
    };
  }
});

// node_modules/svix/dist/models/pandaDocConfigOut.js
var require_pandaDocConfigOut = __commonJS({
  "node_modules/svix/dist/models/pandaDocConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PandaDocConfigOutSerializer = void 0;
    exports2.PandaDocConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/portIoConfigOut.js
var require_portIoConfigOut = __commonJS({
  "node_modules/svix/dist/models/portIoConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PortIoConfigOutSerializer = void 0;
    exports2.PortIoConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/rutterConfigOut.js
var require_rutterConfigOut = __commonJS({
  "node_modules/svix/dist/models/rutterConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RutterConfigOutSerializer = void 0;
    exports2.RutterConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/segmentConfigOut.js
var require_segmentConfigOut = __commonJS({
  "node_modules/svix/dist/models/segmentConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SegmentConfigOutSerializer = void 0;
    exports2.SegmentConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/shopifyConfigOut.js
var require_shopifyConfigOut = __commonJS({
  "node_modules/svix/dist/models/shopifyConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShopifyConfigOutSerializer = void 0;
    exports2.ShopifyConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/slackConfigOut.js
var require_slackConfigOut = __commonJS({
  "node_modules/svix/dist/models/slackConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SlackConfigOutSerializer = void 0;
    exports2.SlackConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/stripeConfigOut.js
var require_stripeConfigOut = __commonJS({
  "node_modules/svix/dist/models/stripeConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StripeConfigOutSerializer = void 0;
    exports2.StripeConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/svixConfigOut.js
var require_svixConfigOut = __commonJS({
  "node_modules/svix/dist/models/svixConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SvixConfigOutSerializer = void 0;
    exports2.SvixConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/telnyxConfigOut.js
var require_telnyxConfigOut = __commonJS({
  "node_modules/svix/dist/models/telnyxConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TelnyxConfigOutSerializer = void 0;
    exports2.TelnyxConfigOutSerializer = {
      _fromJsonObject(object) {
        return {
          publicKey: object["publicKey"]
        };
      },
      _toJsonObject(self) {
        return {
          publicKey: self.publicKey
        };
      }
    };
  }
});

// node_modules/svix/dist/models/vapiConfigOut.js
var require_vapiConfigOut = __commonJS({
  "node_modules/svix/dist/models/vapiConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VapiConfigOutSerializer = void 0;
    exports2.VapiConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/veriffConfigOut.js
var require_veriffConfigOut = __commonJS({
  "node_modules/svix/dist/models/veriffConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VeriffConfigOutSerializer = void 0;
    exports2.VeriffConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/zoomConfigOut.js
var require_zoomConfigOut = __commonJS({
  "node_modules/svix/dist/models/zoomConfigOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ZoomConfigOutSerializer = void 0;
    exports2.ZoomConfigOutSerializer = {
      _fromJsonObject(object) {
        return {};
      },
      _toJsonObject(self) {
        return {};
      }
    };
  }
});

// node_modules/svix/dist/models/ingestSourceOut.js
var require_ingestSourceOut = __commonJS({
  "node_modules/svix/dist/models/ingestSourceOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestSourceOutSerializer = void 0;
    var adobeSignConfigOut_1 = require_adobeSignConfigOut();
    var airwallexConfigOut_1 = require_airwallexConfigOut();
    var checkbookConfigOut_1 = require_checkbookConfigOut();
    var cronConfig_1 = require_cronConfig();
    var docusignConfigOut_1 = require_docusignConfigOut();
    var easypostConfigOut_1 = require_easypostConfigOut();
    var githubConfigOut_1 = require_githubConfigOut();
    var hubspotConfigOut_1 = require_hubspotConfigOut();
    var orumIoConfigOut_1 = require_orumIoConfigOut();
    var pandaDocConfigOut_1 = require_pandaDocConfigOut();
    var portIoConfigOut_1 = require_portIoConfigOut();
    var rutterConfigOut_1 = require_rutterConfigOut();
    var segmentConfigOut_1 = require_segmentConfigOut();
    var shopifyConfigOut_1 = require_shopifyConfigOut();
    var slackConfigOut_1 = require_slackConfigOut();
    var stripeConfigOut_1 = require_stripeConfigOut();
    var svixConfigOut_1 = require_svixConfigOut();
    var telnyxConfigOut_1 = require_telnyxConfigOut();
    var vapiConfigOut_1 = require_vapiConfigOut();
    var veriffConfigOut_1 = require_veriffConfigOut();
    var zoomConfigOut_1 = require_zoomConfigOut();
    exports2.IngestSourceOutSerializer = {
      _fromJsonObject(object) {
        const type = object["type"];
        function getConfig(type2) {
          switch (type2) {
            case "generic-webhook":
              return {};
            case "cron":
              return cronConfig_1.CronConfigSerializer._fromJsonObject(object["config"]);
            case "adobe-sign":
              return adobeSignConfigOut_1.AdobeSignConfigOutSerializer._fromJsonObject(object["config"]);
            case "beehiiv":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "brex":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "checkbook":
              return checkbookConfigOut_1.CheckbookConfigOutSerializer._fromJsonObject(object["config"]);
            case "clerk":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "docusign":
              return docusignConfigOut_1.DocusignConfigOutSerializer._fromJsonObject(object["config"]);
            case "easypost":
              return easypostConfigOut_1.EasypostConfigOutSerializer._fromJsonObject(object["config"]);
            case "github":
              return githubConfigOut_1.GithubConfigOutSerializer._fromJsonObject(object["config"]);
            case "guesty":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "hubspot":
              return hubspotConfigOut_1.HubspotConfigOutSerializer._fromJsonObject(object["config"]);
            case "incident-io":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "lithic":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "nash":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "orum-io":
              return orumIoConfigOut_1.OrumIoConfigOutSerializer._fromJsonObject(object["config"]);
            case "panda-doc":
              return pandaDocConfigOut_1.PandaDocConfigOutSerializer._fromJsonObject(object["config"]);
            case "port-io":
              return portIoConfigOut_1.PortIoConfigOutSerializer._fromJsonObject(object["config"]);
            case "pleo":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "replicate":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "resend":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "rutter":
              return rutterConfigOut_1.RutterConfigOutSerializer._fromJsonObject(object["config"]);
            case "safebase":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "sardine":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "segment":
              return segmentConfigOut_1.SegmentConfigOutSerializer._fromJsonObject(object["config"]);
            case "shopify":
              return shopifyConfigOut_1.ShopifyConfigOutSerializer._fromJsonObject(object["config"]);
            case "slack":
              return slackConfigOut_1.SlackConfigOutSerializer._fromJsonObject(object["config"]);
            case "stripe":
              return stripeConfigOut_1.StripeConfigOutSerializer._fromJsonObject(object["config"]);
            case "stych":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "svix":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "zoom":
              return zoomConfigOut_1.ZoomConfigOutSerializer._fromJsonObject(object["config"]);
            case "telnyx":
              return telnyxConfigOut_1.TelnyxConfigOutSerializer._fromJsonObject(object["config"]);
            case "vapi":
              return vapiConfigOut_1.VapiConfigOutSerializer._fromJsonObject(object["config"]);
            case "open-ai":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "render":
              return svixConfigOut_1.SvixConfigOutSerializer._fromJsonObject(object["config"]);
            case "veriff":
              return veriffConfigOut_1.VeriffConfigOutSerializer._fromJsonObject(object["config"]);
            case "airwallex":
              return airwallexConfigOut_1.AirwallexConfigOutSerializer._fromJsonObject(object["config"]);
            default:
              throw new Error(`Unexpected type: ${type2}`);
          }
        }
        return {
          type,
          config: getConfig(type),
          createdAt: new Date(object["createdAt"]),
          id: object["id"],
          ingestUrl: object["ingestUrl"],
          metadata: object["metadata"],
          name: object["name"],
          uid: object["uid"],
          updatedAt: new Date(object["updatedAt"])
        };
      },
      _toJsonObject(self) {
        let config;
        switch (self.type) {
          case "generic-webhook":
            config = {};
            break;
          case "cron":
            config = cronConfig_1.CronConfigSerializer._toJsonObject(self.config);
            break;
          case "adobe-sign":
            config = adobeSignConfigOut_1.AdobeSignConfigOutSerializer._toJsonObject(self.config);
            break;
          case "beehiiv":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "brex":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "checkbook":
            config = checkbookConfigOut_1.CheckbookConfigOutSerializer._toJsonObject(self.config);
            break;
          case "clerk":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "docusign":
            config = docusignConfigOut_1.DocusignConfigOutSerializer._toJsonObject(self.config);
            break;
          case "easypost":
            config = easypostConfigOut_1.EasypostConfigOutSerializer._toJsonObject(self.config);
            break;
          case "github":
            config = githubConfigOut_1.GithubConfigOutSerializer._toJsonObject(self.config);
            break;
          case "guesty":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "hubspot":
            config = hubspotConfigOut_1.HubspotConfigOutSerializer._toJsonObject(self.config);
            break;
          case "incident-io":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "lithic":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "nash":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "orum-io":
            config = orumIoConfigOut_1.OrumIoConfigOutSerializer._toJsonObject(self.config);
            break;
          case "panda-doc":
            config = pandaDocConfigOut_1.PandaDocConfigOutSerializer._toJsonObject(self.config);
            break;
          case "port-io":
            config = portIoConfigOut_1.PortIoConfigOutSerializer._toJsonObject(self.config);
            break;
          case "pleo":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "replicate":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "resend":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "rutter":
            config = rutterConfigOut_1.RutterConfigOutSerializer._toJsonObject(self.config);
            break;
          case "safebase":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "sardine":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "segment":
            config = segmentConfigOut_1.SegmentConfigOutSerializer._toJsonObject(self.config);
            break;
          case "shopify":
            config = shopifyConfigOut_1.ShopifyConfigOutSerializer._toJsonObject(self.config);
            break;
          case "slack":
            config = slackConfigOut_1.SlackConfigOutSerializer._toJsonObject(self.config);
            break;
          case "stripe":
            config = stripeConfigOut_1.StripeConfigOutSerializer._toJsonObject(self.config);
            break;
          case "stych":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "svix":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "zoom":
            config = zoomConfigOut_1.ZoomConfigOutSerializer._toJsonObject(self.config);
            break;
          case "telnyx":
            config = telnyxConfigOut_1.TelnyxConfigOutSerializer._toJsonObject(self.config);
            break;
          case "vapi":
            config = vapiConfigOut_1.VapiConfigOutSerializer._toJsonObject(self.config);
            break;
          case "open-ai":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "render":
            config = svixConfigOut_1.SvixConfigOutSerializer._toJsonObject(self.config);
            break;
          case "veriff":
            config = veriffConfigOut_1.VeriffConfigOutSerializer._toJsonObject(self.config);
            break;
          case "airwallex":
            config = airwallexConfigOut_1.AirwallexConfigOutSerializer._toJsonObject(self.config);
            break;
        }
        return {
          type: self.type,
          config,
          createdAt: self.createdAt,
          id: self.id,
          ingestUrl: self.ingestUrl,
          metadata: self.metadata,
          name: self.name,
          uid: self.uid,
          updatedAt: self.updatedAt
        };
      }
    };
  }
});

// node_modules/svix/dist/models/listResponseIngestSourceOut.js
var require_listResponseIngestSourceOut = __commonJS({
  "node_modules/svix/dist/models/listResponseIngestSourceOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ListResponseIngestSourceOutSerializer = void 0;
    var ingestSourceOut_1 = require_ingestSourceOut();
    exports2.ListResponseIngestSourceOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => ingestSourceOut_1.IngestSourceOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"],
          prevIterator: object["prevIterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => ingestSourceOut_1.IngestSourceOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator,
          prevIterator: self.prevIterator
        };
      }
    };
  }
});

// node_modules/svix/dist/models/rotateTokenOut.js
var require_rotateTokenOut = __commonJS({
  "node_modules/svix/dist/models/rotateTokenOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RotateTokenOutSerializer = void 0;
    exports2.RotateTokenOutSerializer = {
      _fromJsonObject(object) {
        return {
          ingestUrl: object["ingestUrl"]
        };
      },
      _toJsonObject(self) {
        return {
          ingestUrl: self.ingestUrl
        };
      }
    };
  }
});

// node_modules/svix/dist/api/ingestSource.js
var require_ingestSource = __commonJS({
  "node_modules/svix/dist/api/ingestSource.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IngestSource = void 0;
    var ingestSourceIn_1 = require_ingestSourceIn();
    var ingestSourceOut_1 = require_ingestSourceOut();
    var listResponseIngestSourceOut_1 = require_listResponseIngestSourceOut();
    var rotateTokenOut_1 = require_rotateTokenOut();
    var request_1 = require_request();
    var IngestSource = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      list(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source");
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseIngestSourceOut_1.ListResponseIngestSourceOutSerializer._fromJsonObject);
      }
      create(ingestSourceIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/ingest/api/v1/source");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(ingestSourceIn_1.IngestSourceInSerializer._toJsonObject(ingestSourceIn));
        return request.send(this.requestCtx, ingestSourceOut_1.IngestSourceOutSerializer._fromJsonObject);
      }
      get(sourceId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/ingest/api/v1/source/{source_id}");
        request.setPathParam("source_id", sourceId);
        return request.send(this.requestCtx, ingestSourceOut_1.IngestSourceOutSerializer._fromJsonObject);
      }
      update(sourceId, ingestSourceIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/ingest/api/v1/source/{source_id}");
        request.setPathParam("source_id", sourceId);
        request.setBody(ingestSourceIn_1.IngestSourceInSerializer._toJsonObject(ingestSourceIn));
        return request.send(this.requestCtx, ingestSourceOut_1.IngestSourceOutSerializer._fromJsonObject);
      }
      delete(sourceId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/ingest/api/v1/source/{source_id}");
        request.setPathParam("source_id", sourceId);
        return request.sendNoResponseBody(this.requestCtx);
      }
      rotateToken(sourceId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/ingest/api/v1/source/{source_id}/token/rotate");
        request.setPathParam("source_id", sourceId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.send(this.requestCtx, rotateTokenOut_1.RotateTokenOutSerializer._fromJsonObject);
      }
    };
    exports2.IngestSource = IngestSource;
  }
});

// node_modules/svix/dist/api/ingest.js
var require_ingest = __commonJS({
  "node_modules/svix/dist/api/ingest.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Ingest = void 0;
    var dashboardAccessOut_1 = require_dashboardAccessOut();
    var ingestSourceConsumerPortalAccessIn_1 = require_ingestSourceConsumerPortalAccessIn();
    var ingestEndpoint_1 = require_ingestEndpoint();
    var ingestSource_1 = require_ingestSource();
    var request_1 = require_request();
    var Ingest = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      get endpoint() {
        return new ingestEndpoint_1.IngestEndpoint(this.requestCtx);
      }
      get source() {
        return new ingestSource_1.IngestSource(this.requestCtx);
      }
      dashboard(sourceId, ingestSourceConsumerPortalAccessIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/ingest/api/v1/source/{source_id}/dashboard");
        request.setPathParam("source_id", sourceId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(ingestSourceConsumerPortalAccessIn_1.IngestSourceConsumerPortalAccessInSerializer._toJsonObject(ingestSourceConsumerPortalAccessIn));
        return request.send(this.requestCtx, dashboardAccessOut_1.DashboardAccessOutSerializer._fromJsonObject);
      }
    };
    exports2.Ingest = Ingest;
  }
});

// node_modules/svix/dist/models/integrationIn.js
var require_integrationIn = __commonJS({
  "node_modules/svix/dist/models/integrationIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IntegrationInSerializer = void 0;
    exports2.IntegrationInSerializer = {
      _fromJsonObject(object) {
        return {
          featureFlags: object["featureFlags"],
          name: object["name"]
        };
      },
      _toJsonObject(self) {
        return {
          featureFlags: self.featureFlags,
          name: self.name
        };
      }
    };
  }
});

// node_modules/svix/dist/models/integrationKeyOut.js
var require_integrationKeyOut = __commonJS({
  "node_modules/svix/dist/models/integrationKeyOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IntegrationKeyOutSerializer = void 0;
    exports2.IntegrationKeyOutSerializer = {
      _fromJsonObject(object) {
        return {
          key: object["key"]
        };
      },
      _toJsonObject(self) {
        return {
          key: self.key
        };
      }
    };
  }
});

// node_modules/svix/dist/models/integrationOut.js
var require_integrationOut = __commonJS({
  "node_modules/svix/dist/models/integrationOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IntegrationOutSerializer = void 0;
    exports2.IntegrationOutSerializer = {
      _fromJsonObject(object) {
        return {
          createdAt: new Date(object["createdAt"]),
          featureFlags: object["featureFlags"],
          id: object["id"],
          name: object["name"],
          updatedAt: new Date(object["updatedAt"])
        };
      },
      _toJsonObject(self) {
        return {
          createdAt: self.createdAt,
          featureFlags: self.featureFlags,
          id: self.id,
          name: self.name,
          updatedAt: self.updatedAt
        };
      }
    };
  }
});

// node_modules/svix/dist/models/integrationUpdate.js
var require_integrationUpdate = __commonJS({
  "node_modules/svix/dist/models/integrationUpdate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IntegrationUpdateSerializer = void 0;
    exports2.IntegrationUpdateSerializer = {
      _fromJsonObject(object) {
        return {
          featureFlags: object["featureFlags"],
          name: object["name"]
        };
      },
      _toJsonObject(self) {
        return {
          featureFlags: self.featureFlags,
          name: self.name
        };
      }
    };
  }
});

// node_modules/svix/dist/models/listResponseIntegrationOut.js
var require_listResponseIntegrationOut = __commonJS({
  "node_modules/svix/dist/models/listResponseIntegrationOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ListResponseIntegrationOutSerializer = void 0;
    var integrationOut_1 = require_integrationOut();
    exports2.ListResponseIntegrationOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => integrationOut_1.IntegrationOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"],
          prevIterator: object["prevIterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => integrationOut_1.IntegrationOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator,
          prevIterator: self.prevIterator
        };
      }
    };
  }
});

// node_modules/svix/dist/api/integration.js
var require_integration = __commonJS({
  "node_modules/svix/dist/api/integration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Integration = void 0;
    var integrationIn_1 = require_integrationIn();
    var integrationKeyOut_1 = require_integrationKeyOut();
    var integrationOut_1 = require_integrationOut();
    var integrationUpdate_1 = require_integrationUpdate();
    var listResponseIntegrationOut_1 = require_listResponseIntegrationOut();
    var request_1 = require_request();
    var Integration = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      list(appId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/integration");
        request.setPathParam("app_id", appId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseIntegrationOut_1.ListResponseIntegrationOutSerializer._fromJsonObject);
      }
      create(appId, integrationIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/integration");
        request.setPathParam("app_id", appId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(integrationIn_1.IntegrationInSerializer._toJsonObject(integrationIn));
        return request.send(this.requestCtx, integrationOut_1.IntegrationOutSerializer._fromJsonObject);
      }
      get(appId, integId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/integration/{integ_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("integ_id", integId);
        return request.send(this.requestCtx, integrationOut_1.IntegrationOutSerializer._fromJsonObject);
      }
      update(appId, integId, integrationUpdate) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/app/{app_id}/integration/{integ_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("integ_id", integId);
        request.setBody(integrationUpdate_1.IntegrationUpdateSerializer._toJsonObject(integrationUpdate));
        return request.send(this.requestCtx, integrationOut_1.IntegrationOutSerializer._fromJsonObject);
      }
      delete(appId, integId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/app/{app_id}/integration/{integ_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("integ_id", integId);
        return request.sendNoResponseBody(this.requestCtx);
      }
      getKey(appId, integId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/integration/{integ_id}/key");
        request.setPathParam("app_id", appId);
        request.setPathParam("integ_id", integId);
        return request.send(this.requestCtx, integrationKeyOut_1.IntegrationKeyOutSerializer._fromJsonObject);
      }
      rotateKey(appId, integId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/integration/{integ_id}/key/rotate");
        request.setPathParam("app_id", appId);
        request.setPathParam("integ_id", integId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.send(this.requestCtx, integrationKeyOut_1.IntegrationKeyOutSerializer._fromJsonObject);
      }
    };
    exports2.Integration = Integration;
  }
});

// node_modules/svix/dist/models/expungeAllContentsOut.js
var require_expungeAllContentsOut = __commonJS({
  "node_modules/svix/dist/models/expungeAllContentsOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ExpungeAllContentsOutSerializer = void 0;
    var backgroundTaskStatus_1 = require_backgroundTaskStatus();
    var backgroundTaskType_1 = require_backgroundTaskType();
    exports2.ExpungeAllContentsOutSerializer = {
      _fromJsonObject(object) {
        return {
          id: object["id"],
          status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._fromJsonObject(object["status"]),
          task: backgroundTaskType_1.BackgroundTaskTypeSerializer._fromJsonObject(object["task"])
        };
      },
      _toJsonObject(self) {
        return {
          id: self.id,
          status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._toJsonObject(self.status),
          task: backgroundTaskType_1.BackgroundTaskTypeSerializer._toJsonObject(self.task)
        };
      }
    };
  }
});

// node_modules/svix/dist/models/listResponseMessageOut.js
var require_listResponseMessageOut = __commonJS({
  "node_modules/svix/dist/models/listResponseMessageOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ListResponseMessageOutSerializer = void 0;
    var messageOut_1 = require_messageOut();
    exports2.ListResponseMessageOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => messageOut_1.MessageOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"],
          prevIterator: object["prevIterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => messageOut_1.MessageOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator,
          prevIterator: self.prevIterator
        };
      }
    };
  }
});

// node_modules/svix/dist/models/pollingEndpointConsumerSeekIn.js
var require_pollingEndpointConsumerSeekIn = __commonJS({
  "node_modules/svix/dist/models/pollingEndpointConsumerSeekIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PollingEndpointConsumerSeekInSerializer = void 0;
    exports2.PollingEndpointConsumerSeekInSerializer = {
      _fromJsonObject(object) {
        return {
          after: new Date(object["after"])
        };
      },
      _toJsonObject(self) {
        return {
          after: self.after
        };
      }
    };
  }
});

// node_modules/svix/dist/models/pollingEndpointConsumerSeekOut.js
var require_pollingEndpointConsumerSeekOut = __commonJS({
  "node_modules/svix/dist/models/pollingEndpointConsumerSeekOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PollingEndpointConsumerSeekOutSerializer = void 0;
    exports2.PollingEndpointConsumerSeekOutSerializer = {
      _fromJsonObject(object) {
        return {
          iterator: object["iterator"]
        };
      },
      _toJsonObject(self) {
        return {
          iterator: self.iterator
        };
      }
    };
  }
});

// node_modules/svix/dist/models/pollingEndpointMessageOut.js
var require_pollingEndpointMessageOut = __commonJS({
  "node_modules/svix/dist/models/pollingEndpointMessageOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PollingEndpointMessageOutSerializer = void 0;
    exports2.PollingEndpointMessageOutSerializer = {
      _fromJsonObject(object) {
        return {
          channels: object["channels"],
          eventId: object["eventId"],
          eventType: object["eventType"],
          headers: object["headers"],
          id: object["id"],
          payload: object["payload"],
          tags: object["tags"],
          timestamp: new Date(object["timestamp"])
        };
      },
      _toJsonObject(self) {
        return {
          channels: self.channels,
          eventId: self.eventId,
          eventType: self.eventType,
          headers: self.headers,
          id: self.id,
          payload: self.payload,
          tags: self.tags,
          timestamp: self.timestamp
        };
      }
    };
  }
});

// node_modules/svix/dist/models/pollingEndpointOut.js
var require_pollingEndpointOut = __commonJS({
  "node_modules/svix/dist/models/pollingEndpointOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PollingEndpointOutSerializer = void 0;
    var pollingEndpointMessageOut_1 = require_pollingEndpointMessageOut();
    exports2.PollingEndpointOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => pollingEndpointMessageOut_1.PollingEndpointMessageOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => pollingEndpointMessageOut_1.PollingEndpointMessageOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator
        };
      }
    };
  }
});

// node_modules/svix/dist/api/messagePoller.js
var require_messagePoller = __commonJS({
  "node_modules/svix/dist/api/messagePoller.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MessagePoller = void 0;
    var pollingEndpointConsumerSeekIn_1 = require_pollingEndpointConsumerSeekIn();
    var pollingEndpointConsumerSeekOut_1 = require_pollingEndpointConsumerSeekOut();
    var pollingEndpointOut_1 = require_pollingEndpointOut();
    var request_1 = require_request();
    var MessagePoller = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      poll(appId, sinkId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/poller/{sink_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("sink_id", sinkId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("event_type", options === null || options === void 0 ? void 0 : options.eventType);
        request.setQueryParam("channel", options === null || options === void 0 ? void 0 : options.channel);
        request.setQueryParam("after", options === null || options === void 0 ? void 0 : options.after);
        return request.send(this.requestCtx, pollingEndpointOut_1.PollingEndpointOutSerializer._fromJsonObject);
      }
      consumerPoll(appId, sinkId, consumerId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/poller/{sink_id}/consumer/{consumer_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("sink_id", sinkId);
        request.setPathParam("consumer_id", consumerId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        return request.send(this.requestCtx, pollingEndpointOut_1.PollingEndpointOutSerializer._fromJsonObject);
      }
      consumerSeek(appId, sinkId, consumerId, pollingEndpointConsumerSeekIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/poller/{sink_id}/consumer/{consumer_id}/seek");
        request.setPathParam("app_id", appId);
        request.setPathParam("sink_id", sinkId);
        request.setPathParam("consumer_id", consumerId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(pollingEndpointConsumerSeekIn_1.PollingEndpointConsumerSeekInSerializer._toJsonObject(pollingEndpointConsumerSeekIn));
        return request.send(this.requestCtx, pollingEndpointConsumerSeekOut_1.PollingEndpointConsumerSeekOutSerializer._fromJsonObject);
      }
    };
    exports2.MessagePoller = MessagePoller;
  }
});

// node_modules/svix/dist/models/messageIn.js
var require_messageIn = __commonJS({
  "node_modules/svix/dist/models/messageIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MessageInSerializer = void 0;
    var applicationIn_1 = require_applicationIn();
    exports2.MessageInSerializer = {
      _fromJsonObject(object) {
        return {
          application: object["application"] ? applicationIn_1.ApplicationInSerializer._fromJsonObject(object["application"]) : void 0,
          channels: object["channels"],
          eventId: object["eventId"],
          eventType: object["eventType"],
          payload: object["payload"],
          payloadRetentionHours: object["payloadRetentionHours"],
          payloadRetentionPeriod: object["payloadRetentionPeriod"],
          tags: object["tags"],
          transformationsParams: object["transformationsParams"]
        };
      },
      _toJsonObject(self) {
        return {
          application: self.application ? applicationIn_1.ApplicationInSerializer._toJsonObject(self.application) : void 0,
          channels: self.channels,
          eventId: self.eventId,
          eventType: self.eventType,
          payload: self.payload,
          payloadRetentionHours: self.payloadRetentionHours,
          payloadRetentionPeriod: self.payloadRetentionPeriod,
          tags: self.tags,
          transformationsParams: self.transformationsParams
        };
      }
    };
  }
});

// node_modules/svix/dist/api/message.js
var require_message = __commonJS({
  "node_modules/svix/dist/api/message.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.messageInRaw = exports2.Message = void 0;
    var expungeAllContentsOut_1 = require_expungeAllContentsOut();
    var listResponseMessageOut_1 = require_listResponseMessageOut();
    var messageOut_1 = require_messageOut();
    var messagePoller_1 = require_messagePoller();
    var request_1 = require_request();
    var messageIn_1 = require_messageIn();
    var Message = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      get poller() {
        return new messagePoller_1.MessagePoller(this.requestCtx);
      }
      list(appId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/msg");
        request.setPathParam("app_id", appId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("channel", options === null || options === void 0 ? void 0 : options.channel);
        request.setQueryParam("before", options === null || options === void 0 ? void 0 : options.before);
        request.setQueryParam("after", options === null || options === void 0 ? void 0 : options.after);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        request.setQueryParam("tag", options === null || options === void 0 ? void 0 : options.tag);
        request.setQueryParam("event_types", options === null || options === void 0 ? void 0 : options.eventTypes);
        return request.send(this.requestCtx, listResponseMessageOut_1.ListResponseMessageOutSerializer._fromJsonObject);
      }
      create(appId, messageIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/msg");
        request.setPathParam("app_id", appId);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(messageIn_1.MessageInSerializer._toJsonObject(messageIn));
        return request.send(this.requestCtx, messageOut_1.MessageOutSerializer._fromJsonObject);
      }
      expungeAllContents(appId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/msg/expunge-all-contents");
        request.setPathParam("app_id", appId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.send(this.requestCtx, expungeAllContentsOut_1.ExpungeAllContentsOutSerializer._fromJsonObject);
      }
      get(appId, msgId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/msg/{msg_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        return request.send(this.requestCtx, messageOut_1.MessageOutSerializer._fromJsonObject);
      }
      expungeContent(appId, msgId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/app/{app_id}/msg/{msg_id}/content");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        return request.sendNoResponseBody(this.requestCtx);
      }
    };
    exports2.Message = Message;
    function messageInRaw(eventType, payload, contentType) {
      const headers = contentType ? { "content-type": contentType } : void 0;
      return {
        eventType,
        payload: {},
        transformationsParams: {
          rawPayload: payload,
          headers
        }
      };
    }
    exports2.messageInRaw = messageInRaw;
  }
});

// node_modules/svix/dist/models/messageStatus.js
var require_messageStatus = __commonJS({
  "node_modules/svix/dist/models/messageStatus.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MessageStatusSerializer = exports2.MessageStatus = void 0;
    var MessageStatus;
    (function(MessageStatus2) {
      MessageStatus2[MessageStatus2["Success"] = 0] = "Success";
      MessageStatus2[MessageStatus2["Pending"] = 1] = "Pending";
      MessageStatus2[MessageStatus2["Fail"] = 2] = "Fail";
      MessageStatus2[MessageStatus2["Sending"] = 3] = "Sending";
    })(MessageStatus = exports2.MessageStatus || (exports2.MessageStatus = {}));
    exports2.MessageStatusSerializer = {
      _fromJsonObject(object) {
        return object;
      },
      _toJsonObject(self) {
        return self;
      }
    };
  }
});

// node_modules/svix/dist/models/messageStatusText.js
var require_messageStatusText = __commonJS({
  "node_modules/svix/dist/models/messageStatusText.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MessageStatusTextSerializer = exports2.MessageStatusText = void 0;
    var MessageStatusText;
    (function(MessageStatusText2) {
      MessageStatusText2["Success"] = "success";
      MessageStatusText2["Pending"] = "pending";
      MessageStatusText2["Fail"] = "fail";
      MessageStatusText2["Sending"] = "sending";
    })(MessageStatusText = exports2.MessageStatusText || (exports2.MessageStatusText = {}));
    exports2.MessageStatusTextSerializer = {
      _fromJsonObject(object) {
        return object;
      },
      _toJsonObject(self) {
        return self;
      }
    };
  }
});

// node_modules/svix/dist/models/endpointMessageOut.js
var require_endpointMessageOut = __commonJS({
  "node_modules/svix/dist/models/endpointMessageOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointMessageOutSerializer = void 0;
    var messageStatus_1 = require_messageStatus();
    var messageStatusText_1 = require_messageStatusText();
    exports2.EndpointMessageOutSerializer = {
      _fromJsonObject(object) {
        return {
          channels: object["channels"],
          eventId: object["eventId"],
          eventType: object["eventType"],
          id: object["id"],
          nextAttempt: object["nextAttempt"] ? new Date(object["nextAttempt"]) : null,
          payload: object["payload"],
          status: messageStatus_1.MessageStatusSerializer._fromJsonObject(object["status"]),
          statusText: messageStatusText_1.MessageStatusTextSerializer._fromJsonObject(object["statusText"]),
          tags: object["tags"],
          timestamp: new Date(object["timestamp"])
        };
      },
      _toJsonObject(self) {
        return {
          channels: self.channels,
          eventId: self.eventId,
          eventType: self.eventType,
          id: self.id,
          nextAttempt: self.nextAttempt,
          payload: self.payload,
          status: messageStatus_1.MessageStatusSerializer._toJsonObject(self.status),
          statusText: messageStatusText_1.MessageStatusTextSerializer._toJsonObject(self.statusText),
          tags: self.tags,
          timestamp: self.timestamp
        };
      }
    };
  }
});

// node_modules/svix/dist/models/listResponseEndpointMessageOut.js
var require_listResponseEndpointMessageOut = __commonJS({
  "node_modules/svix/dist/models/listResponseEndpointMessageOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ListResponseEndpointMessageOutSerializer = void 0;
    var endpointMessageOut_1 = require_endpointMessageOut();
    exports2.ListResponseEndpointMessageOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => endpointMessageOut_1.EndpointMessageOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"],
          prevIterator: object["prevIterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => endpointMessageOut_1.EndpointMessageOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator,
          prevIterator: self.prevIterator
        };
      }
    };
  }
});

// node_modules/svix/dist/models/messageAttemptTriggerType.js
var require_messageAttemptTriggerType = __commonJS({
  "node_modules/svix/dist/models/messageAttemptTriggerType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MessageAttemptTriggerTypeSerializer = exports2.MessageAttemptTriggerType = void 0;
    var MessageAttemptTriggerType;
    (function(MessageAttemptTriggerType2) {
      MessageAttemptTriggerType2[MessageAttemptTriggerType2["Scheduled"] = 0] = "Scheduled";
      MessageAttemptTriggerType2[MessageAttemptTriggerType2["Manual"] = 1] = "Manual";
    })(MessageAttemptTriggerType = exports2.MessageAttemptTriggerType || (exports2.MessageAttemptTriggerType = {}));
    exports2.MessageAttemptTriggerTypeSerializer = {
      _fromJsonObject(object) {
        return object;
      },
      _toJsonObject(self) {
        return self;
      }
    };
  }
});

// node_modules/svix/dist/models/messageAttemptOut.js
var require_messageAttemptOut = __commonJS({
  "node_modules/svix/dist/models/messageAttemptOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MessageAttemptOutSerializer = void 0;
    var messageAttemptTriggerType_1 = require_messageAttemptTriggerType();
    var messageOut_1 = require_messageOut();
    var messageStatus_1 = require_messageStatus();
    var messageStatusText_1 = require_messageStatusText();
    exports2.MessageAttemptOutSerializer = {
      _fromJsonObject(object) {
        return {
          endpointId: object["endpointId"],
          id: object["id"],
          msg: object["msg"] ? messageOut_1.MessageOutSerializer._fromJsonObject(object["msg"]) : void 0,
          msgId: object["msgId"],
          response: object["response"],
          responseDurationMs: object["responseDurationMs"],
          responseStatusCode: object["responseStatusCode"],
          status: messageStatus_1.MessageStatusSerializer._fromJsonObject(object["status"]),
          statusText: messageStatusText_1.MessageStatusTextSerializer._fromJsonObject(object["statusText"]),
          timestamp: new Date(object["timestamp"]),
          triggerType: messageAttemptTriggerType_1.MessageAttemptTriggerTypeSerializer._fromJsonObject(object["triggerType"]),
          url: object["url"]
        };
      },
      _toJsonObject(self) {
        return {
          endpointId: self.endpointId,
          id: self.id,
          msg: self.msg ? messageOut_1.MessageOutSerializer._toJsonObject(self.msg) : void 0,
          msgId: self.msgId,
          response: self.response,
          responseDurationMs: self.responseDurationMs,
          responseStatusCode: self.responseStatusCode,
          status: messageStatus_1.MessageStatusSerializer._toJsonObject(self.status),
          statusText: messageStatusText_1.MessageStatusTextSerializer._toJsonObject(self.statusText),
          timestamp: self.timestamp,
          triggerType: messageAttemptTriggerType_1.MessageAttemptTriggerTypeSerializer._toJsonObject(self.triggerType),
          url: self.url
        };
      }
    };
  }
});

// node_modules/svix/dist/models/listResponseMessageAttemptOut.js
var require_listResponseMessageAttemptOut = __commonJS({
  "node_modules/svix/dist/models/listResponseMessageAttemptOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ListResponseMessageAttemptOutSerializer = void 0;
    var messageAttemptOut_1 = require_messageAttemptOut();
    exports2.ListResponseMessageAttemptOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => messageAttemptOut_1.MessageAttemptOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"],
          prevIterator: object["prevIterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => messageAttemptOut_1.MessageAttemptOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator,
          prevIterator: self.prevIterator
        };
      }
    };
  }
});

// node_modules/svix/dist/models/messageEndpointOut.js
var require_messageEndpointOut = __commonJS({
  "node_modules/svix/dist/models/messageEndpointOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MessageEndpointOutSerializer = void 0;
    var messageStatus_1 = require_messageStatus();
    var messageStatusText_1 = require_messageStatusText();
    exports2.MessageEndpointOutSerializer = {
      _fromJsonObject(object) {
        return {
          channels: object["channels"],
          createdAt: new Date(object["createdAt"]),
          description: object["description"],
          disabled: object["disabled"],
          filterTypes: object["filterTypes"],
          id: object["id"],
          nextAttempt: object["nextAttempt"] ? new Date(object["nextAttempt"]) : null,
          rateLimit: object["rateLimit"],
          status: messageStatus_1.MessageStatusSerializer._fromJsonObject(object["status"]),
          statusText: messageStatusText_1.MessageStatusTextSerializer._fromJsonObject(object["statusText"]),
          uid: object["uid"],
          updatedAt: new Date(object["updatedAt"]),
          url: object["url"],
          version: object["version"]
        };
      },
      _toJsonObject(self) {
        return {
          channels: self.channels,
          createdAt: self.createdAt,
          description: self.description,
          disabled: self.disabled,
          filterTypes: self.filterTypes,
          id: self.id,
          nextAttempt: self.nextAttempt,
          rateLimit: self.rateLimit,
          status: messageStatus_1.MessageStatusSerializer._toJsonObject(self.status),
          statusText: messageStatusText_1.MessageStatusTextSerializer._toJsonObject(self.statusText),
          uid: self.uid,
          updatedAt: self.updatedAt,
          url: self.url,
          version: self.version
        };
      }
    };
  }
});

// node_modules/svix/dist/models/listResponseMessageEndpointOut.js
var require_listResponseMessageEndpointOut = __commonJS({
  "node_modules/svix/dist/models/listResponseMessageEndpointOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ListResponseMessageEndpointOutSerializer = void 0;
    var messageEndpointOut_1 = require_messageEndpointOut();
    exports2.ListResponseMessageEndpointOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => messageEndpointOut_1.MessageEndpointOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"],
          prevIterator: object["prevIterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => messageEndpointOut_1.MessageEndpointOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator,
          prevIterator: self.prevIterator
        };
      }
    };
  }
});

// node_modules/svix/dist/api/messageAttempt.js
var require_messageAttempt = __commonJS({
  "node_modules/svix/dist/api/messageAttempt.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MessageAttempt = void 0;
    var listResponseEndpointMessageOut_1 = require_listResponseEndpointMessageOut();
    var listResponseMessageAttemptOut_1 = require_listResponseMessageAttemptOut();
    var listResponseMessageEndpointOut_1 = require_listResponseMessageEndpointOut();
    var messageAttemptOut_1 = require_messageAttemptOut();
    var request_1 = require_request();
    var MessageAttempt = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      listByEndpoint(appId, endpointId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/attempt/endpoint/{endpoint_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("status", options === null || options === void 0 ? void 0 : options.status);
        request.setQueryParam("status_code_class", options === null || options === void 0 ? void 0 : options.statusCodeClass);
        request.setQueryParam("channel", options === null || options === void 0 ? void 0 : options.channel);
        request.setQueryParam("tag", options === null || options === void 0 ? void 0 : options.tag);
        request.setQueryParam("before", options === null || options === void 0 ? void 0 : options.before);
        request.setQueryParam("after", options === null || options === void 0 ? void 0 : options.after);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        request.setQueryParam("with_msg", options === null || options === void 0 ? void 0 : options.withMsg);
        request.setQueryParam("event_types", options === null || options === void 0 ? void 0 : options.eventTypes);
        return request.send(this.requestCtx, listResponseMessageAttemptOut_1.ListResponseMessageAttemptOutSerializer._fromJsonObject);
      }
      listByMsg(appId, msgId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/attempt/msg/{msg_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("status", options === null || options === void 0 ? void 0 : options.status);
        request.setQueryParam("status_code_class", options === null || options === void 0 ? void 0 : options.statusCodeClass);
        request.setQueryParam("channel", options === null || options === void 0 ? void 0 : options.channel);
        request.setQueryParam("tag", options === null || options === void 0 ? void 0 : options.tag);
        request.setQueryParam("endpoint_id", options === null || options === void 0 ? void 0 : options.endpointId);
        request.setQueryParam("before", options === null || options === void 0 ? void 0 : options.before);
        request.setQueryParam("after", options === null || options === void 0 ? void 0 : options.after);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        request.setQueryParam("event_types", options === null || options === void 0 ? void 0 : options.eventTypes);
        return request.send(this.requestCtx, listResponseMessageAttemptOut_1.ListResponseMessageAttemptOutSerializer._fromJsonObject);
      }
      listAttemptedMessages(appId, endpointId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/endpoint/{endpoint_id}/msg");
        request.setPathParam("app_id", appId);
        request.setPathParam("endpoint_id", endpointId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("channel", options === null || options === void 0 ? void 0 : options.channel);
        request.setQueryParam("tag", options === null || options === void 0 ? void 0 : options.tag);
        request.setQueryParam("status", options === null || options === void 0 ? void 0 : options.status);
        request.setQueryParam("before", options === null || options === void 0 ? void 0 : options.before);
        request.setQueryParam("after", options === null || options === void 0 ? void 0 : options.after);
        request.setQueryParam("with_content", options === null || options === void 0 ? void 0 : options.withContent);
        request.setQueryParam("event_types", options === null || options === void 0 ? void 0 : options.eventTypes);
        return request.send(this.requestCtx, listResponseEndpointMessageOut_1.ListResponseEndpointMessageOutSerializer._fromJsonObject);
      }
      get(appId, msgId, attemptId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        request.setPathParam("attempt_id", attemptId);
        return request.send(this.requestCtx, messageAttemptOut_1.MessageAttemptOutSerializer._fromJsonObject);
      }
      expungeContent(appId, msgId, attemptId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/content");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        request.setPathParam("attempt_id", attemptId);
        return request.sendNoResponseBody(this.requestCtx);
      }
      listAttemptedDestinations(appId, msgId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/app/{app_id}/msg/{msg_id}/endpoint");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        return request.send(this.requestCtx, listResponseMessageEndpointOut_1.ListResponseMessageEndpointOutSerializer._fromJsonObject);
      }
      resend(appId, msgId, endpointId, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/resend");
        request.setPathParam("app_id", appId);
        request.setPathParam("msg_id", msgId);
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        return request.sendNoResponseBody(this.requestCtx);
      }
    };
    exports2.MessageAttempt = MessageAttempt;
  }
});

// node_modules/svix/dist/models/operationalWebhookEndpointOut.js
var require_operationalWebhookEndpointOut = __commonJS({
  "node_modules/svix/dist/models/operationalWebhookEndpointOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OperationalWebhookEndpointOutSerializer = void 0;
    exports2.OperationalWebhookEndpointOutSerializer = {
      _fromJsonObject(object) {
        return {
          createdAt: new Date(object["createdAt"]),
          description: object["description"],
          disabled: object["disabled"],
          filterTypes: object["filterTypes"],
          id: object["id"],
          metadata: object["metadata"],
          rateLimit: object["rateLimit"],
          uid: object["uid"],
          updatedAt: new Date(object["updatedAt"]),
          url: object["url"]
        };
      },
      _toJsonObject(self) {
        return {
          createdAt: self.createdAt,
          description: self.description,
          disabled: self.disabled,
          filterTypes: self.filterTypes,
          id: self.id,
          metadata: self.metadata,
          rateLimit: self.rateLimit,
          uid: self.uid,
          updatedAt: self.updatedAt,
          url: self.url
        };
      }
    };
  }
});

// node_modules/svix/dist/models/listResponseOperationalWebhookEndpointOut.js
var require_listResponseOperationalWebhookEndpointOut = __commonJS({
  "node_modules/svix/dist/models/listResponseOperationalWebhookEndpointOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ListResponseOperationalWebhookEndpointOutSerializer = void 0;
    var operationalWebhookEndpointOut_1 = require_operationalWebhookEndpointOut();
    exports2.ListResponseOperationalWebhookEndpointOutSerializer = {
      _fromJsonObject(object) {
        return {
          data: object["data"].map((item) => operationalWebhookEndpointOut_1.OperationalWebhookEndpointOutSerializer._fromJsonObject(item)),
          done: object["done"],
          iterator: object["iterator"],
          prevIterator: object["prevIterator"]
        };
      },
      _toJsonObject(self) {
        return {
          data: self.data.map((item) => operationalWebhookEndpointOut_1.OperationalWebhookEndpointOutSerializer._toJsonObject(item)),
          done: self.done,
          iterator: self.iterator,
          prevIterator: self.prevIterator
        };
      }
    };
  }
});

// node_modules/svix/dist/models/operationalWebhookEndpointHeadersIn.js
var require_operationalWebhookEndpointHeadersIn = __commonJS({
  "node_modules/svix/dist/models/operationalWebhookEndpointHeadersIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OperationalWebhookEndpointHeadersInSerializer = void 0;
    exports2.OperationalWebhookEndpointHeadersInSerializer = {
      _fromJsonObject(object) {
        return {
          headers: object["headers"]
        };
      },
      _toJsonObject(self) {
        return {
          headers: self.headers
        };
      }
    };
  }
});

// node_modules/svix/dist/models/operationalWebhookEndpointHeadersOut.js
var require_operationalWebhookEndpointHeadersOut = __commonJS({
  "node_modules/svix/dist/models/operationalWebhookEndpointHeadersOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OperationalWebhookEndpointHeadersOutSerializer = void 0;
    exports2.OperationalWebhookEndpointHeadersOutSerializer = {
      _fromJsonObject(object) {
        return {
          headers: object["headers"],
          sensitive: object["sensitive"]
        };
      },
      _toJsonObject(self) {
        return {
          headers: self.headers,
          sensitive: self.sensitive
        };
      }
    };
  }
});

// node_modules/svix/dist/models/operationalWebhookEndpointIn.js
var require_operationalWebhookEndpointIn = __commonJS({
  "node_modules/svix/dist/models/operationalWebhookEndpointIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OperationalWebhookEndpointInSerializer = void 0;
    exports2.OperationalWebhookEndpointInSerializer = {
      _fromJsonObject(object) {
        return {
          description: object["description"],
          disabled: object["disabled"],
          filterTypes: object["filterTypes"],
          metadata: object["metadata"],
          rateLimit: object["rateLimit"],
          secret: object["secret"],
          uid: object["uid"],
          url: object["url"]
        };
      },
      _toJsonObject(self) {
        return {
          description: self.description,
          disabled: self.disabled,
          filterTypes: self.filterTypes,
          metadata: self.metadata,
          rateLimit: self.rateLimit,
          secret: self.secret,
          uid: self.uid,
          url: self.url
        };
      }
    };
  }
});

// node_modules/svix/dist/models/operationalWebhookEndpointSecretIn.js
var require_operationalWebhookEndpointSecretIn = __commonJS({
  "node_modules/svix/dist/models/operationalWebhookEndpointSecretIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OperationalWebhookEndpointSecretInSerializer = void 0;
    exports2.OperationalWebhookEndpointSecretInSerializer = {
      _fromJsonObject(object) {
        return {
          key: object["key"]
        };
      },
      _toJsonObject(self) {
        return {
          key: self.key
        };
      }
    };
  }
});

// node_modules/svix/dist/models/operationalWebhookEndpointSecretOut.js
var require_operationalWebhookEndpointSecretOut = __commonJS({
  "node_modules/svix/dist/models/operationalWebhookEndpointSecretOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OperationalWebhookEndpointSecretOutSerializer = void 0;
    exports2.OperationalWebhookEndpointSecretOutSerializer = {
      _fromJsonObject(object) {
        return {
          key: object["key"]
        };
      },
      _toJsonObject(self) {
        return {
          key: self.key
        };
      }
    };
  }
});

// node_modules/svix/dist/models/operationalWebhookEndpointUpdate.js
var require_operationalWebhookEndpointUpdate = __commonJS({
  "node_modules/svix/dist/models/operationalWebhookEndpointUpdate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OperationalWebhookEndpointUpdateSerializer = void 0;
    exports2.OperationalWebhookEndpointUpdateSerializer = {
      _fromJsonObject(object) {
        return {
          description: object["description"],
          disabled: object["disabled"],
          filterTypes: object["filterTypes"],
          metadata: object["metadata"],
          rateLimit: object["rateLimit"],
          uid: object["uid"],
          url: object["url"]
        };
      },
      _toJsonObject(self) {
        return {
          description: self.description,
          disabled: self.disabled,
          filterTypes: self.filterTypes,
          metadata: self.metadata,
          rateLimit: self.rateLimit,
          uid: self.uid,
          url: self.url
        };
      }
    };
  }
});

// node_modules/svix/dist/api/operationalWebhookEndpoint.js
var require_operationalWebhookEndpoint = __commonJS({
  "node_modules/svix/dist/api/operationalWebhookEndpoint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OperationalWebhookEndpoint = void 0;
    var listResponseOperationalWebhookEndpointOut_1 = require_listResponseOperationalWebhookEndpointOut();
    var operationalWebhookEndpointHeadersIn_1 = require_operationalWebhookEndpointHeadersIn();
    var operationalWebhookEndpointHeadersOut_1 = require_operationalWebhookEndpointHeadersOut();
    var operationalWebhookEndpointIn_1 = require_operationalWebhookEndpointIn();
    var operationalWebhookEndpointOut_1 = require_operationalWebhookEndpointOut();
    var operationalWebhookEndpointSecretIn_1 = require_operationalWebhookEndpointSecretIn();
    var operationalWebhookEndpointSecretOut_1 = require_operationalWebhookEndpointSecretOut();
    var operationalWebhookEndpointUpdate_1 = require_operationalWebhookEndpointUpdate();
    var request_1 = require_request();
    var OperationalWebhookEndpoint = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      list(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/operational-webhook/endpoint");
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseOperationalWebhookEndpointOut_1.ListResponseOperationalWebhookEndpointOutSerializer._fromJsonObject);
      }
      create(operationalWebhookEndpointIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/operational-webhook/endpoint");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(operationalWebhookEndpointIn_1.OperationalWebhookEndpointInSerializer._toJsonObject(operationalWebhookEndpointIn));
        return request.send(this.requestCtx, operationalWebhookEndpointOut_1.OperationalWebhookEndpointOutSerializer._fromJsonObject);
      }
      get(endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/operational-webhook/endpoint/{endpoint_id}");
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, operationalWebhookEndpointOut_1.OperationalWebhookEndpointOutSerializer._fromJsonObject);
      }
      update(endpointId, operationalWebhookEndpointUpdate) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/operational-webhook/endpoint/{endpoint_id}");
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(operationalWebhookEndpointUpdate_1.OperationalWebhookEndpointUpdateSerializer._toJsonObject(operationalWebhookEndpointUpdate));
        return request.send(this.requestCtx, operationalWebhookEndpointOut_1.OperationalWebhookEndpointOutSerializer._fromJsonObject);
      }
      delete(endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.DELETE, "/api/v1/operational-webhook/endpoint/{endpoint_id}");
        request.setPathParam("endpoint_id", endpointId);
        return request.sendNoResponseBody(this.requestCtx);
      }
      getHeaders(endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/operational-webhook/endpoint/{endpoint_id}/headers");
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, operationalWebhookEndpointHeadersOut_1.OperationalWebhookEndpointHeadersOutSerializer._fromJsonObject);
      }
      updateHeaders(endpointId, operationalWebhookEndpointHeadersIn) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/operational-webhook/endpoint/{endpoint_id}/headers");
        request.setPathParam("endpoint_id", endpointId);
        request.setBody(operationalWebhookEndpointHeadersIn_1.OperationalWebhookEndpointHeadersInSerializer._toJsonObject(operationalWebhookEndpointHeadersIn));
        return request.sendNoResponseBody(this.requestCtx);
      }
      getSecret(endpointId) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/operational-webhook/endpoint/{endpoint_id}/secret");
        request.setPathParam("endpoint_id", endpointId);
        return request.send(this.requestCtx, operationalWebhookEndpointSecretOut_1.OperationalWebhookEndpointSecretOutSerializer._fromJsonObject);
      }
      rotateSecret(endpointId, operationalWebhookEndpointSecretIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/operational-webhook/endpoint/{endpoint_id}/secret/rotate");
        request.setPathParam("endpoint_id", endpointId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(operationalWebhookEndpointSecretIn_1.OperationalWebhookEndpointSecretInSerializer._toJsonObject(operationalWebhookEndpointSecretIn));
        return request.sendNoResponseBody(this.requestCtx);
      }
    };
    exports2.OperationalWebhookEndpoint = OperationalWebhookEndpoint;
  }
});

// node_modules/svix/dist/api/operationalWebhook.js
var require_operationalWebhook = __commonJS({
  "node_modules/svix/dist/api/operationalWebhook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OperationalWebhook = void 0;
    var operationalWebhookEndpoint_1 = require_operationalWebhookEndpoint();
    var OperationalWebhook = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      get endpoint() {
        return new operationalWebhookEndpoint_1.OperationalWebhookEndpoint(this.requestCtx);
      }
    };
    exports2.OperationalWebhook = OperationalWebhook;
  }
});

// node_modules/svix/dist/models/aggregateEventTypesOut.js
var require_aggregateEventTypesOut = __commonJS({
  "node_modules/svix/dist/models/aggregateEventTypesOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AggregateEventTypesOutSerializer = void 0;
    var backgroundTaskStatus_1 = require_backgroundTaskStatus();
    var backgroundTaskType_1 = require_backgroundTaskType();
    exports2.AggregateEventTypesOutSerializer = {
      _fromJsonObject(object) {
        return {
          id: object["id"],
          status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._fromJsonObject(object["status"]),
          task: backgroundTaskType_1.BackgroundTaskTypeSerializer._fromJsonObject(object["task"])
        };
      },
      _toJsonObject(self) {
        return {
          id: self.id,
          status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._toJsonObject(self.status),
          task: backgroundTaskType_1.BackgroundTaskTypeSerializer._toJsonObject(self.task)
        };
      }
    };
  }
});

// node_modules/svix/dist/models/appUsageStatsIn.js
var require_appUsageStatsIn = __commonJS({
  "node_modules/svix/dist/models/appUsageStatsIn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AppUsageStatsInSerializer = void 0;
    exports2.AppUsageStatsInSerializer = {
      _fromJsonObject(object) {
        return {
          appIds: object["appIds"],
          since: new Date(object["since"]),
          until: new Date(object["until"])
        };
      },
      _toJsonObject(self) {
        return {
          appIds: self.appIds,
          since: self.since,
          until: self.until
        };
      }
    };
  }
});

// node_modules/svix/dist/models/appUsageStatsOut.js
var require_appUsageStatsOut = __commonJS({
  "node_modules/svix/dist/models/appUsageStatsOut.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AppUsageStatsOutSerializer = void 0;
    var backgroundTaskStatus_1 = require_backgroundTaskStatus();
    var backgroundTaskType_1 = require_backgroundTaskType();
    exports2.AppUsageStatsOutSerializer = {
      _fromJsonObject(object) {
        return {
          id: object["id"],
          status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._fromJsonObject(object["status"]),
          task: backgroundTaskType_1.BackgroundTaskTypeSerializer._fromJsonObject(object["task"]),
          unresolvedAppIds: object["unresolvedAppIds"]
        };
      },
      _toJsonObject(self) {
        return {
          id: self.id,
          status: backgroundTaskStatus_1.BackgroundTaskStatusSerializer._toJsonObject(self.status),
          task: backgroundTaskType_1.BackgroundTaskTypeSerializer._toJsonObject(self.task),
          unresolvedAppIds: self.unresolvedAppIds
        };
      }
    };
  }
});

// node_modules/svix/dist/api/statistics.js
var require_statistics = __commonJS({
  "node_modules/svix/dist/api/statistics.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Statistics = void 0;
    var aggregateEventTypesOut_1 = require_aggregateEventTypesOut();
    var appUsageStatsIn_1 = require_appUsageStatsIn();
    var appUsageStatsOut_1 = require_appUsageStatsOut();
    var request_1 = require_request();
    var Statistics = class {
      constructor(requestCtx) {
        this.requestCtx = requestCtx;
      }
      aggregateAppStats(appUsageStatsIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/stats/usage/app");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(appUsageStatsIn_1.AppUsageStatsInSerializer._toJsonObject(appUsageStatsIn));
        return request.send(this.requestCtx, appUsageStatsOut_1.AppUsageStatsOutSerializer._fromJsonObject);
      }
      aggregateEventTypes() {
        const request = new request_1.SvixRequest(request_1.HttpMethod.PUT, "/api/v1/stats/usage/event-types");
        return request.send(this.requestCtx, aggregateEventTypesOut_1.AggregateEventTypesOutSerializer._fromJsonObject);
      }
    };
    exports2.Statistics = Statistics;
  }
});

// node_modules/svix/dist/HttpErrors.js
var require_HttpErrors = __commonJS({
  "node_modules/svix/dist/HttpErrors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HTTPValidationError = exports2.ValidationError = exports2.HttpErrorOut = void 0;
    var HttpErrorOut = class _HttpErrorOut {
      static getAttributeTypeMap() {
        return _HttpErrorOut.attributeTypeMap;
      }
    };
    exports2.HttpErrorOut = HttpErrorOut;
    HttpErrorOut.discriminator = void 0;
    HttpErrorOut.mapping = void 0;
    HttpErrorOut.attributeTypeMap = [
      {
        name: "code",
        baseName: "code",
        type: "string",
        format: ""
      },
      {
        name: "detail",
        baseName: "detail",
        type: "string",
        format: ""
      }
    ];
    var ValidationError = class _ValidationError {
      static getAttributeTypeMap() {
        return _ValidationError.attributeTypeMap;
      }
    };
    exports2.ValidationError = ValidationError;
    ValidationError.discriminator = void 0;
    ValidationError.mapping = void 0;
    ValidationError.attributeTypeMap = [
      {
        name: "loc",
        baseName: "loc",
        type: "Array<string>",
        format: ""
      },
      {
        name: "msg",
        baseName: "msg",
        type: "string",
        format: ""
      },
      {
        name: "type",
        baseName: "type",
        type: "string",
        format: ""
      }
    ];
    var HTTPValidationError = class _HTTPValidationError {
      static getAttributeTypeMap() {
        return _HTTPValidationError.attributeTypeMap;
      }
    };
    exports2.HTTPValidationError = HTTPValidationError;
    HTTPValidationError.discriminator = void 0;
    HTTPValidationError.mapping = void 0;
    HTTPValidationError.attributeTypeMap = [
      {
        name: "detail",
        baseName: "detail",
        type: "Array<ValidationError>",
        format: ""
      }
    ];
  }
});

// node_modules/svix/dist/timing_safe_equal.js
var require_timing_safe_equal = __commonJS({
  "node_modules/svix/dist/timing_safe_equal.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.timingSafeEqual = void 0;
    function assert(expr, msg = "") {
      if (!expr) {
        throw new Error(msg);
      }
    }
    function timingSafeEqual(a, b) {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      if (!(a instanceof DataView)) {
        a = new DataView(ArrayBuffer.isView(a) ? a.buffer : a);
      }
      if (!(b instanceof DataView)) {
        b = new DataView(ArrayBuffer.isView(b) ? b.buffer : b);
      }
      assert(a instanceof DataView);
      assert(b instanceof DataView);
      const length = a.byteLength;
      let out = 0;
      let i = -1;
      while (++i < length) {
        out |= a.getUint8(i) ^ b.getUint8(i);
      }
      return out === 0;
    }
    exports2.timingSafeEqual = timingSafeEqual;
  }
});

// node_modules/@stablelib/base64/lib/base64.js
var require_base64 = __commonJS({
  "node_modules/@stablelib/base64/lib/base64.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var INVALID_BYTE = 256;
    var Coder = (
      /** @class */
      (function() {
        function Coder2(_paddingCharacter) {
          if (_paddingCharacter === void 0) {
            _paddingCharacter = "=";
          }
          this._paddingCharacter = _paddingCharacter;
        }
        Coder2.prototype.encodedLength = function(length) {
          if (!this._paddingCharacter) {
            return (length * 8 + 5) / 6 | 0;
          }
          return (length + 2) / 3 * 4 | 0;
        };
        Coder2.prototype.encode = function(data) {
          var out = "";
          var i = 0;
          for (; i < data.length - 2; i += 3) {
            var c = data[i] << 16 | data[i + 1] << 8 | data[i + 2];
            out += this._encodeByte(c >>> 3 * 6 & 63);
            out += this._encodeByte(c >>> 2 * 6 & 63);
            out += this._encodeByte(c >>> 1 * 6 & 63);
            out += this._encodeByte(c >>> 0 * 6 & 63);
          }
          var left = data.length - i;
          if (left > 0) {
            var c = data[i] << 16 | (left === 2 ? data[i + 1] << 8 : 0);
            out += this._encodeByte(c >>> 3 * 6 & 63);
            out += this._encodeByte(c >>> 2 * 6 & 63);
            if (left === 2) {
              out += this._encodeByte(c >>> 1 * 6 & 63);
            } else {
              out += this._paddingCharacter || "";
            }
            out += this._paddingCharacter || "";
          }
          return out;
        };
        Coder2.prototype.maxDecodedLength = function(length) {
          if (!this._paddingCharacter) {
            return (length * 6 + 7) / 8 | 0;
          }
          return length / 4 * 3 | 0;
        };
        Coder2.prototype.decodedLength = function(s) {
          return this.maxDecodedLength(s.length - this._getPaddingLength(s));
        };
        Coder2.prototype.decode = function(s) {
          if (s.length === 0) {
            return new Uint8Array(0);
          }
          var paddingLength = this._getPaddingLength(s);
          var length = s.length - paddingLength;
          var out = new Uint8Array(this.maxDecodedLength(length));
          var op = 0;
          var i = 0;
          var haveBad = 0;
          var v0 = 0, v12 = 0, v2 = 0, v32 = 0;
          for (; i < length - 4; i += 4) {
            v0 = this._decodeChar(s.charCodeAt(i + 0));
            v12 = this._decodeChar(s.charCodeAt(i + 1));
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            v32 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = v0 << 2 | v12 >>> 4;
            out[op++] = v12 << 4 | v2 >>> 2;
            out[op++] = v2 << 6 | v32;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v12 & INVALID_BYTE;
            haveBad |= v2 & INVALID_BYTE;
            haveBad |= v32 & INVALID_BYTE;
          }
          if (i < length - 1) {
            v0 = this._decodeChar(s.charCodeAt(i));
            v12 = this._decodeChar(s.charCodeAt(i + 1));
            out[op++] = v0 << 2 | v12 >>> 4;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v12 & INVALID_BYTE;
          }
          if (i < length - 2) {
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            out[op++] = v12 << 4 | v2 >>> 2;
            haveBad |= v2 & INVALID_BYTE;
          }
          if (i < length - 3) {
            v32 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = v2 << 6 | v32;
            haveBad |= v32 & INVALID_BYTE;
          }
          if (haveBad !== 0) {
            throw new Error("Base64Coder: incorrect characters for decoding");
          }
          return out;
        };
        Coder2.prototype._encodeByte = function(b) {
          var result = b;
          result += 65;
          result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
          result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
          result += 61 - b >>> 8 & 52 - 48 - 62 + 43;
          result += 62 - b >>> 8 & 62 - 43 - 63 + 47;
          return String.fromCharCode(result);
        };
        Coder2.prototype._decodeChar = function(c) {
          var result = INVALID_BYTE;
          result += (42 - c & c - 44) >>> 8 & -INVALID_BYTE + c - 43 + 62;
          result += (46 - c & c - 48) >>> 8 & -INVALID_BYTE + c - 47 + 63;
          result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
          result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
          result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
          return result;
        };
        Coder2.prototype._getPaddingLength = function(s) {
          var paddingLength = 0;
          if (this._paddingCharacter) {
            for (var i = s.length - 1; i >= 0; i--) {
              if (s[i] !== this._paddingCharacter) {
                break;
              }
              paddingLength++;
            }
            if (s.length < 4 || paddingLength > 2) {
              throw new Error("Base64Coder: incorrect padding");
            }
          }
          return paddingLength;
        };
        return Coder2;
      })()
    );
    exports2.Coder = Coder;
    var stdCoder = new Coder();
    function encode(data) {
      return stdCoder.encode(data);
    }
    exports2.encode = encode;
    function decode(s) {
      return stdCoder.decode(s);
    }
    exports2.decode = decode;
    var URLSafeCoder = (
      /** @class */
      (function(_super) {
        __extends(URLSafeCoder2, _super);
        function URLSafeCoder2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        URLSafeCoder2.prototype._encodeByte = function(b) {
          var result = b;
          result += 65;
          result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
          result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
          result += 61 - b >>> 8 & 52 - 48 - 62 + 45;
          result += 62 - b >>> 8 & 62 - 45 - 63 + 95;
          return String.fromCharCode(result);
        };
        URLSafeCoder2.prototype._decodeChar = function(c) {
          var result = INVALID_BYTE;
          result += (44 - c & c - 46) >>> 8 & -INVALID_BYTE + c - 45 + 62;
          result += (94 - c & c - 96) >>> 8 & -INVALID_BYTE + c - 95 + 63;
          result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
          result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
          result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
          return result;
        };
        return URLSafeCoder2;
      })(Coder)
    );
    exports2.URLSafeCoder = URLSafeCoder;
    var urlSafeCoder = new URLSafeCoder();
    function encodeURLSafe(data) {
      return urlSafeCoder.encode(data);
    }
    exports2.encodeURLSafe = encodeURLSafe;
    function decodeURLSafe(s) {
      return urlSafeCoder.decode(s);
    }
    exports2.decodeURLSafe = decodeURLSafe;
    exports2.encodedLength = function(length) {
      return stdCoder.encodedLength(length);
    };
    exports2.maxDecodedLength = function(length) {
      return stdCoder.maxDecodedLength(length);
    };
    exports2.decodedLength = function(s) {
      return stdCoder.decodedLength(s);
    };
  }
});

// node_modules/fast-sha256/sha256.js
var require_sha256 = __commonJS({
  "node_modules/fast-sha256/sha256.js"(exports2, module2) {
    (function(root, factory) {
      var exports3 = {};
      factory(exports3);
      var sha256 = exports3["default"];
      for (var k in exports3) {
        sha256[k] = exports3[k];
      }
      if (typeof module2 === "object" && typeof module2.exports === "object") {
        module2.exports = sha256;
      } else if (typeof define === "function" && define.amd) {
        define(function() {
          return sha256;
        });
      } else {
        root.sha256 = sha256;
      }
    })(exports2, function(exports3) {
      "use strict";
      exports3.__esModule = true;
      exports3.digestLength = 32;
      exports3.blockSize = 64;
      var K = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      function hashBlocks(w, v, p, pos, len) {
        var a, b, c, d, e, f, g, h, u, i, j, t1, t2;
        while (len >= 64) {
          a = v[0];
          b = v[1];
          c = v[2];
          d = v[3];
          e = v[4];
          f = v[5];
          g = v[6];
          h = v[7];
          for (i = 0; i < 16; i++) {
            j = pos + i * 4;
            w[i] = (p[j] & 255) << 24 | (p[j + 1] & 255) << 16 | (p[j + 2] & 255) << 8 | p[j + 3] & 255;
          }
          for (i = 16; i < 64; i++) {
            u = w[i - 2];
            t1 = (u >>> 17 | u << 32 - 17) ^ (u >>> 19 | u << 32 - 19) ^ u >>> 10;
            u = w[i - 15];
            t2 = (u >>> 7 | u << 32 - 7) ^ (u >>> 18 | u << 32 - 18) ^ u >>> 3;
            w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
          }
          for (i = 0; i < 64; i++) {
            t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f ^ ~e & g) | 0) + (h + (K[i] + w[i] | 0) | 0) | 0;
            t2 = ((a >>> 2 | a << 32 - 2) ^ (a >>> 13 | a << 32 - 13) ^ (a >>> 22 | a << 32 - 22)) + (a & b ^ a & c ^ b & c) | 0;
            h = g;
            g = f;
            f = e;
            e = d + t1 | 0;
            d = c;
            c = b;
            b = a;
            a = t1 + t2 | 0;
          }
          v[0] += a;
          v[1] += b;
          v[2] += c;
          v[3] += d;
          v[4] += e;
          v[5] += f;
          v[6] += g;
          v[7] += h;
          pos += 64;
          len -= 64;
        }
        return pos;
      }
      var Hash = (
        /** @class */
        (function() {
          function Hash2() {
            this.digestLength = exports3.digestLength;
            this.blockSize = exports3.blockSize;
            this.state = new Int32Array(8);
            this.temp = new Int32Array(64);
            this.buffer = new Uint8Array(128);
            this.bufferLength = 0;
            this.bytesHashed = 0;
            this.finished = false;
            this.reset();
          }
          Hash2.prototype.reset = function() {
            this.state[0] = 1779033703;
            this.state[1] = 3144134277;
            this.state[2] = 1013904242;
            this.state[3] = 2773480762;
            this.state[4] = 1359893119;
            this.state[5] = 2600822924;
            this.state[6] = 528734635;
            this.state[7] = 1541459225;
            this.bufferLength = 0;
            this.bytesHashed = 0;
            this.finished = false;
            return this;
          };
          Hash2.prototype.clean = function() {
            for (var i = 0; i < this.buffer.length; i++) {
              this.buffer[i] = 0;
            }
            for (var i = 0; i < this.temp.length; i++) {
              this.temp[i] = 0;
            }
            this.reset();
          };
          Hash2.prototype.update = function(data, dataLength) {
            if (dataLength === void 0) {
              dataLength = data.length;
            }
            if (this.finished) {
              throw new Error("SHA256: can't update because hash was finished.");
            }
            var dataPos = 0;
            this.bytesHashed += dataLength;
            if (this.bufferLength > 0) {
              while (this.bufferLength < 64 && dataLength > 0) {
                this.buffer[this.bufferLength++] = data[dataPos++];
                dataLength--;
              }
              if (this.bufferLength === 64) {
                hashBlocks(this.temp, this.state, this.buffer, 0, 64);
                this.bufferLength = 0;
              }
            }
            if (dataLength >= 64) {
              dataPos = hashBlocks(this.temp, this.state, data, dataPos, dataLength);
              dataLength %= 64;
            }
            while (dataLength > 0) {
              this.buffer[this.bufferLength++] = data[dataPos++];
              dataLength--;
            }
            return this;
          };
          Hash2.prototype.finish = function(out) {
            if (!this.finished) {
              var bytesHashed = this.bytesHashed;
              var left = this.bufferLength;
              var bitLenHi = bytesHashed / 536870912 | 0;
              var bitLenLo = bytesHashed << 3;
              var padLength = bytesHashed % 64 < 56 ? 64 : 128;
              this.buffer[left] = 128;
              for (var i = left + 1; i < padLength - 8; i++) {
                this.buffer[i] = 0;
              }
              this.buffer[padLength - 8] = bitLenHi >>> 24 & 255;
              this.buffer[padLength - 7] = bitLenHi >>> 16 & 255;
              this.buffer[padLength - 6] = bitLenHi >>> 8 & 255;
              this.buffer[padLength - 5] = bitLenHi >>> 0 & 255;
              this.buffer[padLength - 4] = bitLenLo >>> 24 & 255;
              this.buffer[padLength - 3] = bitLenLo >>> 16 & 255;
              this.buffer[padLength - 2] = bitLenLo >>> 8 & 255;
              this.buffer[padLength - 1] = bitLenLo >>> 0 & 255;
              hashBlocks(this.temp, this.state, this.buffer, 0, padLength);
              this.finished = true;
            }
            for (var i = 0; i < 8; i++) {
              out[i * 4 + 0] = this.state[i] >>> 24 & 255;
              out[i * 4 + 1] = this.state[i] >>> 16 & 255;
              out[i * 4 + 2] = this.state[i] >>> 8 & 255;
              out[i * 4 + 3] = this.state[i] >>> 0 & 255;
            }
            return this;
          };
          Hash2.prototype.digest = function() {
            var out = new Uint8Array(this.digestLength);
            this.finish(out);
            return out;
          };
          Hash2.prototype._saveState = function(out) {
            for (var i = 0; i < this.state.length; i++) {
              out[i] = this.state[i];
            }
          };
          Hash2.prototype._restoreState = function(from, bytesHashed) {
            for (var i = 0; i < this.state.length; i++) {
              this.state[i] = from[i];
            }
            this.bytesHashed = bytesHashed;
            this.finished = false;
            this.bufferLength = 0;
          };
          return Hash2;
        })()
      );
      exports3.Hash = Hash;
      var HMAC = (
        /** @class */
        (function() {
          function HMAC2(key) {
            this.inner = new Hash();
            this.outer = new Hash();
            this.blockSize = this.inner.blockSize;
            this.digestLength = this.inner.digestLength;
            var pad = new Uint8Array(this.blockSize);
            if (key.length > this.blockSize) {
              new Hash().update(key).finish(pad).clean();
            } else {
              for (var i = 0; i < key.length; i++) {
                pad[i] = key[i];
              }
            }
            for (var i = 0; i < pad.length; i++) {
              pad[i] ^= 54;
            }
            this.inner.update(pad);
            for (var i = 0; i < pad.length; i++) {
              pad[i] ^= 54 ^ 92;
            }
            this.outer.update(pad);
            this.istate = new Uint32Array(8);
            this.ostate = new Uint32Array(8);
            this.inner._saveState(this.istate);
            this.outer._saveState(this.ostate);
            for (var i = 0; i < pad.length; i++) {
              pad[i] = 0;
            }
          }
          HMAC2.prototype.reset = function() {
            this.inner._restoreState(this.istate, this.inner.blockSize);
            this.outer._restoreState(this.ostate, this.outer.blockSize);
            return this;
          };
          HMAC2.prototype.clean = function() {
            for (var i = 0; i < this.istate.length; i++) {
              this.ostate[i] = this.istate[i] = 0;
            }
            this.inner.clean();
            this.outer.clean();
          };
          HMAC2.prototype.update = function(data) {
            this.inner.update(data);
            return this;
          };
          HMAC2.prototype.finish = function(out) {
            if (this.outer.finished) {
              this.outer.finish(out);
            } else {
              this.inner.finish(out);
              this.outer.update(out, this.digestLength).finish(out);
            }
            return this;
          };
          HMAC2.prototype.digest = function() {
            var out = new Uint8Array(this.digestLength);
            this.finish(out);
            return out;
          };
          return HMAC2;
        })()
      );
      exports3.HMAC = HMAC;
      function hash(data) {
        var h = new Hash().update(data);
        var digest = h.digest();
        h.clean();
        return digest;
      }
      exports3.hash = hash;
      exports3["default"] = hash;
      function hmac(key, data) {
        var h = new HMAC(key).update(data);
        var digest = h.digest();
        h.clean();
        return digest;
      }
      exports3.hmac = hmac;
      function fillBuffer(buffer, hmac2, info, counter) {
        var num = counter[0];
        if (num === 0) {
          throw new Error("hkdf: cannot expand more");
        }
        hmac2.reset();
        if (num > 1) {
          hmac2.update(buffer);
        }
        if (info) {
          hmac2.update(info);
        }
        hmac2.update(counter);
        hmac2.finish(buffer);
        counter[0]++;
      }
      var hkdfSalt = new Uint8Array(exports3.digestLength);
      function hkdf(key, salt, info, length) {
        if (salt === void 0) {
          salt = hkdfSalt;
        }
        if (length === void 0) {
          length = 32;
        }
        var counter = new Uint8Array([1]);
        var okm = hmac(salt, key);
        var hmac_ = new HMAC(okm);
        var buffer = new Uint8Array(hmac_.digestLength);
        var bufpos = buffer.length;
        var out = new Uint8Array(length);
        for (var i = 0; i < length; i++) {
          if (bufpos === buffer.length) {
            fillBuffer(buffer, hmac_, info, counter);
            bufpos = 0;
          }
          out[i] = buffer[bufpos++];
        }
        hmac_.clean();
        buffer.fill(0);
        counter.fill(0);
        return out;
      }
      exports3.hkdf = hkdf;
      function pbkdf2(password, salt, iterations, dkLen) {
        var prf = new HMAC(password);
        var len = prf.digestLength;
        var ctr = new Uint8Array(4);
        var t = new Uint8Array(len);
        var u = new Uint8Array(len);
        var dk = new Uint8Array(dkLen);
        for (var i = 0; i * len < dkLen; i++) {
          var c = i + 1;
          ctr[0] = c >>> 24 & 255;
          ctr[1] = c >>> 16 & 255;
          ctr[2] = c >>> 8 & 255;
          ctr[3] = c >>> 0 & 255;
          prf.reset();
          prf.update(salt);
          prf.update(ctr);
          prf.finish(u);
          for (var j = 0; j < len; j++) {
            t[j] = u[j];
          }
          for (var j = 2; j <= iterations; j++) {
            prf.reset();
            prf.update(u).finish(u);
            for (var k = 0; k < len; k++) {
              t[k] ^= u[k];
            }
          }
          for (var j = 0; j < len && i * len + j < dkLen; j++) {
            dk[i * len + j] = t[j];
          }
        }
        for (var i = 0; i < len; i++) {
          t[i] = u[i] = 0;
        }
        for (var i = 0; i < 4; i++) {
          ctr[i] = 0;
        }
        prf.clean();
        return dk;
      }
      exports3.pbkdf2 = pbkdf2;
    });
  }
});

// node_modules/svix/dist/webhook.js
var require_webhook = __commonJS({
  "node_modules/svix/dist/webhook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Webhook = exports2.WebhookVerificationError = void 0;
    var timing_safe_equal_1 = require_timing_safe_equal();
    var base64 = require_base64();
    var sha256 = require_sha256();
    var WEBHOOK_TOLERANCE_IN_SECONDS = 5 * 60;
    var ExtendableError = class _ExtendableError extends Error {
      constructor(message) {
        super(message);
        Object.setPrototypeOf(this, _ExtendableError.prototype);
        this.name = "ExtendableError";
        this.stack = new Error(message).stack;
      }
    };
    var WebhookVerificationError = class _WebhookVerificationError extends ExtendableError {
      constructor(message) {
        super(message);
        Object.setPrototypeOf(this, _WebhookVerificationError.prototype);
        this.name = "WebhookVerificationError";
      }
    };
    exports2.WebhookVerificationError = WebhookVerificationError;
    var Webhook2 = class _Webhook {
      constructor(secret, options) {
        if (!secret) {
          throw new Error("Secret can't be empty.");
        }
        if ((options === null || options === void 0 ? void 0 : options.format) === "raw") {
          if (secret instanceof Uint8Array) {
            this.key = secret;
          } else {
            this.key = Uint8Array.from(secret, (c) => c.charCodeAt(0));
          }
        } else {
          if (typeof secret !== "string") {
            throw new Error("Expected secret to be of type string");
          }
          if (secret.startsWith(_Webhook.prefix)) {
            secret = secret.substring(_Webhook.prefix.length);
          }
          this.key = base64.decode(secret);
        }
      }
      verify(payload, headers_) {
        const headers = {};
        for (const key of Object.keys(headers_)) {
          headers[key.toLowerCase()] = headers_[key];
        }
        let msgId = headers["svix-id"];
        let msgSignature = headers["svix-signature"];
        let msgTimestamp = headers["svix-timestamp"];
        if (!msgSignature || !msgId || !msgTimestamp) {
          msgId = headers["webhook-id"];
          msgSignature = headers["webhook-signature"];
          msgTimestamp = headers["webhook-timestamp"];
          if (!msgSignature || !msgId || !msgTimestamp) {
            throw new WebhookVerificationError("Missing required headers");
          }
        }
        const timestamp = this.verifyTimestamp(msgTimestamp);
        const computedSignature = this.sign(msgId, timestamp, payload);
        const expectedSignature = computedSignature.split(",")[1];
        const passedSignatures = msgSignature.split(" ");
        const encoder = new globalThis.TextEncoder();
        for (const versionedSignature of passedSignatures) {
          const [version3, signature] = versionedSignature.split(",");
          if (version3 !== "v1") {
            continue;
          }
          if ((0, timing_safe_equal_1.timingSafeEqual)(encoder.encode(signature), encoder.encode(expectedSignature))) {
            return JSON.parse(payload.toString());
          }
        }
        throw new WebhookVerificationError("No matching signature found");
      }
      sign(msgId, timestamp, payload) {
        if (typeof payload === "string") {
        } else if (payload.constructor.name === "Buffer") {
          payload = payload.toString();
        } else {
          throw new Error("Expected payload to be of type string or Buffer. Please refer to https://docs.svix.com/receiving/verifying-payloads/how for more information.");
        }
        const encoder = new TextEncoder();
        const timestampNumber = Math.floor(timestamp.getTime() / 1e3);
        const toSign = encoder.encode(`${msgId}.${timestampNumber}.${payload}`);
        const expectedSignature = base64.encode(sha256.hmac(this.key, toSign));
        return `v1,${expectedSignature}`;
      }
      verifyTimestamp(timestampHeader) {
        const now = Math.floor(Date.now() / 1e3);
        const timestamp = parseInt(timestampHeader, 10);
        if (isNaN(timestamp)) {
          throw new WebhookVerificationError("Invalid Signature Headers");
        }
        if (now - timestamp > WEBHOOK_TOLERANCE_IN_SECONDS) {
          throw new WebhookVerificationError("Message timestamp too old");
        }
        if (timestamp > now + WEBHOOK_TOLERANCE_IN_SECONDS) {
          throw new WebhookVerificationError("Message timestamp too new");
        }
        return new Date(timestamp * 1e3);
      }
    };
    exports2.Webhook = Webhook2;
    Webhook2.prefix = "whsec_";
  }
});

// node_modules/svix/dist/models/endpointDisabledTrigger.js
var require_endpointDisabledTrigger = __commonJS({
  "node_modules/svix/dist/models/endpointDisabledTrigger.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointDisabledTriggerSerializer = exports2.EndpointDisabledTrigger = void 0;
    var EndpointDisabledTrigger;
    (function(EndpointDisabledTrigger2) {
      EndpointDisabledTrigger2["Manual"] = "manual";
      EndpointDisabledTrigger2["Automatic"] = "automatic";
    })(EndpointDisabledTrigger = exports2.EndpointDisabledTrigger || (exports2.EndpointDisabledTrigger = {}));
    exports2.EndpointDisabledTriggerSerializer = {
      _fromJsonObject(object) {
        return object;
      },
      _toJsonObject(self) {
        return self;
      }
    };
  }
});

// node_modules/svix/dist/models/ordering.js
var require_ordering = __commonJS({
  "node_modules/svix/dist/models/ordering.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OrderingSerializer = exports2.Ordering = void 0;
    var Ordering;
    (function(Ordering2) {
      Ordering2["Ascending"] = "ascending";
      Ordering2["Descending"] = "descending";
    })(Ordering = exports2.Ordering || (exports2.Ordering = {}));
    exports2.OrderingSerializer = {
      _fromJsonObject(object) {
        return object;
      },
      _toJsonObject(self) {
        return self;
      }
    };
  }
});

// node_modules/svix/dist/models/statusCodeClass.js
var require_statusCodeClass = __commonJS({
  "node_modules/svix/dist/models/statusCodeClass.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StatusCodeClassSerializer = exports2.StatusCodeClass = void 0;
    var StatusCodeClass;
    (function(StatusCodeClass2) {
      StatusCodeClass2[StatusCodeClass2["CodeNone"] = 0] = "CodeNone";
      StatusCodeClass2[StatusCodeClass2["Code1xx"] = 100] = "Code1xx";
      StatusCodeClass2[StatusCodeClass2["Code2xx"] = 200] = "Code2xx";
      StatusCodeClass2[StatusCodeClass2["Code3xx"] = 300] = "Code3xx";
      StatusCodeClass2[StatusCodeClass2["Code4xx"] = 400] = "Code4xx";
      StatusCodeClass2[StatusCodeClass2["Code5xx"] = 500] = "Code5xx";
    })(StatusCodeClass = exports2.StatusCodeClass || (exports2.StatusCodeClass = {}));
    exports2.StatusCodeClassSerializer = {
      _fromJsonObject(object) {
        return object;
      },
      _toJsonObject(self) {
        return self;
      }
    };
  }
});

// node_modules/svix/dist/models/index.js
var require_models = __commonJS({
  "node_modules/svix/dist/models/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StatusCodeClass = exports2.Ordering = exports2.MessageStatusText = exports2.MessageStatus = exports2.MessageAttemptTriggerType = exports2.EndpointDisabledTrigger = exports2.ConnectorKind = exports2.BackgroundTaskType = exports2.BackgroundTaskStatus = exports2.AppPortalCapability = void 0;
    var appPortalCapability_1 = require_appPortalCapability();
    Object.defineProperty(exports2, "AppPortalCapability", { enumerable: true, get: function() {
      return appPortalCapability_1.AppPortalCapability;
    } });
    var backgroundTaskStatus_1 = require_backgroundTaskStatus();
    Object.defineProperty(exports2, "BackgroundTaskStatus", { enumerable: true, get: function() {
      return backgroundTaskStatus_1.BackgroundTaskStatus;
    } });
    var backgroundTaskType_1 = require_backgroundTaskType();
    Object.defineProperty(exports2, "BackgroundTaskType", { enumerable: true, get: function() {
      return backgroundTaskType_1.BackgroundTaskType;
    } });
    var connectorKind_1 = require_connectorKind();
    Object.defineProperty(exports2, "ConnectorKind", { enumerable: true, get: function() {
      return connectorKind_1.ConnectorKind;
    } });
    var endpointDisabledTrigger_1 = require_endpointDisabledTrigger();
    Object.defineProperty(exports2, "EndpointDisabledTrigger", { enumerable: true, get: function() {
      return endpointDisabledTrigger_1.EndpointDisabledTrigger;
    } });
    var messageAttemptTriggerType_1 = require_messageAttemptTriggerType();
    Object.defineProperty(exports2, "MessageAttemptTriggerType", { enumerable: true, get: function() {
      return messageAttemptTriggerType_1.MessageAttemptTriggerType;
    } });
    var messageStatus_1 = require_messageStatus();
    Object.defineProperty(exports2, "MessageStatus", { enumerable: true, get: function() {
      return messageStatus_1.MessageStatus;
    } });
    var messageStatusText_1 = require_messageStatusText();
    Object.defineProperty(exports2, "MessageStatusText", { enumerable: true, get: function() {
      return messageStatusText_1.MessageStatusText;
    } });
    var ordering_1 = require_ordering();
    Object.defineProperty(exports2, "Ordering", { enumerable: true, get: function() {
      return ordering_1.Ordering;
    } });
    var statusCodeClass_1 = require_statusCodeClass();
    Object.defineProperty(exports2, "StatusCodeClass", { enumerable: true, get: function() {
      return statusCodeClass_1.StatusCodeClass;
    } });
  }
});

// node_modules/svix/dist/index.js
var require_dist = __commonJS({
  "node_modules/svix/dist/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Svix = exports2.messageInRaw = exports2.ValidationError = exports2.HttpErrorOut = exports2.HTTPValidationError = exports2.ApiException = void 0;
    var application_1 = require_application();
    var authentication_1 = require_authentication();
    var backgroundTask_1 = require_backgroundTask();
    var endpoint_1 = require_endpoint();
    var environment_1 = require_environment();
    var eventType_1 = require_eventType();
    var health_1 = require_health();
    var ingest_1 = require_ingest();
    var integration_1 = require_integration();
    var message_1 = require_message();
    var messageAttempt_1 = require_messageAttempt();
    var operationalWebhook_1 = require_operationalWebhook();
    var statistics_1 = require_statistics();
    var operationalWebhookEndpoint_1 = require_operationalWebhookEndpoint();
    var util_1 = require_util();
    Object.defineProperty(exports2, "ApiException", { enumerable: true, get: function() {
      return util_1.ApiException;
    } });
    var HttpErrors_1 = require_HttpErrors();
    Object.defineProperty(exports2, "HTTPValidationError", { enumerable: true, get: function() {
      return HttpErrors_1.HTTPValidationError;
    } });
    Object.defineProperty(exports2, "HttpErrorOut", { enumerable: true, get: function() {
      return HttpErrors_1.HttpErrorOut;
    } });
    Object.defineProperty(exports2, "ValidationError", { enumerable: true, get: function() {
      return HttpErrors_1.ValidationError;
    } });
    __exportStar(require_webhook(), exports2);
    __exportStar(require_models(), exports2);
    var message_2 = require_message();
    Object.defineProperty(exports2, "messageInRaw", { enumerable: true, get: function() {
      return message_2.messageInRaw;
    } });
    var REGIONS = [
      { region: "us", url: "https://api.us.svix.com" },
      { region: "eu", url: "https://api.eu.svix.com" },
      { region: "in", url: "https://api.in.svix.com" },
      { region: "ca", url: "https://api.ca.svix.com" },
      { region: "au", url: "https://api.au.svix.com" }
    ];
    var Svix = class {
      constructor(token, options = {}) {
        var _a, _b, _c;
        const regionalUrl = (_a = REGIONS.find((x) => x.region === token.split(".")[1])) === null || _a === void 0 ? void 0 : _a.url;
        const baseUrl2 = (_c = (_b = options.serverUrl) !== null && _b !== void 0 ? _b : regionalUrl) !== null && _c !== void 0 ? _c : "https://api.svix.com";
        if (options.retryScheduleInMs) {
          this.requestCtx = {
            baseUrl: baseUrl2,
            token,
            timeout: options.requestTimeout,
            retryScheduleInMs: options.retryScheduleInMs
          };
          return;
        }
        if (options.numRetries) {
          this.requestCtx = {
            baseUrl: baseUrl2,
            token,
            timeout: options.requestTimeout,
            numRetries: options.numRetries
          };
          return;
        }
        this.requestCtx = {
          baseUrl: baseUrl2,
          token,
          timeout: options.requestTimeout
        };
      }
      get application() {
        return new application_1.Application(this.requestCtx);
      }
      get authentication() {
        return new authentication_1.Authentication(this.requestCtx);
      }
      get backgroundTask() {
        return new backgroundTask_1.BackgroundTask(this.requestCtx);
      }
      get endpoint() {
        return new endpoint_1.Endpoint(this.requestCtx);
      }
      get environment() {
        return new environment_1.Environment(this.requestCtx);
      }
      get eventType() {
        return new eventType_1.EventType(this.requestCtx);
      }
      get health() {
        return new health_1.Health(this.requestCtx);
      }
      get ingest() {
        return new ingest_1.Ingest(this.requestCtx);
      }
      get integration() {
        return new integration_1.Integration(this.requestCtx);
      }
      get message() {
        return new message_1.Message(this.requestCtx);
      }
      get messageAttempt() {
        return new messageAttempt_1.MessageAttempt(this.requestCtx);
      }
      get operationalWebhook() {
        return new operationalWebhook_1.OperationalWebhook(this.requestCtx);
      }
      get statistics() {
        return new statistics_1.Statistics(this.requestCtx);
      }
      get operationalWebhookEndpoint() {
        return new operationalWebhookEndpoint_1.OperationalWebhookEndpoint(this.requestCtx);
      }
    };
    exports2.Svix = Svix;
  }
});

// netlify/functions/send-email.js
var send_email_exports = {};
__export(send_email_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(send_email_exports);

// node_modules/resend/dist/index.mjs
var import_svix = __toESM(require_dist(), 1);
var version2 = "6.5.1";
function buildPaginationQuery(options) {
  const searchParams = new URLSearchParams();
  if (options.limit !== void 0) searchParams.set("limit", options.limit.toString());
  if ("after" in options && options.after !== void 0) searchParams.set("after", options.after);
  if ("before" in options && options.before !== void 0) searchParams.set("before", options.before);
  return searchParams.toString();
}
var ApiKeys = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  async create(payload, options = {}) {
    return await this.resend.post("/api-keys", payload, options);
  }
  async list(options = {}) {
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/api-keys?${queryString}` : "/api-keys";
    return await this.resend.get(url);
  }
  async remove(id) {
    return await this.resend.delete(`/api-keys/${id}`);
  }
};
function parseAttachments(attachments) {
  return attachments?.map((attachment) => ({
    content: attachment.content,
    filename: attachment.filename,
    path: attachment.path,
    content_type: attachment.contentType,
    content_id: attachment.contentId
  }));
}
function parseEmailToApiOptions(email) {
  return {
    attachments: parseAttachments(email.attachments),
    bcc: email.bcc,
    cc: email.cc,
    from: email.from,
    headers: email.headers,
    html: email.html,
    reply_to: email.replyTo,
    scheduled_at: email.scheduledAt,
    subject: email.subject,
    tags: email.tags,
    text: email.text,
    to: email.to,
    template: email.template ? {
      id: email.template.id,
      variables: email.template.variables
    } : void 0,
    topic_id: email.topicId
  };
}
async function render(node) {
  let render$1;
  try {
    ({ render: render$1 } = await import("@react-email/render"));
  } catch {
    throw new Error("Failed to render React component. Make sure to install `@react-email/render` or `@react-email/components`.");
  }
  return render$1(node);
}
var Batch = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  async send(payload, options) {
    return this.create(payload, options);
  }
  async create(payload, options) {
    const emails = [];
    for (const email of payload) {
      if (email.react) {
        email.html = await render(email.react);
        email.react = void 0;
      }
      emails.push(parseEmailToApiOptions(email));
    }
    return await this.resend.post("/emails/batch", emails, {
      ...options,
      headers: {
        "x-batch-validation": options?.batchValidation ?? "strict",
        ...options?.headers
      }
    });
  }
};
var Broadcasts = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  async create(payload, options = {}) {
    if (payload.react) payload.html = await render(payload.react);
    return await this.resend.post("/broadcasts", {
      name: payload.name,
      segment_id: payload.segmentId,
      audience_id: payload.audienceId,
      preview_text: payload.previewText,
      from: payload.from,
      html: payload.html,
      reply_to: payload.replyTo,
      subject: payload.subject,
      text: payload.text,
      topic_id: payload.topicId
    }, options);
  }
  async send(id, payload) {
    return await this.resend.post(`/broadcasts/${id}/send`, { scheduled_at: payload?.scheduledAt });
  }
  async list(options = {}) {
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/broadcasts?${queryString}` : "/broadcasts";
    return await this.resend.get(url);
  }
  async get(id) {
    return await this.resend.get(`/broadcasts/${id}`);
  }
  async remove(id) {
    return await this.resend.delete(`/broadcasts/${id}`);
  }
  async update(id, payload) {
    if (payload.react) payload.html = await render(payload.react);
    return await this.resend.patch(`/broadcasts/${id}`, {
      name: payload.name,
      segment_id: payload.segmentId,
      audience_id: payload.audienceId,
      from: payload.from,
      html: payload.html,
      text: payload.text,
      subject: payload.subject,
      reply_to: payload.replyTo,
      preview_text: payload.previewText,
      topic_id: payload.topicId
    });
  }
};
function parseContactPropertyFromApi(contactProperty) {
  return {
    id: contactProperty.id,
    key: contactProperty.key,
    createdAt: contactProperty.created_at,
    type: contactProperty.type,
    fallbackValue: contactProperty.fallback_value
  };
}
function parseContactPropertyToApiOptions(contactProperty) {
  if ("key" in contactProperty) return {
    key: contactProperty.key,
    type: contactProperty.type,
    fallback_value: contactProperty.fallbackValue
  };
  return { fallback_value: contactProperty.fallbackValue };
}
var ContactProperties = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  async create(options) {
    const apiOptions = parseContactPropertyToApiOptions(options);
    return await this.resend.post("/contact-properties", apiOptions);
  }
  async list(options = {}) {
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/contact-properties?${queryString}` : "/contact-properties";
    const response = await this.resend.get(url);
    if (response.data) return {
      data: {
        ...response.data,
        data: response.data.data.map((apiContactProperty) => parseContactPropertyFromApi(apiContactProperty))
      },
      headers: response.headers,
      error: null
    };
    return response;
  }
  async get(id) {
    if (!id) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    const response = await this.resend.get(`/contact-properties/${id}`);
    if (response.data) return {
      data: {
        object: "contact_property",
        ...parseContactPropertyFromApi(response.data)
      },
      headers: response.headers,
      error: null
    };
    return response;
  }
  async update(payload) {
    if (!payload.id) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    const apiOptions = parseContactPropertyToApiOptions(payload);
    return await this.resend.patch(`/contact-properties/${payload.id}`, apiOptions);
  }
  async remove(id) {
    if (!id) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    return await this.resend.delete(`/contact-properties/${id}`);
  }
};
var ContactSegments = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  async list(options) {
    if (!options.contactId && !options.email) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` or `email` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    const identifier = options.email ? options.email : options.contactId;
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/contacts/${identifier}/segments?${queryString}` : `/contacts/${identifier}/segments`;
    return await this.resend.get(url);
  }
  async add(options) {
    if (!options.contactId && !options.email) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` or `email` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    const identifier = options.email ? options.email : options.contactId;
    return this.resend.post(`/contacts/${identifier}/segments/${options.segmentId}`);
  }
  async remove(options) {
    if (!options.contactId && !options.email) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` or `email` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    const identifier = options.email ? options.email : options.contactId;
    return this.resend.delete(`/contacts/${identifier}/segments/${options.segmentId}`);
  }
};
var ContactTopics = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  async update(payload) {
    if (!payload.id && !payload.email) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` or `email` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    const identifier = payload.email ? payload.email : payload.id;
    return this.resend.patch(`/contacts/${identifier}/topics`, payload.topics);
  }
  async list(options) {
    if (!options.id && !options.email) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` or `email` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    const identifier = options.email ? options.email : options.id;
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/contacts/${identifier}/topics?${queryString}` : `/contacts/${identifier}/topics`;
    return this.resend.get(url);
  }
};
var Contacts = class {
  constructor(resend2) {
    this.resend = resend2;
    this.topics = new ContactTopics(this.resend);
    this.segments = new ContactSegments(this.resend);
  }
  async create(payload, options = {}) {
    if (!payload.audienceId) return await this.resend.post("/contacts", {
      unsubscribed: payload.unsubscribed,
      email: payload.email,
      first_name: payload.firstName,
      last_name: payload.lastName,
      properties: payload.properties
    }, options);
    return await this.resend.post(`/audiences/${payload.audienceId}/contacts`, {
      unsubscribed: payload.unsubscribed,
      email: payload.email,
      first_name: payload.firstName,
      last_name: payload.lastName,
      properties: payload.properties
    }, options);
  }
  async list(options = {}) {
    const segmentId = options.segmentId ?? options.audienceId;
    if (!segmentId) {
      const queryString$1 = buildPaginationQuery(options);
      const url$1 = queryString$1 ? `/contacts?${queryString$1}` : "/contacts";
      return await this.resend.get(url$1);
    }
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/segments/${segmentId}/contacts?${queryString}` : `/segments/${segmentId}/contacts`;
    return await this.resend.get(url);
  }
  async get(options) {
    if (typeof options === "string") return this.resend.get(`/contacts/${options}`);
    if (!options.id && !options.email) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` or `email` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    if (!options.audienceId) return this.resend.get(`/contacts/${options?.email ? options?.email : options?.id}`);
    return this.resend.get(`/audiences/${options.audienceId}/contacts/${options?.email ? options?.email : options?.id}`);
  }
  async update(options) {
    if (!options.id && !options.email) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` or `email` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    if (!options.audienceId) return await this.resend.patch(`/contacts/${options?.email ? options?.email : options?.id}`, {
      unsubscribed: options.unsubscribed,
      first_name: options.firstName,
      last_name: options.lastName,
      properties: options.properties
    });
    return await this.resend.patch(`/audiences/${options.audienceId}/contacts/${options?.email ? options?.email : options?.id}`, {
      unsubscribed: options.unsubscribed,
      first_name: options.firstName,
      last_name: options.lastName,
      properties: options.properties
    });
  }
  async remove(payload) {
    if (typeof payload === "string") return this.resend.delete(`/contacts/${payload}`);
    if (!payload.id && !payload.email) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` or `email` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    if (!payload.audienceId) return this.resend.delete(`/contacts/${payload?.email ? payload?.email : payload?.id}`);
    return this.resend.delete(`/audiences/${payload.audienceId}/contacts/${payload?.email ? payload?.email : payload?.id}`);
  }
};
function parseDomainToApiOptions(domain) {
  return {
    name: domain.name,
    region: domain.region,
    custom_return_path: domain.customReturnPath,
    capabilities: domain.capabilities
  };
}
var Domains = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  async create(payload, options = {}) {
    return await this.resend.post("/domains", parseDomainToApiOptions(payload), options);
  }
  async list(options = {}) {
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/domains?${queryString}` : "/domains";
    return await this.resend.get(url);
  }
  async get(id) {
    return await this.resend.get(`/domains/${id}`);
  }
  async update(payload) {
    return await this.resend.patch(`/domains/${payload.id}`, {
      click_tracking: payload.clickTracking,
      open_tracking: payload.openTracking,
      tls: payload.tls,
      capabilities: payload.capabilities
    });
  }
  async remove(id) {
    return await this.resend.delete(`/domains/${id}`);
  }
  async verify(id) {
    return await this.resend.post(`/domains/${id}/verify`);
  }
};
var Attachments = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  async get(options) {
    const { emailId, id } = options;
    return await this.resend.get(`/emails/${emailId}/attachments/${id}`);
  }
  async list(options) {
    const { emailId } = options;
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/emails/${emailId}/attachments?${queryString}` : `/emails/${emailId}/attachments`;
    return await this.resend.get(url);
  }
};
var Attachments$1 = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  async get(options) {
    const { emailId, id } = options;
    return await this.resend.get(`/emails/receiving/${emailId}/attachments/${id}`);
  }
  async list(options) {
    const { emailId } = options;
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/emails/receiving/${emailId}/attachments?${queryString}` : `/emails/receiving/${emailId}/attachments`;
    return await this.resend.get(url);
  }
};
var Receiving = class {
  constructor(resend2) {
    this.resend = resend2;
    this.attachments = new Attachments$1(resend2);
  }
  async get(id) {
    return await this.resend.get(`/emails/receiving/${id}`);
  }
  async list(options = {}) {
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/emails/receiving?${queryString}` : "/emails/receiving";
    return await this.resend.get(url);
  }
};
var Emails = class {
  constructor(resend2) {
    this.resend = resend2;
    this.attachments = new Attachments(resend2);
    this.receiving = new Receiving(resend2);
  }
  async send(payload, options = {}) {
    return this.create(payload, options);
  }
  async create(payload, options = {}) {
    if (payload.react) payload.html = await render(payload.react);
    return await this.resend.post("/emails", parseEmailToApiOptions(payload), options);
  }
  async get(id) {
    return await this.resend.get(`/emails/${id}`);
  }
  async list(options = {}) {
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/emails?${queryString}` : "/emails";
    return await this.resend.get(url);
  }
  async update(payload) {
    return await this.resend.patch(`/emails/${payload.id}`, { scheduled_at: payload.scheduledAt });
  }
  async cancel(id) {
    return await this.resend.post(`/emails/${id}/cancel`);
  }
};
var Segments = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  async create(payload, options = {}) {
    return await this.resend.post("/segments", payload, options);
  }
  async list(options = {}) {
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/segments?${queryString}` : "/segments";
    return await this.resend.get(url);
  }
  async get(id) {
    return await this.resend.get(`/segments/${id}`);
  }
  async remove(id) {
    return await this.resend.delete(`/segments/${id}`);
  }
};
function getPaginationQueryProperties(options = {}) {
  const query = new URLSearchParams();
  if (options.before) query.set("before", options.before);
  if (options.after) query.set("after", options.after);
  if (options.limit) query.set("limit", options.limit.toString());
  return query.size > 0 ? `?${query.toString()}` : "";
}
function parseVariables(variables) {
  return variables?.map((variable) => ({
    key: variable.key,
    type: variable.type,
    fallback_value: variable.fallbackValue
  }));
}
function parseTemplateToApiOptions(template) {
  return {
    name: "name" in template ? template.name : void 0,
    subject: template.subject,
    html: template.html,
    text: template.text,
    alias: template.alias,
    from: template.from,
    reply_to: template.replyTo,
    variables: parseVariables(template.variables)
  };
}
var ChainableTemplateResult = class {
  constructor(promise, publishFn) {
    this.promise = promise;
    this.publishFn = publishFn;
  }
  then(onfulfilled, onrejected) {
    return this.promise.then(onfulfilled, onrejected);
  }
  async publish() {
    const { data, error } = await this.promise;
    if (error) return {
      data: null,
      headers: null,
      error
    };
    return this.publishFn(data.id);
  }
};
var Templates = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  create(payload) {
    return new ChainableTemplateResult(this.performCreate(payload), this.publish.bind(this));
  }
  async performCreate(payload) {
    if (payload.react) {
      if (!this.renderAsync) try {
        const { renderAsync } = await import("@react-email/render");
        this.renderAsync = renderAsync;
      } catch {
        throw new Error("Failed to render React component. Make sure to install `@react-email/render`");
      }
      payload.html = await this.renderAsync(payload.react);
    }
    return this.resend.post("/templates", parseTemplateToApiOptions(payload));
  }
  async remove(identifier) {
    return await this.resend.delete(`/templates/${identifier}`);
  }
  async get(identifier) {
    return await this.resend.get(`/templates/${identifier}`);
  }
  async list(options = {}) {
    return this.resend.get(`/templates${getPaginationQueryProperties(options)}`);
  }
  duplicate(identifier) {
    return new ChainableTemplateResult(this.resend.post(`/templates/${identifier}/duplicate`), this.publish.bind(this));
  }
  async publish(identifier) {
    return await this.resend.post(`/templates/${identifier}/publish`);
  }
  async update(identifier, payload) {
    return await this.resend.patch(`/templates/${identifier}`, parseTemplateToApiOptions(payload));
  }
};
var Topics = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  async create(payload) {
    const { defaultSubscription, ...body } = payload;
    return await this.resend.post("/topics", {
      ...body,
      default_subscription: defaultSubscription
    });
  }
  async list() {
    return await this.resend.get("/topics");
  }
  async get(id) {
    if (!id) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    return await this.resend.get(`/topics/${id}`);
  }
  async update(payload) {
    if (!payload.id) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    return await this.resend.patch(`/topics/${payload.id}`, payload);
  }
  async remove(id) {
    if (!id) return {
      data: null,
      headers: null,
      error: {
        message: "Missing `id` field.",
        statusCode: null,
        name: "missing_required_field"
      }
    };
    return await this.resend.delete(`/topics/${id}`);
  }
};
var Webhooks = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  async create(payload, options = {}) {
    return await this.resend.post("/webhooks", payload, options);
  }
  async get(id) {
    return await this.resend.get(`/webhooks/${id}`);
  }
  async list(options = {}) {
    const queryString = buildPaginationQuery(options);
    const url = queryString ? `/webhooks?${queryString}` : "/webhooks";
    return await this.resend.get(url);
  }
  async update(id, payload) {
    return await this.resend.patch(`/webhooks/${id}`, payload);
  }
  async remove(id) {
    return await this.resend.delete(`/webhooks/${id}`);
  }
  verify(payload) {
    return new import_svix.Webhook(payload.webhookSecret).verify(payload.payload, {
      "svix-id": payload.headers.id,
      "svix-timestamp": payload.headers.timestamp,
      "svix-signature": payload.headers.signature
    });
  }
};
var defaultBaseUrl = "https://api.resend.com";
var defaultUserAgent = `resend-node:${version2}`;
var baseUrl = typeof process !== "undefined" && process.env ? process.env.RESEND_BASE_URL || defaultBaseUrl : defaultBaseUrl;
var userAgent = typeof process !== "undefined" && process.env ? process.env.RESEND_USER_AGENT || defaultUserAgent : defaultUserAgent;
var Resend = class {
  constructor(key) {
    this.key = key;
    this.apiKeys = new ApiKeys(this);
    this.segments = new Segments(this);
    this.audiences = this.segments;
    this.batch = new Batch(this);
    this.broadcasts = new Broadcasts(this);
    this.contacts = new Contacts(this);
    this.contactProperties = new ContactProperties(this);
    this.domains = new Domains(this);
    this.emails = new Emails(this);
    this.webhooks = new Webhooks(this);
    this.templates = new Templates(this);
    this.topics = new Topics(this);
    if (!key) {
      if (typeof process !== "undefined" && process.env) this.key = process.env.RESEND_API_KEY;
      if (!this.key) throw new Error('Missing API key. Pass it to the constructor `new Resend("re_123")`');
    }
    this.headers = new Headers({
      Authorization: `Bearer ${this.key}`,
      "User-Agent": userAgent,
      "Content-Type": "application/json"
    });
  }
  async fetchRequest(path, options = {}) {
    try {
      const response = await fetch(`${baseUrl}${path}`, options);
      if (!response.ok) try {
        const rawError = await response.text();
        return {
          data: null,
          error: JSON.parse(rawError),
          headers: Object.fromEntries(response.headers.entries())
        };
      } catch (err) {
        if (err instanceof SyntaxError) return {
          data: null,
          error: {
            name: "application_error",
            statusCode: response.status,
            message: "Internal server error. We are unable to process your request right now, please try again later."
          },
          headers: Object.fromEntries(response.headers.entries())
        };
        const error = {
          message: response.statusText,
          statusCode: response.status,
          name: "application_error"
        };
        if (err instanceof Error) return {
          data: null,
          error: {
            ...error,
            message: err.message
          },
          headers: Object.fromEntries(response.headers.entries())
        };
        return {
          data: null,
          error,
          headers: Object.fromEntries(response.headers.entries())
        };
      }
      return {
        data: await response.json(),
        error: null,
        headers: Object.fromEntries(response.headers.entries())
      };
    } catch {
      return {
        data: null,
        error: {
          name: "application_error",
          statusCode: null,
          message: "Unable to fetch data. The request could not be resolved."
        },
        headers: null
      };
    }
  }
  async post(path, entity, options = {}) {
    const headers = new Headers(this.headers);
    if (options.headers) for (const [key, value] of new Headers(options.headers).entries()) headers.set(key, value);
    if (options.idempotencyKey) headers.set("Idempotency-Key", options.idempotencyKey);
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(entity),
      ...options,
      headers
    };
    return this.fetchRequest(path, requestOptions);
  }
  async get(path, options = {}) {
    const headers = new Headers(this.headers);
    if (options.headers) for (const [key, value] of new Headers(options.headers).entries()) headers.set(key, value);
    const requestOptions = {
      method: "GET",
      ...options,
      headers
    };
    return this.fetchRequest(path, requestOptions);
  }
  async put(path, entity, options = {}) {
    const headers = new Headers(this.headers);
    if (options.headers) for (const [key, value] of new Headers(options.headers).entries()) headers.set(key, value);
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify(entity),
      ...options,
      headers
    };
    return this.fetchRequest(path, requestOptions);
  }
  async patch(path, entity, options = {}) {
    const headers = new Headers(this.headers);
    if (options.headers) for (const [key, value] of new Headers(options.headers).entries()) headers.set(key, value);
    const requestOptions = {
      method: "PATCH",
      body: JSON.stringify(entity),
      ...options,
      headers
    };
    return this.fetchRequest(path, requestOptions);
  }
  async delete(path, query) {
    const requestOptions = {
      method: "DELETE",
      body: JSON.stringify(query),
      headers: this.headers
    };
    return this.fetchRequest(path, requestOptions);
  }
};

// netlify/functions/send-email.js
var resend = new Resend(process.env.RESEND_API_KEY);
var handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }
  try {
    const { name, email, phone, service, message, tripType, startFrom, endTo, date, time, company } = JSON.parse(event.body);
    if (!name || !email || !phone || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: "Missing required fields"
        })
      };
    }
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0D2E4D; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
            .intro { margin-bottom: 20px; color: #444; }
            .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 4px; }
            .label { font-weight: bold; color: #0D2E4D; display: block; margin-bottom: 5px; }
            .value { color: #333; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .highlight { background-color: #FF8B00; color: white; padding: 2px 8px; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New booking enquiry \u2013 Bus-X</h1>
            </div>
            <div class="content">
              <p class="intro">
                You have received a new booking enquiry submitted via the Bus-X website. The details are provided below for your review and follow-up.
              </p>

              <h2 style="color: #0D2E4D; margin-top: 0;">Customer details</h2>
              
              <div class="field">
                <span class="label">Name</span>
                <span class="value">${name}</span>
              </div>
              
              <div class="field">
                <span class="label">Email</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              
              <div class="field">
                <span class="label">Phone</span>
                <span class="value"><a href="tel:${phone}">${phone}</a></span>
              </div>

              <h2 style="color: #0D2E4D;">Trip details</h2>
              
              ${tripType ? `
              <div class="field">
                <span class="label">Trip type</span>
                <span class="value"><span class="highlight">${tripType === "single" ? "Single trip" : "Round trip"}</span></span>
              </div>
              ` : ""}
              
              ${startFrom ? `
              <div class="field">
                <span class="label">Departure location</span>
                <span class="value">${startFrom}</span>
              </div>
              ` : ""}
              
              ${endTo ? `
              <div class="field">
                <span class="label">Destination</span>
                <span class="value">${endTo}</span>
              </div>
              ` : ""}
              
              ${date ? `
              <div class="field">
                <span class="label">Date</span>
                <span class="value">${new Date(date).toLocaleDateString("en-AU", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    })}</span>
              </div>
              ` : ""}
              
              ${time ? `
              <div class="field">
                <span class="label">Time</span>
                <span class="value">${time}</span>
              </div>
              ` : ""}
              
              ${company ? `
              <div class="field">
                <span class="label">Number of passengers</span>
                <span class="value"><strong>${company}</strong></span>
              </div>
              ` : ""}
              
              ${service ? `
              <div class="field">
                <span class="label">Service type</span>
                <span class="value">${service}</span>
              </div>
              ` : ""}

              <h2 style="color: #0D2E4D;">Customer message</h2>
              
              <div class="field">
                <span class="label">Message</span>
                <div class="value" style="margin-top: 8px; white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>This message was generated automatically from the Bus-X website contact form.</p>
              <p>If you wish to respond, you can reply directly to this email and it will go to the customer.</p>
              <p style="color: #999; font-size: 11px;">Received on ${(/* @__PURE__ */ new Date()).toLocaleString("en-AU", {
      timeZone: "Australia/Sydney"
    })}</p>
            </div>
          </div>
        </body>
      </html>
    `;
    const textContent = `
New booking enquiry \u2013 Bus-X

You have received a new booking enquiry submitted via the Bus-X website. The details are provided below.

Customer details:
Name: ${name}
Email: ${email}
Phone: ${phone}

Trip details:
${tripType ? `Trip type: ${tripType === "single" ? "Single trip" : "Round trip"}
` : ""}${startFrom ? `Departure location: ${startFrom}
` : ""}${endTo ? `Destination: ${endTo}
` : ""}${date ? `Date: ${date}
` : ""}${time ? `Time: ${time}
` : ""}${company ? `Number of passengers: ${company}
` : ""}${service ? `Service type: ${service}
` : ""}
Customer message:
${message}

---
This message was generated automatically from the Bus-X website contact form.
Received on ${(/* @__PURE__ */ new Date()).toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}
    `;
    const data = await resend.emails.send({
      from: "Bus-X Bookings <onboarding@resend.dev>",
      to: ["shidiqadm@gmail.com"],
      replyTo: email,
      subject: `New booking enquiry from ${name}`,
      html: htmlContent,
      text: textContent
    });
    console.log("Email sent successfully:", data);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully",
        id: data.id
      })
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: false,
        error: error.message || "Failed to send email"
      })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=send-email.js.map
