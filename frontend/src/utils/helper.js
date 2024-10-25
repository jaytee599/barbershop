export const getInitial = (name) => {
    return name ? name.charAt(0) : ''
}

export const formatDateWithTime = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
};

export const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    // To format as MM/DD/YYYY:
    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
    return formattedDate;
};

export const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12; // Convert 0-23 to 1-12 format, ensuring 12 stays as 12
    return `${formattedHour}:${minutes} ${period}`;
};

