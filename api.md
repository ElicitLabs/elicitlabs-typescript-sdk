# Modal

Types:

- <code><a href="./src/resources/modal.ts">ModalLearnResponse</a></code>
- <code><a href="./src/resources/modal.ts">ModalQueryResponse</a></code>

Methods:

- <code title="post /v1/modal/learn">client.modal.<a href="./src/resources/modal.ts">learn</a>({ ...params }) -> ModalLearnResponse</code>
- <code title="post /v1/modal/query">client.modal.<a href="./src/resources/modal.ts">query</a>({ ...params }) -> ModalQueryResponse</code>

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
