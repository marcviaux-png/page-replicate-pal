import JSZip from 'jszip';

const TEXT_FILES = [
  'style.css',
  'functions.php',
  'index.php',
  'header.php',
  'footer.php',
  'front-page.php',
  'page.php',
  'page-services.php',
  'page-capabilities.php',
  'page-about.php',
  'page-contact.php',
  'page-ai-services.php',
  'page-ai-training.php',
  '404.php',
  'assets/js/navigation.js',
];

const IMAGE_FILES = [
  'assets/images/leapux-logo.png',
  'assets/images/leapux-logo-dark.png',
];

export async function downloadWordPressTheme() {
  const zip = new JSZip();
  const themeFolder = zip.folder('leapux');

  if (!themeFolder) return;

  // Fetch all text files in parallel
  const textResults = await Promise.all(
    TEXT_FILES.map(async (filePath) => {
      const response = await fetch(`/wordpress-theme/leapux/${filePath}`);
      const content = await response.text();
      return { filePath, content };
    })
  );

  // Fetch all image files as binary in parallel
  const imageResults = await Promise.all(
    IMAGE_FILES.map(async (filePath) => {
      const response = await fetch(`/wordpress-theme/leapux/${filePath}`);
      const blob = await response.blob();
      return { filePath, blob };
    })
  );

  // Add text files
  textResults.forEach(({ filePath, content }) => {
    themeFolder.file(filePath, content);
  });

  // Add image files
  imageResults.forEach(({ filePath, blob }) => {
    themeFolder.file(filePath, blob);
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
