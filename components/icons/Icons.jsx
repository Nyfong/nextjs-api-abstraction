// components/icons/EditIcon.jsx

export function EditIcon({ size = 16, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      fill="currentColor"
    >
      <path d="M12 2H2v11h4v1H1V1h12v5h-1zM5 5h5.999V4H5zM3 5V4h1v1zm2 3V7h6v1zM3 8V7h1v1zm2 3v-1h3v1zm-2 0v-1h1v1zm4.502 1.41L12.913 7L15 9.087l-5.41 5.41L7 15z" />
    </svg>
  );
}

export function DeleteIcon({ size = 16, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M14 5a2 2 0 1 0-4 0zM8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-.502 5.195A6.5 6.5 0 0 0 11.81 22H8.975a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5zM22 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646l-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647l1.646 1.647a.5.5 0 0 0 .708-.708L17.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L16.5 16.793z"
      ></path>
    </svg>
  );
}

export function PostIcon({ size = 16, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        className={className}
        d="M15 12h-3m0 0H9m3 0V9m0 3v3m10-3c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
      ></path>
    </svg>
  );
}
