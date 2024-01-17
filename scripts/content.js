let json = {
  number: 0,
  charList: {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0,
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    Space: 0,
    ".": 0,
    ",": 0,
    "!": 0,
    "?": 0,
    "'": 0,
    '"': 0,
    "-": 0,
    _: 0,
    "@": 0,
    "#": 0,
    $: 0,
    "%": 0,
    "^": 0,
    "&": 0,
    "*": 0,
    "(": 0,
    ")": 0,
    "+": 0,
    "=": 0,
    "/": 0,
    "\\": 0,
    "|": 0,
    "[": 0,
    "]": 0,
    "{": 0,
    "}": 0,
    "<": 0,
    ">": 0,
    "~": 0,
    "`": 0,
    ":": 0,
    ";": 0,
    "£": 0,
    "¥": 0,
    "€": 0,
    "¢": 0,
    "§": 0,
    "¤": 0,
    "±": 0,
    µ: 0,
    "÷": 0,
    "°": 0,
    "²": 0,
    "³": 0,
    "¹": 0,
    "¼": 0,
    "½": 0,
    "¾": 0,
    "¬": 0,
    "¦": 0,
    "©": 0,
    "®": 0,
    "™": 0,
  },
};
// try to get the json from the storage
chrome.storage.local.get(["json"], function (result) {
  // if the json is not empty
  if (Object.keys(result).length !== 0) {
    // set the json to the one in the storage
    json = result.json;
    console.log("[Typing Number] - Json loaded from storage");
  } else {
    console.log("[Typing Number] - JSON is empty, created one");
  }
});
console.log("[Typing Number] - Content Script Loaded");

// when a key is pressed and a input or textarea is focused
document.addEventListener("keydown", (event) => {
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
    // get the pressed key
    let key = event.key;
    console.log(key);
    if (key === " ") {
      key = "Space";
    }
    // if the key is a letter
    if (key.match(/[a-z]/i)) {
      // increment the number of key pressed
      json.number++;
    }
    // increment the number of the pressed key
    json.charList[key]++;
    // save the json in the storage
    console.log(json.charList["Space"]);

    chrome.storage.local.set({
      json: json,
    });
    console.log(chrome.action);

    console.log(json);
  }
});
