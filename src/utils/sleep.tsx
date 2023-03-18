const sleep = async () => {
  return new Promise<void>((resolve, reject) => {
    const response = true; // true, false 변경으로 테스팅해보기

    if (response) {
      setTimeout(() => resolve(), 1500);
    } else {
      reject(new Error('API 호출 실패'));
    }
  });
};

export default sleep;
