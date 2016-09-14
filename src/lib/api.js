export function executeShell(command) {
  return fetch('/api/shell', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      command: command
    })
  })
    .then(response => response.json());
}