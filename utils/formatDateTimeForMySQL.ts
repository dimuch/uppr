/**
 * Format Date as YYYY-MM-DD HH:mm:ss in server local time for MySQL datetime column.
 * Date is interpreted in server timezone; output is valid (minutes 0–59, hours 0–23).
 */
export function formatDateTimeForMySQL(date: Date): string {
	const y = date.getFullYear();
	const m = String(date.getMonth() + 1).padStart(2, '0');
	const d = String(date.getDate()).padStart(2, '0');
	const h = String(date.getHours()).padStart(2, '0');
	const min = String(date.getMinutes()).padStart(2, '0');
	const s = String(date.getSeconds()).padStart(2, '0');
	return `${y}-${m}-${d} ${h}:${min}:${s}`;
}
