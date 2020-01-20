jest.mock('./utils/scrollbarSize', () => {
  return function getScrollbarSize() {
    return 20;
  };
});
