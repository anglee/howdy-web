export const _isEmpty = (A) => A == null || A.length === 0;
export const _last = (A) => _isEmpty(A) ? undefined : A[A.length - 1];
export const _delay = (ms) => new Promise((res) => { setTimeout(res, ms); });
export const _trim = str => str.replace(/^\s+|\s+$/g, '');
export const $show = $e => { $e.style.display = 'block'; };
export const $hide = $e => { $e.style.display = 'none'; };

