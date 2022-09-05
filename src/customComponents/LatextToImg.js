import React from 'react';
import MathJax from 'react-native-mathjax';

function LatextToImg({ latex = '' }) {
  return (
    <MathJax
      html={latex}
      mathJaxOptions={{
        messageStyle: 'none',
        extensions: ['tex2jax.js'],
        jax: ['input/TeX', 'output/HTML-CSS'],
        tex2jax: {
          inlineMath: [
            ['$', '$'],
            ['\\(', '\\)'],
          ],
          displayMath: [
            ['$$', '$$'],
            ['\\[', '\\]'],
          ],
          processEscapes: true,
        },
        TeX: {
          extensions: [
            'AMSmath.js',
            'AMSsymbols.js',
            'noErrors.js',
            'noUndefined.js',
          ],
        },
      }}
    />
  );
}

export default LatextToImg;
