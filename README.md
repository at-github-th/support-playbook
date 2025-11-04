# Support Playbook

Language: Node.js (Express)

## How to run

API
```bash
cd support-playbook-native/api && npm i && node index.js
```

Web
```bash
cd support-playbook-native/web && python3 -m http.server 5509
```

Open http://localhost:5509

## Endpoints
- Playbooks: GET /api/playbooks\n- Steps: GET /api/playbooks/:id/steps\n- Search: GET /api/search?q=
