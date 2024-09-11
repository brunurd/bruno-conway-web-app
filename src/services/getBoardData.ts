const getBoardData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('/data/board.config.json').then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    }, 2000);
  });
};

export { getBoardData };
