export function releaseStuckUiLock() {
    if (typeof document === 'undefined') return;

    document.querySelectorAll('[inert]').forEach((el) => {
        el.inert = false;
        el.removeAttribute('inert');
    });

    [document.documentElement, document.body].forEach((el) => {
        el.style.overflow = '';
        el.style.paddingRight = '';
        el.style.position = '';
        el.style.top = '';
        el.style.left = '';
        el.style.right = '';
        el.style.width = '';
        el.style.height = '';
    });

    document.querySelectorAll('[style*="touch-action"]').forEach((el) => {
        if (el.style.touchAction === 'none') {
            el.style.touchAction = '';
        }
    });
}
