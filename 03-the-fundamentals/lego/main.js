const lego1996 = (() => {
  const showClassName = 'article-show';
  const tabs = document.querySelector('.article').children;
  let previousTab = null;

  const toggleTab = (tabName) => {
    if (!tabName || !tabs[tabName]) return false;
    if (previousTab && previousTab.id === tabName) return true;

    if (previousTab) {
      previousTab?.classList.remove(showClassName);
    }

    tabs[tabName].classList.add(showClassName);
    previousTab = tabs[tabName];
  };

  return {toggleTab};
})();

lego1996.toggleTab('home')
