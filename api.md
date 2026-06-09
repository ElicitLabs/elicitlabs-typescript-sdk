# Modal

# Users

Types:

- <code><a href="./src/resources/users.ts">UserCreateOrGetResponse</a></code>

Methods:

- <code title="post /v1/users">client.users.<a href="./src/resources/users.ts">createOrGet</a>({ ...params }) -> UserCreateOrGetResponse</code>

# Data

Types:

- <code><a href="./src/resources/data/data.ts">DataConfirmUploadResponse</a></code>
- <code><a href="./src/resources/data/data.ts">DataGetUploadURLResponse</a></code>
- <code><a href="./src/resources/data/data.ts">DataIngestResponse</a></code>

Methods:

- <code title="post /v1/data/ingest/confirm-upload">client.data.<a href="./src/resources/data/data.ts">confirmUpload</a>({ ...params }) -> DataConfirmUploadResponse</code>
- <code title="post /v1/data/ingest/upload-url">client.data.<a href="./src/resources/data/data.ts">getUploadURL</a>({ ...params }) -> DataGetUploadURLResponse</code>
- <code title="post /v1/data/ingest">client.data.<a href="./src/resources/data/data.ts">ingest</a>({ ...params }) -> DataIngestResponse</code>

## Job

Types:

- <code><a href="./src/resources/data/job.ts">JobCancelResponse</a></code>

Methods:

- <code title="post /v1/data/job/cancel">client.data.job.<a href="./src/resources/data/job.ts">cancel</a>({ ...params }) -> JobCancelResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> unknown</code>

# Auth

## Keys

Types:

- <code><a href="./src/resources/auth/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/auth/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/auth/keys.ts">KeyRevokeResponse</a></code>

Methods:

- <code title="post /v1/auth/keys">client.auth.keys.<a href="./src/resources/auth/keys.ts">create</a>({ ...params }) -> KeyCreateResponse</code>
- <code title="get /v1/auth/keys">client.auth.keys.<a href="./src/resources/auth/keys.ts">list</a>() -> KeyListResponse</code>
- <code title="delete /v1/auth/keys/{api_key_id}">client.auth.keys.<a href="./src/resources/auth/keys.ts">revoke</a>(apiKeyID) -> KeyRevokeResponse</code>

# Personas

## Link

# Projects

Types:

- <code><a href="./src/resources/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectCloneResponse</a></code>

Methods:

- <code title="post /v1/projects">client.projects.<a href="./src/resources/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">retrieve</a>(projectID, { ...params }) -> ProjectRetrieveResponse</code>
- <code title="get /v1/projects">client.projects.<a href="./src/resources/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="delete /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">delete</a>(projectID, { ...params }) -> ProjectDeleteResponse</code>
- <code title="post /v1/projects/clone">client.projects.<a href="./src/resources/projects.ts">clone</a>({ ...params }) -> ProjectCloneResponse</code>

# Chat

# Text

# Images

Types:

- <code><a href="./src/resources/images.ts">ImageGenerateResponse</a></code>

Methods:

- <code title="post /v1/images/generations">client.images.<a href="./src/resources/images.ts">generate</a>({ ...params }) -> ImageGenerateResponse</code>

# Audio

# Video
