# Support Playbook

**Stack:** Node.js (Express)  
**API:** http://127.0.0.1:5109  
**Web:** http://localhost:5509

## Run (local)

### API
cd support-playbook-native/api && npm i && node index.js

### Web (static tester)
cd support-playbook-native/web && python3 -m http.server 5509

## Test
- **Ping:** curl -s http://127.0.0.1:5109 | jq .
- **Playbooks:** GET /api/playbooks\n- **Steps:** GET /api/playbooks/:id/steps\n- **Search:** GET /api/search?q=

