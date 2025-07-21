import s72 from 's72';
import {bindEachComponent, attrs} from 's72.ui';

bindEachComponent('comment-section', (e) => {
  if (window.s72.comments) {
    const props = attrs(e);
    s72.comments.mountCommentsForSlug({slug: props.slug, container: e});
  }
});
