import JSZip from 'jszip';

const THEME_FILES = [
  'style.css',
  'functions.php',
  'index.php',
  'header.php',
  'footer.php',
  'front-page.php',
  'page.php',
  '404.php',
  'assets/js/navigation.js',
];

export async function downloadWordPressTheme() {
  const zip = new JSZip();
  const themeFolder = zip.folder('leapux');

  if (!themeFolder) return;

  // Fetch all theme files in parallel
  const results = await Promise.all(
    THEME_FILES.map(async (filePath) => {
      const response = await fetch(`/wordpress-theme/leapux/${filePath}`);
      const content = await response.text();
      return { filePath, content };
    })
  );

  // Add each file to the zip
  results.forEach(({ filePath, content }) => {
    themeFolder.file(filePath, content);
  });

  // Generate and download
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'leapux-theme.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
