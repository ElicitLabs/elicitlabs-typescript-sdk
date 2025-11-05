# Machine

Types:

- <code><a href="./src/resources/machine.ts">MachineLearnResponse</a></code>
- <code><a href="./src/resources/machine.ts">MachineQueryResponse</a></code>

Methods:

- <code title="post /v1/machine/learn">client.machine.<a href="./src/resources/machine.ts">learn</a>({ ...params }) -> MachineLearnResponse</code>
- <code title="post /v1/machine/query">client.machine.<a href="./src/resources/machine.ts">query</a>({ ...params }) -> MachineQueryResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserCreateOrGetResponse</a></code>

Methods:

- <code title="post /v1/users">client.users.<a href="./src/resources/users.ts">createOrGet</a>({ ...params }) -> UserCreateOrGetResponse</code>

# Data

Types:

- <code><a href="./src/resources/data/data.ts">DataIngestResponse</a></code>

Methods:

- <code title="post /v1/data/ingest">client.data.<a href="./src/resources/data/data.ts">ingest</a>({ ...params }) -> DataIngestResponse</code>

## Job

Types:

- <code><a href="./src/resources/data/job.ts">JobRetrieveStatusResponse</a></code>

Methods:

- <code title="post /v1/data/job/status">client.data.job.<a href="./src/resources/data/job.ts">retrieveStatus</a>({ ...params }) -> JobRetrieveStatusResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> unknown</code>
