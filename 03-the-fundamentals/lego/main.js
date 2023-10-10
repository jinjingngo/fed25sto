// const tabLayout = {
//   home: 'flex',
//   'surf-club': 'flex',
//   product: '',
//   play: '',
//   worldwide: '',
//   learn: '',
//   service: '',
//   about: '',
//   news: '',
//   green: ''
// }

const lego1996 = (() => {
  const showClassName = 'article-show';
  const articles = document.querySelector('.article').children;
  let previousArticle = null;

  const toggleArticle = (articleName) => {
    if (!articleName || !articles[articleName]) return false;
    if (previousArticle && previousArticle.id === articleName) return true;

    if (previousArticle) {
      previousArticle?.classList.remove(showClassName);
    }

    articles[articleName].classList.add(showClassName);
    previousArticle = articles[articleName];
  };

  return {toggleArticle};
})();

lego1996.toggleArticle('worldwide')
