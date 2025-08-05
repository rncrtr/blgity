import { afterNavigate } from '$app/navigation';
import { invalidate } from '$app/navigation';

afterNavigate(({ to, from }) => {
  if (to.url.searchParams.get('category') !== from.url.searchParams.get('category')) {
    invalidate(`/api/posts?category=${to.url.searchParams.get('category')}`);
  }
});