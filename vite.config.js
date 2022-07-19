import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/filament.css',
            // 'resources/css/app.css',
            // 'resources/js/app.js',
        ]),
    ],
});
