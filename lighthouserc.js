module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        staticDistDir: './build/', // this is the build folder (output folder)
      },
      assert: {
        assertions: {
          'first-contentful-paint': ['error', { maxNumericValue: 500 }],
          'categories:performance': ['error', { minScore: 0.9 }],
          'categories:accessibility': ['warn', { minScore: 0.9 }],
          'categories:seo': ['error', { minScore: 1 }],
        },
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };