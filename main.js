const quizText = document.getElementById("quiz-text");
const quizImagesContainer = document.getElementById("quiz-images-container");
const feedback = document.getElementById("feedback");

// クイズの内容
const quiz = {
  text: "今年優勝するのはどこでしょう？押し球団にはもちろん勝ってほしい！！",
  images: [
    {
      src: "giants.png",
      text: "Giants",
      feedback: "もちろんGiantsだよな！！！",
    },
    {
      src: "tigers.png",
      text: "Tigers",
      feedback: "う～～～～～んんんんん",
    },
    {
      src: "carp.png",
      text: "Carp",
      feedback: "いや～～～～～～～～",
    },
  ],
};

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text;

  // 画像と対応するボタンを表示
  quizImagesContainer.innerHTML = ""; // コンテナをクリア
  quiz.images.forEach(function (imageData, index) {
    const containerDiv = document.createElement("div");
    containerDiv.className = "quiz-item"; // スタイルを適用するためのクラス

    const imgElement = document.createElement("img");
    imgElement.src = "./images/" + imageData.src;
    imgElement.className = "quiz-image";

    const buttonElement = document.createElement("button");
    buttonElement.textContent = imageData.text;
    buttonElement.className = "quiz-button";
    buttonElement.onclick = function () {
      feedback.textContent = imageData.feedback;
    };

    containerDiv.appendChild(imgElement);
    containerDiv.appendChild(buttonElement);
    quizImagesContainer.appendChild(containerDiv);
  });
};

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz();

// イベントが発生する要素を取得する
const button = document.getElementById("button");

const inputP = document.getElementById("input-p");
const inputF = document.getElementById("input-f");
const inputC = document.getElementById("input-c");
const Feedback = document.getElementById("Feedback");

const checkPFC = () => {
  const p = parseFloat(inputP.value);
  const f = parseFloat(inputF.value);
  const c = parseFloat(inputC.value);

  if (isNaN(p) || isNaN(f) || isNaN(c)) {
    Feedback.textContent = "全ての値を入力してください。";
    return;
  }

  const total = p + f + c;

  if (total !== 100) {
    Feedback.textContent = "合計が100%になるように入力してください。";
    return;
  }

  const ratioP = p / total;
  const ratioF = f / total;
  const ratioC = c / total;

  // 約3:1:6
  if (
    Math.abs(ratioP - 0.3) < 0.05 &&
    Math.abs(ratioF - 0.1) < 0.05 &&
    Math.abs(ratioC - 0.6) < 0.05
  ) {
    Feedback.textContent = "ナイスバルクアップ！";
  }
  // 約5:4:1
  else if (
    Math.abs(ratioP - 0.5) < 0.05 &&
    Math.abs(ratioF - 0.4) < 0.05 &&
    Math.abs(ratioC - 0.1) < 0.05
  ) {
    Feedback.textContent = "ナイスダイエット！";
  }
  // それ以外
  else {
    Feedback.textContent = "食事大丈夫？？";
  }
};

inputP.addEventListener("input", checkPFC);
inputF.addEventListener("input", checkPFC);
inputC.addEventListener("input", checkPFC);
