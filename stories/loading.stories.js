// loading.stories.js

// 1. ローディングアニメーションコンポーネントをインポート
import LoadingAnimation from "./loading"; // あなたのローディングアニメーションコンポーネントの実際のファイルパスに置き換えてください

// 2. ローディングアニメーションの Storybook ストーリーを定義
export default {
  title: "Loading Animation", // ストーリーのカテゴリとタイトル
};

// 3. ローディングアニメーションのデフォルトのストーリーを作成
export const Default = () => {
  // ローディングアニメーションを生成し、HTML要素を返す
  const container = document.createElement("div");
  container.className = "loading-animation-container";

  const spinner = document.createElement("div");
  spinner.className = "spinner";
  container.appendChild(spinner);

  // ローディングが完了したら要素を更新
  setTimeout(() => {
    container.innerHTML = "ローディングが完了しました";
  }, 2000); // 2秒後にローディングが完了したと仮定

  return container;
};

// 4. ローディングアニメーションの異なるバリエーションを示すストーリーを作成
export const Large = () => {
  const container = document.createElement("div");
  container.className =
    "loading-animation-container loading-animation-container-large";

  const spinner = document.createElement("div");
  spinner.className = "spinner";
  container.appendChild(spinner);

  // ローディングが完了したら要素を更新
  setTimeout(() => {
    container.innerHTML = "ローディングが完了しました (Large)";
  }, 2000); // 2秒後にローディングが完了したと仮定

  return container;
};

export const Small = () => {
  const container = document.createElement("div");
  container.className =
    "loading-animation-container loading-animation-container-small";

  const spinner = document.createElement("div");
  spinner.className = "spinner";
  container.appendChild(spinner);

  // ローディングが完了したら要素を更新
  setTimeout(() => {
    container.innerHTML = "ローディングが完了しました (Small)";
  }, 2000); // 2秒後にローディングが完了したと仮定

  return container;
};

// 5. ユーザーに提供するプロパティをカスタマイズ
Large.args = {
  // カスタマイズするプロパティ
};

Small.args = {
  // カスタマイズするプロパティ
};
