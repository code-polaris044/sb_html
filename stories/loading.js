import "./loading.css"; // ローディングアニメーション用のスタイルシート

export default {
  title: "Loading Animation", // ストーリーのカテゴリとタイトル
};

export const Default = () => {
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
