function escapeRegex(str: string): string {
	return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}

const ILLEGAL_CHARACTERS = '\\/:*?<>\"|';
const ILLEGAL_FILENAME_RE = new RegExp('[' + escapeRegex(ILLEGAL_CHARACTERS) + ']', 'g');

export function sanitizeFileName(name: string) {
	return name.replace(ILLEGAL_FILENAME_RE, '');
}

export function pathToFilename(path: string) {
	if (!path.contains('/')) return path;

	let lastSlashPosition = path.lastIndexOf('/');
	let filename = path.slice(lastSlashPosition + 1);
	let lastDotPosition = filename.lastIndexOf('.');

	if (lastDotPosition === -1 || lastDotPosition === filename.length - 1 || lastDotPosition === 0) {
		return filename;
	}

	return filename.slice(0, lastDotPosition);
}
