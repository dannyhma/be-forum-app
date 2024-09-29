export const dateFormat = (dataInput, timeZone = "WIB") => {
	const options = {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false, // format 24 jam
		timeZone: "Asia/Jakarta", // atur zona waktu default
	};

	// format locale untuk Indonesia
	const newDate = new Date(dataInput).toLocaleString("id-ID", options);

	// bersihkan spasi ekstra atau koma tambahan jika ada
	const cleanedDate = newDate.replace(/\s*,\s*/g, " ").replace(/\./g, ":");

	// pisahkan bagian tanggal dan waktu
	const [datePart, timePart] = cleanedDate.split(" ");

	// gabungkan kembali dengan format yang diinginkan
	return `${datePart}, ${timePart} ${timeZone}`;
};
