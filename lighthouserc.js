module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        staticDistDir: './build/', // this is the build folder (output folder)
      },
      assert: {
        assertions: {
          'first-contentful-paint': ['warn', { maxNumericValue: 4000 }],
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