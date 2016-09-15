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
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject();
      }
    });
}

export function load() {
  return fetch('/api/save', {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json());
}

export function save(commands) {
  return fetch('/api/save', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commands)
  })
    .then(response => response.json());
}
