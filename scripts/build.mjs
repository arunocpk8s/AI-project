import { mkdir, copyFile, cp } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const name of ['index.html', 'styles.css', 'app.js']) await copyFile(name, `dist/${name}`);
await cp('public', 'dist', { recursive: true });
console.log('Built portfolio into dist/');
