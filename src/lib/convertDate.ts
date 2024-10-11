export const convertTo = (timestamp: string): string => {
  // Create a Date object from the timestamp
  const date = new Date(timestamp);

  // Options for formatting the date and time
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Colombo'
  };

  // Format the date and time in the Sri Lankan timezone
  const formatter = new Intl.DateTimeFormat('en-GB', options);
  const formattedDate = formatter.format(date);

  // Split the formatted date string
  const parts = formattedDate.split(' ');
  const day = parts[0];
  const month = parts[1];
  const time = parts[2];

  return `${day} ${month} ${time}`;
  };