const elements = {
  nbChar: document.getElementById("nbChar"),
  nbWord: document.getElementById("nbWord"),
  mostUsedChar: document.getElementById("mostTyped"),
  reset: document.getElementById("reset"),
};
const getData = () => {
  chrome.storage.local.get(["json"], function (result) {
    if (result) {
      // if there is a json, set the textarea value to the json
      result = JSON.stringify(result.json);
      return result;
    }
  });
};

const updateData = () => {
  chrome.storage.local.get(["json"], function (result) {
    if (result) {
      // if there is a json, set the textarea value to the json
      let data = result.json;
      document.getElementById("nbChar").innerHTML = data.number;
      nbSpace = data.charList["Space"];

      // round a number

      document.getElementById("nbWord").innerHTML = Math.round(nbSpace);
      // find the element in the charlist that has the biggest value
      let max = 0;
      let maxChar = "";
      for (const [key, value] of Object.entries(data.charList)) {
        //if the key is Space skip it

        if (value > max) {
          if (key === "Space") {
            continue;
          } else {
            max = value;
            maxChar = key;
          }
        }
      }
      // set the most typed char to the one found
      document.getElementById("mostTyped").innerHTML = maxChar;

      let list = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];

      let list2 = {
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
      };

      for (const [key, value] of Object.entries(data.charList)) {
        if (list.includes(key)) {
          list2[key.toUpperCase()] += data.charList[key];

          // if list2 has the key, add the value to the k
        }
      }
      for (const [key, value] of Object.entries(list2)) {
        document.getElementById(key).innerHTML = value;
      }
    }
  });
};

setInterval(() => {
  updateData();
}, 100);

const resetData = () => {
  chrome.storage.local.set(
    {
      json: {
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
      },
    },
    function () {
      console.log("[Typing Number] - JSON reset");
    }
  );
};

elements.reset.addEventListener("click", () => {
  resetData();
  chrome.tabs.reload();
});

const getSystemLang = () => {
  let lang = navigator.language;
  lang = lang.split("-")[0];
  console.log(lang);
  return lang;
};

const changeLang = (lang) => {
  // get the lang.json file
  fetch(`lang.json`)
    .then((response) => response.json())
    .then((data) => {
      // see if the lang is in the json
      if (data[lang]) {
        document.getElementById("typedChar1").innerHTML =
          data[lang].typedChar[0];
        document.getElementById("typedChar2").innerHTML =
          data[lang].typedChar[1];
        document.getElementById("typedWord1").innerHTML =
          data[lang].typedWord[0];
        document.getElementById("typedWord2").innerHTML =
          data[lang].typedWord[1];
        document.getElementById("mostTypedChar").innerHTML =
          data[lang].mostTypedChar;
        document.getElementById("resetBtn").innerHTML = data[lang].resetBtn;
        document.getElementById("letter").innerHTML = data[lang].letter;
        document.getElementById("count").innerHTML = data[lang].count;
      }
    });
};

changeLang(getSystemLang());
