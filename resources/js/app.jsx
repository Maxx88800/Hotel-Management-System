import '../css/app.css';
import './bootstrap';

import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { releaseStuckUiLock } from '@/releaseStuckUiLock';

router.on('finish', releaseStuckUiLock);
router.on('cancel', releaseStuckUiLock);
router.on('error', releaseStuckUiLock);
router.on('invalid', releaseStuckUiLock);
router.on('exception', releaseStuckUiLock);

const appName = import.meta.env.VITE_APP_NAME || 'Uptown Pension House';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
