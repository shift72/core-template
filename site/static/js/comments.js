import s72 from 's72';
import {bindEachComponent, attrs} from 's72.ui';

if (window.s72.comments) {
  bindEachComponent('comment-section', (e) => {
    const props = attrs(e);
    s72.comments.mountCommentsForSlug({slug: props.slug, container: e});
  });
}
