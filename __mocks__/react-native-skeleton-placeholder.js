jest.mock('react-native-skeleton-placeholder', () => {
  return {
    SkeletonPlaceholder: jest.fn(),
  };
});
